---
id: monev-assignments
title: Monev Assignments
sidebar_label: Monev Assignments
sidebar_position: 10
---

# Monev Assignments

Halaman ini menjelaskan cara admin mengelola jadwal monitoring dan evaluasi (monev) untuk proposal yang sedang berjalan, termasuk membuat jadwal, menugaskan reviewer monev, mengelola dokumen penilaian, dan memantau status jadwal.

## Cara Mengakses

Pengelolaan monev dilakukan melalui halaman **Proposal Didanai**, lalu masuk ke detail proposal yang dituju.

1. Masuk ke **Dashboard Admin**, lalu klik **Proposal Didanai** di menu sidebar bagian **Proses Proposal**

2. Halaman akan menampilkan daftar semua proposal yang telah berstatus didanai

![Halaman Proposal Didanai](/img/admin/monev-funded-proposals-list.png)

Kolom yang ditampilkan pada tabel:

| Kolom | Keterangan |
|---|---|
| No. | Nomor urut |
| Judul | Judul proposal |
| Ketua Peneliti | Nama ketua peneliti |
| Program / Batch | Nama program dan batch |
| Dana (IDR) | Total dana yang diberikan |
| Aksi | Tombol **Detail** untuk masuk ke halaman detail proposal |

3. Klik tombol **Detail** pada proposal yang ingin dikelola monevnya

---

## Halaman Detail Proposal Didanai

Halaman detail menampilkan informasi ringkas proposal beserta **Menu Aktivitas** yang berisi akses ke berbagai fitur pengelolaan proposal yang sedang berjalan.

![Detail Proposal Didanai](/img/admin/monev-funded-proposal-detail.png)

Klik card **Monitoring & Evaluasi** di Menu Aktivitas untuk masuk ke halaman pengelolaan monev.

---

## Halaman Monitoring & Evaluasi

Halaman **Monitoring & Evaluasi** adalah tempat admin mengelola semua jadwal monev untuk satu proposal.

![Halaman Monitoring & Evaluasi](/img/admin/monev-main-with-schedules.png)

Pada halaman ini terdapat:
- Nama proposal yang sedang dikelola
- Tombol **Buat Jadwal** untuk membuat jadwal monev baru
- Daftar kartu jadwal monev yang sudah dibuat

### Status Jadwal

Setiap kartu jadwal menampilkan badge status:

| Status | Keterangan |
|---|---|
| **Terjadwal** | Jadwal aktif dan siap dilaksanakan |
| **Dibatalkan** | Jadwal telah dibatalkan; tidak ada tombol aksi yang tersedia |

Kartu jadwal berstatus **Terjadwal** menampilkan:
- Badge reviewer yang ditugaskan: **R1: [nama]** dan **R2: [nama]** (muncul setelah reviewer ditugaskan)
- Badge **Penilaian Terunggah** (muncul setelah dokumen penilaian diunggah)
- Tanggal dan waktu pelaksanaan
- Lokasi monev
- Catatan jadwal

---

## Membuat Jadwal Monev

1. Klik tombol **Buat Jadwal** di bagian atas halaman Monitoring & Evaluasi

2. Dialog **Buat Jadwal Monev** akan muncul

![Dialog Buat Jadwal Monev](/img/admin/monev-buat-jadwal-dialog.png)

3. Isi form berikut:

| Field | Keterangan |
|---|---|
| **Tanggal & Waktu** | Tanggal dan waktu pelaksanaan monev *(wajib diisi)* |
| **Lokasi** | Tempat pelaksanaan monev *(opsional)* |
| **Catatan** | Informasi tambahan tentang jadwal *(opsional)* |

4. Klik **Simpan** untuk menyimpan jadwal

Setelah jadwal disimpan, kartu jadwal baru akan muncul di halaman dengan status **Terjadwal** dan tombol **Tugaskan Reviewer** aktif.

---

## Menugaskan Reviewer ke Jadwal

Setelah jadwal dibuat, admin perlu menugaskan reviewer untuk melakukan penilaian monev.

![Kartu Jadwal Tanpa Reviewer](/img/admin/monev-schedule-without-reviewer.png)

1. Pada kartu jadwal yang belum memiliki reviewer, klik tombol **Tugaskan Reviewer**

2. Dialog **Tugaskan Reviewer Monev** akan muncul

![Dialog Tugaskan Reviewer Monev](/img/admin/monev-tugaskan-reviewer-dialog.png)

3. Pilih reviewer untuk posisi **Reviewer 1** dan **Reviewer 2** dari daftar yang tersedia

   Setiap pilihan reviewer menampilkan:
   - Nama reviewer
   - Email
   - Jumlah tugas aktif dari total maksimum (contoh: *Tugas aktif: 0/5*)
   - Bidang keahlian (jika tersedia)

4. Klik **Tugaskan** untuk menyimpan penugasan

:::info[Satu Jadwal Memerlukan Dua Reviewer]

Setiap jadwal monev membutuhkan Reviewer 1 dan Reviewer 2. Tombol **Tugaskan** baru aktif setelah kedua posisi dipilih.

:::

:::info[Tombol Tugaskan Reviewer]

Tombol **Tugaskan Reviewer** hanya muncul jika jadwal belum memiliki reviewer. Jika reviewer sudah ditugaskan, tombol yang tampil adalah **Hapus Reviewer**.

:::

---

## Mengedit Jadwal

1. Pada kartu jadwal yang ingin diubah, klik tombol **Edit**

2. Dialog **Edit Jadwal Monev** akan muncul dengan data yang sudah terisi sebelumnya

![Dialog Edit Jadwal Monev](/img/admin/monev-edit-jadwal-dialog.png)

3. Ubah data yang diperlukan (Tanggal & Waktu, Lokasi, atau Catatan)

4. Klik **Perbarui** untuk menyimpan perubahan

---

## Mengunggah Dokumen Penilaian

Dokumen penilaian adalah berkas hasil evaluasi monev yang dapat diunggah admin atau reviewer.

1. Pada kartu jadwal yang ingin ditambahkan dokumennya, klik tombol **Upload Dokumen Penilaian**

2. Dialog **Upload Dokumen Penilaian** akan muncul

![Dialog Upload Dokumen Penilaian](/img/admin/monev-upload-dokumen-dialog.png)

Dialog menampilkan:
- **Proposal**: nama proposal terkait
- **Dokumen saat ini**: nama file yang sudah terunggah (jika ada)
- **Ganti Dokumen Penilaian**: area untuk memilih file baru (format PDF)

3. Pilih file dokumen penilaian dalam format PDF

4. Klik **Simpan Dokumen Penilaian** untuk mengunggah

Setelah berhasil, badge **Penilaian Terunggah** akan muncul pada kartu jadwal.

---

## Mengunduh Dokumen Penilaian

Klik tombol **Unduh Dokumen Penilaian** pada kartu jadwal yang sudah memiliki dokumen penilaian. File PDF akan langsung diunduh ke perangkat Anda.

---

## Menghapus Reviewer dari Jadwal

Untuk mengganti atau menghapus reviewer yang sudah ditugaskan:

1. Pada kartu jadwal, klik tombol **Hapus Reviewer**

2. Dialog konfirmasi akan muncul

![Dialog Konfirmasi Hapus Reviewer](/img/admin/monev-hapus-reviewer-dialog.png)

3. Klik **Hapus Reviewer** untuk mengkonfirmasi

Setelah dihapus, badge reviewer akan hilang dari kartu jadwal dan tombol **Tugaskan Reviewer** akan muncul kembali.

---

## Membatalkan Jadwal

:::warning[Perhatian]

Membatalkan jadwal bersifat permanen. Jadwal yang dibatalkan tidak dapat diaktifkan kembali dan tidak memiliki tombol aksi apapun.

:::

1. Pada kartu jadwal yang ingin dibatalkan, klik tombol **Batalkan**

2. Dialog konfirmasi akan muncul

![Dialog Konfirmasi Batalkan Jadwal](/img/admin/monev-batalkan-jadwal-dialog.png)

3. Klik **Batalkan Jadwal** untuk mengkonfirmasi

Setelah dibatalkan, kartu jadwal akan berubah status menjadi **Dibatalkan** dan semua tombol aksi tersembunyi.

---

## Tampilan Reviewer: Tugas Monev

Reviewer yang ditugaskan pada jadwal monev dapat melihat daftar tugas monev mereka melalui sidebar **Tugas & Aktivitas → Tugas Monev**.

![Daftar Tugas Monev Reviewer](/img/admin/monev-reviewer-list.png)

Halaman **Tugas Monitoring & Evaluasi** menampilkan kartu untuk setiap jadwal monev yang ditugaskan, beserta:
- Badge status jadwal
- Nama proposal
- Tanggal dan lokasi pelaksanaan
- Tombol **Unduh Dokumen Penilaian** (jika dokumen tersedia)
- Link **Lihat Detail** untuk melihat detail lengkap

### Detail Jadwal Monev (Tampilan Reviewer)

Klik **Lihat Detail** untuk membuka halaman detail yang menampilkan informasi lengkap:

![Detail Jadwal Monev Reviewer](/img/admin/monev-reviewer-detail.png)

- **Informasi Jadwal**: tanggal, lokasi, dan catatan jadwal
- **Reviewer**: nama Reviewer 1 dan Reviewer 2 yang ditugaskan
- **Dokumen Penilaian**: nama file beserta tombol unduh
