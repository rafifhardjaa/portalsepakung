# Design System & UI/UX Guidelines (Link Hub & Direct Tile)

## 1. Core Philosophy & Anti-AI-Slop Rules
- **Concept:** *Direct Interactive Tile Hub*.
- **Anti-AI-Slop Guardrails:**
  - Dilarang menambahkan badge status sistem (`● Online`, `Maintenance`, `Aktif`).
  - Dilarang menambahkan tag label sekunder (`POPULER`, `BARU`, `ADUAN`, dll).
  - Dilarang menggunakan tombol terpisah bertuliskan "Buka Portal" di dalam kartu.
  - Dilarang membuat filter kapsul/chips kategori horizontal ("Semua", "Kependudukan", dll).
  - Seluruh badan kartu/tile merupakan satu tag anchor `<a>` interaktif utuh.

---

## 2. Color Tokens (Tailwind CSS)

| Token Name | Hex Code | Tailwind Class | Penggunaan |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | `#F8FAFC` | `bg-slate-50` | Latar utama aplikasi |
| **Tile Surface** | `#FFFFFF` | `bg-white` | Latar kartu direktori |
| **Tile Border** | `#E2E8F0` | `border-slate-200` | Garis tepi kartu |
| **Tile Hover Border** | `#2563EB` | `hover:border-blue-600` | Aksen aktif saat kursor di atas kartu |
| **Text Primary** | `#0F172A` | `text-slate-900` | Judul portal (tebal, tegas) |
| **Text Muted** | `#64748B` | `text-slate-500` | Deskripsi 1 baris & info footer |
| **Icon Container** | `#EFF6FF` / `#2563EB` | `bg-blue-50 text-blue-600` | Latar pembungkus ikon Phosphor |

---

## 3. Layout & Grid Architecture

### A. Komposisi Grid Simetris (8 Kartu Layanan)
- **Mobile (< 768px):** Grid 2 kolom (`grid-cols-2 gap-3 p-4`).
- **Tablet & Desktop (>= 768px):** Grid 4 kolom (`md:grid-cols-4 gap-5 max-w-6xl mx-auto`).
- **Rasio:** Membentuk grid simetris 2 baris x 4 kolom pas tanpa ada kartu yang menggantung sendirian.

### B. Anatomi Interactive Tile (`ServiceCard.jsx`)
Kartu dibungkus dalam satu tag `<a>` dengan konfigurasi:
1. **Container:** `group relative flex flex-col items-center text-center p-6 bg-white border border-slate-200 rounded-2xl transition-all duration-150 hover:-translate-y-1 hover:border-blue-600 hover:shadow-md`.
2. **Icon Area:** Lingkaran/kotak membulat (`w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors`).
3. **Typography:**
   - Judul: `text-sm md:text-base font-extrabold tracking-wider text-slate-900 mb-1.5 uppercase`.
   - Deskripsi: `text-xs text-slate-500 line-clamp-1 leading-normal`.
4. **Keamanan:** Atribut wajib `target="_blank" rel="noopener noreferrer"`.

---

## 4. Header, Hero & Footer Specification

### A. Header (Topbar)
- Sederhana dan formal: Logo Pemkab di kiri dengan nama instansi (`Pemerintah Kabupaten Semarang`).
- Kanan: Tautan cepat kontak hotline/call center resmi.

### B. Hero Section
- Sederhana tanpa memakan banyak ruang layar (*compact hero*).
- Heading formal: *Portal Layanan Terpadu Kabupaten Semarang*.
- Search Bar Ramping: Satu input pencarian real-time untuk memfilter 8 kartu secara instan.

### C. Footer Resmi
- Latar putih dengan pembatas tipis (`border-t border-slate-200`).
- Memuat alamat kantor sekretariat (Ungaran), telepon dinas, email, dan WhatsApp bantuan.