---
id: reviewer-management
title: Manajemen Reviewer
sidebar_label: Manajemen Reviewer
sidebar_position: 3
---

# Manajemen Reviewer

Halaman **Manajemen Reviewer** memungkinkan administrator untuk mengelola profil reviewer, kapasitas kerja, spesialisasi, dan status aktivitas. Dari halaman ini, admin dapat menambah reviewer baru, mengedit profil, mengaktifkan/menonaktifkan reviewer, dan menghapus reviewer dari sistem.

## Akses Halaman

1. Login sebagai **Admin**
2. Pada sidebar menu sebelah kiri, pilih **MANAJEMEN PENGGUNA** → **Manajemen Reviewer**
3. Sistem akan menampilkan daftar lengkap reviewer dengan informasi mereka

![Halaman Manajemen Reviewer](/img/admin/reviewer-list.png)

## Daftar Reviewer

Halaman utama menampilkan tabel reviewer dengan kolom-kolom berikut:

| Kolom | Keterangan |
|-------|-----------|
| **Reviewer** | Nama lengkap reviewer dan email. Jika tersedia, nomor NIDN juga ditampilkan dalam teks biru. |
| **Specializations** | Badge-badge yang menunjukkan area spesialisasi dan kata kunci keahlian reviewer. Jika lebih dari 3, tampil "+X more" untuk melihat sisanya. |
| **Stats** | Statistik reviewer meliputi: <br/> - **Reviews**: Total jumlah review yang telah dikerjakan <br/> - **Active**: Jumlah review yang sedang dikerjakan <br/> - **Availability**: Status ketersediaan (Available/Full) |
| **Status** | Status aktivitas reviewer: **Active** (hijau) atau **Inactive** (abu-abu) |
| **Action** | Menu tindakan dengan opsi View/Edit, toggle status, dan hapus |

:::info

**Filter & Pencarian**: Gunakan kolom pencarian di atas tabel untuk mencari reviewer berdasarkan nama, email, spesialisasi, atau kata kunci keahlian. Pencarian bersifat real-time dan case-insensitive.

:::

## Menambah Reviewer Baru

### Langkah-langkah:

1. Klik tombol **Add Reviewer** di pojok kanan atas halaman

   ![Modal Tambah Reviewer](/img/admin/reviewer-add-modal.png)

2. Dialog **Tambah Reviewer Baru** akan muncul dengan dua opsi:
   - **Use Existing User**: Pilih user yang sudah terdaftar di sistem
   - **Create New Reviewer User**: Buat reviewer dan user baru sekaligus

### Opsi 1: Gunakan User Yang Sudah Ada

1. Pilih radio button **Use Existing User**
2. Pada field **Select User**, cari dan pilih user dari daftar yang tersedia. Anda dapat mengetik nama atau email untuk mencari.
3. Isi field berikut:
   - **Max Concurrent Reviews**: Masukkan jumlah maksimal review yang dapat dikerjakan secara bersamaan (default: 5)
   - **Specialization Areas**: Pilih spesialisasi dari dropdown atau ketik spesialisasi baru dan tekan Enter/klik tanda "+". Anda dapat menambah beberapa spesialisasi.
   - **Expertise Keywords**: Masukkan kata kunci keahlian spesifik (misalnya: "Machine Learning", "Cloud Architecture"), pisahkan dengan Enter
   - **Bio**: Tulis biografi singkat atau ringkasan keahlian reviewer (opsional)

4. Klik **Create Reviewer** untuk menyimpan

:::info[Status Reviewer Baru]

Reviewer yang baru ditambahkan otomatis berstatus **Active**. Untuk mengubah status, gunakan menu tindakan (⋮) di tabel setelah reviewer berhasil dibuat.

:::

### Opsi 2: Buat User & Reviewer Baru

1. Pilih radio button **Create New Reviewer User**
2. Section "Create New Reviewer User" akan menampilkan form dengan field:
   - **Full Name**: Nama lengkap
   - **Email**: Email unik yang belum terdaftar
   - **Password**: Kata sandi awal
   - **Confirm Password**: Konfirmasi kata sandi
   - **NIDN**: Nomor Induk Dosen Nasional (opsional)
   - **Maximum Concurrent Reviews**: Jumlah maksimal review bersamaan (default: 5)
   - **Specialization Areas**: Spesialisasi (sama seperti opsi 1)
   - **Bio / Description**: Biografi singkat (opsional)
   - **Expertise Keywords**: Kata kunci keahlian (opsional)

3. Klik **Create Reviewer** untuk menyimpan user dan profil reviewer sekaligus

:::info[Status Reviewer Baru]

Reviewer yang baru dibuat otomatis berstatus **Active**. Untuk mengubah status, gunakan menu tindakan (⋮) di tabel setelah reviewer berhasil dibuat.

:::

:::tip

Ketika membuat user baru, pastikan email belum digunakan oleh user lain. NIDN bersifat opsional tetapi disarankan untuk dosen/asisten yang memiliki nomor identitas formal.

:::

## Mengedit Profil Reviewer

1. Pada tabel, klik menu tiga titik (**⋮**) di baris reviewer yang ingin diedit
2. Pilih **View / Edit** dari dropdown menu
3. Dialog edit akan membuka dengan informasi reviewer yang sudah ada

   ![Edit Reviewer](/img/admin/reviewer-edit-modal.png)

4. Perbarui field yang diperlukan:
   - **Maximum Concurrent Reviews**: Jumlah maksimal review bersamaan
   - **Specialization Areas**: Spesialisasi reviewer
   - **Bio / Description**: Biografi singkat
   - **Expertise Keywords**: Kata kunci keahlian
   - **Status**: Dropdown pilihan **Active** atau **Inactive** — gunakan ini untuk mengubah status ketersediaan reviewer

5. Klik **Update Reviewer** untuk menyimpan perubahan

## Mengaktifkan & Menonaktifkan Reviewer

Reviewer yang tidak aktif tidak akan menerima assignment review baru.

### Cara Menonaktifkan:

1. Klik menu tiga titik (**⋮**) pada baris reviewer
2. Pilih **Set Inactive**
3. Status pada tabel akan berubah menjadi "Inactive" (badge abu-abu)

### Cara Mengaktifkan Kembali:

1. Klik menu tiga titik (**⋮**) pada baris reviewer
2. Pilih **Set Active**
3. Status akan berubah menjadi "Active" (badge hijau)

:::warning

Menonaktifkan reviewer tidak akan membatalkan assignment yang sudah ada. Review yang sedang dikerjakan tetap harus diselesaikan.

:::

## Menghapus Reviewer

1. Klik menu tiga titik (**⋮**) pada baris reviewer yang ingin dihapus
2. Pilih **Delete** (teks merah)
3. Sistem akan meminta konfirmasi: "Delete reviewer profile for [Nama]?"
4. Klik **Yes** atau tekan Enter untuk mengkonfirmasi

:::danger

Menghapus profil reviewer adalah tindakan permanen dan tidak dapat dibatalkan. Pastikan reviewer tidak memiliki assignment aktif atau data penting yang masih dibutuhkan.

:::

## Monitoring Kapasitas Reviewer

Kolom **Stats** pada tabel menampilkan:

- **Reviews: X** — Total review yang telah diselesaikan
- **Active: Y** — Jumlah review yang sedang dikerjakan
- **Available / Full** — Status ketersediaan reviewer

**Available** berarti reviewer masih bisa menerima assignment baru (jumlah active < max concurrent reviews).
**Full** berarti reviewer sudah mencapai batas maksimal review yang dapat dikerjakan bersamaan.

:::tip

Ketika membuat atau mengedit reviewer, pastikan nilai **Max Concurrent Reviews** sesuai dengan kapasitas dan beban kerja reviewer untuk menghindari overload.

:::

## Spesialisasi & Kata Kunci Keahlian

Sistem mendukung spesialisasi yang fleksibel untuk memastikan pencocokan yang akurat antara proposal dan reviewer.

### Spesialisasi Umum:

Berikut adalah daftar spesialisasi yang tersedia di sistem (dapat ditambah custom):

- Computer Science
- Information Technology
- Artificial Intelligence
- Machine Learning
- Data Science
- Software Engineering
- Cybersecurity
- Network Engineering
- Mobile Development
- Web Development
- Database Systems
- Cloud Computing
- Internet of Things
- Human Computer Interaction
- Digital Business
- E-Commerce
- Business Intelligence

### Menambah Spesialisasi Custom:

1. Di form tambah/edit reviewer, pada field **Specialization Areas**:
   - Ketik spesialisasi baru yang tidak ada di dropdown
   - Tekan **Enter** atau klik **+**
   - Spesialisasi akan ditambahkan sebagai badge baru

2. Untuk menghapus spesialisasi, klik **✕** pada badge

### Menambah Expertise Keywords:

Keywords memberikan detail lebih spesifik dari spesialisasi umum. Contoh:

- Spesialisasi: "Artificial Intelligence"
- Keywords: "Neural Networks", "Natural Language Processing", "Computer Vision"

Masukkan keywords di field terpisah, pisahkan dengan Enter.

## Troubleshooting

### "Penggunaan email sudah ada"

Email yang Anda masukkan sudah terdaftar. Gunakan email yang berbeda atau pilih user yang sudah ada dari **Use Existing User**.

### Reviewer tidak muncul di daftar

- Pastikan Anda sudah mengklik **Create Reviewer** dan tidak ada error
- Coba refresh halaman (F5)
- Pastikan status reviewer adalah **Active** jika ingin segera menggunakan untuk assignment

### Tidak bisa menghapus reviewer

- Jika ada pesan error, reviewer mungkin memiliki assignment aktif yang harus diselesaikan terlebih dahulu
- Hubungi administrator sistem untuk bantuan lebih lanjut
