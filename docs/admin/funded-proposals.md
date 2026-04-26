---
id: funded-proposals
title: Funded Proposals
sidebar_label: Funded Proposals
sidebar_position: 11
---

# Funded Proposals

Halaman ini menjelaskan cara melihat dan mengelola daftar proposal penelitian dan pengabdian masyarakat yang telah mendapatkan pendanaan, serta mengelola aktivitas pelaksanaannya.

## Membuka Halaman Proposal Didanai

1. Login ke ORBIT UNSURYA sebagai **Admin**
2. Di sidebar kiri, pada bagian **Proses Proposal**, klik **Proposal Didanai**
3. Sistem akan menampilkan daftar seluruh proposal yang telah didanai

## Daftar Proposal Didanai

Halaman utama menampilkan tabel proposal dengan informasi berikut:

![Daftar Proposal Didanai](/img/admin/funded-proposals-list.png)

| Kolom | Keterangan |
|---|---|
| **No.** | Nomor urut |
| **Judul** | Judul proposal penelitian atau pengabdian |
| **Ketua Peneliti** | Nama dosen ketua peneliti |
| **Program / Batch** | Nama program dan batch terkait |
| **Dana (IDR)** | Total dana yang disetujui dalam Rupiah |
| **Aksi** | Tombol **Detail** untuk membuka halaman detail proposal |

Bagian atas halaman menampilkan jumlah total proposal yang telah didanai.

## Mencari dan Memfilter Proposal

### Pencarian

Ketik kata kunci pada kotak **Cari proposal didanai...** untuk mencari berdasarkan judul proposal.

### Filter Program

1. Klik dropdown **Semua Program** untuk memilih program tertentu
2. Pilih salah satu program dari daftar yang tersedia

![Filter Program](/img/admin/funded-proposals-filter-program.png)

:::info
Setelah memilih program, dropdown **Semua Batch** akan aktif dan dapat digunakan untuk menyaring lebih lanjut.
:::

### Filter Batch

1. Pastikan sudah memilih program terlebih dahulu
2. Klik dropdown **Semua Batch**
3. Pilih batch yang diinginkan

![Filter Batch](/img/admin/funded-proposals-filter-batch-open.png)

:::tip
Dropdown **Semua Batch** hanya aktif setelah program dipilih. Jika belum memilih program, dropdown ini tidak dapat diklik.
:::

## Membuka Detail Proposal

1. Temukan proposal yang ingin dilihat di tabel
2. Klik tombol **Detail** pada kolom Aksi
3. Sistem akan membuka halaman detail proposal

## Halaman Detail Proposal

Halaman detail menampilkan informasi ringkas proposal beserta menu untuk mengelola aktivitas pelaksanaannya.

![Detail Proposal Didanai](/img/admin/funded-proposals-detail.png)

### Informasi Proposal

Di bagian atas halaman ditampilkan:
- **Judul Proposal** sebagai heading utama
- **Ketua Peneliti**: nama dosen penanggung jawab
- **Program**: nama program penelitian atau pengabdian
- **Batch**: batch yang berlaku
- **Total Dana**: total dana yang disetujui

### Menu Aktivitas

Di bawah informasi proposal terdapat bagian **Menu Aktivitas** yang terdiri dari tujuh kartu akses cepat:

| Menu | Deskripsi |
|---|---|
| **Lihat Detail Proposal** | Membuka halaman informasi lengkap proposal |
| **Log Harian** | Mencatat dan memantau aktivitas penelitian harian |
| **Revisi Konten** | Melihat riwayat perbaikan substansi dan abstrak proposal |
| **Laporan Kemajuan** | Melihat dan mengelola laporan kemajuan penelitian |
| **Laporan Akhir** | Melihat dan mengelola laporan akhir penelitian |
| **Monitoring & Evaluasi** | Menjadwalkan dan memantau proses monev |
| **Pengkinian Capaian Luaran** | Melihat luaran dan publikasi penelitian |

Klik tombol **Buka** pada kartu yang diinginkan untuk mengakses fitur tersebut.

:::info
Kartu **Laporan Kemajuan** dan **Laporan Akhir** akan menampilkan label **Periode Tutup** apabila periode pelaporan sedang tidak dibuka.
:::

---

## Log Harian

Halaman Log Harian digunakan untuk mencatat aktivitas penelitian yang dilakukan setiap hari.

### Melihat Log Harian

Buka menu **Log Harian** dari halaman detail proposal. Daftar log yang telah tercatat akan ditampilkan secara berurutan.

![Log Harian Kosong](/img/admin/funded-proposals-daily-log-empty.png)

### Menambah Log Harian

1. Klik tombol **Tambah Log**
2. Isi form yang muncul:

![Form Tambah Log Harian](/img/admin/funded-proposals-daily-log-form.png)

| Field | Keterangan |
|---|---|
| **Tanggal** | Tanggal aktivitas (diisi otomatis dengan tanggal hari ini) |
| **Deskripsi Aktivitas** *(wajib)* | Penjelasan aktivitas yang dilakukan |
| **Lokasi** | Tempat kegiatan, contoh: *Lab Komputer Lt. 3* |
| **Progress (%)** | Persentase kemajuan penelitian |
| **Catatan** | Catatan tambahan (opsional) |

3. Klik **Simpan** untuk menyimpan log

---

## Monitoring & Evaluasi

Halaman Monitoring & Evaluasi (Monev) digunakan untuk menjadwalkan dan mengelola kegiatan monev proposal yang didanai.

### Melihat Jadwal Monev

Buka menu **Monitoring & Evaluasi** dari halaman detail proposal. Daftar jadwal monev akan ditampilkan.

![Daftar Jadwal Monev](/img/admin/funded-proposals-monev-list.png)

Setiap kartu jadwal menampilkan:
- **Status**: *Terjadwal* atau *Dibatalkan*
- **Reviewer**: nama reviewer yang ditugaskan (R1, R2)
- **Tanggal dan waktu** pelaksanaan
- **Lokasi** pelaksanaan
- **Catatan** jadwal
- Badge **Penilaian Terunggah** apabila dokumen penilaian sudah diunggah

### Membuat Jadwal Monev

1. Klik tombol **Buat Jadwal**
2. Isi form yang muncul:

![Form Buat Jadwal Monev](/img/admin/funded-proposals-monev-create.png)

| Field | Keterangan |
|---|---|
| **Tanggal & Waktu** *(wajib)* | Tanggal dan waktu pelaksanaan monev |
| **Lokasi** | Tempat pelaksanaan (opsional) |
| **Catatan** | Catatan tambahan (opsional) |

3. Klik **Simpan** untuk membuat jadwal

### Mengedit Jadwal Monev

1. Pada kartu jadwal yang ingin diubah, klik ikon **Edit**
2. Ubah data yang diperlukan pada form yang muncul

![Form Edit Jadwal Monev](/img/admin/funded-proposals-monev-edit.png)

3. Klik **Perbarui** untuk menyimpan perubahan

### Aksi Lain pada Jadwal Monev

Pada setiap jadwal berstatus *Terjadwal*, tersedia aksi tambahan:

| Tombol | Fungsi |
|---|---|
| **Unduh Dokumen Penilaian** | Mengunduh dokumen hasil penilaian monev |
| **Upload Dokumen Penilaian** | Mengunggah dokumen hasil penilaian monev |
| **Edit** | Mengubah detail jadwal |
| **Hapus Reviewer** | Menghapus penugasan reviewer dari jadwal ini |
| **Batalkan** | Membatalkan jadwal monev |

:::warning
Pembatalan jadwal tidak dapat dibatalkan kembali. Pastikan keputusan sudah tepat sebelum mengklik **Batalkan**.
:::

---

## Revisi Konten

Halaman Revisi Konten menampilkan riwayat perbaikan yang pernah dilakukan terhadap substansi dan abstrak proposal.

![Revisi Konten](/img/admin/funded-proposals-revision.png)

Informasi yang ditampilkan:
- **Program** dan **Batch** proposal
- **Status** proposal saat ini
- **Riwayat Revisi**: daftar seluruh revisi yang pernah dilakukan

---

## Laporan Kemajuan

Halaman Laporan Kemajuan digunakan untuk memantau laporan kemajuan penelitian yang dikirimkan oleh dosen.

![Laporan Kemajuan](/img/admin/funded-proposals-progress-report.png)

:::info
Apabila muncul label **Periode Tutup**, berarti periode pelaporan kemajuan sedang tidak aktif. Laporan hanya dapat diajukan saat periode dibuka oleh admin melalui menu **Periode Pelaporan**.
:::

---

## Laporan Akhir

Halaman Laporan Akhir digunakan untuk memantau laporan akhir penelitian yang dikirimkan oleh dosen.

![Laporan Akhir](/img/admin/funded-proposals-final-report.png)

:::info
Sama seperti Laporan Kemajuan, label **Periode Tutup** menandakan bahwa periode pelaporan akhir sedang tidak aktif.
:::

---

## Pengkinian Capaian Luaran

Halaman Pengkinian Capaian Luaran digunakan untuk memantau luaran dan publikasi yang dihasilkan dari penelitian.

![Pengkinian Capaian Luaran](/img/admin/funded-proposals-research-output.png)

Tersedia dua filter untuk menyaring data:
- **Jenis**: memfilter berdasarkan jenis luaran
- **Verifikasi**: memfilter berdasarkan status verifikasi luaran

---

## Navigasi Kembali

Gunakan breadcrumb di bagian atas halaman atau tombol **Kembali ke Daftar** / **Kembali ke Detail Proposal** untuk berpindah antar halaman.
