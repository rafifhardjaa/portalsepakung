# Product Requirements Document (PRD)
**Project Name:** Portal Direktori Layanan Instansi Pemerintah (Landing Redirect Hub)  
**Reference Benchmark:** https://semarangkab.go.id/landing/  
**Status:** MVP Development  

---

## 1. Background & Objectives
Proyek ini bertujuan untuk menyediakan landing page satu pintu (*hub/portal*) yang ringan, responsif, dan mudah diakses oleh masyarakat untuk diarahkan (*redirect*) ke berbagai sistem informasi, aplikasi dinas, serta kanal informasi resmi instansi pemerintah daerah.

## 2. Core Personas
- **Masyarakat Umum:** Pengguna mobile/desktop dengan beragam rentang usia yang membutuhkan akses cepat ke portal layanan (KTP, Perizinan, Pajak, Aduan) tanpa navigasi rumit.
- **Administrator Instansi:** Pengelola yang butuh kemudahan menambah/mengubah tautan redirect tanpa merombak struktur UI.

## 3. Scope of Work

### In-Scope (Functional Requirements)
1. **Header & Identitas Daerah:**
   - Menampilkan logo resmi instansi/pemerintah daerah.
   - Penamaan instansi yang jelas dan formal.
   - Indikator tanggal/jam lokal atau status layanan.
2. **Hero & Pencarian Instan (Instant Filter):**
   - Headline formal dan deskripsi singkat.
   - Input search bar untuk memfilter kartu layanan secara real-time berdasarkan judul, deskripsi, atau kategori.
3. **Filter Kategori (Chips/Pills):**
   - Memfilter layanan berdasarkan rumpun (e.g., "Semua", "Kependudukan", "Perizinan", "Keuangan/Pajak", "Informasi Publik").
4. **Grid Direktori Layanan (Kartu Redirect):**
   - Menampilkan daftar layanan dalam tata letak grid responsif.
   - Setiap kartu memuat: Ikon layanan, Judul, Kategori/Badge status, Ringkasan fungsi (1 kalimat), dan Tombol Akses.
   - Aksi redirect ke domain luar wajib membuka tab baru secara aman (`target="_blank"` dan `rel="noopener noreferrer"`).
5. **Footer Informasi Resmi:**
   - Alamat kantor dinas/pemkab lengkap.
   - Saluran kontak bantuan (Call Center/WhatsApp, Email dinas, SP4N-LAPOR).
   - Hak cipta instansi resmi.

### Out-of-Scope (Non-Goals)
- Tidak ada sistem otentikasi/login mandiri.
- Tidak ada database relasional/backend API dinamis (seluruh data portal dikelola secara client-side via JSON/JS statis).
- Tidak ada formulir transaksi data kependudukan langsung (transaksi dilakukan di portal tujuan redirect).

## 4. Non-Functional Requirements
- **Accessibility (a11y):** Kontras teks memenuhi standar WCAG AA, navigasi ramah keyboard, dan penggunaan tag semantik serta `aria-label`.
- **Performa:** PageSpeed 90+, bundle size minimalis, transisi CSS ringan tanpa animasi blocking.
- **Cross-device:** Tampilan optimal di resolusi Mobile (360px+), Tablet (768px+), hingga Layar Desktop (1280px+).