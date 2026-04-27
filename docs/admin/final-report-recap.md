---
id: final-report-recap
title: Final Report Recap
sidebar_label: Final Report Recap
sidebar_position: 15
---

# Rekap Laporan Akhir

Halaman ini menjelaskan cara melihat dan memantau rekapitulasi laporan akhir dari seluruh proposal yang telah didanai, termasuk status kelengkapan laporan dan opsi unduh.

## Membuka Halaman Rekap Laporan Akhir

1. Login ke ORBIT UNSURYA sebagai **Admin**
2. Di sidebar kiri, pada bagian **Proses Proposal**, klik **Rekap Laporan Akhir**
3. Sistem akan menampilkan tabel rekapitulasi laporan akhir dari seluruh proposal didanai

## Daftar Rekapitulasi Laporan Akhir

Halaman utama menampilkan tabel dengan informasi komprehensif tentang laporan akhir setiap proposal.

![Daftar Rekap Laporan Akhir](/img/admin/final-report-recap-list.png)

| Kolom | Keterangan |
|---|---|
| **No.** | Nomor urut |
| **Judul Proposal** | Judul proposal penelitian atau pengabdian |
| **Ketua Peneliti** | Nama dosen ketua peneliti |
| **Program / Batch** | Nama program dan batch terkait |
| **Tanggal Submit** | Tanggal laporan akhir diajukan (jika sudah diajukan) |
| **Status** | Status kelengkapan laporan: *Belum Diajukan*, *Diajukan*, *Diverifikasi* |
| **Dokumen** | Tombol untuk unduh laporan akhir |

Bagian atas halaman menampilkan ringkasan statistik:
- **Total Proposal**: jumlah seluruh proposal yang telah didanai
- **Laporan Diajukan**: jumlah proposal yang sudah mengajukan laporan akhir
- **Laporan Belum Diajukan**: jumlah proposal yang belum mengajukan laporan akhir

## Mencari dan Memfilter Laporan

### Pencarian

Ketik kata kunci pada kotak **Cari laporan akhir...** untuk mencari berdasarkan:
- Judul proposal
- Nama ketua peneliti
- Program atau batch terkait

### Filter Program

1. Klik dropdown **Semua Program** untuk memilih program tertentu
2. Pilih salah satu program dari daftar yang tersedia

![Filter Program](/img/admin/final-report-recap-filter-program.png)

:::info
Setelah memilih program, dropdown **Semua Batch** akan aktif dan dapat digunakan untuk menyaring lebih lanjut.
:::

### Filter Batch

1. Pastikan sudah memilih program terlebih dahulu
2. Klik dropdown **Semua Batch**
3. Pilih batch yang diinginkan

### Filter Status

1. Klik dropdown **Semua Status** untuk menyaring berdasarkan status laporan
2. Pilih salah satu status:
   - **Belum Diajukan** — proposal belum mengajukan laporan akhir
   - **Diajukan** — laporan sudah diajukan, menunggu verifikasi
   - **Diverifikasi** — laporan sudah diverifikasi dan diterima

![Filter Status](/img/admin/final-report-recap-filter-status.png)

:::tip
Gunakan kombinasi filter Program, Batch, dan Status untuk mempersempit pencarian dan menemukan proposal yang spesifik.
:::

## Melihat Detail Laporan Akhir

### Mengunduh Laporan Akhir

1. Pada baris proposal yang ingin diunduh laporannya, klik tombol **Unduh** di kolom Dokumen
2. File laporan akhir akan diunduh ke perangkat lokal Anda dalam format yang telah ditentukan

:::info
Tombol **Unduh** hanya aktif untuk proposal yang status laporannya *Diajukan* atau *Diverifikasi*. Untuk proposal dengan status *Belum Diajukan*, tombol ini tidak tersedia.
:::

### Membuka Detail Proposal

Untuk melihat informasi lengkap proposal beserta laporan akhir:

1. Temukan proposal pada tabel
2. Klik **Judul Proposal** atau tombol **Detail** (jika tersedia) untuk membuka halaman detail proposal
3. Pada halaman detail, klik menu **Laporan Akhir** untuk melihat detail laporan

## Memantau Kelengkapan Laporan

### Indikator Status

Setiap status laporan ditampilkan dengan warna berbeda untuk memudahkan identifikasi:

| Status | Warna | Arti |
|---|---|---|
| **Belum Diajukan** | Merah/Orange | Proposal belum mengajukan laporan akhir dalam periode yang ditentukan |
| **Diajukan** | Kuning | Laporan sudah diajukan, menunggu admin/reviewer untuk memverifikasi |
| **Diverifikasi** | Hijau | Laporan sudah diverifikasi dan diterima oleh sistem |

### Pemantauan Batas Waktu

:::warning
Admin harus memantau proposal dengan status *Belum Diajukan* untuk memastikan laporan akhir diajukan sesuai dengan batas waktu yang telah ditetapkan dalam periode pelaporan.
:::

Informasi tentang periode pelaporan akhir dapat dikelola melalui menu **Periode Pelaporan** di bagian administrasi proposal.

## Ekspor Data

Anda dapat mengekspor data rekapitulasi laporan akhir untuk keperluan pelaporan atau analisis lebih lanjut:

1. Gunakan tombol **Ekspor** (jika tersedia) di bagian atas halaman
2. Pilih format file yang diinginkan (Excel, PDF, atau format lainnya)
3. File akan diunduh secara otomatis

## Aksi Massal

Untuk efisiensi pengelolaan banyak laporan, fitur aksi massal memungkinkan:

1. Centang checkbox di sebelah nomor untuk memilih proposal
2. Pilih aksi yang diinginkan dari menu dropdown **Aksi Massal**:
   - **Unduh Laporan** — mengunduh laporan dari semua proposal terpilih dalam satu file terkompresi
   - **Ubah Status** — mengubah status beberapa laporan sekaligus

![Aksi Massal](/img/admin/final-report-recap-bulk-actions.png)

:::info
Fitur aksi massal hanya tersedia untuk status laporan yang telah diajukan (*Diajukan* atau *Diverifikasi*).
:::

## Navigasi Kembali

Gunakan sidebar atau breadcrumb di bagian atas halaman untuk berpindah ke menu administrasi lainnya atau kembali ke halaman utama dashboard.
