---
id: role-pengguna
title: Memahami Role Pengguna
sidebar_label: Memahami Role Pengguna
sidebar_position: 3
---

# Memahami Role Pengguna

ORBIT UNSURYA dirancang untuk mendukung berbagai peran pengguna yang bekerja sama mengelola siklus lengkap proposal penelitian dan pengabdian. Setiap role memiliki akses, tanggung jawab, dan dashboard yang disesuaikan dengan fungsinya dalam sistem.

:::info[Konsep Role]

Role adalah penugasan tanggung jawab yang menentukan halaman mana saja yang dapat diakses, fungsi apa yang bisa dilakukan, dan data apa yang tampil. Setiap pengguna memiliki satu atau lebih role di dalam sistem.

:::

## Ringkasan Role Pengguna

| Role | Siapa | Tugas Utama |
|------|-------|-----------|
| **Dosen** | Peneliti dan pengabdi | Membuat, memantau, dan melaporkan proposal penelitian/PKM |
| **Reviewer** | Evaluator proposal | Menilai dan memberikan rekomendasi pada proposal yang ditugaskan |
| **Admin** | Pengelola sistem | Mengelola pengguna, program, pendanaan, dan monitoring keseluruhan |
| **Super Admin** | Administrator tingkat tertinggi | Mengelola akun admin dan memiliki akses penuh ke seluruh sistem |

---

## 1. Dosen

### Siapa yang Menjadi Dosen?

Dosen adalah anggota fakultas universitas yang aktif melakukan penelitian atau pengabdian kepada masyarakat. Mereka menggunakan ORBIT untuk mengajukan proposal, melacak status, dan melaporkan hasil kegiatan.

### Apa yang Bisa Dilakukan?

- **Membuat Proposal** — Draft proposal penelitian atau pengabdian baru
- **Mengelola Proposal** — Melihat daftar proposal pribadi, status, dan riwayat
- **Menunggu Approval** — Melacak proposal yang menunggu persetujuan dari approver
- **Menindaklanjuti Revisi** — Merespons feedback reviewer dan melakukan perbaikan
- **Melaporkan Kemajuan** — Mengisi laporan kemajuan dan laporan akhir untuk proposal yang didanai
- **Melihat Template** — Mengakses bank template untuk memandu pembuatan proposal

### Menu Utama Dosen

```
RINGKASAN
├─ Dashboard — ringkasan pengajuan dan statistik

PENGATURAN PROGRAM
├─ Bank Template — template proposal dari universitas

PROSES PROPOSAL
├─ Proposal Didanai — daftar proposal yang telah mendapat pendanaan

TUGAS & AKTIVITAS
├─ Proposal — kelola semua proposal pribadi
├─ Proposal yang Ditugaskan — proposal kolaboratif yang ditugaskan kepada Anda
├─ Tugas Assignment — notifikasi assignment untuk review
├─ Tugas Approval — persetujuan yang menunggu dari Anda (jika Anda approver)
├─ Insentif Reimburse Publikasi (IRP) — kelola insentif publikasi
└─ Pelaporan Penelitian dan PKM Mandiri — laporan kegiatan mandiri
```

### Tampilan Sidebar Dosen

![Sidebar Dosen](/img/getting-started/sidebar-dosen.png)

### Dashboard Dosen

![Dashboard Dosen](/img/getting-started/dashboard-dosen.png)

Dashboard Dosen menampilkan ringkasan personal:
- **Proposal Saya** — jumlah proposal sebagai ketua
- **Proyek Aktif** — perincian penelitian dan pengabdian yang sedang berjalan
- **Menunggu Approval Saya** — proposal atau laporan yang menunggu persetujuan dari Anda (jika ada approver role)
- **Perlu Tindakan** — draft belum dikirim atau laporan belum diserahkan
- **Statistik Proposal** — success rate, jumlah penelitian/pengabdian, dan status proposal di berbagai tahap

---

## 2. Reviewer

### Siapa yang Menjadi Reviewer?

Reviewer adalah pakar di bidang tertentu yang ditugaskan untuk mengevaluasi kualitas proposal penelitian dan pengabdian. Mereka memberikan skor, rekomendasi, dan feedback konstruktif kepada peneliti.

### Apa yang Bisa Dilakukan?

- **Menerima Assignment** — Notifikasi proposal yang ditugaskan untuk direview
- **Mengevaluasi Proposal** — Membaca, menganalisis, dan memberikan skor serta feedback
- **Melihat Profil Diri** — Melihat spesialisasi, kapasitas review, dan statistik kinerja
- **Melacak Beban Kerja** — Melihat berapa banyak proposal dalam berbagai tahap review
- **Mengakses Bank Template** — Referensi untuk memahami standar proposal

### Menu Utama Reviewer

```
RINGKASAN
├─ Dashboard — profil dan statistik review Anda

PENGATURAN PROGRAM
├─ Bank Template — panduan penyusunan proposal

TUGAS & AKTIVITAS
├─ Tugas Assignment — proposal yang ditugaskan untuk Anda review
├─ Tugas Review — status review proposal yang sedang berlangsung
└─ Tugas Money — tracking biaya dan komponen anggaran
```

### Tampilan Sidebar Reviewer

![Sidebar Reviewer](/img/getting-started/sidebar-reviewer.png)

### Dashboard Reviewer

![Dashboard Reviewer](/img/getting-started/dashboard-reviewer.png)

Dashboard Reviewer menampilkan ringkasan pekerjaan review:
- **Reviewer Profile** — status aktif, jumlah total reviews, beban kerja saat ini
- **Your Specializations** — bidang keahlian yang Anda kuasai
- **Max Concurrent Reviews** — kapasitas review yang dapat ditangani secara bersamaan
- **Review Menunggu** — proposal yang baru ditugaskan dan belum dimulai
- **Review Selesai** — proposal yang sudah selesai direview
- **Statistik Review** — rata-rata skor, waktu penyelesaian, on-time rate, dan perincian by kategori (Penelitian/Pengabdian)
- **Detail Beban Kerja** — breakdown status review (Pending, In Progress, Completed)
- **Kesesuaian Spesialisasi** — bidang spesialisasi yang dimiliki

---

## 3. Admin

### Siapa yang Menjadi Admin?

Admin adalah staf administrasi universitas yang mengelola sistem ORBIT secara operasional. Mereka mengatur pengguna, program pendanaan, proses review, dan monitoring keseluruhan sistem.

### Apa yang Bisa Dilakukan?

- **Mengelola Pengguna** — Membuat, mengubah, dan menonaktifkan akun dosen, reviewer, dan approver
- **Mengelola Dosen** — Lihat profil dosen, status, dan riwayat proposal
- **Mengelola Reviewer** — Kelola reviewer, spesialisasi, kapasitas, dan assignment proposal
- **Mengatur Program** — Buat dan kelola program penelitian/pengabdian beserta RAB (Rencana Anggaran Biaya)
- **Manajemen Pendanaan** — Kelola alokasi dana, distribusi anggaran, dan status pendanaan
- **Monitoring Aktivitas** — Pantau progress review, pengajuan, dan pelaporan di seluruh sistem
- **Recap Laporan** — Lihat ringkasan laporan kemajuan dan laporan akhir dari semua peneliti
- **Lihat Semua Proposal** — Akses lengkap ke semua proposal sistem untuk oversight

### Menu Utama Admin

```
RINGKASAN
├─ Dashboard — overview sistem dan operational metrics

MANAJEMEN PENGGUNA
├─ Manajemen Pengguna — kelola akun semua role
├─ Manajemen Dosen — profil dan data dosen
└─ Manajemen Reviewer — profil, spesialisasi, dan assignment reviewer

PENGATURAN PROGRAM
├─ Manajemen Program — buat dan atur program penelitian/PKM
├─ Manajemen RAB — kelola anggaran per kategori proposal
├─ Manajemen Topik Penelitian — kelola klasifikasi topik
├─ Periode Pelaporan — atur jadwal pelaporan
└─ Bank Template — kelola template proposal universitas

PROSES PROPOSAL
├─ Manajemen Pendanaan — alokasi dana dan status pendanaan
├─ Proposal Didanai — lihat semua proposal yang didanai
├─ Monitoring Aktivitas — pantau progress review dan submission
├─ Rekap Laporan Kemajuan — ringkasan laporan kemajuan semua proposal
├─ Rekap Laporan Akhir — ringkasan laporan akhir semua proposal
├─ Rekap Revisi Proposal — tracking revisi dan perbaikan proposal
└─ Semua Proposal — akses lengkap ke seluruh database proposal

TUGAS & AKTIVITAS
├─ Insentif Reimburse Publikasi (IRP) — kelola insentif publikasi peneliti
└─ Pelaporan Penelitian dan PKM Mandiri — kelola laporan kegiatan mandiri
```

### Tampilan Sidebar Admin

![Sidebar Admin](/img/getting-started/sidebar-admin.png)

### Dashboard Admin

![Dashboard Admin](/img/getting-started/dashboard-admin.png)

Dashboard Admin menampilkan metrics operasional sistem:
- **Menunggu Review Administratif** — proposal yang perlu pemeriksaan administratif sebelum masuk review
- **Proposal Belum Ditugaskan** — proposal yang siap direview tetapi belum diberi reviewer
- **Review Sedang Berjalan** — jumlah proposal dalam proses review aktif dan on-time rate
- **Antrian Pendanaan** — proposal yang menunggu keputusan pendanaan dan total dana diminta
- **Status Review** — breakdown status (Assigned, In Progress, Completed, Overdue) dari semua assignment review

---

## 4. Super Admin

### Siapa yang Menjadi Super Admin?

Super Admin adalah administrator tingkat tertinggi dalam sistem ORBIT. Mereka memiliki semua akses yang dimiliki Admin, ditambah kemampuan mengelola akun Admin lainnya. Biasanya peran ini dipegang oleh pengelola sistem pusat universitas.

### Apa yang Bisa Dilakukan?

- Semua yang bisa dilakukan Admin
- **Mengelola Admin** — Membuat, mengubah, dan menonaktifkan akun Admin kampus

### Menu Utama Super Admin

```
RINGKASAN
├─ Dashboard — overview sistem dan statistik pengguna

MANAJEMEN PENGGUNA
├─ Manajemen Pengguna — kelola akun semua role
├─ Manajemen Admin — kelola akun Admin (eksklusif Super Admin)
├─ Manajemen Dosen — profil dan data dosen
└─ Manajemen Reviewer — profil, spesialisasi, dan assignment reviewer

PENGATURAN PROGRAM
├─ (sama dengan Admin)

PROSES PROPOSAL
├─ (sama dengan Admin)

TUGAS & AKTIVITAS
├─ (sama dengan Admin)
```

:::info[Perbedaan Super Admin vs Admin]

Satu-satunya perbedaan menu antara Super Admin dan Admin adalah menu **Manajemen Admin** yang hanya muncul untuk Super Admin. Menu ini memungkinkan Super Admin membuat dan mengelola akun Admin baru.

:::

### Tampilan Sidebar Super Admin

![Sidebar Super Admin](/img/getting-started/sidebar-superadmin.png)

### Dashboard Super Admin

![Dashboard Super Admin](/img/getting-started/dashboard-superadmin.png)

Dashboard Super Admin menampilkan monitoring sistem secara keseluruhan dengan statistik pengguna UNSURYA.

---

## Fitur Umum Semua Role

Meskipun menu berbeda, semua role memiliki akses ke:

1. **Dashboard Pribadi** — ringkasan pekerjaan dan statistik personal
2. **Profil Pengguna** — lihat dan kelola informasi akun pribadi
3. **Bank Template** — akses panduan penyusunan proposal
4. **Notifikasi** — pemberitahuan real-time untuk event penting
5. **Bantuan** — akses dokumentasi dan panduan penggunaan

---

## Bagaimana Jika Saya Punya Lebih dari Satu Role?

ORBIT mendukung pengguna dengan lebih dari satu role. Misalnya, seorang dosen aktif yang juga bertugas sebagai reviewer dapat memiliki role Dosen sekaligus Reviewer dalam satu akun. Ketika login:

- **Sidebar menampilkan semua menu** dari semua role yang Anda miliki secara bersamaan
- **Dashboard menyesuaikan** sesuai kombinasi role yang aktif
- Tidak perlu logout dan login ulang untuk berpindah antar role

### Cara Admin Menetapkan Multiple Role

Saat membuat atau mengedit akun pengguna, Admin dapat memilih satu atau lebih role sekaligus dengan mencentang kotak role yang diinginkan.

![Pemilihan Multi-Role](/img/getting-started/user-multirole-selection.png)

Role yang tersedia untuk dipilih:
- **Admin** — akses manajemen sistem
- **Super Admin** — akses tertinggi termasuk manajemen admin
- **Dosen** — akses pengajuan dan pelaporan proposal
- **Reviewer** — akses evaluasi proposal

### Apa yang Terlihat di Profil Saya?

Halaman Profil menampilkan semua role yang dimiliki akun Anda di bagian **Roles**.

:::tip[Saran]

Jika Anda memiliki multiple role, pastikan untuk memisahkan tugas berdasarkan role Anda. Sebagai Dosen, fokus pada proposal pribadi; sebagai Reviewer, fokus pada evaluasi proposal yang ditugaskan.

:::
