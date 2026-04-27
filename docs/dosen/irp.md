---
id: irp
title: IRP (Insentif Reimbursement Publikasi)
sidebar_label: IRP (Insentif Reimbursement Publikasi)
sidebar_position: 4
---

# IRP (Insentif Reimbursement Publikasi)

Halaman ini menjelaskan cara menggunakan fitur **Insentif Reimbursement Publikasi (IRP)** di ORBIT UNSURYA. Fitur ini memungkinkan dosen mengajukan klaim reimburse atas biaya publikasi ilmiah, dan admin memproses serta menyetujui pengajuan tersebut.

## Hak Akses

| Fitur | Admin / Super Admin | Dosen |
|-------|---------------------|-------|
| Lihat daftar pengajuan | Semua pengajuan | Hanya milik sendiri |
| Membuat pengajuan | Tidak | Ya |
| Edit pengajuan | Tidak | Ya (status Draft / Perlu Revisi) |
| Hapus pengajuan | Tidak | Ya (status Draft / Perlu Revisi) |
| Upload lembar persetujuan | Tidak | Ya (status Draft / Perlu Revisi) |
| Submit pengajuan | Tidak | Ya |
| Review pengajuan | Ya | Tidak |
| Setujui / Tolak / Minta Revisi | Ya | Tidak |
| Tandai selesai | Ya | Tidak |

---

## Alur Status Pengajuan

```
Draft → Diajukan → Sedang Direview → Disetujui → Selesai
                                   → Ditolak
                                   → Perlu Revisi → Diajukan (revisi & kirim ulang)
```

---

## Halaman Daftar Pengajuan

Klik menu **Insentif Reimburse Publikasi (IRP)** di sidebar kiri untuk membuka halaman daftar pengajuan.

### Tampilan Dosen

Halaman menampilkan daftar pengajuan IRP milik dosen yang sedang login.

![Halaman Daftar IRP Dosen](/img/dosen/irp-list-main.png)

**Kolom tabel:**

| Kolom | Keterangan |
|-------|------------|
| No | Nomor urut |
| Judul Publikasi | Judul karya yang diajukan |
| Jenis | Jenis publikasi (Artikel Ilmiah / HKI / Buku) |
| Biaya | Jumlah biaya reimburse |
| Status | Status pengajuan saat ini |
| Tanggal Pengajuan | Tanggal submit pengajuan |
| Aksi | Tombol **Lihat Detail** |

**Filter yang tersedia:**

- **Cari judul publikasi** — pencarian berdasarkan judul
- **Semua Tahun** — filter berdasarkan tahun pengajuan
- **Semua Semester** — filter Ganjil / Genap
- **Semua Jenis** — filter Artikel Ilmiah / HKI / Buku
- **Semua Status** — filter berdasarkan status pengajuan

### Tampilan Admin

Admin melihat semua pengajuan dari seluruh dosen. Tabel memiliki kolom tambahan **Nama Dosen** setelah kolom Judul Publikasi. Admin tidak memiliki tombol "Buat Pengajuan".

![Halaman Daftar IRP Admin](/img/dosen/irp-admin-list.png)

---

## Membuat Pengajuan Baru

:::info[Hanya untuk Dosen]

Fitur membuat pengajuan hanya tersedia untuk pengguna dengan role **Dosen**.

:::

### Langkah 1: Pilih Jenis Publikasi

1. Klik tombol **Buat Pengajuan** di pojok kanan atas
2. Halaman pemilihan jenis publikasi akan terbuka dengan 3 pilihan

![Pilih Jenis Publikasi](/img/dosen/irp-create-jenis.png)

| Pilihan | Deskripsi |
|---------|-----------|
| **Artikel Ilmiah** | Untuk publikasi di jurnal nasional/internasional |
| **Hak Kekayaan Intelektual (HKI)** | Untuk paten, hak cipta, merek, desain industri, dll. |
| **Buku** | Untuk buku referensi, buku ajar, monograf, dan book chapter |

3. Klik salah satu kartu untuk membuka formulir sesuai jenis publikasi

---

### Formulir Artikel Ilmiah

![Formulir Artikel Ilmiah](/img/dosen/irp-form-artikel-ilmiah.png)

**Bagian atas formulir:**

| Field | Keterangan | Wajib |
|-------|------------|-------|
| Tahun | Tahun pengajuan | Ya |
| Semester | Ganjil atau Genap | Ya |
| Jenis Jurnal | Kategori jurnal publikasi | Ya |
| Nama Jurnal | Nama jurnal tempat artikel dipublikasikan | Ya |
| Volume | Nomor volume jurnal | Tidak |
| Nomor | Nomor edisi jurnal | Tidak |
| Tahun Publikasi | Tahun terbit artikel | Ya |
| Halaman | Rentang halaman artikel (contoh: 1-15) | Tidak |

**Pilihan Jenis Jurnal:**

![Dropdown Jenis Jurnal](/img/dosen/irp-form-artikel-jenis-jurnal-dropdown.png)

- Scopus Q1, Scopus Q2, Scopus Q3, Scopus Q4
- Sinta 1, Sinta 2, Sinta 3, Sinta 4
- Prosiding Internasional Scopus
- WoS / Jurnal Internasional lainnya

**Bagian bawah formulir:**

![Formulir Artikel Ilmiah Bagian Bawah](/img/dosen/irp-form-artikel-ilmiah-bawah.png)

| Field | Keterangan | Wajib |
|-------|------------|-------|
| e-ISSN | Nomor ISSN elektronik jurnal | Tidak |
| URL Artikel | Tautan menuju artikel online | Tidak |
| DOI | Digital Object Identifier | Tidak |
| Jumlah Penulis | Jumlah penulis artikel (minimal 1) | Ya |
| Biaya APC | Article Processing Charge dalam Rupiah | Ya |
| Bukti Pembayaran APC | File PDF bukti pembayaran | Ya |
| Letter of Acceptance (LoA) | File PDF LoA dari jurnal | Ya |
| Manuskrip Artikel | File PDF manuskrip artikel | Ya |

Klik **Simpan** untuk menyimpan sebagai Draft.

---

### Formulir HKI (Hak Kekayaan Intelektual)

![Formulir HKI](/img/dosen/irp-form-hki.png)

| Field | Keterangan | Wajib |
|-------|------------|-------|
| Tahun | Tahun pengajuan | Ya |
| Semester | Ganjil atau Genap | Ya |
| Jenis HKI | Kategori HKI | Ya |
| Nomor Permohonan | Nomor permohonan HKI | Ya |
| Tahun Permohonan | Tahun pengajuan permohonan | Ya |
| Judul | Judul HKI | Ya |
| Pemegang Paten | Nama pemegang paten | Tidak |
| Inventor | Nama inventor | Tidak |
| Nomor Publikasi | Nomor publikasi (khusus Paten) | Tidak |
| Tanggal Pengajuan | Tanggal pengajuan HKI | Tidak |
| Nomor Sertifikat | Nomor sertifikat HKI | Tidak |
| Biaya | Biaya reimburse dalam Rupiah | Ya |
| Bukti Pembayaran HKI | File PDF bukti pembayaran | Ya |
| Sertifikat HKI | File PDF sertifikat | Ya |

**Pilihan Jenis HKI:**

![Dropdown Jenis HKI](/img/dosen/irp-form-hki-jenis-dropdown.png)

- Paten, Paten Sederhana, Desain Industri, Desain Tata Letak Sirkuit Terpadu, Indikasi Geografis, Merek, Hak Cipta

Klik **Simpan** untuk menyimpan sebagai Draft.

---

### Formulir Buku

![Formulir Buku](/img/dosen/irp-form-buku.png)

| Field | Keterangan | Wajib |
|-------|------------|-------|
| Tahun | Tahun pengajuan | Ya |
| Semester | Ganjil atau Genap | Ya |
| Jenis Buku | Kategori buku | Ya |
| ISBN | Nomor ISBN buku | Ya |
| Judul | Judul buku | Ya |
| Penulis | Nama penulis | Ya |
| Penerbit | Nama penerbit | Ya |
| Kota Penerbit | Kota tempat penerbit berada | Ya |
| Tahun Terbit | Tahun penerbitan buku | Ya |
| Jumlah Halaman | Total halaman buku (minimal 1) | Ya |
| Biaya | Biaya reimburse dalam Rupiah | Ya |
| Cover Buku | File gambar cover (JPG/PNG) | Ya |
| Bukti Pembayaran Cetak | File PDF bukti pembayaran | Ya |

**Pilihan Jenis Buku:** Buku Referensi, Buku Ajar, Buku Monograf, Book Chapter (Bunga Rampai)

Klik **Simpan** untuk menyimpan sebagai Draft.

---

## Halaman Detail Pengajuan

Klik tombol **Lihat Detail** di halaman daftar untuk membuka detail pengajuan.

### Informasi Umum

![Detail Pengajuan IRP](/img/dosen/irp-detail-top.png)

Bagian ini menampilkan:

| Informasi | Keterangan |
|-----------|------------|
| Pengaju | Nama dosen yang mengajukan |
| Jenis Publikasi | Artikel Ilmiah / HKI / Buku |
| Tahun | Tahun pengajuan |
| Semester | Ganjil / Genap |
| Biaya | Jumlah biaya reimburse |
| Tanggal Dibuat | Waktu pengajuan pertama disimpan |
| Tanggal Diajukan | Waktu pengajuan disubmit (tampil setelah submit) |
| Tanggal Direview | Waktu admin menyelesaikan review (tampil setelah direview) |

Di bawah Informasi Umum tampil bagian **Detail** sesuai jenis publikasi (Artikel Ilmiah / HKI / Buku).

### Lembar Persetujuan Atasan

![Lembar Persetujuan](/img/dosen/irp-detail-lembar-persetujuan.png)

Bagian ini tersedia untuk pengajuan berstatus **Draft** atau **Perlu Revisi**. Langkah-langkahnya:

1. Klik **Download Template Persetujuan** — unduh template lembar persetujuan
2. Cetak, isi, dan tandatangani template secara offline
3. Scan ulang ke format PDF
4. Unggah file PDF yang sudah ditandatangani ke area upload

![File Berhasil Diupload](/img/dosen/irp-form-uploaded.png)

Setelah file berhasil diupload, muncul nama file beserta pesan "File berhasil diupload".

:::warning[Kirim Pengajuan]

Setelah lembar persetujuan diunggah, klik tombol **Kirim Pengajuan** untuk mengubah status dari **Draft** menjadi **Diajukan**. Setelah disubmit, pengajuan tidak dapat diedit kecuali admin meminta revisi.

:::

### Riwayat Status

![Riwayat Status](/img/dosen/irp-detail-riwayat-status.png)

Bagian ini menampilkan timeline semua perubahan status dari awal hingga saat ini, urutan terbaru di atas. Setiap entri menampilkan status sebelumnya → status setelahnya, nama aktor, dan waktu perubahan.

---

## Edit Pengajuan

:::info[Hanya untuk Dosen]

Fitur edit hanya tersedia pada pengajuan berstatus **Draft** atau **Perlu Revisi**.

:::

1. Buka halaman detail pengajuan yang berstatus Draft atau Perlu Revisi
2. Klik tombol **Edit Pengajuan**

![Form Edit Pengajuan](/img/dosen/irp-edit-form.png)

3. Ubah data yang diperlukan
4. Klik **Simpan** untuk menyimpan perubahan

Setelah status **Perlu Revisi**, dosen dapat mengedit dan mengirim ulang pengajuan. Status akan kembali ke **Diajukan** setelah submit ulang.

---

## Proses Review oleh Admin

:::info[Hanya untuk Admin]

Bagian ini menjelaskan alur kerja admin dalam memproses pengajuan IRP.

:::

### Aksi Admin — Status Diajukan

Buka detail pengajuan yang berstatus **Diajukan**. Admin melihat bagian **Aksi Admin** dengan tombol **Mulai Review**.

![Aksi Admin — Mulai Review](/img/dosen/irp-admin-aksi.png)

Klik **Mulai Review** → dialog konfirmasi muncul:

![Dialog Konfirmasi Mulai Review](/img/dosen/irp-admin-confirm-mulai-review.png)

Klik **Ya, Mulai Review** untuk mengubah status menjadi **Sedang Direview**.

### Aksi Admin — Status Sedang Direview

Pada status **Sedang Direview**, admin memiliki tiga pilihan aksi:

![Aksi Admin — Sedang Direview](/img/dosen/irp-admin-aksi-review.png)

**1. Setujui**

Klik **Setujui** → dialog konfirmasi muncul:

![Dialog Setujui](/img/dosen/irp-admin-dialog-setujui.png)

Klik **Ya, Setujui** → status berubah menjadi **Disetujui**.

**2. Tolak**

Klik **Tolak** → dialog penolakan muncul:

![Dialog Tolak](/img/dosen/irp-admin-dialog-tolak.png)

Isi **Alasan Penolakan** (wajib diisi), lalu klik **Tolak Pengajuan** → status berubah menjadi **Ditolak**. Dosen menerima notifikasi beserta alasan penolakan.

**3. Minta Revisi**

Klik **Minta Revisi** → dialog revisi muncul:

![Dialog Minta Revisi](/img/dosen/irp-admin-dialog-revisi.png)

Isi **Catatan Revisi** (wajib diisi), lalu klik **Kirim Permintaan Revisi** → status berubah menjadi **Perlu Revisi**. Dosen menerima notifikasi beserta catatan revisi.

### Aksi Admin — Status Disetujui

Setelah status **Disetujui**, admin memiliki tombol **Tandai Selesai** untuk menandai bahwa proses reimburse telah diselesaikan.

![Aksi Admin — Tandai Selesai](/img/dosen/irp-admin-aksi-tandai-selesai.png)

Klik **Tandai Selesai** → dialog konfirmasi muncul:

![Dialog Tandai Selesai](/img/dosen/irp-admin-dialog-selesai.png)

Klik **Ya, Tandai Selesai** → status berubah menjadi **Selesai**. Tidak ada aksi admin lebih lanjut.

---

## Ringkasan Status Pengajuan

| Status | Deskripsi | Aktor |
|--------|-----------|-------|
| **Draft** | Pengajuan tersimpan, belum dikirim ke admin | Dosen |
| **Diajukan** | Pengajuan sudah dikirim, menunggu review | Dosen |
| **Sedang Direview** | Admin sedang memeriksa pengajuan | Admin |
| **Disetujui** | Pengajuan disetujui, menunggu pencairan | Admin |
| **Ditolak** | Pengajuan ditolak oleh admin | Admin |
| **Perlu Revisi** | Admin meminta perbaikan dari dosen | Admin |
| **Selesai** | Proses reimburse selesai | Admin |
