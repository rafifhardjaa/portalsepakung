# Agentic AI Operating Rules

## 1. Scope & Role Guardrails
- **Strict Scope:** Proyek ini murni landing page direktori/hub redirect instansi (benchmark: semarangkab.go.id/landing).
- **Prohibited Features:** Dilarang menambahkan sistem otentikasi/login, backend API, database SQL/NoSQL, form transaksi data dinamis, atau router halaman multi-step.
- **Single Page App:** Seluruh fungsionalitas berada dalam satu halaman utama yang responsif.

## 2. Code & Implementation Rules
- **External Redirects:** Seluruh link ke portal luar WAJIB menyertakan atribut:
  `target="_blank" rel="noopener noreferrer"`
- **Asset Paths:** Seluruh gambar/logo statis HARUS dipanggil via `/img/...` (merujuk ke folder `public/img/`). Dilarang mengimpor file gambar langsung via modul JS.
- **Styling Discipline:** Gunakan class utility Tailwind CSS murni. Hindari penulisan inline style (`style={{ ... }}`) atau file CSS modular baru kecuali yang didefinisikan di `index.css`.
- **Accessibility Standards:** Setiap elemen interaktif (tombol, input, link kartu) wajib memiliki atribut semantik atau `aria-label` yang deskriptif.

## 3. Communication & Modification Behavior
- Jangan mengubah struktur file atau menambah dependensi npm baru tanpa mencatatnya di `DECISION.md`.
- Setiap kali menyelesaikan tugas atau fungsi komponen, update statusnya di `PROGRESS.md` dan `STATUS.md`.