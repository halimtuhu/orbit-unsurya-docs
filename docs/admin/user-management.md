---
id: user-management
title: User Management
sidebar_label: User Management
sidebar_position: 1
---

# User Management

Halaman User Management memungkinkan administrator untuk mengelola akun pengguna dalam sistem ORBIT UNSURYA. Di sini Anda dapat membuat user baru, mengedit informasi pengguna, mengelola role dan permission, serta mengontrol status akun.

## Akses Halaman User Management

1. Login ke ORBIT UNSURYA dengan akun administrator
2. Klik menu **Manajemen Pengguna** di sidebar bagian **MANAJEMEN PENGGUNA**
3. Sistem akan menampilkan halaman User Management dengan daftar semua pengguna

![User Management - Daftar Pengguna](/img/admin/user-list-main.png)

## Tampilan Daftar Pengguna

Halaman User Management menampilkan tabel yang berisi informasi pengguna dengan kolom-kolom berikut:

- **User**: Nama pengguna dan email terdaftar
- **Roles & Status**: Role pengguna (Admin, Dosen, Reviewer, Super Admin) dan status akun (Active/Inactive) serta verifikasi email (Verified/Unverified)
- **Profile Info**: Menunjukkan apakah pengguna telah melengkapi profil mereka
- **Last Activity**: Waktu aktivitas terakhir pengguna dalam sistem
- **Created**: Tanggal dan waktu akun pengguna dibuat
- **Action**: Tombol menu untuk aksi terhadap pengguna

## Mencari dan Memfilter Pengguna

### Search by Name or Email

1. Di bagian atas tabel, terdapat field pencarian **"Search users by name or email..."**
2. Ketik nama atau email pengguna yang Anda cari
3. Sistem akan secara otomatis memfilter daftar pengguna sesuai dengan keyword yang Anda masukkan

### Menggunakan Filter

Sistem menyediakan 4 filter utama untuk menyaring data pengguna:

1. **Role Filter**: Pilih berdasarkan role pengguna
   - Admin
   - Super Admin
   - Dosen
   - Reviewer

2. **Status Filter**: Pilih berdasarkan status akun
   - Active
   - Inactive

3. **Name Filter**: Urutkan berdasarkan nama pengguna
   - Ascending (A-Z)
   - Descending (Z-A)

4. **Sort By**: Urutkan berdasarkan waktu pembuatan
   - Oldest (terlama)
   - Newest (terbaru)

**Cara menggunakan:**
1. Klik dropdown filter yang ingin digunakan
2. Pilih opsi yang diinginkan
3. Tabel akan secara otomatis ter-update dengan hasil filter

## Membuat User Baru

### Langkah-langkah:

1. Klik tombol **"Add User"** di sudut kanan atas halaman

2. Dialog **"Add New User"** akan muncul. Isi form dengan data pengguna:

![Form Tambah Pengguna](/img/admin/user-create-form.png)

**Bagian Basic Information:**
- **Name** (wajib diisi): Nama lengkap pengguna
- **Email** (wajib diisi): Email pengguna (akan menjadi username login)
- **NIDN** (opsional): Nomor Identitas Dosen Nasional (jika pengguna adalah dosen)
- **Status**: Pilih status akun (Active atau Inactive)

**Bagian Password:**
- **Password** (wajib diisi): Kata sandi awal untuk pengguna
- **Confirm Password** (wajib diisi): Konfirmasi kata sandi

**Bagian User Roles** (wajib dipilih):
- Pilih satu atau lebih role untuk pengguna. Setiap role memberikan permission yang berbeda:
  - **Admin**: Akses manajemen sistem tingkat admin
  - **Super Admin**: Akses penuh ke semua fitur sistem
  - **Dosen**: Akses untuk membuat dan mengelola proposal penelitian/pengabdian
  - **Reviewer**: Akses untuk melakukan review proposal

3. Setelah semua field terisi, klik tombol **"Create User"**

4. Sistem akan membuat user baru dan menampilkan notifikasi sukses. User akan langsung teraktif di sistem.

:::info[Password Awal]

Password yang Anda set adalah password awal. User dapat mengubah password mereka melalui menu Profil setelah login pertama kali.

:::

## Mengedit Data User

### Langkah-langkah:

1. Pada tabel User Management, cari user yang ingin Anda edit

2. Klik tombol menu (tiga titik) **"..."** di kolom **Action** baris user tersebut

3. Pilih opsi **"Edit User"** dari menu yang muncul

4. Dialog **"Edit User"** akan muncul dengan form yang sudah terisi data user:

![Form Edit Pengguna](/img/admin/user-edit-form.png)

**Field yang dapat diubah:**

**Bagian Basic Information:**
- **Name**: Edit nama pengguna
- **Email**: Edit email pengguna (gunakan dengan hati-hati karena email adalah identitas unik)
- **NIDN**: Tambah atau ubah NIDN jika diperlukan
- **Status**: Ubah status akun ke Active atau Inactive

**Bagian Password:**
- **New Password** (opsional): Jika ingin mengubah password, isi field ini
- **Confirm New Password** (opsional): Konfirmasi password baru

:::warning[Catatan Password]

Jika Anda tidak ingin mengubah password, biarkan kedua field password kosong. Password pengguna akan tetap sama seperti sebelumnya.

:::

**Bagian User Roles:**
- Ubah role pengguna sesuai kebutuhan

5. Setelah selesai membuat perubahan, klik tombol **"Update User"**

6. Sistem akan menyimpan perubahan dan menampilkan notifikasi sukses

## Melihat Detail User

### Langkah-langkah:

1. Pada tabel User Management, cari user yang ingin Anda lihat detailnya

2. Klik tombol menu (tiga titik) **"..."** di kolom **Action**

3. Pilih opsi **"View Details"** dari menu yang muncul

4. Dialog **"User Details"** akan muncul menampilkan informasi lengkap user:

![Detail User](/img/admin/user-details-view.png)

**Informasi yang ditampilkan:**

- **Status**: Status akun dan role pengguna
- **Full Name**: Nama lengkap
- **Email**: Email pengguna
- **NIDN**: Nomor NIDN (jika ada)
- **Account Status**: Status akun (Active/Inactive)
- **Email Verified**: Status verifikasi email (Yes/No)
- **Last Login**: Waktu login terakhir
- **Account Information**:
  - **Created**: Tanggal dan waktu akun dibuat
  - **Last Updated**: Tanggal dan waktu perubahan terakhir

:::note

Detail user bersifat read-only. Untuk mengedit informasi user, gunakan opsi "Edit User".

:::

## Mengelola Status User

### Menonaktifkan User (Deactivate)

Untuk menonaktifkan akun pengguna tanpa menghapusnya:

1. Klik tombol menu **"..."** di kolom **Action** untuk user yang ingin dinonaktifkan

2. Pilih opsi **"Deactivate"**

3. Sistem akan menampilkan konfirmasi. Klik **"Confirm"** untuk menyelesaikan proses

**Dampak deactivate:**
- User tidak akan bisa login ke sistem
- Akun dan data user tetap tersimpan di sistem
- User dapat diaktifkan kembali kapan saja melalui Edit User

### Mengaktifkan Kembali User

Jika ingin mengaktifkan kembali user yang telah dinonaktifkan:

1. Gunakan opsi **Edit User**
2. Ubah **Status** menjadi **Active**
3. Klik **Update User**

## Mengelola Password User

### Reset Password

Untuk mereset password user (misalnya jika user lupa password):

1. Klik tombol menu **"..."** di kolom **Action**

2. Pilih opsi **"Reset Password"**

3. Sistem akan menghasilkan password baru yang dapat dibagikan kepada user

:::warning[Reset Password]

Setelah reset, user harus mengganti password baru mereka saat login pertama kali untuk keamanan.

:::

## Verifikasi Email

### Resend Verification Email

Jika user belum memverifikasi email mereka:

1. Klik tombol menu **"..."** di kolom **Action**

2. Pilih opsi **"Resend Verification"**

3. Sistem akan mengirim ulang email verifikasi ke alamat email user

**Status verifikasi email ditampilkan di kolom "Roles & Status":**
- **Verified** (hijau): Email sudah diverifikasi
- **Unverified** (merah): Email belum diverifikasi

:::info[Email Verification]

Email verification membantu memastikan bahwa user memiliki akses ke email mereka dan email tersebut valid.

:::

## Menghapus User

### Langkah-langkah:

1. Klik tombol menu **"..."** di kolom **Action** untuk user yang ingin dihapus

2. Pilih opsi **"Delete"** dari menu

3. Sistem akan menampilkan konfirmasi penghapusan. Baca pesan dengan teliti.

4. Klik **"Delete"** untuk mengonfirmasi penghapusan

:::warning[Peringatan]

Penghapusan user bersifat permanen dan tidak dapat dibatalkan. Pastikan Anda benar-benar ingin menghapus user sebelum mengonfirmasi.

:::

## Role dan Permission

ORBIT UNSURYA memiliki 4 role utama dengan permission yang berbeda:

| Role | Deskripsi |
|------|-----------|
| **Admin** | Mengelola aspek operasional proposal, assignment reviewer, dan approval |
| **Super Admin** | Akses penuh ke semua fitur sistem termasuk konfigurasi dan setting |
| **Dosen** | Membuat dan mengelola proposal penelitian/pengabdian, submit laporan |
| **Reviewer** | Melakukan review proposal sesuai dengan spesialisasi dan kapasitas |

:::tip[Multiple Roles]

Satu user dapat memiliki lebih dari satu role sekaligus. Contohnya: Seorang dosen dapat memiliki role "Dosen" sekaligus "Reviewer".

:::

## Tips dan Best Practice

:::info[Keamanan]

- Pastikan setiap user memiliki password yang kuat dan unik
- Secara berkala review daftar user dan nonaktifkan akun yang tidak digunakan
- Reset password jika user mencurigai akun mereka telah terkompromi

:::

:::tip[Efisiensi]

- Gunakan pencarian dan filter untuk menemukan user dengan cepat
- Periksa status email verification secara berkala
- Monitor last activity untuk mengidentifikasi user yang tidak aktif

:::

:::note[Dokumentasi]

Catat perubahan penting yang Anda lakukan pada akun user untuk audit trail (jejak perubahan) di masa depan.

:::
