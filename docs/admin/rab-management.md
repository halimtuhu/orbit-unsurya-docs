---
id: rab-management
title: RAB Management
sidebar_label: RAB Management
sidebar_position: 6
---

# RAB Management

**RAB** adalah singkatan dari **Rencana Anggaran Biaya**, yaitu dokumen yang merinci estimasi biaya untuk setiap komponen pengeluaran dalam sebuah proposal penelitian atau kegiatan pengabdian kepada masyarakat. Fitur **RAB Management** memungkinkan administrator untuk membuat dan mengelola struktur kelompok anggaran serta komponen-komponen yang dapat digunakan oleh peneliti saat membuat proposal.

## Akses Fitur

1. Login sebagai **Administrator Kampus**.
2. Dari sidebar, pilih **Pengaturan Program** → **Manajemen RAB**.
3. Anda akan melihat halaman RAB Management dengan dua tab: **Penelitian** dan **PKM**.

## Mengelola Kelompok RAB

### Melihat Daftar Kelompok

Halaman utama menampilkan daftar kelompok RAB untuk kategori yang dipilih (Penelitian atau PKM). Setiap kelompok menunjukkan:

- **Nama kelompok** — identitas unik kelompok
- **Persentase maksimal** — batasan persentase anggaran untuk kelompok ini

![Daftar Kelompok RAB](/img/admin/rab-list-with-data.png)

:::tip
Gunakan kotak pencarian **"Cari kelompok atau komponen..."** untuk menemukan kelompok atau komponen tertentu dengan cepat.
:::

### Membuat Kelompok RAB Baru

1. Klik tombol **"Tambah Kelompok Baru"**.
2. Dialog akan muncul dengan form berikut:
   - **Nama Kelompok** (wajib diisi) — contoh: "Bahan dan Peralatan", "Upah Tenaga Kerja"
   - **Deskripsi** (opsional) — penjelasan singkat tentang kelompok
   - **Persentase Maksimal (%)** — batasan persentase untuk kelompok ini (cth: 40%)
3. Klik **"Simpan"** untuk membuat kelompok.

![Dialog Tambah Kelompok RAB](/img/admin/rab-create-group-dialog.png)

:::info
Persentase maksimal membantu memastikan distribusi anggaran yang sesuai dengan kebijakan institusi.
:::

### Mengedit Kelompok RAB

1. Pada kartu kelompok, klik **ikon edit** (pensil).
2. Dialog edit akan muncul dengan form yang sama seperti saat membuat kelompok.
3. Ubah informasi yang diperlukan.
4. Klik **"Simpan"** untuk menyimpan perubahan.

![Dialog Edit Kelompok RAB](/img/admin/rab-edit-group-dialog.png)

### Menghapus Kelompok RAB

1. Pada kartu kelompok, klik **ikon hapus** (tempat sampah).
2. Konfirmasi penghapusan jika diminta.

:::warning
Menghapus kelompok RAB akan menghapus semua komponen yang ada di dalamnya. Pastikan Anda telah mempertimbangkan dampaknya sebelum menghapus.
:::

### Mengatur Urutan Kelompok

Kelompok RAB dapat disusun ulang sesuai urutan yang diinginkan:

1. Pada kartu kelompok, gunakan **ikon drag** (enam titik) di sebelah kiri.
2. Tarik ke posisi baru.
3. Urutan akan disimpan secara otomatis.

## Mengelola Komponen RAB

Komponen adalah item-item spesifik yang termasuk dalam sebuah kelompok RAB. Misalnya, komponen dalam kelompok "Bahan dan Peralatan" mungkin termasuk "Reagen Penelitian", "Alat Laboratorium", dll.

### Membuka Kelompok

Untuk melihat dan mengelola komponen dalam kelompok:

1. Klik pada **nama kelompok** atau tombol kelompok.
2. Kelompok akan **expand** dan menampilkan daftar komponen di bawahnya.

![Kelompok RAB yang Expanded](/img/admin/rab-group-expanded.png)

### Membuat Komponen RAB Baru

1. Di dalam kelompok yang sudah di-expand, klik **"Tambah Komponen"**.
2. Dialog akan muncul dengan form berikut:
   - **Nama Komponen** (wajib diisi) — contoh: "Reagen Penelitian", "Kertas A4"
   - **Satuan** (opsional) — unit pengukuran (cth: kg, buah, paket, mg)
   - **Komponen dapat diedit** (checkbox) — jika dicentang, peneliti dapat mengubah komponen ini saat membuat proposal
3. Klik **"Simpan"** untuk membuat komponen.

![Dialog Tambah Komponen RAB](/img/admin/rab-create-component-dialog.png)

:::info
Centang opsi **"Komponen dapat diedit"** jika Anda ingin memberikan fleksibilitas kepada peneliti untuk menyesuaikan komponen sesuai kebutuhan proposal mereka.
:::

### Melihat dan Mengelola Komponen

Setelah komponen dibuat, komponen akan ditampilkan dalam list dengan informasi:

- **Nama komponen**
- **Satuan** (jika ada)
- **Badge "Editable"** (jika komponen dapat diedit)

![Daftar Komponen RAB](/img/admin/rab-components-list.png)

Untuk setiap komponen, Anda dapat:

- **Mengedit** — klik ikon edit untuk mengubah nama, satuan, atau status editabilitas
- **Menghapus** — klik ikon hapus untuk menghapus komponen
- **Mengatur urutan** — gunakan ikon drag untuk mengubah urutan komponen dalam kelompok

## Kategori RAB

Fitur RAB Management mendukung dua kategori utama:

| Kategori | Keterangan |
|----------|-----------|
| **Penelitian** | Kelompok dan komponen RAB untuk proposal penelitian |
| **PKM** | Kelompok dan komponen RAB untuk proposal pengabdian kepada masyarakat |

Kelompok dan komponen yang dibuat di setiap kategori bersifat independen — perubahan pada Penelitian tidak akan mempengaruhi PKM dan sebaliknya.

## Tips dan Best Practices

:::tip
**Konsistensi Naming** — Gunakan nama kelompok dan komponen yang jelas dan konsisten agar mudah dipahami peneliti saat membuat proposal.
:::

:::tip
**Persentase Maksimal** — Tetapkan persentase maksimal untuk setiap kelompok berdasarkan kebijakan institusi Anda untuk memastikan distribusi anggaran yang sesuai.
:::

:::tip
**Editabilitas Komponen** — Tentukan dengan jelas komponen mana yang dapat diedit oleh peneliti (misalnya, komponen "Honorarium" mungkin perlu fleksibilitas) dan mana yang tetap (misalnya, "Biaya Overhead").
:::

:::warning
**Backup Data** — Sebelum melakukan perubahan besar pada struktur RAB, pertimbangkan untuk mendokumentasikan struktur saat ini sebagai referensi.
:::
