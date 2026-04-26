---
id: dosen-management
title: Dosen Management
sidebar_label: Dosen Management
sidebar_position: 2
---

# Dosen Management

Halaman **Dosen Management** memungkinkan administrator untuk mengelola data dosen (faculty) di sistem ORBIT UNSURYA, termasuk informasi profil, identitas, akademik, dan pekerjaan. Dari halaman ini, Anda juga dapat menugaskan dosen sebagai reviewer untuk proses evaluasi proposal.

## Mengakses Halaman Dosen Management

1. Login ke sistem ORBIT UNSURYA dengan akun administrator

2. Di sidebar sebelah kiri, pada bagian **MANAJEMEN PENGGUNA**, klik **Manajemen Dosen**

3. Anda akan masuk ke halaman daftar dosen

![Halaman Dosen Management](/img/admin/dosen-list.png)

## Daftar Dosen

Halaman daftar menampilkan tabel dosen dengan informasi berikut:

- **Dosen Info**: Nama lengkap dosen dan email
- **Academic Position**: Posisi akademik, tingkatan fungsional, dan fakultas
- **Employment**: Jenis pekerjaan dan status kepegawaian
- **Status**: Status dosen di sistem (Aktif/Tidak Aktif)
- **Education**: Tingkat pendidikan dan status sertifikasi
- **Action**: Tombol menu untuk aksi yang dapat dilakukan

:::info[Informasi Daftar]

Halaman daftar menampilkan jumlah total dosen yang terdaftar di sistem. Misalnya: "(1 lecturers)" menunjukkan ada 1 dosen terdaftar.

:::

## Pencarian dan Filter

### Pencarian

1. Gunakan **Search box** di bagian atas halaman

2. Ketikkan informasi dosen yang ingin dicari berdasarkan:
   - Nama dosen
   - Nomor registrasi (No. Registrasi)
   - NUPTK (Nomor Unik Pendidik dan Tenaga Kependidikan)
   - NIP (Nomor Induk Pegawai)
   - Email

3. Hasil pencarian akan ditampilkan secara real-time di tabel

### Filter

Di bawah search box, tersedia filter untuk mempersempit hasil:

1. **Employment Type** (Jenis Kepegawaian): 
   - Dosen Tetap
   - Dosen Tidak Tetap
   - Opsi lainnya sesuai konfigurasi

2. **Lecturer Type** (Tipe Dosen): 
   - Berbagai kategori dosen berdasarkan klasifikasi institusi

3. **Status**: 
   - Aktif (dosen aktif di sistem)
   - Tidak Aktif (dosen tidak aktif)

4. **Certification** (Sertifikasi): 
   - Tersertifikasi
   - Belum Tersertifikasi

Anda dapat menggabungkan beberapa filter sekaligus untuk hasil yang lebih spesifik.

## Melihat Detail Dosen

1. Klik tombol **menu aksi** (⋮) pada baris dosen yang ingin dilihat detailnya

2. Pilih **View Details** dari menu dropdown

3. Dialog detail dosen akan terbuka menampilkan informasi lengkap:

![Detail Profil Dosen](/img/admin/dosen-detail.png)

### Informasi yang Ditampilkan

**Contact & Identity**
- Email
- Nomor Registrasi
- NUPTK (Nomor Unik Pendidik dan Tenaga Kependidikan)
- NIP (Nomor Induk Pegawai)
- Nomor Telepon
- Alamat

**Academic Information**
- Position (Posisi Akademik): Misalnya Asisten Ahli, Lektor, Profesor
- Functional (Tingkatan Fungsional): Misalnya III/a - Penata Muda
- Education (Tingkat Pendidikan): S1, S2, S3
- Field (Bidang Keahlian): Rumpun ilmu terkait

**Employment**
- Type (Jenis Kepegawaian): Dosen Tetap, Dosen Tidak Tetap, dll
- Lecturer (Status Dosen)
- Institution (Institusi/Universitas)
- Faculty (Fakultas)
- Program (Program Studi)

**Certification**
- Status: Status sertifikasi (Tersertifikasi / Belum Tersertifikasi)

**Research & Statistics**
- Years of Experience (Pengalaman dalam tahun)
- Total Publications (Total publikasi ilmiah)
- Research Projects (Jumlah proyek penelitian)

**Research Areas**
- Daftar area keahlian/spesialisasi penelitian dosen

**Timeline Information**
- Created (Tanggal profil dibuat)
- Last Updated (Tanggal update terakhir)

:::tip[Informasi Tidak Lengkap?]

Beberapa field mungkin menampilkan "Not specified" jika data belum diisi. Hubungi dosen atau administrator untuk melengkapi data.

:::

## Mengedit Profil Dosen

1. Klik tombol **menu aksi** (⋮) pada baris dosen yang ingin diedit

2. Pilih **Edit Profile** dari menu dropdown

3. Form edit akan terbuka memungkinkan Anda mengubah data dosen

4. Ubah informasi yang diperlukan

5. Klik tombol **Simpan** untuk menyimpan perubahan

:::warning[Perhatian]

Pastikan data yang diedit akurat dan sesuai dengan verifikasi institusi.

:::

## Menugaskan Dosen sebagai Reviewer

1. Klik tombol **menu aksi** (⋮) pada baris dosen yang ingin ditugaskan sebagai reviewer

2. Pilih **Assign as Reviewer** dari menu dropdown

3. Dialog konfigurasi reviewer akan terbuka

4. Atur pengaturan reviewer sesuai kebutuhan (kapasitas, spesialisasi, dll)

5. Klik **Simpan** untuk menyelesaikan penugasan

:::info[Reviewer]

Dosen yang ditugaskan sebagai reviewer akan memiliki akses khusus untuk mengevaluasi proposal yang ditugaskan kepada mereka.

:::

## Menghapus Dosen

1. Klik tombol **menu aksi** (⋮) pada baris dosen yang ingin dihapus

2. Pilih **Delete Dosen** dari menu dropdown

3. Konfirmasi penghapusan akan muncul

4. Klik **Konfirmasi** untuk menyelesaikan penghapusan

:::warning[Perhatian]

Penghapusan dosen adalah tindakan yang tidak dapat dibatalkan. Pastikan Anda yakin sebelum menghapus, terutama jika dosen tersebut sudah terlibat dalam proses review proposal.

:::

## Import Dosen (Bulk Upload)

1. Klik tombol **Import** di bagian atas halaman

2. Pilih file CSV atau Excel yang berisi data dosen

3. Petunjuk format file akan ditampilkan (pastikan sesuai dengan template yang disediakan)

4. Klik **Upload** untuk memulai proses import

5. Sistem akan memvalidasi data dan menampilkan hasil (berhasil/gagal untuk setiap baris)

6. Dosen yang berhasil diimport akan ditambahkan ke daftar

:::tip[Template Import]

Gunakan template yang disediakan oleh sistem untuk memastikan semua field dipetakan dengan benar.

:::

## Menambah Dosen Baru

1. Klik tombol **Add Dosen** di bagian atas halaman

2. Form tambah dosen akan terbuka

3. Isi semua informasi yang diperlukan:
   - Data kontak dan identitas
   - Informasi akademik
   - Data kepegawaian
   - Informasi sertifikasi

4. Klik **Simpan** untuk menambahkan dosen baru

:::info[Email Unik]

Email harus unik di sistem. Sistem akan menolak jika email sudah terdaftar.

:::
