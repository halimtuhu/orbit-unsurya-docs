---
id: login-navigasi
title: Login & Navigasi Awal
sidebar_label: Login & Navigasi Awal
sidebar_position: 2
---

# Login & Navigasi Awal

Halaman ini menjelaskan cara login ke ORBIT UNSURYA dan navigasi awal sistem setelah login berhasil.

## Cara Login

1. Buka browser dan akses halaman login di `http://localhost:3001/login` (untuk lingkungan lokal) atau URL yang diberikan oleh administrator.

2. Anda akan melihat halaman login dengan:
   - Logo Universitas Dirgantara Marsekal Suryadarma
   - Judul **ORBIT UNSURYA**
   - Form login dengan dua field

![Halaman Login](/img/getting-started/login-form.png)

3. Isi form login:
   - **Email / NIDN / NIP**: Masukkan email, NIDN, atau NIP Anda yang terdaftar di sistem
   - **Kata sandi**: Masukkan kata sandi Anda

4. Klik tombol **Masuk**

5. Jika login berhasil, sistem akan mengarahkan Anda ke halaman **Dashboard** sesuai dengan role Anda.

:::info[Lupa Kata Sandi?]

Jika lupa kata sandi, hubungi administrator sistem untuk reset password.

:::

## Halaman Setelah Login (Dashboard)

Setelah login berhasil, Anda akan masuk ke **Dashboard** yang menampilkan ringkasan informasi dan statistik sesuai dengan role Anda.

### Dashboard Admin

**Dashboard Admin** menampilkan:
- **Menunggu Review Administratif**: Jumlah proposal yang menunggu proses review administratif
- **Proposal Belum Ditugaskan**: Jumlah proposal yang belum ditugaskan ke reviewer
- **Review Sedang Berjalan**: Jumlah review yang sedang dalam proses dengan on-time rate
- **Antrian Pendanaan**: Jumlah dana yang siap untuk didistribusikan
- **Status Review**: Overview status review dengan kategori Assigned, In Progress, Completed, dan Overdue

![Dashboard Admin](/img/getting-started/dashboard-admin.png)

### Dashboard Dosen

**Dashboard Dosen** menampilkan:
- **Proposal Saya**: Jumlah proposal yang telah dibuat
- **Proyek Aktif**: Jumlah penelitian dan pengabdian yang sedang berjalan
- **Menunggu Approval Saya**: Jumlah proposal yang menunggu persetujuan dari Anda
- **Perlu Tindakan**: Draft dan laporan yang memerlukan tindakan
- **Statistik Proposal**: Success rate dan jumlah proposal per kategori (Penelitian/Pengabdian)
- **Status Proposal**: Ringkasan status proposal (Draft, Under Review, Approved, Funded, Completed)

![Dashboard Dosen](/img/getting-started/dashboard-dosen.png)

### Dashboard Reviewer

**Dashboard Reviewer** menampilkan:
- **Reviewer Profile**: Profil reviewer dengan informasi:
  - Status aktivitas (Active/Inactive)
  - Total reviews yang telah dilakukan
  - Current load (jumlah review yang sedang dikerjakan)
  - Capacity (tingkat kapasitas reviewer)
  - Spesialisasi yang dimiliki
  - Max concurrent reviews (jumlah maksimal review yang bisa dikerjakan bersamaan)
  - Available for new reviews (ketersediaan untuk menerima review baru)

- **Statistik Review**: Metrik kinerja reviewer meliputi:
  - Rata-rata score dari proposal yang direview
  - Average completion time (waktu rata-rata penyelesaian review)
  - On-time rate (persentase review yang selesai tepat waktu)
  - Tahun (untuk filtering data historis)

- **Review Tasks**: Ringkasan tugas review dengan status:
  - Review Menunggu (pending reviews)
  - Review Selesai (completed reviews)
  - Beban Kerja Saat Ini (current workload dengan kapasitas)
  - Spesialisasi Match (persentase matching antara spesialisasi reviewer dengan proposal yang direview)

## Navigasi Sidebar

Sidebar di sebelah kiri menampilkan menu navigasi utama. Menu yang tersedia berbeda-beda tergantung pada role Anda.

### Navigasi Admin

**RINGKASAN**
- **Dashboard**: Halaman dashboard admin

**MANAJEMEN PENGGUNA**
- **Manajemen Pengguna**: Kelola user, edit profil, assign role
- **Manajemen Dosen**: Kelola data dosen/faculty
- **Manajemen Reviewer**: Kelola profil dan kapasitas reviewer

**PENGATURAN PROGRAM**
- **Manajemen Program**: Atur program penelitian dan pengabdian
- **Manajemen RAB**: Kelola template dan komponen RAB (Rencana Anggaran Biaya)
- **Manajemen Topik Penelitian**: Atur topik penelitian dalam sistem klasifikasi

**PROSES PROPOSAL** (akan muncul setelah diklik)
- **Manajemen Approval**: Proses approval proposal
- **Manajemen Assignment**: Tugaskan proposal ke reviewer
- **Manajemen Review**: Pantau progress review
- **Manajemen Funding**: Kelola shortlisting dan funding allocation

**TUGAS & AKTIVITAS**
- **Monitoring Activity**: Pantau aktivitas proposal yang sedang berlangsung
- **Progress Report Recap**: Recap laporan progress dari dosen
- **Final Report Recap**: Recap laporan final dari dosen
- **Proposal Revision Recap**: Recap revisi proposal dari dosen

![Sidebar Admin](/img/getting-started/sidebar-admin.png)

### Navigasi Dosen

**RINGKASAN**
- **Dashboard**: Halaman dashboard dosen

**PENGATURAN PROGRAM**
- **Bank Template**: Kelola template proposal yang tersimpan

**PROSES PROPOSAL**
- **Proposal Didanai**: Lihat proposal yang telah mendapatkan dana
- **Proposal**: Kelola semua proposal Anda
- **Proposal yang Ditugaskan**: Lihat proposal yang telah ditugaskan ke reviewer

**TUGAS & AKTIVITAS**
- **Proposal**: Daftar proposal dengan status dan aksi yang dibutuhkan
- **Proposal yang Ditugaskan**: Lihat proposal yang sedang dalam proses review
- **Tugas Assignment**: Lihat pengumuman dan tugas dari sistem

![Sidebar Dosen](/img/getting-started/sidebar-dosen.png)

### Navigasi Reviewer

**RINGKASAN**
- **Dashboard**: Halaman dashboard reviewer

**PENGATURAN PROGRAM**
- **Bank Template**: Kelola template yang tersimpan

**TUGAS & AKTIVITAS**
- **Tugas Assignment**: Lihat proposal yang ditugaskan untuk direview
- **Tugas Review**: Lihat daftar review yang harus dikerjakan
- **Tugas Monev** (jika ada): Tugas monitoring dan evaluasi

## Cara Logout

1. Klik tombol **Menu pengguna** di pojok kanan atas halaman (menampilkan inisial nama Anda, misalnya **AA**, **DD**, **RR**)

2. Akan muncul dropdown menu dengan opsi:
   - **Profil**: Lihat dan edit profil Anda
   - **Pengaturan**: Atur preferensi sistem
   - **Keluar**: Logout dari sistem

![Dropdown Logout](/img/getting-started/logout-dropdown.png)

3. Klik **Keluar** untuk logout

4. Sistem akan mengarahkan Anda kembali ke halaman login dan sesi Anda akan berakhir

:::tip[Keamanan]

Selalu logout sebelum menutup browser, terutama jika menggunakan komputer bersama atau publik.

:::
