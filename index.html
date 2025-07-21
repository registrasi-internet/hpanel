import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { LogIn, BarChart2, Users, FileText, Settings, User, X, Search, ChevronLeft, Shield, Edit, Mail, Lock, Trash2, PlusCircle, Layers, ArrowUpDown, Zap, MailCheck, CheckCircle, DollarSign, Clock, Phone, Power, ChevronsUpDown, Menu, AlertTriangle, Info, Bell, MessageSquare, Paperclip, Send, Package, Eye, EyeOff, Loader2 } from 'lucide-react';

// GANTI DENGAN URL WEB APP DARI GOOGLE APPS SCRIPT ANDA
const GAS_URL = "https://script.google.com/macros/s/AKfycbzooJhU09YJLRG1OTHaU1V0bAOvcDXORrElbxn38PKkjl85tzd9tjQB4tAL0K1RYwDaHQ/exec";

// --- UI & HELPER COMPONENTS (Tidak ada perubahan) ---

const Avatar = ({ name, size = 'md', className = '' }) => {
    const getInitials = (name) => {
        if (!name) return '?';
        const names = name.trim().split(' ');
        if (names.length > 1) {
            return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
        }
        return name.substring(0, 2).toUpperCase();
    };
    const getBackgroundColor = (name) => {
        if (!name) return 'bg-gray-500';
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        const colors = ['bg-red-500', 'bg-orange-500', 'bg-amber-500', 'bg-lime-500', 'bg-green-500', 'bg-emerald-500', 'bg-teal-500', 'bg-cyan-500', 'bg-sky-500', 'bg-blue-500', 'bg-indigo-500', 'bg-violet-500', 'bg-purple-500', 'bg-fuchsia-500', 'bg-pink-500', 'bg-rose-500'];
        return colors[Math.abs(hash) % colors.length];
    };
    const sizeClasses = { 'sm': 'w-8 h-8 text-xs', 'md': 'w-10 h-10 text-sm', 'lg': 'w-16 h-16 text-xl', 'xl': 'w-24 h-24 text-3xl' };
    return (<div className={`rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 ${getBackgroundColor(name)} ${sizeClasses[size]} ${className}`}>{getInitials(name)}</div>);
};

const getServiceStatus = (service) => {
    if (service.status === 'Suspended') return 'Suspended';
    const now = new Date();
    const expiry = new Date(service.expiryDate);
    const daysLeft = (expiry - now) / (1000 * 60 * 60 * 24);
    if (daysLeft < 0) return 'Jatuh Tempo';
    if (daysLeft <= 30) return 'Akan Berakhir';
    return 'Aktif';
};

const StatusBadge = ({ status }) => {
    const baseClasses = "px-3 py-1 text-xs font-bold rounded-full inline-block tracking-wide";
    let colorClasses = "";
    switch (status) {
        case 'Aktif': colorClasses = "bg-green-100 text-green-700"; break;
        case 'Akan Berakhir': colorClasses = "bg-yellow-100 text-yellow-700"; break;
        case 'Jatuh Tempo': case 'Suspended': colorClasses = "bg-red-100 text-red-700"; break;
        case 'Belum Dibayar': colorClasses = "bg-sky-100 text-sky-700"; break;
        case 'Lunas': colorClasses = "bg-emerald-100 text-emerald-700"; break;
        default: colorClasses = "bg-gray-100 text-gray-700";
    }
    return <span className={`${baseClasses} ${colorClasses}`}>{status.toUpperCase()}</span>;
};

const Toast = ({ message, type, onDismiss }) => {
    const baseClasses = "fixed top-5 right-5 flex items-center p-4 rounded-lg shadow-lg text-white z-50 animate-fade-in-down";
    const typeClasses = { success: 'bg-green-500', info: 'bg-sky-500', error: 'bg-red-500' };
    useEffect(() => { const timer = setTimeout(onDismiss, 3000); return () => clearTimeout(timer); }, [onDismiss]);
    return (<div className={`${baseClasses} ${typeClasses[type]}`}>{message}<button onClick={onDismiss} className="ml-4"><X size={18} /></button></div>);
};

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    if (totalPages <= 1) return null;
    return (<div className="flex justify-center items-center gap-2 mt-6"><button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="px-3 py-1 bg-white border border-gray-300 rounded-md disabled:opacity-50 hover:bg-gray-50">Sebelumnya</button><span className="text-sm text-gray-600">Halaman {currentPage} dari {totalPages}</span><button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-3 py-1 bg-white border border-gray-300 rounded-md disabled:opacity-50 hover:bg-gray-50">Berikutnya</button></div>);
};

const Modal = ({ isOpen, onClose, children, title, size = 'md' }) => {
    if (!isOpen) return null;
    const sizeClasses = { 'md': 'max-w-md', 'lg': 'max-w-lg', 'xl': 'max-w-xl' };
    return (<div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 transition-opacity"><div className={`bg-white rounded-xl shadow-2xl w-full ${sizeClasses[size]} transform transition-all animate-fade-in-up`}><div className="flex justify-between items-center p-5 border-b border-gray-200"><h2 className="text-lg font-semibold text-gray-800">{title}</h2><button onClick={onClose} className="text-gray-400 hover:text-gray-600"><X /></button></div>{children}</div></div>);
};

// --- HELPER UNTUK ID UNIK ---
const generateUniqueId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

// --- MODAL COMPONENTS ---
const CustomerModal = ({ isOpen, onClose, onSave, customer }) => {
    const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '', status: 'Aktif' });
    useEffect(() => { if (customer) { setFormData({ name: customer.name, email: customer.email, whatsapp: customer.whatsapp, status: customer.status }); } else { setFormData({ name: '', email: '', whatsapp: '', status: 'Aktif' }); } }, [customer, isOpen]);
    const handleChange = (e) => { const { name, value } = e.target; setFormData(prev => ({ ...prev, [name]: value })); };
    const handleSubmit = (e) => { e.preventDefault(); const newCustomerData = { ...formData, id: customer ? customer.id : generateUniqueId(), joinDate: customer ? customer.joinDate : new Date().toISOString().split('T')[0], notes: customer ? customer.notes || [] : [], }; onSave(newCustomerData); };
    return (<Modal isOpen={isOpen} onClose={onClose} title={customer ? 'Edit Pelanggan' : 'Tambah Pelanggan Baru'}><form onSubmit={handleSubmit}><div className="p-6 space-y-4"><div><label className="block text-sm font-medium text-gray-600 mb-1">Nama Lengkap</label><input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 rounded-lg shadow-sm p-2.5 focus:ring-2 focus:ring-sky-500" required /></div><div><label className="block text-sm font-medium text-gray-600 mb-1">Email</label><input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded-lg shadow-sm p-2.5 focus:ring-2 focus:ring-sky-500" required /></div><div><label className="block text-sm font-medium text-gray-600 mb-1">No. WhatsApp</label><input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="Contoh: 6281234567890" className="w-full border border-gray-300 rounded-lg shadow-sm p-2.5 focus:ring-2 focus:ring-sky-500" required /></div><div><label className="block text-sm font-medium text-gray-600 mb-1">Status</label><select name="status" value={formData.status} onChange={handleChange} className="w-full border border-gray-300 rounded-lg shadow-sm p-2.5 bg-white focus:ring-2 focus:ring-sky-500"><option>Aktif</option><option>Suspended</option></select></div></div><div className="p-5 bg-gray-50 rounded-b-xl flex justify-end gap-3"><button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300">Batal</button><button type="submit" className="px-4 py-2 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600">Simpan</button></div></form></Modal>);
};
const ServiceModal = ({ isOpen, onClose, onSave, service, customerId, products }) => {
    const [formData, setFormData] = useState({ name: '', type: 'Hosting', expiryDate: '', price: '' });
    useEffect(() => { if (service) { setFormData({ name: service.name, type: service.type, expiryDate: new Date(service.expiryDate).toISOString().split('T')[0], price: service.price }); } else { setFormData({ name: '', type: 'Hosting', expiryDate: new Date().toISOString().split('T')[0], price: '' }); } }, [service, isOpen]);
    const handleChange = (e) => { const { name, value } = e.target; setFormData(prev => ({ ...prev, [name]: name === 'price' ? parseFloat(value) || 0 : value })); };
    const handleProductSelect = (e) => { const productId = e.target.value; if (!productId) return; const selectedProduct = products.find(p => p.id === parseInt(productId)); if (selectedProduct) { setFormData(prev => ({ ...prev, type: selectedProduct.type, price: selectedProduct.price, })); } };
    const handleSubmit = (e) => { e.preventDefault(); onSave({ ...formData, id: service ? service.id : generateUniqueId(), customerId, expiryDate: new Date(formData.expiryDate), status: service ? service.status : 'Aktif' }); };
    return (<Modal isOpen={isOpen} onClose={onClose} title={service ? 'Edit Layanan' : 'Tambah Layanan Baru'}><form onSubmit={handleSubmit}><div className="p-6 space-y-4"><div><label className="block text-sm font-medium text-gray-600 mb-1">Pilih Produk (Opsional)</label><select onChange={handleProductSelect} className="w-full border border-gray-300 rounded-lg p-2.5 bg-white focus:ring-2 focus:ring-sky-500"><option value="">-- Pilih dari Katalog Produk --</option>{products.map(p => <option key={p.id} value={p.id}>{p.name} (Rp {p.price.toLocaleString('id-ID')})</option>)}</select></div><hr/><div><label className="block text-sm font-medium text-gray-600 mb-1">Nama Layanan (Domain)</label><input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-sky-500" required /></div><div><label className="block text-sm font-medium text-gray-600 mb-1">Tipe</label><select name="type" value={formData.type} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 bg-white focus:ring-2 focus:ring-sky-500"><option>Hosting</option><option>Domain</option><option>Website</option></select></div><div><label className="block text-sm font-medium text-gray-600 mb-1">Harga (Rp)</label><input type="number" name="price" value={formData.price} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-sky-500" required /></div><div><label className="block text-sm font-medium text-gray-600 mb-1">Tanggal Berakhir</label><input type="date" name="expiryDate" value={formData.expiryDate} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-sky-500" required /></div></div><div className="p-5 bg-gray-50 rounded-b-xl flex justify-end gap-3"><button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300">Batal</button><button type="submit" className="px-4 py-2 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600">Simpan</button></div></form></Modal>);
};
const ProductModal = ({ isOpen, onClose, onSave, product }) => {
    const [formData, setFormData] = useState({ name: '', type: 'Hosting', price: '', cycle: 'Tahunan' });
    useEffect(() => { if (product) { setFormData({ name: product.name, type: product.type, price: product.price, cycle: product.cycle }); } else { setFormData({ name: '', type: 'Hosting', price: '', cycle: 'Tahunan' }); } }, [product, isOpen]);
    const handleChange = (e) => { const { name, value } = e.target; setFormData(prev => ({ ...prev, [name]: name === 'price' ? parseFloat(value) || 0 : value })); };
    const handleSubmit = (e) => { e.preventDefault(); onSave({ ...formData, id: product ? product.id : generateUniqueId() }); };
    return (<Modal isOpen={isOpen} onClose={onClose} title={product ? 'Edit Produk' : 'Tambah Produk Baru'}><form onSubmit={handleSubmit}><div className="p-6 space-y-4"><div><label className="block text-sm font-medium text-gray-600 mb-1">Nama Produk</label><input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-sky-500" required /></div><div><label className="block text-sm font-medium text-gray-600 mb-1">Tipe</label><select name="type" value={formData.type} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 bg-white focus:ring-2 focus:ring-sky-500"><option>Hosting</option><option>Domain</option><option>Website</option></select></div><div><label className="block text-sm font-medium text-gray-600 mb-1">Harga (Rp)</label><input type="number" name="price" value={formData.price} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-sky-500" required /></div><div><label className="block text-sm font-medium text-gray-600 mb-1">Siklus Penagihan</label><select name="cycle" value={formData.cycle} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2.5 bg-white focus:ring-2 focus:ring-sky-500"><option>Tahunan</option><option>Bulanan</option><option>Sekali Bayar</option></select></div></div><div className="p-5 bg-gray-50 rounded-b-xl flex justify-end gap-3"><button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300">Batal</button><button type="submit" className="px-4 py-2 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600">Simpan</button></div></form></Modal>);
};
const ConfirmModal = ({ isOpen, onClose, onConfirm, title, message }) => (<Modal isOpen={isOpen} onClose={onClose} title={title}><div className="p-6"><p className="text-gray-600">{message}</p></div><div className="p-5 bg-gray-50 rounded-b-xl flex justify-end gap-3"><button onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300">Batal</button><button onClick={onConfirm} className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700">Hapus</button></div></Modal>);
const ProvisionResultModal = ({ isOpen, onClose, details }) => (<Modal isOpen={isOpen} onClose={onClose} title="Provisi Layanan Berhasil"><div className="p-6"><div className="flex items-center gap-3 mb-4"><MailCheck className="text-green-500" size={32}/><p className="text-gray-600">Layanan berhasil dibuat. Simulasi email telah dikirim ke pelanggan.</p></div><div className="bg-slate-50 p-4 rounded-lg border border-slate-200"><h3 className="font-semibold text-gray-800">Selamat Datang! Akun Hosting Anda Telah Aktif.</h3><p className="text-sm mt-2 text-gray-600">Detail Login:</p><ul className="text-sm list-disc list-inside mt-1 space-y-1 text-gray-700"><li><strong>Domain:</strong> {details?.name}</li><li><strong>Username:</strong> {details?.username}</li><li><strong>Password:</strong> {details?.password}</li><li><strong>Server IP:</strong> {details?.ip}</li></ul></div></div><div className="p-5 bg-gray-50 rounded-b-xl flex justify-end"><button onClick={onClose} className="px-4 py-2 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600">Tutup</button></div></Modal>);
const InvoicePreviewModal = ({ isOpen, onClose, invoice, customer, service }) => { if (!invoice) return null; return (<Modal isOpen={isOpen} onClose={onClose} title={`Pratinjau Invoice ${invoice.id}`} size="lg"><div className="p-8 bg-white text-gray-800"><div className="flex justify-between items-start mb-8"><div><h1 className="text-3xl font-bold text-sky-500">HPanel</h1><p className="text-gray-500">Invoice</p></div><div className="text-right"><h2 className="text-xl font-semibold">{invoice.id}</h2><p className="text-sm text-gray-500">Tanggal: {new Date().toLocaleDateString('id-ID')}</p><p className="text-sm text-gray-500">Jatuh Tempo: {new Date(invoice.dueDate).toLocaleDateString('id-ID')}</p></div></div><div className="mb-8"><h3 className="font-semibold">Ditagihkan kepada:</h3><p>{customer?.name}</p><p>{customer?.email}</p></div><table className="w-full mb-8"><thead className="bg-gray-100"><tr className="text-left"><th className="p-3">Deskripsi</th><th className="p-3 text-right">Harga</th></tr></thead><tbody><tr><td className="p-3 border-b">Perpanjangan {service?.type} - {invoice.serviceName} (1 Tahun)</td><td className="p-3 border-b text-right">Rp {invoice.amount.toLocaleString('id-ID')}</td></tr></tbody></table><div className="flex justify-end"><div className="w-full max-w-xs"><div className="flex justify-between text-lg"><span className="font-semibold">Total:</span><span className="font-bold">Rp {invoice.amount.toLocaleString('id-ID')}</span></div><div className="mt-4"><StatusBadge status={invoice.status} /></div></div></div><div className="mt-12 text-center text-sm text-gray-500"><p>Terima kasih atas kepercayaan Anda.</p><p>Silakan lakukan pembayaran sebelum tanggal jatuh tempo.</p></div></div></Modal>);};

// --- CHART COMPONENTS (Tidak ada perubahan) ---
const BarChart = ({ data, dataKey, labelKey }) => { const [tooltip, setTooltip] = useState(null); const maxValue = Math.max(...data.map(d => d[dataKey])); const yAxisLabels = Array.from({ length: 5 }, (_, i) => { const value = (maxValue / 4) * i; return value >= 1000000 ? `${(value / 1000000).toFixed(1)}Jt` : `${Math.round(value / 1000)}K`; }).reverse(); return (<div className="h-64 w-full relative pt-4"><div className="absolute top-4 left-0 h-[calc(100%-2rem)] w-full flex flex-col justify-between">{yAxisLabels.map((label, i) => (<div key={i} className="flex items-center w-full"><span className="text-xs text-gray-400 pr-2 w-12 text-right">{label}</span><div className="flex-1 border-t border-dashed border-gray-200"></div></div>))}</div><div className="absolute top-4 left-12 h-[calc(100%-2rem)] w-[calc(100%-3rem)] flex justify-around items-end gap-2 px-2">{data.map((item, index) => (<div key={index} className="flex flex-col items-center flex-1 h-full justify-end group" onMouseEnter={() => setTooltip({ ...item, index })} onMouseLeave={() => setTooltip(null)}><div className="w-full bg-sky-500 group-hover:bg-sky-600 rounded-t-md" style={{ height: `${maxValue > 0 ? (item[dataKey] / maxValue) * 100 : 0}%`, transition: 'height 0.3s ease-in-out' }}></div></div>))}</div><div className="absolute bottom-0 left-12 h-8 w-[calc(100%-3rem)] flex justify-around items-end gap-2 px-2">{data.map((item, index) => (<div key={index} className="text-sm font-medium text-gray-600 mt-2 flex-1 text-center">{item[labelKey]}</div>))}</div>{tooltip && (<div className="absolute bg-gray-800 text-white text-xs rounded-md p-2 shadow-lg z-10" style={{ left: `${(tooltip.index / data.length) * 100 + (1 / data.length / 2) * 100}%`, bottom: '100%', transform: 'translate(-50%, -10px)', transition: 'opacity 0.2s', }}>Rp {tooltip[dataKey].toLocaleString('id-ID')}</div>)}</div>); };
const DonutChart = ({ data }) => { const total = data.reduce((acc, item) => acc + item.value, 0); let cumulativePercent = 0; const segments = data.map(item => { const percent = total > 0 ? (item.value / total) * 100 : 0; const startAngle = cumulativePercent; cumulativePercent += percent; return { ...item, percent, startAngle }; }); const radius = 15.9154943092; return (<div className="flex flex-col items-center justify-center h-full gap-6"><div className="relative w-36 h-36"><svg className="w-full h-full" viewBox="0 0 36 36">{segments.map((segment, index) => (<circle key={index} cx="18" cy="18" r={radius} fill="transparent" stroke={segment.color} strokeWidth="4" strokeDasharray={`${segment.percent} ${100 - segment.percent}`} strokeDashoffset={-segment.startAngle} transform="rotate(-90 18 18)"/>))}</svg><div className="absolute inset-0 flex flex-col items-center justify-center"><span className="text-3xl font-bold text-gray-800">{total}</span><span className="text-sm text-gray-500">Layanan</span></div></div><div className="w-full"><ul className="space-y-2">{data.map(item => (<li key={item.name} className="flex justify-between items-center text-sm"><div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span><span className="text-gray-600">{item.name}</span></div><span className="font-semibold text-gray-800">{item.value}</span></li>))}</ul></div></div>); };

// --- VIEWS / PAGES ---
const LoginPage = ({ onLoginSuccess }) => { const [email, setEmail] = useState('admin@hpanel.com'); const [password, setPassword] = useState('password'); const [error, setError] = useState(''); const [isLoading, setIsLoading] = useState(false); const handleLogin = (e) => { e.preventDefault(); setError(''); setIsLoading(true); setTimeout(() => { if (email === 'admin@hpanel.com' && password === 'password') onLoginSuccess(); else setError('Email atau password salah.'); setIsLoading(false); }, 1000); }; return (<div className="flex items-center justify-center min-h-screen bg-slate-100"><div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-2xl shadow-xl"><div className="text-center"><h1 className="text-3xl font-bold text-sky-500">HPanel</h1><p className="text-gray-500 mt-2">Selamat datang kembali!</p></div><form onSubmit={handleLogin} className="space-y-5"><div className="relative"><Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={20} /><input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full pl-11 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500" required /></div><div className="relative"><Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={20} /><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full pl-11 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500" required /></div>{error && <p className="text-sm text-red-500 text-center">{error}</p>}<div><button type="submit" disabled={isLoading} className="w-full px-4 py-3 font-semibold text-white bg-sky-500 rounded-lg hover:bg-sky-600 disabled:bg-sky-300 flex items-center justify-center transition-colors">{isLoading ? (<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>) : ('Masuk')}</button></div></form></div></div>); };
const AutomationView = ({ services, invoices, addToast, addActivityLog, addNotification, onDataChange, postData }) => {
    const [billingLog, setBillingLog] = useState([]);
    const [reminderLog, setReminderLog] = useState([]);
    const [suspensionLog, setSuspensionLog] = useState([]);

    const handleRunBillingCheck = () => {
        setBillingLog([]);
        const invoicesToCreate = [];

        services.forEach(service => {
            const daysUntilExpiry = (new Date(service.expiryDate) - new Date()) / (1000 * 60 * 60 * 24);
            const hasPendingInvoice = invoices.some(inv => inv.serviceId === service.id && inv.status !== 'Lunas');
            
            if (daysUntilExpiry <= 30 && !hasPendingInvoice) {
                const newInvoice = {
                    id: `INV-${String(Date.now()).slice(-4)}-${Math.random().toString(36).substr(2, 4)}`,
                    customerId: service.customerId,
                    serviceId: service.id,
                    serviceName: service.name,
                    amount: service.price,
                    status: 'Belum Dibayar',
                    dueDate: service.expiryDate
                };
                invoicesToCreate.push(newInvoice);
                setBillingLog(prev => [...prev, `Invoice ${newInvoice.id} akan dibuat untuk ${service.name}`]);
            }
        });

        if (invoicesToCreate.length === 0) {
            setBillingLog(["Tidak ada layanan yang perlu dibuatkan invoice saat ini."]);
        } else {
            invoicesToCreate.forEach(inv => {
                postData('saveInvoice', inv, true); 
                addNotification('invoice_new', `Invoice baru ${inv.id} telah dibuat untuk ${inv.serviceName}.`, { invoiceId: inv.id });
            });
            addToast(`${invoicesToCreate.length} invoice baru berhasil dibuat`, 'success');
            addActivityLog('info', `${invoicesToCreate.length} invoice baru dibuat via otomatisasi.`);
            setTimeout(onDataChange, 1500); 
        }
    };

    const handleSendReminders = () => { setReminderLog([]); const unpaidInvoices = invoices.filter(inv => inv.status === 'Belum Dibayar' || inv.status === 'Jatuh Tempo'); if (unpaidInvoices.length > 0) { unpaidInvoices.forEach(inv => { setReminderLog(prev => [...prev, `Mengirim pengingat untuk Invoice ${inv.id}`]); addNotification('reminder_sent', `Pengingat pembayaran untuk invoice ${inv.id} telah dikirim.`, { invoiceId: inv.id }); }); addToast(`${unpaidInvoices.length} pengingat pembayaran dikirim`, 'info'); addActivityLog('info', `${unpaidInvoices.length} pengingat pembayaran dikirim.`); onDataChange(); } else { setReminderLog(["Tidak ada invoice yang perlu dikirimkan pengingat."]); } };
    const handleRunSuspensionCheck = () => { setSuspensionLog([]); const servicesToSuspend = []; invoices.forEach(inv => { const isOverdue = new Date(inv.dueDate) < new Date(); if (inv.status === 'Jatuh Tempo' && isOverdue) { const service = services.find(s => s.id === inv.serviceId); if (service && service.status !== 'Suspended') { servicesToSuspend.push(service.id); setSuspensionLog(prev => [...prev, `Layanan ${service.name} telah disuspensi.`]); addNotification('service_suspended', `Layanan ${service.name} disuspensi.`, { serviceId: service.id }); } } }); if (servicesToSuspend.length > 0) { addToast(`${servicesToSuspend.length} layanan disuspensi`, 'error'); addActivityLog('warning', `${servicesToSuspend.length} layanan disuspensi.`); onDataChange(); } else { setSuspensionLog(["Tidak ada layanan yang perlu disuspensi."]); } };
    const AutomationCard = ({ title, description, buttonText, onRun, log }) => (<div className="bg-white p-6 rounded-xl shadow-sm border"><h3 className="text-lg font-bold text-gray-800">{title}</h3><p className="text-gray-500 mt-1 mb-6 text-sm h-12">{description}</p><button onClick={onRun} className="px-4 py-2.5 bg-sky-500 text-white rounded-lg hover:bg-sky-600 w-full flex items-center justify-center gap-2 font-semibold"><Zap size={16}/> {buttonText}</button>{log.length > 0 && (<div className="mt-4 bg-slate-50 p-3 rounded-md border max-h-40 overflow-y-auto"><p className="text-sm font-semibold mb-2 text-gray-700">Log Hasil:</p><ul className="text-xs text-gray-600 space-y-1">{log.map((item, index) => <li key={index} className="flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 text-green-500 flex-shrink-0"/><span>{item}</span></li>)}</ul></div>)}</div>);
    return (<div><h1 className="text-3xl font-bold text-gray-800 mb-2">Pusat Otomatisasi</h1><p className="text-gray-500 mb-8">Jalankan tugas-tugas otomatis secara manual untuk simulasi.</p><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><AutomationCard title="Pemeriksaan Penagihan" description="Membuat invoice untuk layanan yang akan berakhir." buttonText="Jalankan Pemeriksaan" onRun={handleRunBillingCheck} log={billingLog} /><AutomationCard title="Pengiriman Pengingat" description="Mengirim pengingat untuk invoice yang belum lunas." buttonText="Kirim Pengingat" onRun={handleSendReminders} log={reminderLog} /><AutomationCard title="Pemeriksaan Suspensi" description="Mensuspensi layanan yang tagihannya jatuh tempo." buttonText="Jalankan Suspensi" onRun={handleRunSuspensionCheck} log={suspensionLog} /></div></div>);
};
const CustomerDetail = ({ customer, services, invoices, products, onBack, onBackText, onSaveService, onDeleteService, onUpdateInvoiceStatus, onEditCustomer, onAddNote, onResendInvoice }) => { const [currentTab, setCurrentTab] = useState('layanan'); const [isServiceModalOpen, setIsServiceModalOpen] = useState(false); const [isConfirmOpen, setIsConfirmOpen] = useState(false); const [isInvoicePreviewOpen, setIsInvoicePreviewOpen] = useState(false); const [serviceToEdit, setServiceToEdit] = useState(null); const [serviceToDelete, setServiceToDelete] = useState(null); const [invoiceToPreview, setInvoiceToPreview] = useState(null); const [newNote, setNewNote] = useState(""); const customerServices = useMemo(() => services.filter(s => s.customerId == customer.id), [services, customer.id]); const customerInvoices = useMemo(() => invoices.filter(i => i.customerId == customer.id), [invoices, customer.id]); const summary = useMemo(() => { const activeServices = customerServices.filter(s => getServiceStatus(s) === 'Aktif').length; const unpaidInvoices = customerInvoices.filter(i => i.status !== 'Lunas'); const unpaidAmount = unpaidInvoices.reduce((acc, inv) => acc + inv.amount, 0); const lifetimeValue = invoices.filter(i => i.customerId == customer.id && i.status === 'Lunas').reduce((acc, inv) => acc + inv.amount, 0); return { activeServices, unpaidCount: unpaidInvoices.length, unpaidAmount, lifetimeValue }; }, [customerServices, customerInvoices, customer.id, invoices]); const handleOpenAddModal = () => { setServiceToEdit(null); setIsServiceModalOpen(true); }; const handleOpenEditModal = (service) => { setServiceToEdit(service); setIsServiceModalOpen(true); }; const handleDeleteClick = (service) => { setServiceToDelete(service); setIsConfirmOpen(true); }; const handleConfirmDelete = () => { if(serviceToDelete) onDeleteService(serviceToDelete.id); setIsConfirmOpen(false); setServiceToDelete(null); }; const handleSave = (serviceData) => { onSaveService(serviceData); setIsServiceModalOpen(false); }; const handlePreviewInvoice = (invoice) => { setInvoiceToPreview(invoice); setIsInvoicePreviewOpen(true); }; const handleNoteSubmit = (e) => { e.preventDefault(); if (newNote.trim()) { onAddNote(customer.id, newNote); setNewNote(""); } }; const TabButton = ({ tabName, label, count }) => (<button onClick={() => setCurrentTab(tabName)} className={`px-1 py-3 font-semibold text-sm flex items-center gap-1.5 ${currentTab === tabName ? 'border-b-2 border-sky-500 text-sky-500' : 'text-gray-500 hover:text-gray-800'}`}>{label} {count > 0 && <span className={`text-xs rounded-full px-2 py-0.5 ${currentTab === tabName ? 'bg-sky-100 text-sky-600' : 'bg-gray-100 text-gray-600'}`}>{count}</span>}</button>); const SummaryCard = ({icon, label, value}) => (<div className="bg-slate-50 border p-4 rounded-lg flex items-center gap-3"><div className="p-2 bg-white rounded-full">{icon}</div><div><p className="text-sm text-gray-500">{label}</p><p className="font-bold text-gray-800 text-lg">{value}</p></div></div>); return (<div><button onClick={onBack} className="flex items-center gap-2 text-sky-600 hover:underline mb-6 font-semibold"><ChevronLeft size={20} /> {onBackText || 'Kembali'}</button><div className="bg-white p-6 rounded-xl shadow-sm border mb-6"><div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"><div className="flex items-center gap-5"><Avatar name={customer.name} size="lg" /><div><h1 className="text-2xl font-bold text-gray-800">{customer.name}</h1><div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-gray-500 text-sm"><p className="flex items-center gap-1.5"><Mail size={14}/> {customer.email}</p><p className="flex items-center gap-1.5"><Phone size={14}/> {customer.whatsapp}</p></div></div></div><button onClick={() => onEditCustomer(customer)} className="px-4 py-2 bg-slate-100 text-slate-800 font-semibold rounded-lg hover:bg-slate-200 flex items-center gap-2"><Edit size={16}/> Edit Profil</button></div></div><div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6"><SummaryCard icon={<Layers size={20} className="text-green-500"/>} label="Layanan Aktif" value={summary.activeServices} /><SummaryCard icon={<FileText size={20} className="text-yellow-500"/>} label="Tagihan Belum Lunas" value={summary.unpaidCount} /><SummaryCard icon={<DollarSign size={20} className="text-red-500"/>} label="Total Tunggakan" value={`Rp ${summary.unpaidAmount.toLocaleString('id-ID')}`} /><SummaryCard icon={<CheckCircle size={20} className="text-indigo-500"/>} label="Total Transaksi" value={`Rp ${summary.lifetimeValue.toLocaleString('id-ID')}`} /></div><div className="bg-white rounded-xl shadow-sm border"><div className="border-b px-6 flex justify-between items-center"><nav className="flex gap-6"><TabButton tabName="layanan" label="Layanan" count={customerServices.length} /><TabButton tabName="tagihan" label="Tagihan" count={customerInvoices.length} /><TabButton tabName="catatan" label="Catatan" count={customer.notes?.length || 0} /></nav>{currentTab === 'layanan' && (<button onClick={handleOpenAddModal} className="my-2 px-3 py-1.5 bg-sky-500 text-white text-sm font-semibold rounded-md hover:bg-sky-600 flex items-center gap-2"><PlusCircle size={16}/> Tambah</button>)}</div>{currentTab === 'layanan' && (customerServices.length > 0 ? <div className="p-2"><div className="overflow-x-auto"><table className="w-full text-left"><tbody>{customerServices.map(s => <tr key={s.id} className="border-b last:border-none hover:bg-slate-50"><td className="p-4">{s.name} <span className="text-gray-500">({s.type})</span></td><td className="p-4 hidden sm:table-cell">Rp {s.price.toLocaleString('id-ID')}</td><td className="p-4 hidden md:table-cell text-gray-600">{new Date(s.expiryDate).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</td><td className="p-4"><StatusBadge status={getServiceStatus(s)} /></td><td className="p-4 text-right flex items-center justify-end gap-2"><button onClick={() => handleOpenEditModal(s)} className="p-2 text-gray-500 hover:text-sky-600 rounded-md hover:bg-sky-100"><Edit size={16}/></button><button onClick={() => handleDeleteClick(s)} className="p-2 text-gray-500 hover:text-red-600 rounded-md hover:bg-red-100"><Trash2 size={16}/></button></td></tr>)}</tbody></table></div></div> : <p className="text-center text-gray-500 p-8">Tidak ada layanan untuk pelanggan ini.</p>)}{currentTab === 'tagihan' && (customerInvoices.length > 0 ? <div className="p-2"><div className="overflow-x-auto"><table className="w-full text-left"><tbody>{customerInvoices.map(i => { const service = services.find(s => s.id == i.serviceId); const serviceType = service ? service.type : 'Layanan'; return (<tr key={i.id} className="border-b last:border-none hover:bg-slate-50"><td className="p-4"><div className="font-medium text-gray-800">{i.serviceName} ({serviceType})</div><div className="text-sm text-gray-500">{i.id} &bull; Rp {i.amount.toLocaleString('id-ID')}</div></td><td className="p-4 text-right"><div className="flex items-center justify-end gap-2"><StatusBadge status={i.status} />{i.status !== 'Lunas' ? (<><button onClick={()=>onUpdateInvoiceStatus(i.id, 'Lunas')} className="px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-md hover:bg-green-600">Tandai Lunas</button><button onClick={()=> onResendInvoice(i.id)} className="p-2 text-gray-500 hover:text-sky-600"><Send size={16}/></button></>) : null}<button onClick={() => handlePreviewInvoice(i)} className="p-2 text-gray-500 hover:text-sky-600"><Search size={16}/></button></div></td></tr>);})}</tbody></table></div></div> : <p className="text-center text-gray-500 p-8">Tidak ada tagihan untuk pelanggan ini.</p>)}{currentTab === 'catatan' && <div className="p-6"><div className="max-h-72 overflow-y-auto space-y-4 mb-4 pr-2">{customer.notes?.length > 0 ? customer.notes.sort((a,b) => new Date(b.date) - new Date(a.date)).map(note => (<div key={note.id} className="bg-slate-50 p-3 rounded-lg"><p className="text-gray-700 text-sm">{note.text}</p><p className="text-xs text-gray-400 mt-2 text-right">{new Date(note.date).toLocaleString('id-ID')}</p></div>)) : <p className="text-center text-gray-500 py-8">Belum ada catatan.</p>}</div><form onSubmit={handleNoteSubmit} className="flex gap-3 items-start"><textarea value={newNote} onChange={(e) => setNewNote(e.target.value)} placeholder="Tambahkan catatan baru..." rows="2" className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-sky-500"></textarea><button type="submit" className="px-4 py-2.5 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600"><Send size={18}/></button></form></div>}</div><ServiceModal isOpen={isServiceModalOpen} onClose={() => setIsServiceModalOpen(false)} onSave={handleSave} service={serviceToEdit} customerId={customer.id} products={products} /><ConfirmModal isOpen={isConfirmOpen} onClose={() => setIsConfirmOpen(false)} onConfirm={handleConfirmDelete} title="Konfirmasi Hapus" message={`Anda yakin ingin menghapus layanan "${serviceToDelete?.name}"?`} /><InvoicePreviewModal isOpen={isInvoicePreviewOpen} onClose={() => setIsInvoicePreviewOpen(false)} invoice={invoiceToPreview} customer={customer} service={services.find(s => s.id == invoiceToPreview?.serviceId)} /></div>); };
const AllServicesView = ({ services, customers, onManageCustomer }) => { const [searchTerm, setSearchTerm] = useState(''); const [filterType, setFilterType] = useState('Semua Tipe'); const [filterStatus, setFilterStatus] = useState('Semua Status'); const [sortConfig, setSortConfig] = useState({ key: 'expiryDate', direction: 'ascending' }); const [currentPage, setCurrentPage] = useState(1); const ITEMS_PER_PAGE = 10; const servicesWithCustomer = useMemo(() => services.map(service => ({ ...service, customerName: (customers.find(c => c.id == service.customerId) || {}).name || 'N/A', currentStatus: getServiceStatus(service) })), [services, customers]); const filteredAndSortedServices = useMemo(() => { let sortableItems = [...servicesWithCustomer]; if (searchTerm) sortableItems = sortableItems.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.customerName.toLowerCase().includes(searchTerm.toLowerCase())); if (filterType !== 'Semua Tipe') sortableItems = sortableItems.filter(s => s.type === filterType); if (filterStatus !== 'Semua Status') sortableItems = sortableItems.filter(s => s.currentStatus === filterStatus); sortableItems.sort((a, b) => { if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'ascending' ? -1 : 1; if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'ascending' ? 1 : -1; return 0; }); return sortableItems; }, [servicesWithCustomer, searchTerm, filterType, filterStatus, sortConfig]); const paginatedServices = useMemo(() => { const startIndex = (currentPage - 1) * ITEMS_PER_PAGE; return filteredAndSortedServices.slice(startIndex, startIndex + ITEMS_PER_PAGE); }, [filteredAndSortedServices, currentPage]); const requestSort = (key) => { setSortConfig({ key, direction: sortConfig.key === key && sortConfig.direction === 'ascending' ? 'descending' : 'ascending' }); }; const SortableHeader = ({ label, sortKey, className = '' }) => (<th className={`p-4 text-sm font-semibold text-gray-500 cursor-pointer hover:text-gray-800 ${className}`} onClick={() => requestSort(sortKey)}><div className="flex items-center gap-1">{label} <ArrowUpDown size={14} /></div></th>); return (<div className="bg-white p-6 rounded-xl shadow-sm border"><h1 className="text-2xl font-bold text-gray-800 mb-2">Semua Layanan</h1><p className="text-gray-500 mb-6">Lihat dan kelola semua layanan dari seluruh pelanggan.</p><div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"><div className="relative md:col-span-2"><Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={20} /><input type="text" placeholder="Cari layanan atau pelanggan..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-11 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-sky-500" /></div><select value={filterType} onChange={e => setFilterType(e.target.value)} className="w-full p-2.5 border rounded-lg bg-white focus:ring-2 focus:ring-sky-500"><option>Semua Tipe</option><option>Hosting</option><option>Domain</option><option>Website</option></select><select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="w-full p-2.5 border rounded-lg bg-white focus:ring-2 focus:ring-sky-500"><option>Semua Status</option><option>Aktif</option><option>Akan Berakhir</option><option>Jatuh Tempo</option><option>Suspended</option></select></div><div className="overflow-x-auto"><table className="w-full text-left"><thead className="bg-slate-50"><tr><SortableHeader label="Nama Layanan" sortKey="name" /><th className="p-4 text-sm font-semibold text-gray-500 hidden sm:table-cell">Pelanggan</th><th className="p-4 text-sm font-semibold text-gray-500 hidden md:table-cell">Tipe</th><SortableHeader label="Harga" sortKey="price" className="hidden lg:table-cell" /><th className="p-4 text-sm font-semibold text-gray-500">Status</th><SortableHeader label="Tanggal Berakhir" sortKey="expiryDate" className="hidden md:table-cell" /><th className="p-4 text-sm font-semibold text-gray-500 text-right">Aksi</th></tr></thead><tbody>{paginatedServices.length > 0 ? paginatedServices.map(service => (<tr key={service.id} className="border-b last:border-none hover:bg-slate-50"><td className="p-4 font-medium text-gray-800">{service.name}</td><td className="p-4 text-gray-600 hidden sm:table-cell">{service.customerName}</td><td className="p-4 text-gray-600 hidden md:table-cell">{service.type}</td><td className="p-4 text-gray-600 hidden lg:table-cell">Rp {service.price.toLocaleString('id-ID')}</td><td className="p-4"><StatusBadge status={service.currentStatus} /></td><td className="p-4 text-gray-600 hidden md:table-cell">{new Date(service.expiryDate).toLocaleDateString('id-ID')}</td><td className="p-4 text-right"><button onClick={() => onManageCustomer(service.customerId)} className="px-3 py-1.5 bg-slate-200 text-slate-800 text-sm font-semibold rounded-md hover:bg-slate-300">Kelola</button></td></tr>)) : (<tr><td colSpan="7" className="text-center p-6 text-gray-500">Tidak ada data layanan. Silakan tambahkan di Google Sheet.</td></tr>)}</tbody></table></div><Pagination totalItems={filteredAndSortedServices.length} itemsPerPage={ITEMS_PER_PAGE} currentPage={currentPage} onPageChange={setCurrentPage} /></div>); };
const AdminDashboard = ({ customers, services, invoices, onManageCustomer, activityLog, addToast, addActivityLog, addNotification }) => { const stats = useMemo(() => { const overdueInvoices = invoices.filter(inv => inv.status === 'Jatuh Tempo'); const expiringServices = services.filter(s => getServiceStatus(s) === 'Akan Berakhir'); const suspendedServices = services.filter(s => s.status === 'Suspended'); return { overdueInvoices, expiringServices, suspendedServices }; }, [invoices, services]); const revenueData = useMemo(() => { const months = ["Feb", "Mar", "Apr", "Mei", "Jun", "Jul"]; const data = months.map(month => ({ name: month, Pendapatan: 0 })); invoices.forEach(inv => { if (inv.status === 'Lunas') { const monthIndex = new Date(inv.dueDate).getMonth(); if (monthIndex >= 1 && monthIndex <= 6) { data[monthIndex - 1].Pendapatan += inv.amount; } } }); return data; }, [invoices]); const serviceCategoryData = useMemo(() => { const hostingCount = services.filter(s => s.type === 'Hosting').length; const domainCount = services.filter(s => s.type === 'Domain').length; const websiteCount = services.filter(s => s.type === 'Website').length; return [ { name: 'Hosting', value: hostingCount, color: '#0ea5e9' }, { name: 'Domain', value: domainCount, color: '#38bdf8' }, { name: 'Website', value: websiteCount, color: '#7dd3fc' } ]; }, [services]); const handleSendMassReminder = () => { const count = stats.overdueInvoices.length; if (count > 0) { stats.overdueInvoices.forEach(inv => { addNotification('reminder_sent', `Pengingat massal dikirim untuk invoice ${inv.id}.`, { invoiceId: inv.id }); }); addToast(`${count} pengingat massal dikirim.`, 'info'); addActivityLog('info', `Mengirim ${count} pengingat massal.`); } else { addToast('Tidak ada tagihan jatuh tempo.', 'info'); } }; const ActionCard = ({ icon, label, value, buttonLabel, onAction, color }) => (<div className={`bg-white p-5 rounded-xl shadow-sm border-l-4 ${color.border}`}><div className="flex items-center gap-4">{React.cloneElement(icon, { className: color.text, size: 24 })}<div><p className="text-gray-500">{label}</p><p className="text-2xl font-bold text-gray-800">{value}</p></div></div>{onAction && <button onClick={onAction} className="mt-4 w-full text-sm font-semibold px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-md">{buttonLabel}</button>}</div>); const ActivityLogItem = ({ log }) => { const icons = { info: <Info size={16} className="text-sky-500"/>, success: <CheckCircle size={16} className="text-green-500"/>, warning: <AlertTriangle size={16} className="text-red-500"/>, note: <MessageSquare size={16} className="text-indigo-500"/>, product: <Package size={16} className="text-purple-500"/>, notification: <Bell size={16} className="text-yellow-500"/>, }; return (<li className="flex gap-3 py-2 border-b border-gray-100 last:border-none"><div className="mt-1">{icons[log.type]}</div><div><p className="text-sm text-gray-700">{log.message}</p><p className="text-xs text-gray-400">{new Date(log.timestamp).toLocaleString('id-ID')}</p></div></li>) }; return (<div><h1 className="text-3xl font-bold text-gray-800 mb-8">Dasbor</h1><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><ActionCard icon={<FileText />} label="Tagihan Jatuh Tempo" value={stats.overdueInvoices.length} buttonLabel="Kirim Pengingat Massal" onAction={handleSendMassReminder} color={{border: 'border-red-500', text: 'text-red-500'}}/><ActionCard icon={<Clock />} label="Layanan Akan Berakhir" value={stats.expiringServices.length} color={{border: 'border-yellow-500', text: 'text-yellow-500'}}/><ActionCard icon={<Shield />} label="Layanan Disuspensi" value={stats.suspendedServices.length} color={{border: 'border-gray-500', text: 'text-gray-500'}}/></div><div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6"><div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border"><h3 className="text-lg font-bold text-gray-800 mb-4">Grafik Pendapatan (6 Bulan Terakhir)</h3><BarChart data={revenueData} dataKey="Pendapatan" labelKey="name" /></div><div className="bg-white p-6 rounded-xl shadow-sm border"><h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2"><Bell size={20}/> Log Aktivitas Global</h3><ul className="h-96 overflow-y-auto pr-2">{activityLog.length > 0 ? activityLog.map(log => <ActivityLogItem key={log.id} log={log} />) : <p className="text-center text-gray-500 pt-16">Tidak ada aktivitas terbaru.</p>}</ul></div></div><div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6"><div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border"><h3 className="text-lg font-bold text-gray-800 mb-4">Layanan Akan Kedaluwarsa (30 Hari)</h3><div className="overflow-x-auto"><table className="w-full text-left"><thead className="bg-slate-50"><tr><th className="p-4 text-sm font-semibold text-gray-500">Nama Layanan</th><th className="p-4 text-sm font-semibold text-gray-500 hidden sm:table-cell">Pelanggan</th><th className="p-4 text-sm font-semibold text-gray-500">Sisa Hari</th><th className="p-4 text-sm font-semibold text-gray-500 text-right">Aksi</th></tr></thead><tbody>{stats.expiringServices.length > 0 ? stats.expiringServices.sort((a, b) => new Date(a.expiryDate) - new Date(b.expiryDate)).slice(0, 5).map(service => { const daysLeft = Math.ceil((new Date(service.expiryDate) - new Date()) / (1000 * 60 * 60 * 24)); const customer = customers.find(c => c.id == service.customerId); return (<tr key={service.id} className="border-b last:border-none hover:bg-slate-50"><td className="p-4 font-medium text-gray-800">{service.name}</td><td className="p-4 text-gray-600 hidden sm:table-cell">{customer?.name}</td><td className="p-4"><span className="font-bold text-yellow-600">{daysLeft} hari</span></td><td className="p-4 text-right"><button onClick={() => onManageCustomer(service.customerId)} className="px-3 py-1.5 bg-slate-200 text-slate-800 text-sm font-semibold rounded-md hover:bg-slate-300">Kelola</button></td></tr>)}) : (<tr><td colSpan="4" className="text-center p-6 text-gray-500">Tidak ada layanan yang akan kedaluwarsa.</td></tr>)}</tbody></table></div></div><div className="bg-white p-6 rounded-xl shadow-sm border"><h3 className="text-lg font-bold text-gray-800 mb-4">Kategori Layanan</h3><DonutChart data={serviceCategoryData} /></div></div></div>); };
const CustomerList = ({ customers, onSelectCustomer, onAddCustomer, addToast, addActivityLog }) => { const [searchTerm, setSearchTerm] = useState(''); const [currentPage, setCurrentPage] = useState(1); const [selectedCustomers, setSelectedCustomers] = useState([]); const ITEMS_PER_PAGE = 8; const filteredCustomers = useMemo(() => customers.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.email.toLowerCase().includes(searchTerm.toLowerCase())), [customers, searchTerm]); const paginatedCustomers = useMemo(() => { const startIndex = (currentPage - 1) * ITEMS_PER_PAGE; return filteredCustomers.slice(startIndex, startIndex + ITEMS_PER_PAGE); }, [filteredCustomers, currentPage]); const handleSelectAll = (e) => { if (e.target.checked) { setSelectedCustomers(paginatedCustomers.map(c => c.id)); } else { setSelectedCustomers([]); } }; const handleSelectOne = (e, id) => { if (e.target.checked) { setSelectedCustomers(prev => [...prev, id]); } else { setSelectedCustomers(prev => prev.filter(customerId => customerId !== id)); } }; const handleBulkEmail = () => { addToast(`Simulasi email ke ${selectedCustomers.length} pelanggan.`, 'info'); addActivityLog('info', `Mengirim email massal ke ${selectedCustomers.length} pelanggan.`); setSelectedCustomers([]); }; return (<div className="bg-white p-6 rounded-xl shadow-sm border"><div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4"><div className="w-full md:w-auto"><h1 className="text-2xl font-bold text-gray-800">Daftar Pelanggan</h1></div><div className="flex items-center gap-4 w-full md:w-auto"><div className="relative flex-1 md:flex-none"><Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={20} /><input type="text" placeholder="Cari pelanggan..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full md:w-64 pl-11 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-sky-500" /></div><button onClick={onAddCustomer} className="px-4 py-2.5 bg-sky-500 text-white rounded-lg hover:bg-sky-600 flex items-center gap-2 font-semibold"><PlusCircle size={18}/> Tambah</button></div></div>{selectedCustomers.length > 0 && (<div className="bg-sky-50 border border-sky-200 rounded-lg p-3 mb-4 flex items-center justify-between"><span className="font-semibold text-sky-800">{selectedCustomers.length} pelanggan terpilih</span><button onClick={handleBulkEmail} className="px-3 py-1.5 bg-sky-500 text-white text-sm font-semibold rounded-md hover:bg-sky-600 flex items-center gap-2"><Mail size={16}/> Kirim Email</button></div>)}<div className="overflow-x-auto"><table className="w-full text-left"><thead className="bg-slate-50"><tr><th className="p-4 w-12"><input type="checkbox" className="rounded border-gray-300 text-sky-600 focus:ring-sky-500" onChange={handleSelectAll} checked={selectedCustomers.length > 0 && selectedCustomers.length === paginatedCustomers.length} /></th><th className="p-4 text-sm font-semibold text-gray-500">Nama</th><th className="p-4 text-sm font-semibold text-gray-500 hidden md:table-cell">Tanggal Bergabung</th><th className="p-4 text-sm font-semibold text-gray-500">Status</th><th className="p-4 text-sm font-semibold text-gray-500 text-right">Aksi</th></tr></thead><tbody>{paginatedCustomers.length > 0 ? paginatedCustomers.map(customer => (<tr key={customer.id} className={`border-b last:border-none hover:bg-slate-50 ${selectedCustomers.includes(customer.id) ? 'bg-sky-50' : ''}`}><td className="p-4"><input type="checkbox" className="rounded border-gray-300 text-sky-600 focus:ring-sky-500" checked={selectedCustomers.includes(customer.id)} onChange={(e) => handleSelectOne(e, customer.id)} /></td><td className="p-4"><div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-4"><Avatar name={customer.name} /><div><p className="font-semibold text-gray-800">{customer.name}</p><p className="text-sm text-gray-500">{customer.email}</p></div></div></td><td className="p-4 text-gray-600 hidden md:table-cell">{new Date(customer.joinDate).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</td><td className="p-4"><StatusBadge status={customer.status} /></td><td className="p-4 text-right"><button onClick={() => onSelectCustomer(customer.id)} className="px-3 py-1.5 bg-slate-200 text-slate-800 text-sm font-semibold rounded-md hover:bg-slate-300">Kelola</button></td></tr>)) : (<tr><td colSpan="5" className="text-center p-6 text-gray-500">Tidak ada data pelanggan. Silakan tambahkan di Google Sheet.</td></tr>)}</tbody></table></div><Pagination totalItems={filteredCustomers.length} itemsPerPage={ITEMS_PER_PAGE} currentPage={currentPage} onPageChange={setCurrentPage} /></div>); };
const ProductManagementView = ({ products, onAddProduct, onEditProduct, onDeleteProduct }) => { return (<div className="bg-white p-6 rounded-xl shadow-sm border"><div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4"><h1 className="text-2xl font-bold text-gray-800">Manajemen Produk</h1><button onClick={onAddProduct} className="px-4 py-2.5 bg-sky-500 text-white rounded-lg hover:bg-sky-600 flex items-center gap-2 font-semibold w-full sm:w-auto"><PlusCircle size={18}/> Tambah Produk</button></div><div className="overflow-x-auto"><table className="w-full text-left"><thead className="bg-slate-50"><tr><th className="p-4 text-sm font-semibold text-gray-500">Nama Produk</th><th className="p-4 text-sm font-semibold text-gray-500 hidden sm:table-cell">Tipe</th><th className="p-4 text-sm font-semibold text-gray-500 hidden md:table-cell">Siklus</th><th className="p-4 text-sm font-semibold text-gray-500">Harga</th><th className="p-4 text-sm font-semibold text-gray-500 text-right">Aksi</th></tr></thead><tbody>{products.length > 0 ? products.map(product => (<tr key={product.id} className="border-b last:border-none hover:bg-slate-50"><td className="p-4 font-medium text-gray-800">{product.name}</td><td className="p-4 text-gray-600 hidden sm:table-cell">{product.type}</td><td className="p-4 text-gray-600 hidden md:table-cell">{product.cycle}</td><td className="p-4 text-gray-600">Rp {product.price.toLocaleString('id-ID')}</td><td className="p-4 text-right flex items-center justify-end gap-2"><button onClick={() => onEditProduct(product)} className="p-2 text-gray-500 hover:text-sky-600 rounded-md hover:bg-sky-100"><Edit size={16}/></button><button onClick={() => onDeleteProduct(product)} className="p-2 text-gray-500 hover:text-red-600 rounded-md hover:bg-red-100"><Trash2 size={16}/></button></td></tr>)) : (<tr><td colSpan="5" className="text-center p-6 text-gray-500">Tidak ada data produk. Silakan tambahkan di Google Sheet.</td></tr>)}</tbody></table></div></div>); };
const AllInvoicesView = ({ invoices, customers, services, onUpdateInvoiceStatus, onResendInvoice, onManageCustomer }) => { const [searchTerm, setSearchTerm] = useState(''); const [filterStatus, setFilterStatus] = useState('Semua'); const [currentPage, setCurrentPage] = useState(1); const [invoiceToPreview, setInvoiceToPreview] = useState(null); const [isInvoicePreviewOpen, setIsInvoicePreviewOpen] = useState(false); const ITEMS_PER_PAGE = 10; const summaryStats = useMemo(() => { const paid = invoices.filter(inv => inv.status === 'Lunas'); const unpaid = invoices.filter(inv => inv.status !== 'Lunas'); return { totalCount: invoices.length, paidAmount: paid.reduce((sum, inv) => sum + inv.amount, 0), unpaidAmount: unpaid.reduce((sum, inv) => sum + inv.amount, 0), } }, [invoices]); const invoicesWithDetails = useMemo(() => { return invoices.map(invoice => { const customer = customers.find(c => c.id == invoice.customerId); return { ...invoice, customerName: customer?.name || 'N/A', customerEmail: customer?.email || '' }; }).sort((a,b) => new Date(b.dueDate) - new Date(a.dueDate)); }, [invoices, customers]); const filteredInvoices = useMemo(() => { return invoicesWithDetails.filter(invoice => { const searchMatch = searchTerm === '' || invoice.id.toLowerCase().includes(searchTerm.toLowerCase()) || invoice.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) || invoice.customerName.toLowerCase().includes(searchTerm.toLowerCase()); const statusMatch = filterStatus === 'Semua' || invoice.status === filterStatus; return searchMatch && statusMatch; }); }, [invoicesWithDetails, searchTerm, filterStatus]); const paginatedInvoices = useMemo(() => { const startIndex = (currentPage - 1) * ITEMS_PER_PAGE; return filteredInvoices.slice(startIndex, startIndex + ITEMS_PER_PAGE); }, [filteredInvoices, currentPage]); const handlePreviewInvoice = (invoice) => { setInvoiceToPreview(invoice); setIsInvoicePreviewOpen(true); }; const StatCard = ({ label, value, colorClass }) => (<div className="bg-white p-5 rounded-xl shadow-sm border"><p className="text-gray-500 text-sm">{label}</p><p className={`text-2xl font-bold ${colorClass}`}>{value}</p></div>); return (<div><div className="mb-6"><h1 className="text-3xl font-bold text-gray-800">Semua Tagihan</h1><p className="text-gray-500 mt-1">Kelola semua transaksi di satu tempat.</p></div><div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"><StatCard label="Total Lunas (Rp)" value={summaryStats.paidAmount.toLocaleString('id-ID')} colorClass="text-green-600" /><StatCard label="Tunggakan (Rp)" value={summaryStats.unpaidAmount.toLocaleString('id-ID')} colorClass="text-red-600" /><StatCard label="Jumlah Transaksi" value={summaryStats.totalCount} colorClass="text-gray-800" /></div><div className="bg-white p-6 rounded-xl shadow-sm border"><div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"><div className="relative md:col-span-2"><Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={20} /><input type="text" placeholder="Cari invoice, layanan, atau pelanggan..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-11 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-sky-500" /></div><select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="w-full p-2.5 border rounded-lg bg-white focus:ring-2 focus:ring-sky-500"><option>Semua</option><option>Belum Dibayar</option><option>Jatuh Tempo</option><option>Lunas</option></select></div><div className="overflow-x-auto"><table className="w-full text-left"><thead className="bg-slate-50"><tr><th className="p-4 text-sm font-semibold text-gray-500">Invoice / Layanan</th><th className="p-4 text-sm font-semibold text-gray-500 hidden sm:table-cell">Pelanggan</th><th className="p-4 text-sm font-semibold text-gray-500 hidden md:table-cell">Jatuh Tempo</th><th className="p-4 text-sm font-semibold text-gray-500">Status</th><th className="p-4 text-sm font-semibold text-gray-500 text-right">Aksi</th></tr></thead><tbody>{paginatedInvoices.length > 0 ? paginatedInvoices.map(invoice => (<tr key={invoice.id} className="border-b last:border-none hover:bg-slate-50"><td className="p-4"><p className="font-semibold text-gray-800">{invoice.id}</p><p className="text-sm text-gray-500">{invoice.serviceName}</p></td><td className="p-4 text-gray-600 hidden sm:table-cell"><a href="#" onClick={(e) => { e.preventDefault(); onManageCustomer(invoice.customerId); }} className="hover:underline text-sky-600">{invoice.customerName}</a></td><td className="p-4 text-gray-600 hidden md:table-cell">{new Date(invoice.dueDate).toLocaleDateString('id-ID')}</td><td className="p-4"><StatusBadge status={invoice.status} /></td><td className="p-4 text-right"><div className="flex items-center justify-end gap-1">{invoice.status !== 'Lunas' && (<><button onClick={() => onUpdateInvoiceStatus(invoice.id, 'Lunas')} title="Tandai Lunas" className="p-2 text-gray-500 hover:text-green-600 rounded-md hover:bg-green-100"><CheckCircle size={16}/></button><button onClick={() => onResendInvoice(invoice.id)} title="Kirim Pengingat" className="p-2 text-gray-500 hover:text-sky-600 rounded-md hover:bg-sky-100"><Send size={16}/></button></>)}<button onClick={() => handlePreviewInvoice(invoice)} title="Lihat Invoice" className="p-2 text-gray-500 hover:text-blue-600 rounded-md hover:bg-blue-100"><Search size={16}/></button></div></td></tr>)) : (<tr><td colSpan="5" className="text-center p-6 text-gray-500">Tidak ada data tagihan. Silakan tambahkan di Google Sheet.</td></tr>)}</tbody></table></div><Pagination totalItems={filteredInvoices.length} itemsPerPage={ITEMS_PER_PAGE} currentPage={currentPage} onPageChange={setCurrentPage} /></div><InvoicePreviewModal isOpen={isInvoicePreviewOpen} onClose={() => setIsInvoicePreviewOpen(false)} invoice={invoiceToPreview} customer={customers.find(c => c.id == invoiceToPreview?.customerId)} service={services.find(s => s.id == invoiceToPreview?.serviceId)} /></div>); };
const SettingsView = ({ templates, onUpdateTemplate, addToast, addActivityLog }) => { const [currentTemplates, setCurrentTemplates] = useState(templates); const [activeTab, setActiveTab] = useState('new_invoice'); const handleTemplateChange = (e, templateKey) => { const { name, value, type, checked } = e.target; setCurrentTemplates(prev => ({ ...prev, [templateKey]: { ...prev[templateKey], [name]: type === 'checkbox' ? checked : value } })); }; const handleSave = () => { onUpdateTemplate(currentTemplates); addToast("Template notifikasi berhasil disimpan.", 'success'); addActivityLog('notification', "Template notifikasi telah diperbarui."); }; const templateDetails = { new_invoice: { label: 'Invoice Baru', icon: <FileText size={16}/> }, payment_reminder: { label: 'Pengingat Pembayaran', icon: <Clock size={16}/> }, payment_confirmation: { label: 'Konfirmasi Pembayaran', icon: <CheckCircle size={16}/> }, service_suspension: { label: 'Layanan Disuspensi', icon: <Shield size={16}/> } }; return (<div><h1 className="text-3xl font-bold text-gray-800 mb-2">Pengaturan</h1><p className="text-gray-500 mb-8">Kelola template notifikasi dan email.</p><div className="bg-white rounded-xl shadow-sm border"><div className="p-6 border-b"><h2 className="text-xl font-bold text-gray-800">Template Notifikasi</h2><p className="text-gray-500 mt-1">Sesuaikan konten email yang dikirim ke pelanggan.</p></div><div className="flex flex-col md:flex-row"><nav className="w-full md:w-1/4 p-4 border-b md:border-b-0 md:border-r"><ul>{Object.entries(templateDetails).map(([key, {label, icon}]) => (<li key={key}><button onClick={() => setActiveTab(key)} className={`w-full text-left flex items-center gap-3 p-3 rounded-lg font-semibold ${activeTab === key ? 'bg-sky-100 text-sky-600' : 'text-gray-600 hover:bg-gray-100'}`}>{icon} {label}</button></li>))}</ul></nav><div className="w-full md:w-3/4 p-6">{Object.entries(currentTemplates).map(([key, template]) => (<div key={key} className={activeTab === key ? 'block' : 'hidden'}><div className="flex justify-between items-center mb-4"><h3 className="text-lg font-bold text-gray-800">{templateDetails[key].label}</h3><label className="flex items-center cursor-pointer"><span className="mr-3 text-sm font-medium text-gray-700">Aktifkan</span><div className="relative"><input type="checkbox" name="enabled" checked={template.enabled} onChange={(e) => handleTemplateChange(e, key)} className="sr-only peer" /><div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-sky-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-500"></div></div></label></div><div className="space-y-4"><div><label className="block text-sm font-medium text-gray-600 mb-1">Subjek Email</label><input type="text" name="subject" value={template.subject} onChange={(e) => handleTemplateChange(e, key)} className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-sky-500" /></div><div><label className="block text-sm font-medium text-gray-600 mb-1">Isi Email</label><textarea name="body" value={template.body} onChange={(e) => handleTemplateChange(e, key)} rows="8" className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-sky-500 font-mono text-sm"></textarea></div><div className="text-xs text-gray-500 bg-slate-50 p-3 rounded-md"><strong>Placeholder:</strong> {`{nama_pelanggan}, {email_pelanggan}, {nomor_invoice}, {nama_layanan}, {jumlah_tagihan}, {tanggal_jatuh_tempo}, {tanggal_kadaluarsa_baru}`}</div></div></div>))}</div></div><div className="p-5 bg-gray-50 rounded-b-xl flex justify-end"><button onClick={handleSave} className="px-5 py-2.5 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600">Simpan Perubahan</button></div></div></div>); };
const NotificationCenter = ({ notifications, onMarkAsRead, onMarkAllAsRead, onClose }) => { const unreadCount = notifications.filter(n => !n.read).length; const getIcon = (type) => { switch (type) { case 'invoice_new': return <FileText size={20} className="text-sky-500" />; case 'payment_received': return <CheckCircle size={20} className="text-green-500" />; case 'reminder_sent': return <Clock size={20} className="text-yellow-500" />; case 'service_suspended': return <Shield size={20} className="text-red-500" />; default: return <Info size={20} className="text-gray-500" />; } }; return (<div className="absolute top-16 right-4 w-80 max-w-sm bg-white rounded-xl shadow-2xl border z-50 animate-fade-in-down"><div className="flex justify-between items-center p-4 border-b"><h3 className="font-bold text-gray-800">Notifikasi</h3>{unreadCount > 0 && <button onClick={onMarkAllAsRead} className="text-sm text-sky-600 hover:underline font-semibold">Tandai semua terbaca</button>}</div><div className="max-h-96 overflow-y-auto">{notifications.length > 0 ? (<ul>{notifications.map(n => (<li key={n.id} className={`flex items-start gap-3 p-4 border-b last:border-none ${!n.read ? 'bg-sky-50' : 'bg-white'} hover:bg-gray-50`}><div className="mt-1 flex-shrink-0">{getIcon(n.type)}</div><div className="flex-1"><p className="text-sm text-gray-700">{n.message}</p><p className="text-xs text-gray-400 mt-1">{new Date(n.timestamp).toLocaleString('id-ID')}</p></div>{!n.read && (<button onClick={() => onMarkAsRead(n.id)} title="Tandai terbaca" className="flex-shrink-0"><EyeOff size={16} className="text-gray-400 hover:text-sky-600" /></button>)}</li>))}</ul>) : (<p className="text-center text-gray-500 p-8">Tidak ada notifikasi baru.</p>)}</div><div className="p-2 bg-gray-50 rounded-b-xl text-center"><button onClick={onClose} className="text-sm font-semibold text-gray-600 hover:text-sky-600 w-full p-1">Tutup</button></div></div>); };

// --- MAIN APP COMPONENT ---
export default function App() {
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
    const [currentPage, setCurrentPage] = useState('dashboard');
    const [lastPage, setLastPage] = useState('dashboard');
    const [selectedCustomerId, setSelectedCustomerId] = useState(null);
    
    // Data states
    const [customers, setCustomers] = useState([]);
    const [services, setServices] = useState([]);
    const [invoices, setInvoices] = useState([]);
    const [products, setProducts] = useState([]);
    const [notificationTemplates, setNotificationTemplates] = useState({});
    const [notifications, setNotifications] = useState([]);
    const [activityLog, setActivityLog] = useState([]);
    
    // UI states
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [toasts, setToasts] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isNotificationCenterOpen, setIsNotificationCenterOpen] = useState(false);

    // Modal states
    const [provisionDetails, setProvisionDetails] = useState(null);
    const [isCustomerModalOpen, setIsCustomerModalOpen] = useState(false);
    const [customerToEdit, setCustomerToEdit] = useState(null);
    const [isProductModalOpen, setIsProductModalOpen] = useState(false);
    const [productToEdit, setProductToEdit] = useState(null);
    const [productToDelete, setProductToDelete] = useState(null);
    const [isConfirmDeleteProductOpen, setIsConfirmDeleteProductOpen] = useState(false);

    const addToast = useCallback((message, type = 'info') => {
        setToasts(prev => [...prev, { id: generateUniqueId(), message, type }]);
    }, []);

    // --- DATA FETCHING & HANDLING ---

    const fetchData = useCallback(async () => {
        if (GAS_URL.includes("GANTI_DENGAN")) {
            setError("Harap masukkan URL Google Apps Script Anda di dalam kode.");
            setIsLoading(false);
            return;
        }
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(GAS_URL);
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`HTTP error! status: ${response.status}. Pesan: ${errorText}`);
            }
            const data = await response.json();
            
            setCustomers(data.customers || []);
            setServices(data.services || []);
            setInvoices(data.invoices || []);
            setProducts(data.products || []);
            setActivityLog(data.activityLog.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)) || []);
            setNotifications(data.notifications.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)) || []);
            
            const templatesObject = (data.notificationTemplates || []).reduce((acc, t) => {
                acc[t.key] = { subject: t.subject, body: t.body, enabled: t.enabled };
                return acc;
            }, {});
            setNotificationTemplates(templatesObject);

        } catch (e) {
            setError(`Gagal mengambil data: ${e.message}. Pastikan URL Apps Script benar, sudah di-deploy ulang dengan benar (New Deployment), dan aksesnya diatur ke "Anyone".`);
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        if (isAdminLoggedIn) {
            fetchData();
        }
    }, [isAdminLoggedIn, fetchData]);

    const postData = useCallback(async (action, payload, skipRefetch = false) => {
        if (GAS_URL.includes("GANTI_DENGAN")) {
            addToast("Aksi gagal: URL Google Apps Script belum diatur.", "error");
            return;
        }
        try {
            // Mengubah Content-Type ke text/plain untuk menghindari masalah CORS preflight
            // dengan Google Apps Script. Skrip di backend akan tetap mem-parse JSON.
            const response = await fetch(GAS_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify({ action, payload }),
            });

            if (!response.ok) {
                 const errorText = await response.text();
                 throw new Error(`Server merespons dengan status ${response.status}: ${errorText}`);
            }
            
            if (!skipRefetch) {
                setTimeout(() => {
                    fetchData();
                }, 1500);
            }
        } catch (e) {
            addToast(`Terjadi kesalahan saat mengirim data: ${e.message}.`, 'error');
            console.error("Fetch error:", e);
        }
    }, [fetchData, addToast]);

    
    const removeToast = (id) => { setToasts(prev => prev.filter(t => t.id !== id)); };

    const addActivityLog = useCallback((type, message) => {
        const newLog = { id: generateUniqueId(), timestamp: new Date().toISOString(), type, message };
        postData('addActivityLog', newLog, true);
    }, [postData]);

    const addNotification = useCallback((type, message, metadata = {}) => {
        const newNotification = { id: generateUniqueId(), timestamp: new Date().toISOString(), type, message, read: false, metadata };
        postData('addNotification', newNotification, true);
    }, [postData]);

    const markNotificationAsRead = (id) => { postData('updateNotificationsRead', { ids: [id] }); };
    const markAllNotificationsAsRead = () => { const unreadIds = notifications.filter(n => !n.read).map(n => n.id); if (unreadIds.length > 0) postData('updateNotificationsRead', { ids: unreadIds }); };

    const sendSystemEmail = useCallback((templateKey, data) => {
        const template = notificationTemplates[templateKey];
        if (!template || !template.enabled) return;
        
        const customer = customers.find(c => c.id == data.customerId);
        if (!customer) return;

        let subject = template.subject.replace('{nama_pelanggan}', customer.name);
        let body = template.body.replace('{nama_pelanggan}', customer.name).replace('{email_pelanggan}', customer.email);

        if (data.invoice) {
            subject = subject.replace('{nomor_invoice}', data.invoice.id).replace('{jumlah_tagihan}', data.invoice.amount.toLocaleString('id-ID')).replace('{tanggal_jatuh_tempo}', new Date(data.invoice.dueDate).toLocaleDateString('id-ID'));
            body = body.replace('{nomor_invoice}', data.invoice.id).replace('{jumlah_tagihan}', data.invoice.amount.toLocaleString('id-ID')).replace('{tanggal_jatuh_tempo}', new Date(data.invoice.dueDate).toLocaleDateString('id-ID'));
        }
        if (data.service) {
             subject = subject.replace('{nama_layanan}', data.service.name);
             body = body.replace('{nama_layanan}', data.service.name).replace('{tanggal_kadaluarsa_baru}', new Date(data.service.expiryDate).toLocaleDateString('id-ID'));
        }

        console.log(`--- SIMULASI EMAIL ---\nKe: ${customer.email}\nSubjek: ${subject}\nIsi:\n${body}\n--------------------`);
        addToast(`Simulasi email '${templateKey}' dikirim ke ${customer.email}`, 'info');
    }, [notificationTemplates, customers, addToast]);

    // --- CRUD Handlers ---
    const handleSaveCustomer = (customerData) => {
        postData('saveCustomer', customerData);
        addToast(`Menyimpan pelanggan '${customerData.name}'...`, 'success');
        addActivityLog('success', `Data pelanggan '${customerData.name}' disimpan.`);
        setIsCustomerModalOpen(false);
    };
    const handleSaveService = (serviceData) => {
        postData('saveService', serviceData);
        addToast('Menyimpan layanan...', 'success');
        addActivityLog('success', `Layanan '${serviceData.name}' disimpan.`);
    };
    const handleUpdateInvoiceStatus = (invoiceId, newStatus) => {
        postData('updateInvoiceStatus', { id: invoiceId, status: newStatus });
        addToast(`Status invoice ${invoiceId} diperbarui.`, 'success');
        addActivityLog('success', `Invoice ${invoiceId} ditandai ${newStatus}.`);
    };
    const handleAddNote = (customerId, noteText) => {
        const customer = customers.find(c => c.id == customerId);
        const newNotes = [{ id: generateUniqueId(), text: noteText, date: new Date().toISOString() }, ...(customer.notes || [])];
        postData('addNote', { customerId, notes: newNotes });
        addToast(`Catatan ditambahkan untuk ${customer.name}`, 'success');
        addActivityLog('note', `Catatan ditambahkan untuk ${customer.name}.`);
    };
    const handleDeleteService = (serviceId) => {
        postData('deleteService', { id: serviceId });
        addToast('Layanan dihapus.', 'success');
        addActivityLog('warning', 'Sebuah layanan telah dihapus.');
    };
    const handleSaveProduct = (productData) => {
        postData('saveProduct', productData);
        addToast(`Produk '${productData.name}' disimpan.`, 'success');
        addActivityLog('product', `Produk '${productData.name}' disimpan.`);
        setIsProductModalOpen(false);
    };
    const handleOpenDeleteProductModal = (product) => { setProductToDelete(product); setIsConfirmDeleteProductOpen(true); };
    const handleConfirmDeleteProduct = () => {
        if (!productToDelete) return;
        postData('deleteProduct', { id: productToDelete.id });
        addToast(`Produk '${productToDelete.name}' dihapus.`, 'success');
        addActivityLog('warning', `Produk '${productToDelete.name}' dihapus.`);
        setIsConfirmDeleteProductOpen(false);
        setProductToDelete(null);
    };
     const handleUpdateTemplates = (templates) => {
        const templatesArray = Object.entries(templates).map(([key, value]) => ({ key, ...value }));
        postData('updateTemplates', templatesArray);
    };
    const handleResendInvoice = useCallback((invoiceId) => {
        const invoice = invoices.find(inv => inv.id == invoiceId);
        if (!invoice) return;
        sendSystemEmail('payment_reminder', { customerId: invoice.customerId, invoice });
        addActivityLog('info', `Pengingat invoice ${invoiceId} dikirim ulang.`);
        addNotification('reminder_sent', `Pengingat invoice ${invoiceId} dikirim ulang.`, { invoiceId });
    }, [invoices, sendSystemEmail, addActivityLog, addNotification]);

    // --- Navigation & UI ---
    const handleManageCustomer = (customerId) => { setLastPage(currentPage); setSelectedCustomerId(customerId); };
    const handleBackFromDetail = () => { setCurrentPage(lastPage); setSelectedCustomerId(null); };
    const selectedCustomer = useMemo(() => customers.find(c => c.id == selectedCustomerId), [customers, selectedCustomerId]);
    
    if (!isAdminLoggedIn) return <LoginPage onLoginSuccess={() => setIsAdminLoggedIn(true)} />;
    
    if (isLoading) {
        return <div className="flex h-screen w-full items-center justify-center bg-slate-100"><Loader2 className="animate-spin text-sky-500" size={48} /></div>;
    }
    
    if (error) {
        return <div className="flex h-screen w-full items-center justify-center bg-red-50 p-4"><div className="text-center"><AlertTriangle className="mx-auto text-red-500" size={48}/><h2 className="mt-4 text-xl font-bold text-red-800">Terjadi Kesalahan</h2><p className="mt-2 text-red-600">{error}</p><button onClick={fetchData} className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">Coba Lagi</button></div></div>;
    }
    
    const NavItem = ({ icon, label, page }) => (<li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(page); setSelectedCustomerId(null); setIsSidebarOpen(false); }} className={`flex items-center px-4 py-3 my-1 rounded-lg transition-colors ${currentPage === page && !selectedCustomerId ? 'bg-sky-500 text-white font-semibold' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>{icon}<span className="ml-3">{label}</span></a></li>);
    const unreadNotificationsCount = notifications.filter(n => !n.read).length;

    const SidebarContent = () => (<><div className="flex items-center justify-center p-4 border-b border-gray-700 h-16"><h1 className="font-bold text-2xl text-white">HPanel</h1></div><nav className="p-4 flex-1"><ul><NavItem icon={<BarChart2 size={20} />} label="Dasbor" page="dashboard" /><NavItem icon={<Users size={20} />} label="Pelanggan" page="customers" /><NavItem icon={<FileText size={20} />} label="Tagihan" page="invoices" /><NavItem icon={<Layers size={20} />} label="Semua Layanan" page="services" /><NavItem icon={<Package size={20} />} label="Produk" page="products" /><NavItem icon={<Zap size={20} />} label="Otomatisasi" page="automation" /><NavItem icon={<Settings size={20} />} label="Pengaturan" page="settings" /></ul></nav><div className="p-4 border-t border-gray-700"><button onClick={() => setIsAdminLoggedIn(false)} className="w-full flex items-center px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"><Power size={20} /><span className="ml-3">Keluar</span></button></div></>);

    return (
        <div className="flex h-screen bg-slate-100 font-sans">
            {toasts.map(toast => <Toast key={toast.id} {...toast} onDismiss={() => removeToast(toast.id)} />)}
            <ProvisionResultModal isOpen={!!provisionDetails} onClose={() => setProvisionDetails(null)} details={provisionDetails} />
            <CustomerModal isOpen={isCustomerModalOpen} onClose={() => setIsCustomerModalOpen(false)} onSave={handleSaveCustomer} customer={customerToEdit} />
            <ProductModal isOpen={isProductModalOpen} onClose={() => setIsProductModalOpen(false)} onSave={handleSaveProduct} product={productToEdit} />
            <ConfirmModal isOpen={isConfirmDeleteProductOpen} onClose={() => setIsConfirmDeleteProductOpen(false)} onConfirm={handleConfirmDeleteProduct} title="Konfirmasi Hapus Produk" message={`Anda yakin ingin menghapus produk "${productToDelete?.name}"?`} />
            
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsSidebarOpen(false)}></div>
            <aside className={`fixed top-0 left-0 h-full w-64 bg-gray-900 flex flex-col z-50 transform transition-transform md:hidden ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}><SidebarContent /></aside>
            <aside className="w-64 bg-gray-900 flex-shrink-0 hidden md:flex flex-col"><SidebarContent /></aside>
            
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="bg-white shadow-sm flex justify-between items-center p-4 h-16 z-30">
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden text-gray-600"><Menu size={24} /></button>
                    <div className="hidden md:block"></div>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <button onClick={() => setIsNotificationCenterOpen(prev => !prev)} className="text-gray-600 hover:text-sky-500 relative"><Bell size={22} />{unreadNotificationsCount > 0 && <span className="absolute -top-1 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">{unreadNotificationsCount}</span>}</button>
                            {isNotificationCenterOpen && <NotificationCenter notifications={notifications} onMarkAsRead={markNotificationAsRead} onMarkAllAsRead={markAllNotificationsAsRead} onClose={() => setIsNotificationCenterOpen(false)} />}
                        </div>
                        <span className="font-semibold text-gray-700 hidden sm:block">Admin Ganteng</span>
                        <Avatar name="Admin Ganteng" size="sm" />
                    </div>
                </header>
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-100 p-4 sm:p-6 lg:p-8">
                    {selectedCustomerId ? (
                        <CustomerDetail customer={selectedCustomer} services={services} invoices={invoices} products={products} onBack={handleBackFromDetail} onBackText={lastPage === 'services' ? 'Kembali ke Semua Layanan' : 'Kembali ke Daftar Pelanggan'} onSaveService={handleSaveService} onDeleteService={handleDeleteService} onUpdateInvoiceStatus={handleUpdateInvoiceStatus} onEditCustomer={(c) => { setCustomerToEdit(c); setIsCustomerModalOpen(true); }} onAddNote={handleAddNote} onResendInvoice={handleResendInvoice} />
                    ) : currentPage === 'dashboard' ? (
                        <AdminDashboard customers={customers} services={services} invoices={invoices} onManageCustomer={handleManageCustomer} activityLog={activityLog} addToast={addToast} addActivityLog={addActivityLog} addNotification={addNotification} />
                    ) : currentPage === 'customers' ? (
                        <CustomerList customers={customers} onSelectCustomer={handleManageCustomer} onAddCustomer={() => { setCustomerToEdit(null); setIsCustomerModalOpen(true); }} addToast={addToast} addActivityLog={addActivityLog} />
                    ) : currentPage === 'invoices' ? (
                        <AllInvoicesView invoices={invoices} customers={customers} services={services} onUpdateInvoiceStatus={handleUpdateInvoiceStatus} onResendInvoice={handleResendInvoice} onManageCustomer={handleManageCustomer} />
                    ) : currentPage === 'services' ? (
                        <AllServicesView services={services} customers={customers} onManageCustomer={handleManageCustomer} />
                    ) : currentPage === 'products' ? (
                        <ProductManagementView products={products} onAddProduct={() => { setProductToEdit(null); setIsProductModalOpen(true); }} onEditProduct={(p) => { setProductToEdit(p); setIsProductModalOpen(true); }} onDeleteProduct={handleOpenDeleteProductModal} />
                    ) : currentPage === 'automation' ? (
                        <AutomationView services={services} invoices={invoices} addToast={addToast} addActivityLog={addActivityLog} addNotification={addNotification} onDataChange={fetchData} postData={postData} />
                    ) : currentPage === 'settings' ? (
                        <SettingsView templates={notificationTemplates} onUpdateTemplate={handleUpdateTemplates} addToast={addToast} addActivityLog={addActivityLog} />
                    ) : (<div className="text-center p-10 bg-white rounded-lg"><h2 className="text-2xl font-bold">Halaman dalam Pengembangan</h2></div>)}
                </main>
            </div>
        </div>
    );
}
