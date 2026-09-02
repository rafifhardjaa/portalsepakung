# Architecture Decision Record (ADR)

## ADR-001: Pemilihan React (Vite) & Tailwind CSS
- **Konteks:** Migrasi landing page redirect instansi dari HTML/CSS vanilla Dieng Travelo.
- **Keputusan:** Menggunakan React via Vite dan Tailwind CSS.
- **Alasan:** Proses build sangat instan, komponen modular mudah dirawat, styling cepat via utility class, dan hasil build statis (`dist/`) mudah di-deploy di web server instansi (Nginx/Apache) tanpa server Node.js aktif.

## ADR-002: Arsitektur Client-Side Data (Single Source of Truth)
- **Konteks:** Portal instansi perlu update daftar link berkala tanpa merusak layout UI.
- **Keputusan:** Data portal disimpan dalam array objek statis di `src/data/services.js`.
- **Alasan:** Menghilangkan ketergantungan script generator (.py/.ps1) dari kode lama dan memudahkan penambahan menu baru tanpa perlu database backend.

## ADR-003: Standar Penanganan Link Redirect Eksternal
- **Konteks:** Pengunjung akan diarahkan ke sub-domain atau portal layanan dinas eksternal.
- **Keputusan:** Membuka link eksternal di tab baru dengan atribut proteksi keamanan web.
- **Alasan:** Menjaga pengunjung tidak kehilangan akses portal utama serta mencegah eksploitasi keamanan tab reverse-tabnabbing via `rel="noopener noreferrer"`.