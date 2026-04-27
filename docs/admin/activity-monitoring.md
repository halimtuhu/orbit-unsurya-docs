---
id: activity-monitoring
title: Activity Monitoring
sidebar_label: Activity Monitoring
sidebar_position: 13
---

# Monitoring Aktivitas

Halaman ini menjelaskan cara memantau aktivitas harian penelitian dan pengabdian kepada masyarakat dari seluruh proposal yang telah didanai di ORBIT UNSURYA.

## Membuka Halaman Monitoring Aktivitas

1. Login ke ORBIT UNSURYA sebagai **Admin**
2. Di sidebar kiri, pada bagian **Proses Proposal**, klik **Monitoring Aktivitas**
3. Sistem akan menampilkan daftar log harian dari semua proposal yang didanai

## Daftar Log Harian

Halaman utama menampilkan semua log harian aktivitas penelitian yang telah tercatat.

![Daftar Log Harian](/img/admin/activity-monitoring-list.png)

| Kolom | Keterangan |
|---|---|
| **Judul Proposal** | Judul penelitian atau pengabdian masyarakat |
| **Ketua Peneliti** | Nama dosen penanggung jawab proposal |
| **Tanggal** | Tanggal aktivitas dicatat |
| **Deskripsi** | Penjelasan singkat aktivitas yang dilakukan |
| **Progress (%)** | Persentase kemajuan penelitian |
| **Aksi** | Tombol untuk melihat detail atau menghapus log |

## Mencari dan Memfilter Log

### Pencarian

1. Gunakan kotak **Cari** pada bagian atas halaman
2. Ketik kata kunci untuk mencari berdasarkan:
   - **Judul Proposal**
   - **Nama Dosen** (ketua peneliti)
3. Hasil pencarian akan ditampilkan secara otomatis

![Pencarian Log](/img/admin/activity-monitoring-search.png)

### Filter Tanggal

Gunakan dua field tanggal untuk memfilter log berdasarkan rentang waktu:

| Field | Keterangan |
|---|---|
| **Dari Tanggal** | Tanggal awal periode yang ingin dilihat |
| **Sampai Tanggal** | Tanggal akhir periode yang ingin dilihat |

1. Klik field **Dari Tanggal** dan pilih tanggal awal
2. Klik field **Sampai Tanggal** dan pilih tanggal akhir
3. Sistem akan menampilkan log dalam rentang tanggal tersebut

![Filter Tanggal](/img/admin/activity-monitoring-date-filter.png)

:::tip
Kombinasikan pencarian teks dan filter tanggal untuk hasil yang lebih spesifik.
:::

## Melihat Detail Log

1. Pada daftar log, klik baris log yang ingin dilihat detailnya
2. Halaman akan menampilkan informasi lengkap:

![Detail Log Harian](/img/admin/activity-monitoring-detail.png)

- **Judul Proposal dan Ketua Peneliti**
- **Tanggal Aktivitas**
- **Deskripsi Aktivitas**: penjelasan detail apa yang telah dilakukan
- **Lokasi** (jika ada): tempat pelaksanaan kegiatan
- **Progress (%)**: persentase kemajuan penelitian saat itu
- **Catatan Tambahan** (jika ada): informasi pelengkap lainnya

## Menghapus Log Harian

:::warning
Penghapusan log harian tidak dapat dibatalkan. Pastikan keputusan sudah tepat sebelum menghapus.
:::

1. Temukan log yang ingin dihapus di daftar
2. Klik tombol **Hapus** (ikon sampah) pada kolom Aksi
3. Sistem akan meminta konfirmasi penghapusan
4. Klik **Konfirmasi** untuk menyelesaikan penghapusan

## Informasi Tambahan

### Log Kosong

Jika tidak ada log harian yang ditemukan, halaman akan menampilkan pesan:
> "Tidak ada log harian ditemukan."

Ini berarti:
- Belum ada proposal yang sedang dalam tahap pelaksanaan dan memiliki log harian
- Pencarian atau filter yang digunakan tidak menemukan hasil
- Coba ubah kriteria pencarian atau filter tanggal

### Status Proposal

Log harian hanya muncul untuk proposal yang berstatus **FUNDED** (Didanai). Proposal dengan status lain tidak akan menampilkan log.

:::info
Untuk menambah log harian baru, gunakan fitur **Log Harian** di menu Aktivitas pada halaman **Proposal Didanai**. Lihat halaman [Proposal Didanai](./funded-proposals.md) untuk informasi lengkap.
:::

## Navigasi Kembali

Gunakan breadcrumb di bagian atas halaman untuk berpindah ke halaman lain atau kembali ke Dashboard.
