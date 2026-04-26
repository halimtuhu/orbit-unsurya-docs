---
id: reporting-periods
title: Periode Pelaporan
sidebar_label: Periode Pelaporan
sidebar_position: 7
---

# Periode Pelaporan

Kelola jadwal pengumpulan laporan kemajuan dan laporan akhir dari proposal yang telah didanai. Fitur ini memungkinkan admin untuk membuka dan menutup periode pelaporan sesuai dengan timeline penelitian.

## Ringkasan Fitur

- **Daftar Periode**: Lihat semua periode pelaporan yang aktif dan tidak aktif
- **Buat Periode Baru**: Tentukan jenis laporan, tanggal mulai-selesai, dan batch
- **Edit Periode**: Ubah informasi periode dan status aktif/tidak aktif
- **Hapus Periode**: Hapus periode yang tidak diperlukan lagi
- **Cari dan Filter**: Temukan periode berdasarkan nama, jenis, dan status

## Mengakses Halaman Periode Pelaporan

1. Dari sidebar admin, klik **Periode Pelaporan** di bawah bagian "Pengaturan Program"
2. Anda akan melihat daftar semua periode yang telah dibuat

![Daftar Periode Pelaporan](/img/admin/reporting-periods-list.png)

## Membuat Periode Pelaporan Baru

:::info
Periode pelaporan menetapkan waktu buka/tutup untuk pengumpulan laporan dari peneliti yang didanai.
:::

1. Klik tombol **Tambah Periode** di bagian atas halaman
2. Isi form dengan informasi berikut:

| Field | Keterangan | Wajib |
|-------|-----------|--------|
| Nama Periode | Nama deskriptif untuk periode (contoh: Periode Laporan Kemajuan Q1 2025) | Ya |
| Jenis Laporan | Pilih antara "Laporan Kemajuan" atau "Laporan Akhir" | Ya |
| Tanggal Mulai | Tanggal pembukaan pengumpulan laporan | Ya |
| Tanggal Selesai | Tanggal penutupan pengumpulan laporan | Ya |
| Batch | Pilih batch tertentu jika ingin membatasi periode ke batch spesifik (opsional) | Tidak |
| Deskripsi | Catatan tambahan untuk periode ini (opsional) | Tidak |

3. Klik **Buat Periode** untuk menyimpan

![Modal Tambah Periode Pelaporan](/img/admin/reporting-periods-create.png)

:::tip
Gunakan format tanggal YYYY-MM-DD saat mengisi tanggal mulai dan selesai.
:::

## Mengedit Periode Pelaporan

Anda dapat mengubah informasi periode kapan saja:

1. Pada tabel daftar periode, cari periode yang ingin diubah
2. Klik tombol **Edit** (ikon pensil) di kolom Aksi
3. Ubah informasi yang diperlukan:
   - Nama, jenis laporan, tanggal, batch, atau deskripsi
   - Toggle **Status Aktif** untuk mengaktifkan atau menonaktifkan periode

:::warning
Menonaktifkan periode akan menutup akses peneliti untuk mengunggah laporan selama periode tersebut.
:::

4. Klik **Simpan Perubahan** untuk menyimpan

![Modal Edit Periode Pelaporan](/img/admin/reporting-periods-edit.png)

## Menghapus Periode Pelaporan

1. Pada tabel daftar periode, cari periode yang ingin dihapus
2. Klik tombol **Hapus** (ikon tempat sampah) di kolom Aksi
3. Konfirmasi penghapusan pada dialog yang muncul

:::danger
Penghapusan bersifat permanen dan tidak dapat diundur. Pastikan Anda sudah yakin sebelum menghapus.
:::

## Mencari dan Memfilter Periode

Gunakan fitur pencarian dan filter untuk menemukan periode dengan cepat:

- **Kolom Pencarian**: Ketik nama periode untuk mencari
- **Filter Jenis**: Pilih "Laporan Kemajuan" atau "Laporan Akhir"
- **Filter Status**: Pilih "Aktif" atau "Tidak Aktif"

Kombinasikan filter untuk hasil yang lebih spesifik.

## Status Periode

| Status | Keterangan |
|--------|-----------|
| Aktif | Periode terbuka - peneliti dapat mengunggah laporan |
| Tidak Aktif | Periode tertutup - peneliti tidak dapat mengunggah laporan |

## Kolom Tabel

| Kolom | Deskripsi |
|-------|-----------|
| No | Nomor urut periode |
| Nama | Nama periode pelaporan |
| Jenis | Jenis laporan (Laporan Kemajuan atau Laporan Akhir) |
| Tanggal | Range tanggal mulai hingga selesai |
| Batch | Batch yang terkait (jika ada) |
| Program | Program studi yang terkait (jika ada) |
| Status | Status aktif atau tidak aktif |
| Aksi | Tombol Edit dan Hapus |

## Best Practices

- **Beri Nama Jelas**: Gunakan nama yang deskriptif agar mudah diidentifikasi (misal: "Q1 2025", "Semester Gasal 2025")
- **Koordinasi Tanggal**: Sesuaikan tanggal periode dengan timeline administrasi penelitian
- **Kelola Status**: Tutup periode tepat waktu agar tidak ada laporan yang masuk terlambat
- **Backup Laporan**: Pastikan semua laporan sudah diunduh sebelum menghapus periode
