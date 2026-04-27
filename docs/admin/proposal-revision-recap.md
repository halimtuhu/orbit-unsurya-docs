---
id: proposal-revision-recap
title: Proposal Revision Recap
sidebar_label: Proposal Revision Recap
sidebar_position: 16
---

# Rekap Revisi Proposal

Halaman ini menjelaskan cara melihat dan memantau rekapitulasi revisi proposal yang sedang dalam proses perbaikan atau pengembangan.

## Membuka Halaman Rekap Revisi Proposal

1. Login ke ORBIT UNSURYA sebagai **Admin**
2. Di sidebar kiri, pada bagian **Proses Proposal**, klik **Rekap Revisi Proposal**
3. Sistem akan menampilkan halaman rekapitulasi revisi proposal

## Ikhtisar Halaman

Halaman Rekap Revisi Proposal menampilkan ringkasan koleksi revisi proposal per skema penelitian dan pengabdian masyarakat dalam periode tertentu.

![Halaman Rekap Revisi Proposal](/img/admin/proposal-revision-recap-overview.png)

Bagian utama halaman terdiri dari:
- **Judul halaman**: Rekap Revisi Proposal
- **Deskripsi**: Informasi ringkas tentang fungsi halaman dan jumlah data yang ditemukan
- **Tombol Export**: Untuk mengunduh data rekap revisi dalam format file
- **Panel Filter dan Pengaturan**: Untuk menyaring dan mengelompokkan data
- **Area Tampilan Data**: Menampilkan tabel atau pesan jika tidak ada data

## Filter Data

### Jenis Kegiatan

1. Klik dropdown **Jenis Kegiatan** di bagian atas panel filter
2. Pilih salah satu opsi:
   - **Semua** (default): menampilkan semua jenis kegiatan
   - **Penelitian**: hanya revisi proposal penelitian
   - **Pengabdian Kepada Masyarakat**: hanya revisi proposal PKM

![Filter Jenis Kegiatan](/img/admin/proposal-revision-recap-filter-activity.png)

### Skema

1. Klik dropdown **Skema** untuk memilih skema tertentu
2. Pilih dari daftar skema yang tersedia, atau biarkan **Semua Skema** untuk melihat semua skema

![Filter Skema](/img/admin/proposal-revision-recap-filter-scheme.png)

:::info
Daftar skema disesuaikan dengan jenis kegiatan yang dipilih. Jika memilih skema tertentu, filter ini akan mempersempit hasil untuk skema tersebut saja.
:::

### Tahun Pelaksanaan

1. Klik dropdown **Tahun Pelaksanaan** untuk memilih tahun tertentu
2. Pilih tahun yang diinginkan, atau biarkan **Semua Tahun** untuk melihat semua periode

![Filter Tahun Pelaksanaan](/img/admin/proposal-revision-recap-filter-year.png)

## Pengelompokan Data

Di bawah panel filter, terdapat opsi **Kelompokkan berdasarkan** dengan pilihan:

### Berdasarkan Skema (Default)

Memilih opsi ini akan mengelompokkan data revisi proposal menurut skema penelitian/PKM masing-masing.

1. Klik radio button **Skema**
2. Data akan ditampilkan dikelompokkan per skema

![Pengelompokan Skema](/img/admin/proposal-revision-recap-group-scheme.png)

### Berdasarkan Prodi

Memilih opsi ini akan mengelompokkan data revisi proposal menurut program studi (Prodi) masing-masing.

1. Klik radio button **Prodi**
2. Data akan ditampilkan dikelompokkan per program studi

![Pengelompokan Prodi](/img/admin/proposal-revision-recap-group-prodi.png)

## Export Data

### Mengunduh Rekap Revisi

1. Tentukan filter dan pengelompokan data sesuai kebutuhan
2. Klik tombol **Export** di bagian atas halaman

![Tombol Export](/img/admin/proposal-revision-recap-export-button.png)

:::tip
Tombol Export akan menjadi aktif (tidak disabled) ketika ada data yang dapat diunduh sesuai dengan filter yang dipilih.
:::

3. Sistem akan mengunduh file dalam format spreadsheet yang berisi rekapitulasi data revisi proposal

## Tampilan Data Kosong

Apabila tidak ada data revisi proposal yang sesuai dengan filter yang dipilih, halaman akan menampilkan pesan:

**"Tidak ada data rekap ditemukan"**

Dengan saran: *"Coba ubah filter untuk menampilkan data rekap revisi proposal."*

![Data Kosong](/img/admin/proposal-revision-recap-empty.png)

### Cara Mengatasi

Jika tidak menemukan data yang diharapkan:
1. Verifikasi filter **Jenis Kegiatan** sudah sesuai
2. Periksa filter **Skema** dan pastikan skema sudah dipilih atau pilih **Semua Skema**
3. Verifikasi filter **Tahun Pelaksanaan** mencakup periode yang diinginkan
4. Pastikan ada data revisi proposal dalam sistem untuk periode dan filter yang dipilih

## Navigasi

Gunakan breadcrumb di bagian atas halaman atau sidebar untuk berpindah ke halaman lain di menu admin.

:::info
Untuk kembali ke **Dashboard Admin**, klik **Dashboard** di sidebar atau pada breadcrumb.
:::
