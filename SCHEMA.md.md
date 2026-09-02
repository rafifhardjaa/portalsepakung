# Data Schema Specification

## Service Item Schema (`src/data/services.js`)

Setiap item yang terdaftar pada array layanan WAJIB memenuhi tipe dan struktur data berikut:

| Field | Type | Required | Allowed Values / Format | Description |
| :--- | :--- | :--- | :--- | :--- |
| `id` | `string` | Ya | Unique kebab-case (misal: `disdukcapil`) | Identifier unik kartu |
| `title` | `string` | Ya | Teks formal instansi | Nama portal layanan |
| `description` | `string` | Ya | Maksimal 120 karakter | Ringkasan fungsi portal (1 kalimat)[cite: 1] |
| `category` | `string` | Ya | `Kependudukan` \| `Perizinan` \| `Keuangan` \| `Informasi` \| `Aspirasi` | Kategori untuk sistem filter[cite: 1] |
| `url` | `string` | Ya | Format URL valid (`https://...`) | Alamat tujuan redirect[cite: 1] |
| `isExternal` | `boolean` | Ya | `true` \| `false` | Menentukan penggunaan tab baru[cite: 1] |
| `status` | `string` | Ya | `Online` \| `Maintenance`[cite: 1] | Status operasional sistem layanan[cite: 1] |
| `badge` | `string` | Tidak | Teks ringkas (misal: `Populer`, `Baru`) | Label penanda khusus[cite: 1] |
| `icon` | `string` | Ya | Nama icon Phosphor (misal: `IdentificationCard`) | Representasi visual layanan[cite: 1] |

### Contoh Struktur Objek:
```javascript
{
  id: "layanan-pbb",
  title: "Pajak Daerah & PBB-P2",
  description: "Cek tagihan dan pembayaran PBB online Bapenda Kabupaten Semarang.",
  category: "Keuangan",
  url: "[https://bapenda.semarangkab.go.id](https://bapenda.semarangkab.go.id)",
  isExternal: true,
  status: "Online",
  badge: "Populer",
  icon: "Receipt"
}