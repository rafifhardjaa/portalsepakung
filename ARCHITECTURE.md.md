# Architecture & Technical Guidelines

## 1. Tech Stack
- **Framework:** React (Vite template)
- **Styling:** Tailwind CSS
- **Icons:** `@phosphor-icons/react`
- **Linting & Code Quality:** ESLint standard React
- **Hosting Target:** Static Hosting / Web Server Instansi (Nginx/Apache)

## 2. Directory Structure
Agent harus mematuhi struktur folder berikut dan dilarang membuat folder kompleks yang tidak diperlukan:

```text
├── docs/                     # Dokumentasi panduan teknis & PRD
├── public/
│   └── img/                  # Aset statis (logo instansi, favicon, lambang daerah)
├── src/
│   ├── components/           # Komponen modular UI
│   │   ├── Header.jsx        # Logo, nama instansi, info jam/kontak cepat
│   │   ├── Hero.jsx          # Headline selamat datang & sambutan
│   │   ├── SearchFilter.jsx  # Input search instan + Category pills
│   │   ├── ServiceCard.jsx   # Kartu portal redirect tunggal
│   │   ├── ServiceGrid.jsx   # Wrapper grid & logika filter array
│   │   └── Footer.jsx        # Alamat kantor, media sosial, legalitas
│   ├── data/
│   │   └── services.js       # Data terpusat (Single Source of Truth)
│   ├── App.jsx               # Integrasi seluruh komponen
│   ├── index.css             # Tailwind base & custom utility
│   └── main.jsx              # Entry point aplikasi
├── package.json
└── vite.config.js