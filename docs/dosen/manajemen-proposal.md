---
id: manajemen-proposal
title: Manajemen Proposal Saya
sidebar_label: Manajemen Proposal Saya
sidebar_position: 2
---

# Manajemen Proposal Saya

Halaman ini menjelaskan cara melihat daftar proposal milik sendiri, memfilter berdasarkan status, melihat detail proposal, melanjutkan pengeditan draft, dan menarik proposal yang sudah terkirim.

## Mengakses Halaman Proposal Saya

1. Login sebagai **Dosen** di **https://orbit.unsurya.ac.id/**
2. Klik menu **Proposal** pada sidebar di bagian **Tugas & Aktivitas**
3. Anda akan diarahkan ke halaman **Proposal Saya**

![Halaman Proposal Saya](/img/dosen/proposal-list-main.png)

Halaman ini menampilkan seluruh proposal milik Anda — baik sebagai ketua maupun anggota — lengkap dengan status dan informasi ringkas.

## Daftar Proposal

Tabel proposal memuat kolom-kolom berikut:

| Kolom | Keterangan |
|---|---|
| **Judul Proposal** | Judul lengkap proposal beserta bidang fokus dan ruang lingkup |
| **Kategori** | Jenis program (Riset Dasar, dll.) dan nama skema |
| **Status** | Status terkini proposal disertai progres wizard (contoh: Step 5/5) |
| **Tahun** | Tahun mulai dan selesai kegiatan |
| **Durasi** | Lama kegiatan |
| **Action** | Tombol aksi yang tersedia sesuai status proposal |

## Mencari dan Memfilter Proposal

### Cari Berdasarkan Judul

Ketik kata kunci pada kolom **Cari proposal...** untuk menyaring daftar berdasarkan judul.

### Filter Berdasarkan Status

Klik dropdown **Status** untuk memfilter proposal berdasarkan status.

![Filter Status Proposal](/img/dosen/proposal-filter-status.png)

Pilihan yang tersedia:

| Status | Keterangan |
|---|---|
| **Semua Status** | Tampilkan semua proposal |
| **Draft** | Proposal yang masih dalam tahap pembuatan |
| **Terkirim** | Proposal yang telah dikirimkan ke sistem |
| **Direview** | Proposal yang sedang dalam proses review |
| **Disetujui** | Proposal yang telah disetujui |
| **Ditolak** | Proposal yang ditolak |

### Filter Berdasarkan Kategori

Klik dropdown **Kategori** untuk memfilter berdasarkan jenis program.

![Filter Kategori Proposal](/img/dosen/proposal-filter-kategori.png)

| Kategori | Keterangan |
|---|---|
| **Semua Kategori** | Tampilkan semua proposal |
| **Program Penelitian** | Proposal penelitian |
| **Program Pengabdian Masyarakat** | Proposal pengabdian kepada masyarakat |

## Aksi yang Tersedia

Setiap baris proposal memiliki tombol **Action** di kolom paling kanan. Aksi yang muncul bergantung pada status proposal.

### Proposal Berstatus Draft

![Action Menu Draft](/img/dosen/proposal-action-menu-draft.png)

| Aksi | Fungsi |
|---|---|
| **Lanjut Pembuatan** | Membuka kembali wizard pengisian proposal untuk dilanjutkan |
| **Hapus Draft** | Menghapus draft proposal secara permanen |

### Proposal Berstatus Terkirim

![Action Menu Terkirim](/img/dosen/proposal-action-menu-terkirim.png)

| Aksi | Fungsi |
|---|---|
| **Lihat** | Membuka halaman detail proposal |
| **Dokumen** | Membuka tampilan dokumen-dokumen proposal |
| **Tarik Proposal** | Menarik proposal yang sudah dikirimkan |

### Proposal dengan Status Lainnya (Sedang Direview, Didanai, dll.)

| Aksi | Fungsi |
|---|---|
| **Lihat** | Membuka halaman detail proposal |
| **Dokumen** | Membuka tampilan dokumen-dokumen proposal |

## Melihat Detail Proposal

1. Klik tombol **Action** pada baris proposal yang ingin dilihat
2. Pilih **Lihat**
3. Anda akan masuk ke halaman **Detail Proposal**

![Halaman Detail Proposal](/img/dosen/proposal-detail-top.png)

Halaman detail menampilkan informasi lengkap proposal:

- **Judul & metadata**: ID Proposal dan tanggal pembuatan
- **Status**: Badge status workflow terkini
- **Ringkasan**: Durasi kegiatan, jumlah anggota tim, target output, dan total anggaran
- **Status Approval & Review**: Progres approval dan jumlah review yang selesai
- **Status Pendanaan**: Informasi pendanaan jika proposal sudah disetujui
- **Riwayat PDF Proposal**: Daftar versi PDF yang pernah digenerate, beserta tombol **Generate versi terbaru** dan **Refresh**
- **Identitas Usulan**: Data lengkap identitas proposal
- **Tim Pelaksana**: Daftar ketua dan anggota tim
- **Substansi Usulan**: Dokumen substansi yang diunggah
- **Rancangan Anggaran Biaya**: Rincian anggaran
- **Dokumen Pendukung**: Surat pernyataan orisinalitas dan dokumen pendukung lainnya

Klik **Kembali ke Daftar Proposal** atau **Kembali ke Proposal** untuk kembali ke daftar.

## Melanjutkan Pengeditan Draft

Jika proposal masih berstatus **Draft**, Anda dapat melanjutkan pengisian wizard:

1. Klik tombol **Action** pada proposal dengan status **Draft**
2. Pilih **Lanjut Pembuatan**
3. Sistem akan membuka wizard pembuatan proposal pada langkah terakhir yang tersimpan

![Wizard Edit Draft](/img/dosen/proposal-edit-draft-wizard.png)

Wizard terdiri dari 5 langkah:

| Langkah | Nama |
|---|---|
| 1 | IDENTITAS USULAN |
| 2 | SUBSTANSI USULAN |
| 3 | RAB |
| 4 | DOKUMEN PENDUKUNG |
| 5 | KONFIRMASI USULAN |

Isi atau perbarui data pada setiap langkah, lalu klik **Lanjutkan** untuk maju ke langkah berikutnya.

:::info[Melanjutkan dari Langkah Tertentu]

Anda dapat berpindah antar langkah yang sudah tersedia dengan mengklik judul langkah di bagian atas wizard.

:::

## Menarik Proposal

Proposal yang sudah dikirimkan (berstatus **Terkirim**) dapat ditarik kembali sebelum memasuki tahap review.

1. Klik tombol **Action** pada proposal berstatus **Terkirim**
2. Pilih **Tarik Proposal**
3. Dialog konfirmasi akan muncul

![Dialog Tarik Proposal](/img/dosen/proposal-tarik-dialog.png)

Dialog menampilkan informasi proposal yang akan ditarik: judul, ID, dan status saat ini.

4. Isi kolom **Alasan penarikan** (wajib diisi, maksimal 500 karakter)
5. Klik **Ya, Tarik Proposal** untuk mengkonfirmasi

:::warning[Penarikan Proposal Tidak Dapat Dibatalkan]

Proposal yang ditarik tidak dapat diajukan kembali. Pastikan Anda benar-benar yakin sebelum melanjutkan tindakan ini.

:::

Klik **Batal** jika ingin membatalkan proses penarikan.
