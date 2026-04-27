---
id: dosen-management
title: Dosen Management
sidebar_label: Dosen Management
sidebar_position: 2
---

# Dosen Management

Halaman **Dosen Management** memungkinkan administrator untuk mengelola data dosen di sistem ORBIT UNSURYA, termasuk informasi profil, identitas, akademik, dan pekerjaan. Dari halaman ini, Anda juga dapat menugaskan dosen sebagai reviewer untuk proses evaluasi proposal.

## Mengakses Halaman Dosen Management

1. Login ke sistem ORBIT UNSURYA dengan akun administrator

2. Di sidebar sebelah kiri, pada bagian **Manajemen Pengguna**, klik **Manajemen Dosen**

3. Anda akan masuk ke halaman daftar dosen

![Halaman Dosen Management](/img/admin/dosen-list.png)

## Daftar Dosen

Halaman daftar menampilkan tabel dosen dengan kolom berikut:

| Kolom | Keterangan |
|-------|-----------|
| **Dosen Info** | Nama lengkap dan email dosen |
| **Academic Position** | Jabatan akademik, jabatan fungsional, dan fakultas |
| **Employment** | Jenis kepegawaian dan tipe dosen |
| **Status** | Status dosen di sistem (Aktif / Tidak Aktif / Pensiun) |
| **Education** | Tingkat pendidikan dan status sertifikasi |
| **Action** | Tombol menu untuk aksi yang dapat dilakukan |

:::info[Jumlah Dosen]

Header halaman menampilkan jumlah total dosen yang terdaftar, misalnya: "(1 lecturers)".

:::

## Pencarian dan Filter

### Pencarian

1. Gunakan **Search box** di bagian atas tabel

2. Ketikkan informasi dosen yang ingin dicari, antara lain:
   - Nama dosen
   - Nomor registrasi (No. Registrasi / NIDN)
   - NUPTK
   - NIP
   - Email

3. Hasil pencarian akan ditampilkan secara real-time di tabel

### Filter

Di bawah search box, tersedia empat filter untuk mempersempit hasil:

| Filter | Keterangan |
|--------|-----------|
| **Employment Type** | Jenis kepegawaian: ASN, PNS, TNI, NON ASN, dll |
| **Lecturer Type** | Tipe dosen: Dosen Tetap / Dosen Tidak Tetap |
| **Status** | Status: Aktif / Tidak Aktif / Pensiun |
| **Certification** | Sertifikasi: Tersertifikasi / Belum Tersertifikasi |

Anda dapat menggabungkan beberapa filter sekaligus untuk hasil yang lebih spesifik.

## Menambah Dosen Baru

1. Di halaman Dosen Management, klik tombol **Add Dosen** (kanan atas)

2. Dialog **Add New Dosen** akan terbuka

![Form Tambah Dosen](/img/admin/dosen-add-form.png)

3. Pilih cara menghubungkan akun pengguna:
   - **Link to Existing User** — pilih akun pengguna yang sudah terdaftar melalui dropdown
   - **Create New User** — centang opsi ini untuk membuat akun pengguna baru sekaligus

4. Isi informasi dosen sesuai tabel di bawah

5. Klik **Create Dosen** untuk menyimpan

### Field yang Tersedia

#### Identitas (Identity)

| Field | Wajib? | Contoh | Keterangan |
|-------|--------|--------|-----------|
| **Full Name** | Ya | Dr. Budi Santoso, M.T. | Nama lengkap dengan gelar |
| **NIDN** | Minimal satu* | 0001018501 | Nomor Induk Dosen Nasional |
| **NUPTK** | Minimal satu* | 1234567890123456 | Nomor Unik Pendidik dan Tenaga Kependidikan |
| **NIP** | Minimal satu* | 197003061988121000 | Nomor Induk Pegawai |
| **Phone** | Tidak | +62812345678 | Nomor telepon |

> *Minimal satu dari NIDN, NUPTK, atau NIP harus diisi.

#### Informasi Akademik (Academic)

| Field | Contoh | Keterangan |
|-------|--------|-----------|
| **Academic Position** | Asisten Ahli | Jabatan akademik dosen |
| **Functional Position** | III/b - Penata Muda Tk. I | Golongan kepangkatan |
| **Education Level** | S2 - Universitas Jayabaya | Tingkat pendidikan |
| **Certification Status** | Tersertifikasi | Status sertifikasi pendidik |

#### Kepegawaian (Employment)

| Field | Contoh | Keterangan |
|-------|--------|-----------|
| **Employment Type** | NON ASN | Jenis kepegawaian (ASN, PNS, TNI, NON ASN, dll) |
| **Lecturer Type** | Dosen Tetap | Tipe dosen |
| **Status** | Aktif | Status dosen saat ini |
| **Kaprodi / Dekan** | — | Centang jika dosen menjabat sebagai Kepala Prodi atau Dekan |

#### Afiliasi & Riset

| Field | Contoh | Keterangan |
|-------|--------|-----------|
| **Institution** | Universitas Dirgantara | Nama institusi |
| **Faculty** | Fakultas Teknik | Nama fakultas |
| **Study Program** | Teknik Informatika | Nama program studi |
| **Years of Experience** | 10 | Jumlah tahun pengalaman mengajar |
| **Research Areas** | Artificial Intelligence | Area keahlian penelitian (bisa lebih dari satu) |
| **Field of Study** | Teknik Informatika | Rumpun ilmu |
| **Address** | Jl. Contoh No. 1 | Alamat dosen |

## Melihat Detail Dosen

1. Klik tombol menu aksi **(⋮)** pada baris dosen yang ingin dilihat

2. Pilih **View Details** dari menu dropdown

![Menu Aksi Dosen](/img/admin/dosen-action-menu.png)

3. Dialog detail dosen akan terbuka menampilkan informasi lengkap

![Detail Profil Dosen](/img/admin/dosen-detail.png)

### Informasi yang Ditampilkan

**Contact & Identity**
- Email
- No. Registrasi (NIDN)
- NUPTK
- NIP
- Phone
- Address

**Academic Information**
- Academic Position — jabatan akademik (Asisten Ahli, Lektor, Profesor, dll)
- Functional — golongan kepangkatan (III/a, III/b, dll)
- Education — tingkat pendidikan (S1, S2, S3)
- Field — bidang keahlian / rumpun ilmu

**Employment**
- Type — jenis kepegawaian
- Lecturer — tipe dosen (Dosen Tetap / Dosen Tidak Tetap)
- Institution — nama institusi
- Faculty — nama fakultas
- Program — nama program studi

**Certification**
- Status — status sertifikasi (Tersertifikasi / Belum Tersertifikasi)

**Research & Statistics**
- Years of Experience — pengalaman mengajar dalam tahun
- Total Publications — jumlah publikasi ilmiah
- Research Projects — jumlah proyek penelitian

**Research Areas**
- Daftar area keahlian / spesialisasi penelitian dosen

**Timeline Information**
- Created — tanggal profil dibuat
- Last Updated — tanggal terakhir profil diperbarui

:::tip[Data Tidak Lengkap?]

Field yang belum diisi akan menampilkan "Not specified". Hubungi dosen bersangkutan atau lakukan edit profil untuk melengkapi data.

:::

## Mengedit Profil Dosen

1. Klik tombol menu aksi **(⋮)** pada baris dosen yang ingin diedit

2. Pilih **Edit Profile** dari menu dropdown

3. Dialog **Edit Dosen Profile** akan terbuka dengan data dosen yang sudah terisi

![Form Edit Profil Dosen](/img/admin/dosen-edit-form.png)

4. Ubah field yang diperlukan

5. Klik **Update Dosen** untuk menyimpan perubahan

:::warning[Perhatian]

Pastikan data yang diedit akurat dan sesuai dengan verifikasi institusi.

:::

## Menugaskan Dosen sebagai Reviewer

Reviewer adalah dosen yang ditunjuk untuk mengevaluasi proposal penelitian atau pengabdian masyarakat.

### Menunjuk Dosen sebagai Reviewer

1. Klik tombol menu aksi **(⋮)** pada baris dosen

2. Pilih **Assign as Reviewer** dari menu dropdown

3. Dosen akan langsung ditugaskan — badge **"Reviewer"** akan muncul di profil dosen

:::info[Reviewer]

Dosen yang ditugaskan sebagai reviewer akan memiliki akses untuk mengevaluasi proposal yang ditugaskan kepada mereka melalui halaman Assignments.

:::

### Mencabut Role Reviewer

1. Klik tombol menu aksi **(⋮)** pada dosen yang ingin dicabut perannya

2. Pilih **Remove Reviewer Role** dari menu dropdown

3. Badge **"Reviewer"** akan hilang dari profil dosen

## Menghapus Dosen

1. Klik tombol menu aksi **(⋮)** pada baris dosen yang ingin dihapus

2. Pilih **Delete Dosen** dari menu dropdown

3. Dialog konfirmasi akan muncul

4. Klik **Konfirmasi** untuk menyelesaikan penghapusan

:::warning[Perhatian]

Penghapusan dosen bersifat **permanen dan tidak dapat dibatalkan**. Pastikan Anda yakin sebelum menghapus, terutama jika dosen tersebut sudah terlibat dalam proses review proposal.

:::

## Import Data Dosen

Fitur import memungkinkan Anda menambahkan banyak dosen sekaligus menggunakan file CSV.

1. Di halaman Dosen Management, klik tombol **Import** (di samping tombol "Add Dosen")

2. Dialog **Import Dosen Data** akan terbuka

![Dialog Import Dosen](/img/admin/dosen-import-dialog.png)

3. Klik **Download** untuk mengunduh template CSV — gunakan template ini sebagai acuan format kolom

4. Siapkan file CSV Anda sesuai format template (maksimal **5 MB**)

5. Klik tombol **Pilih File CSV** dan pilih file dari komputer Anda

6. Klik **Import Data** untuk memulai proses import

7. Sistem akan menampilkan ringkasan hasil: jumlah data berhasil ditambah, diperbarui, dan error jika ada

### Format File CSV

#### Header Kolom

```
nidn, nuptk, fullName, email, nip, academicPosition, functionalPosition, educationLevel, fieldOfStudy, certificationStatus, employmentType, lecturerType, status, institution, faculty, studyProgram, phone, address, yearsOfExperience, totalPublications, totalResearchProjects
```

#### Persyaratan Data

| Kolom | Wajib? |
|-------|--------|
| **fullName** | Wajib |
| **nidn / nuptk / nip / email** | Minimal satu harus ada |
| Kolom lainnya | Opsional |

:::info[Catatan Import]

- Delimiter koma (`,`) maupun titik koma (`;`) terdeteksi otomatis
- Jika dosen dengan NIDN/NUPTK/NIP/Email yang sama sudah ada, data akan **diperbarui** (tidak duplikat)
- Email bersifat opsional dan bisa dikosongkan

:::
