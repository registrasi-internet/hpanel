// ============== PENGATURAN AWAL ==============
// Ganti dengan ID Spreadsheet Anda. ID bisa ditemukan di URL spreadsheet.
// Contoh: https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_INI/edit
const SPREADSHEET_ID = "1SDW16jfKxhPoHshSFo0SXaDb33ekIGHmr2IoZWuQYd0"; 

// Nama-nama sheet di dalam spreadsheet Anda. Pastikan nama ini sama persis.
const SHEET_PELANGGAN = "Customers";
const SHEET_LAYANAN = "Services";
const SHEET_INVOICE = "Invoices";
const SHEET_PRODUK = "Products";
const SHEET_LOG = "ActivityLog";
const SHEET_NOTIFIKASI = "Notifications";
const SHEET_TEMPLATE = "NotificationTemplates";

// Buka Spreadsheet berdasarkan ID
const ss = SpreadsheetApp.openById(SPREADSHEET_ID);

// ============== FUNGSI UTAMA (ENDPOINT) ==============

/**
 * Fungsi doGet akan dipanggil ketika URL Web App diakses dengan metode GET.
 * Fungsi ini akan mengambil semua data dari semua sheet dan mengirimkannya sebagai JSON.
 * @param {GoogleAppsScript.Events.DoGet} e - Event object.
 * @returns {GoogleAppsScript.Content.TextOutput} - Respon JSON.
 */
function doGet(e) {
  try {
    const data = getAllData();
    return ContentService.createTextOutput(JSON.stringify(data))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    Logger.log(error.toString());
    return ContentService.createTextOutput(JSON.stringify({ error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Fungsi doPost akan dipanggil ketika ada permintaan POST ke URL Web App.
 * Fungsi ini menangani semua aksi perubahan data seperti menyimpan, menghapus, atau memperbarui.
 * @param {GoogleAppsScript.Events.DoPost} e - Event object.
 * @returns {GoogleAppsScript.Content.TextOutput} - Respon JSON.
 */
function doPost(e) {
  try {
    const request = JSON.parse(e.postData.contents);
    const action = request.action;
    const payload = request.payload;
    let result = {};

    switch (action) {
      case 'saveCustomer':
        result = saveOrUpdateRow(SHEET_PELANGGAN, payload);
        break;
      case 'saveService':
        result = saveOrUpdateRow(SHEET_LAYANAN, payload);
        break;
      case 'deleteService':
        result = deleteRow(SHEET_LAYANAN, payload.id);
        break;
      case 'saveInvoice':
        result = saveOrUpdateRow(SHEET_INVOICE, payload);
        break;
      case 'updateInvoiceStatus':
        result = updateInvoiceStatus(payload.id, payload.status);
        break;
      case 'addNote':
        result = addNoteToCustomer(payload.customerId, payload.notes);
        break;
      case 'saveProduct':
        result = saveOrUpdateRow(SHEET_PRODUK, payload);
        break;
      case 'deleteProduct':
        result = deleteRow(SHEET_PRODUK, payload.id);
        break;
      case 'addActivityLog':
        result = addRow(SHEET_LOG, payload);
        break;
      case 'addNotification':
        result = addRow(SHEET_NOTIFIKASI, payload);
        break;
      case 'updateNotificationsRead':
        result = updateNotificationsRead(payload.ids);
        break;
      case 'updateTemplates':
        result = updateTemplates(payload);
        break;
      default:
        throw new Error("Aksi tidak dikenali: " + action);
    }

    return ContentService.createTextOutput(JSON.stringify({ status: 'success', data: result }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    Logger.log(error.toString());
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ============== FUNGSI PEMBANTU (HELPER) ==============

/**
 * Mengambil semua data dari semua sheet yang ditentukan.
 * @returns {object} - Objek yang berisi data dari semua sheet.
 */
function getAllData() {
  return {
    customers: getData(SHEET_PELANGGAN),
    services: getData(SHEET_LAYANAN),
    invoices: getData(SHEET_INVOICE),
    products: getData(SHEET_PRODUK),
    activityLog: getData(SHEET_LOG),
    notifications: getData(SHEET_NOTIFIKASI),
    notificationTemplates: getData(SHEET_TEMPLATE)
  };
}


/**
 * Mengambil data dari satu sheet dan mengubahnya menjadi array of objects.
 * @param {string} sheetName - Nama sheet yang akan dibaca.
 * @returns {Array<object>} - Array dari objek, di mana setiap objek merepresentasikan satu baris.
 */
function getData(sheetName) {
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet) return [];
  const range = sheet.getDataRange();
  const values = range.getValues();
  if (values.length < 2) return []; // Jika hanya ada header atau kosong

  const headers = values[0];
  return values.slice(1).map(row => {
    let obj = {};
    headers.forEach((header, index) => {
      let value = row[index];
      // Coba parse JSON jika value adalah string JSON (untuk 'notes')
      if (header === 'notes' && typeof value === 'string' && value.startsWith('[')) {
        try {
          obj[header] = JSON.parse(value);
        } catch (e) {
          obj[header] = []; // Default ke array kosong jika parse gagal
        }
      } else {
        obj[header] = value;
      }
    });
    return obj;
  });
}

/**
 * Menyimpan data baru atau memperbarui data yang sudah ada di sheet.
 * Mencari baris berdasarkan 'id'. Jika ditemukan, perbarui. Jika tidak, tambahkan baris baru.
 * @param {string} sheetName - Nama sheet.
 * @param {object} payload - Objek data yang akan disimpan.
 * @returns {object} - Payload yang disimpan.
 */
function saveOrUpdateRow(sheetName, payload) {
  const sheet = ss.getSheetByName(sheetName);
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const data = sheet.getDataRange().getValues();
  
  const rowIndex = data.findIndex(row => row[0] == payload.id); // Asumsi kolom pertama adalah 'id'

  // Ubah payload menjadi array sesuai urutan header
  const newRow = headers.map(header => {
    if (payload.hasOwnProperty(header)) {
      // Stringify objek/array agar bisa disimpan di cell
      if (typeof payload[header] === 'object' && payload[header] !== null) {
        return JSON.stringify(payload[header]);
      }
      return payload[header];
    }
    return ""; // Kembalikan string kosong jika properti tidak ada di payload
  });

  if (rowIndex > 0) {
    // Update baris yang ada
    sheet.getRange(rowIndex + 1, 1, 1, newRow.length).setValues([newRow]);
  } else {
    // Tambah baris baru
    sheet.appendRow(newRow);
  }
  return payload;
}

/**
 * Menambahkan baris baru ke sheet. Berbeda dari saveOrUpdate, fungsi ini selalu menambah.
 * @param {string} sheetName - Nama sheet.
 * @param {object} payload - Objek data yang akan ditambahkan.
 * @returns {object} - Payload yang ditambahkan.
 */
function addRow(sheetName, payload) {
    const sheet = ss.getSheetByName(sheetName);
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const newRow = headers.map(header => payload[header] !== undefined ? payload[header] : "");
    sheet.appendRow(newRow);
    return payload;
}


/**
 * Menghapus baris dari sheet berdasarkan ID.
 * @param {string} sheetName - Nama sheet.
 * @param {string|number} id - ID dari baris yang akan dihapus.
 * @returns {object} - Status operasi.
 */
function deleteRow(sheetName, id) {
  const sheet = ss.getSheetByName(sheetName);
  const data = sheet.getDataRange().getValues();
  const rowIndex = data.findIndex(row => row[0] == id); // Asumsi kolom pertama adalah 'id'

  if (rowIndex > 0) {
    sheet.deleteRow(rowIndex + 1);
    return { status: 'deleted', id: id };
  }
  throw new Error("ID tidak ditemukan untuk dihapus: " + id);
}

/**
 * Memperbarui status invoice tertentu.
 * @param {string|number} id - ID invoice.
 * @param {string} status - Status baru ('Lunas', 'Belum Dibayar', dll).
 * @returns {object} - Status operasi.
 */
function updateInvoiceStatus(id, status) {
  const sheet = ss.getSheetByName(SHEET_INVOICE);
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const idColIndex = headers.indexOf('id');
  const statusColIndex = headers.indexOf('status');

  if (idColIndex === -1 || statusColIndex === -1) {
    throw new Error("Kolom 'id' atau 'status' tidak ditemukan di sheet Invoices.");
  }
  
  const rowIndex = data.findIndex(row => row[idColIndex] == id);
  
  if (rowIndex > 0) {
    sheet.getRange(rowIndex + 1, statusColIndex + 1).setValue(status);
    return { id, status };
  }
  throw new Error("Invoice ID tidak ditemukan: " + id);
}

/**
 * Menambahkan atau memperbarui catatan untuk pelanggan.
 * @param {string|number} customerId - ID pelanggan.
 * @param {Array<object>} notes - Array objek catatan yang baru.
 * @returns {object} - Status operasi.
 */
function addNoteToCustomer(customerId, notes) {
    const sheet = ss.getSheetByName(SHEET_PELANGGAN);
    const data = sheet.getDataRange().getValues();
    const headers = data[0];
    const idColIndex = headers.indexOf('id');
    const notesColIndex = headers.indexOf('notes');

    if (idColIndex === -1 || notesColIndex === -1) {
        throw new Error("Kolom 'id' atau 'notes' tidak ditemukan di sheet Pelanggan.");
    }
    
    const rowIndex = data.findIndex(row => row[idColIndex] == customerId);

    if (rowIndex > 0) {
        sheet.getRange(rowIndex + 1, notesColIndex + 1).setValue(JSON.stringify(notes));
        return { customerId, notes };
    }
    throw new Error("Customer ID tidak ditemukan: " + customerId);
}

/**
 * Memperbarui status 'read' untuk notifikasi.
 * @param {Array<string|number>} ids - Array ID notifikasi yang akan diperbarui.
 * @returns {object} - Status operasi.
 */
function updateNotificationsRead(ids) {
    const sheet = ss.getSheetByName(SHEET_NOTIFIKASI);
    const data = sheet.getDataRange().getValues();
    const headers = data[0];
    const idColIndex = headers.indexOf('id');
    const readColIndex = headers.indexOf('read');

    if (idColIndex === -1 || readColIndex === -1) {
        throw new Error("Kolom 'id' atau 'read' tidak ditemukan di sheet Notifications.");
    }

    let updatedCount = 0;
    data.forEach((row, index) => {
        if (index > 0 && ids.includes(row[idColIndex])) {
            sheet.getRange(index + 1, readColIndex + 1).setValue(true);
            updatedCount++;
        }
    });
    return { status: 'success', updated: updatedCount };
}

/**
 * Memperbarui semua template notifikasi.
 * @param {Array<object>} templates - Array objek template.
 * @returns {object} - Status operasi.
 */
function updateTemplates(templates) {
    const sheet = ss.getSheetByName(SHEET_TEMPLATE);
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    
    // Hapus data lama (kecuali header)
    if (sheet.getLastRow() > 1) {
      sheet.deleteRows(2, sheet.getLastRow() - 1);
    }
    
    // Tambahkan data baru
    const rows = templates.map(template => {
        return headers.map(header => template[header] !== undefined ? template[header] : "");
    });
    
    if (rows.length > 0) {
      sheet.getRange(2, 1, rows.length, headers.length).setValues(rows);
    }

    return { status: 'success', updated: templates.length };
}
