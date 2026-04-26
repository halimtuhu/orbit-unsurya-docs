---
id: research-taxonomy
title: Research Taxonomy
sidebar_label: Research Taxonomy
sidebar_position: 5
---

# Manajemen Topik Penelitian

Kelola bidang fokus, tema, dan topik penelitian Universitas Surya dalam sistem ORBIT. Fitur ini memungkinkan admin untuk mengatur hierarki klasifikasi penelitian yang digunakan di seluruh platform.

## Navigasi ke Halaman

1. Login sebagai **Admin Kampus**
2. Pada sidebar, di bawah **Pengaturan Program**, klik **Manajemen Topik Penelitian**

![Halaman Manajemen Topik Penelitian](/img/admin/taxonomy-list.png)

## Struktur Data

Taxonomy penelitian terdiri dari 3 level hierarki:

| Level | Nama | Deskripsi |
|-------|------|-----------|
| 1 | **Bidang Fokus** | Klasifikasi tertinggi, contoh: Keamanan Siber, Kecerdasan Buatan |
| 2 | **Tema Riset** | Tema di bawah Bidang Fokus, contoh: Keamanan Jaringan (di bawah Keamanan Siber) |
| 3 | **Topik Riset** | Spesifikasi detail di bawah Tema, contoh: Enkripsi End-to-End |

Setiap level dapat ditambah, diubah, atau dihapus secara independen melalui tab terpisah.

## Fitur Umum

### Pencarian

Di bagian atas halaman, gunakan kotak pencarian **"Cari berdasarkan nama atau kode..."** untuk mencari item berdasarkan:
- Nama Bidang Fokus / Tema / Topik
- Kode (contoh: KEAMANAN)

Pencarian bersifat real-time dan mencakup semua tab yang aktif.

### Export & Import

#### Export ke Excel

1. Klik tombol **Export Excel** di baris toolbar
2. File Excel akan diunduh dengan struktur data dari tab yang sedang aktif

#### Import dari Excel

1. Klik tombol **Import Excel**
2. Pilih file Excel yang berisi data (format harus sesuai dengan struktur export)
3. Sistem akan memvalidasi dan menambahkan data ke dalam sistem

:::info
Gunakan fitur import untuk batch upload data taxonomy dari file Excel, misal dari hasil survey atau rencana awal penelitian.
:::

## Tab Bidang Fokus

Tab ini menampilkan daftar **Bidang Fokus Penelitian** (level tertinggi klasifikasi).

![Daftar Bidang Fokus](/img/admin/taxonomy-list-with-data.png)

### Melihat Daftar Bidang Fokus

Setiap item Bidang Fokus menampilkan:
- **Nama** — nama bidang fokus penelitian
- **Kode** — kode unik untuk referensi sistem
- **Deskripsi** — penjelasan singkat bidang fokus
- **Jumlah Tema** — berapa banyak tema yang terdaftar di bawah bidang ini
- **Status** — Aktif atau Tidak Aktif

### Menambah Bidang Fokus

1. Klik tombol **Tambah Bidang Fokus**
2. Form modal akan terbuka dengan field:
   - **Kode** *(required)* — Identifier unik, contoh: KEAMANAN
   - **Nama** *(required)* — Nama bidang fokus, contoh: Keamanan Siber
   - **Deskripsi** *(optional)* — Penjelasan lengkap bidang fokus
   - **Urutan Tampilan** — Angka untuk mengurutkan tampilan (default: 0)
   - **Aktif** — Toggle untuk mengaktifkan/menonaktifkan bidang fokus (aktif secara default)

![Form Tambah Bidang Fokus](/img/admin/taxonomy-create-focus.png)

3. Isi semua field yang bertanda bintang (*), field lainnya opsional
4. Klik **Simpan**

:::tip
Gunakan kode yang deskriptif dan singkat, misal KEAMANAN, AI, ENERGI, agar mudah diingat dan direferensi dalam sistem.
:::

### Mengedit Bidang Fokus

1. Pada daftar Bidang Fokus, klik tombol **edit** (ikon pensil) pada item yang ingin diubah
2. Form modal akan terbuka dengan data yang sudah terisi

![Form Edit Bidang Fokus](/img/admin/taxonomy-edit-focus.png)

3. Ubah field yang diperlukan
4. Klik **Perbarui** untuk menyimpan perubahan

:::warning
Mengubah kode Bidang Fokus dapat mempengaruhi referensi di proposal atau laporan yang sudah ada. Lakukan dengan hati-hati.
:::

### Menghapus Bidang Fokus

1. Pada daftar Bidang Fokus, klik tombol **delete** (ikon tempat sampah) pada item yang ingin dihapus
2. Akan muncul dialog konfirmasi penghapusan
3. Klik **Hapus** untuk mengkonfirmasi atau **Batal** untuk membatalkan

:::warning
Penghapusan Bidang Fokus akan menghapus semua Tema dan Topik yang terkait. Tindakan ini tidak dapat dibatalkan. Pastikan tidak ada proposal yang masih menggunakan Bidang Fokus ini.
:::

## Tab Tema Riset

Tab ini menampilkan daftar **Tema Riset** (level kedua, di bawah Bidang Fokus).

![Tab Tema Riset](/img/admin/taxonomy-tema-tab.png)

:::info
Tema Riset adalah sub-kategori dari Bidang Fokus. Contoh: "Keamanan Jaringan" adalah Tema Riset di bawah Bidang Fokus "Keamanan Siber".
:::

### Melihat Daftar Tema Riset

Setiap item Tema Riset menampilkan informasi serupa dengan Bidang Fokus:
- Nama Tema
- Kode referensi
- Deskripsi
- Jumlah Topik (topik riset yang terdaftar di bawah tema ini)
- Status (Aktif/Tidak Aktif)

### Menambah Tema Riset

1. Klik tombol **Tambah Tema Riset**
2. Form modal akan terbuka dengan field:
   - **Bidang Fokus** *(required)* — Pilih Bidang Fokus yang akan menampung tema ini
   - **Kode** *(required)* — Identifier unik untuk tema
   - **Nama** *(required)* — Nama tema riset
   - **Deskripsi** *(optional)* — Penjelasan tema
   - **Urutan Tampilan** — Angka untuk mengurutkan tampilan
   - **Aktif** — Toggle status

3. Isi field yang diperlukan, pastikan memilih Bidang Fokus yang tepat
4. Klik **Simpan**

### Mengedit & Menghapus Tema Riset

Proses edit dan delete Tema Riset sama dengan Bidang Fokus:
- Klik tombol **edit** untuk mengubah
- Klik tombol **delete** untuk menghapus (dengan konfirmasi)

:::tip
Sebelum menambah Tema Riset, pastikan Bidang Fokus yang relevan sudah dibuat terlebih dahulu.
:::

## Tab Topik Riset

Tab ini menampilkan daftar **Topik Riset** (level ketiga, detail di bawah Tema).

![Tab Topik Riset](/img/admin/taxonomy-topik-tab.png)

:::info
Topik Riset adalah spesifikasi paling detail dalam klasifikasi penelitian. Contoh: "Enkripsi End-to-End" adalah Topik Riset di bawah Tema "Keamanan Jaringan".
:::

### Melihat Daftar Topik Riset

Struktur tampilan sama dengan level sebelumnya, menampilkan:
- Nama Topik
- Kode
- Deskripsi
- Status (Aktif/Tidak Aktif)

### Menambah Topik Riset

1. Klik tombol **Tambah Topik Riset**
2. Form modal akan terbuka dengan field:
   - **Bidang Fokus** *(required)* — Pilih Bidang Fokus
   - **Tema Riset** *(required)* — Pilih Tema di bawah Bidang Fokus yang dipilih
   - **Kode** *(required)* — Identifier unik untuk topik
   - **Nama** *(required)* — Nama topik riset
   - **Deskripsi** *(optional)* — Penjelasan topik
   - **Urutan Tampilan** — Angka untuk mengurutkan tampilan
   - **Aktif** — Toggle status

3. Pilih Bidang Fokus dan Tema Riset yang sesuai
4. Isi kode dan nama topik
5. Klik **Simpan**

### Mengedit & Menghapus Topik Riset

Sama dengan level sebelumnya:
- Klik **edit** untuk mengubah detail topik
- Klik **delete** untuk menghapus (dengan konfirmasi)

:::warning
Penghapusan Topik Riset dapat mempengaruhi proposal yang sudah menggunakan topik ini. Pastikan tidak ada proposal aktif yang masih menggunakan Topik Riset yang akan dihapus.
:::

## Praktik Terbaik

### Penamaan Kode

- Gunakan **huruf besar** (UPPERCASE)
- Singkat tapi deskriptif, maksimal 20 karakter
- Hindari spasi, gunakan underscore jika perlu: `KEAMANAN_JARINGAN`
- Contoh: `KEAMANAN`, `AI`, `ENERGI_TERBARUKAN`, `BIG_DATA`

### Organisasi Hierarki

1. **Rancang struktur sebelum input data** — tentukan Bidang Fokus dan Tema terlebih dahulu
2. **Hindari duplikasi** — periksa apakah topik sudah ada sebelum menambah
3. **Gunakan status Aktif/Tidak Aktif** untuk menonaktifkan item tanpa menghapus
4. **Hitung kebutuhan Tema dan Topik** sesuai dengan fokus penelitian universitas

### Pemeliharaan

- **Review berkala** — periksa apakah taxonomy masih relevan dengan kebutuhan penelitian
- **Update status** — nonaktifkan topik yang sudah tidak relevan alih-alih menghapus
- **Konsistensi naming** — terapkan standar penamaan yang sama di semua level
- **Backup data** — gunakan fitur Export Excel secara berkala untuk backup

## Troubleshooting

### Tidak bisa menambah Tema setelah memilih Bidang Fokus?

Pastikan Bidang Fokus yang dipilih sudah **Aktif**. Jika tidak, edit Bidang Fokus dan aktifkan terlebih dahulu.

### Field Kode tidak bisa diubah saat edit?

Beberapa sistem membuat Kode sebagai read-only setelah item pertama kali dibuat untuk menjaga konsistensi referensi. Jika perlu mengubah kode, pertimbangkan menghapus dan membuat ulang item.

### Data yang diexport tidak lengkap?

Export hanya menampilkan data dari tab yang sedang **aktif**. Jika ingin export semua level (Bidang Fokus, Tema, dan Topik), lakukan export tiga kali dari masing-masing tab.

### Import gagal dengan error validasi?

Periksa format file Excel yang diupload:
- Kolom harus sesuai dengan struktur yang di-export
- Tidak ada data kosong di field yang required
- Kode harus unik (tidak ada duplikasi dalam file)
