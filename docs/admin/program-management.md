---
id: program-management
title: Program Management
sidebar_label: Program Management
sidebar_position: 4
---

# Program Management

Fitur **Program Management** memungkinkan administrator untuk mengelola program penelitian dan pengabdian masyarakat, serta batch (gelombang) pendaftaran proposal. Di ORBIT, program adalah skema pendanaan yang mendefisikan jenis penelitian/pengabdian, anggaran, dan periode waktu.

## Akses Program Management

1. Login ke ORBIT sebagai **Admin**
2. Di sidebar, klik **Program Management** di bagian Admin Panel
3. Sistem akan menampilkan halaman **Program Management** dengan dua tab utama: **Programs** dan **Batches**

## Tab Programs (Daftar Program)

Halaman **Programs** menampilkan daftar semua program yang terdaftar di sistem dengan informasi ringkas dan fitur pencarian.

![Daftar Program](/img/admin/program-list-main.png)

### Elemen Halaman

#### Search dan Filter
- **Search**: Gunakan kolom pencarian untuk menemukan program berdasarkan nama atau kategori
- **Type Filter**: Tampilkan program berdasarkan jenis:
  - Penelitian
  - Pengabdian
  - All Types
- **Status Filter**: Tampilkan program berdasarkan status:
  - Active (Aktif)
  - Draft (Konsep)
  - Inactive (Tidak Aktif)
  - Closed (Ditutup)
  - All Status

#### Tombol Create
Klik tombol **Add Program** (ikon Plus) untuk membuat program baru.

### Struktur Tabel Program

Tabel menampilkan kolom-kolom berikut untuk setiap program:

| Kolom | Keterangan |
|-------|-----------|
| **Program Details** | Nama program dan kategori/tipe program |
| **Type & Status** | Badge yang menunjukkan tipe (Penelitian/Pengabdian) dan status (Active/Draft/Inactive/Closed) |
| **Budget Limit** | Alokasi anggaran maksimal untuk program (format IDR) |
| **Statistics** | Jumlah batch dan proposal yang terkait dengan program |
| **Last Updated** | Tanggal terakhir program diubah |
| **Actions** | Menu aksi (Edit, Delete, Detail) |

### Aksi pada Program (Actions Menu)

Klik tombol menu **(≡)** di akhir baris program untuk membuka menu aksi:

- **View Details**: Membuka panel detail program untuk melihat informasi lengkap dan batch terkait
- **Edit**: Membuka form edit untuk mengubah informasi program
- **Delete**: Menghapus program (akan meminta konfirmasi)

:::warning[Perhatian Penghapusan Program]

Program yang memiliki batch atau proposal aktif tidak dapat dihapus. Pastikan semua batch terkait telah ditutup atau dihapus terlebih dahulu.

:::

## Membuat Program Baru

### Langkah-Langkah

1. Di halaman **Programs**, klik tombol **Add Program**
2. Dialog **Create New Program** akan terbuka dengan form

![Create Program Form](/img/admin/program-create-modal.png)

3. Isi form dengan data program:
   - **Program Name** (Nama Program): Nama unik untuk program (contoh: "Penelitian Internal 2026", "Pengabdian 2026")
   - **Program Type** (Jenis Program): Pilih "Penelitian" atau "Pengabdian"
   - **Category** (Kategori): Kategori atau kelompok program (contoh: "Skema A", "Skema B")
   - **Budget Limit** (Alokasi Anggaran): Total anggaran maksimal program (dalam IDR)
   - **Max Duration** (Durasi Maksimal): Berapa tahun maksimal pelaksanaan penelitian/pengabdian
   - **Status** (Status): Pilih status awal:
     - **Draft**: Program masih dalam tahap persiapan (default)
     - **Active**: Program siap dan terbuka untuk penerimaan proposal

4. Klik **Save** untuk menyimpan program
5. Sistem akan menampilkan pesan sukses dan program akan muncul di daftar

:::info[Status dan Batch]

Program dapat dibuat dengan status **Draft** terlebih dahulu, kemudian diubah menjadi **Active** setelah persiapan selesai. Untuk menerima proposal, program harus memiliki minimal satu batch dalam status **Active**.

:::

## Mengedit Program

### Langkah-Langkah

1. Di halaman **Programs**, klik tombol menu **(≡)** pada program yang ingin diedit
2. Pilih **Edit**
3. Dialog edit akan terbuka dengan form yang sudah terisi data lama
4. Ubah field yang diperlukan:
   - Nama, kategori, jenis program, anggaran, durasi, atau status
5. Klik **Save** untuk menyimpan perubahan
6. Sistem akan menampilkan pesan sukses dan daftar akan diperbarui

:::tip[Ubah Status]

Untuk mengaktifkan program sehingga bisa menerima proposal, ubah status menjadi **Active** dan pastikan sudah ada batch dalam status **Active**.

:::

## Menghapus Program

### Langkah-Langkah

1. Di halaman **Programs**, klik tombol menu **(≡)** pada program yang ingin dihapus
2. Pilih **Delete**
3. Dialog konfirmasi **Delete Program** akan muncul dengan nama program yang akan dihapus
4. Klik tombol **Delete** untuk mengkonfirmasi penghapusan
5. Sistem akan menampilkan pesan sukses dan program akan dihapus dari daftar

:::warning[Ketentuan Penghapusan]

- Program hanya bisa dihapus jika tidak memiliki batch atau proposal
- Jika program memiliki batch, hapus atau tutup batch terlebih dahulu
- Tindakan penghapusan bersifat permanen dan tidak bisa dibatalkan

:::

## Tab Batches (Daftar Batch)

Halaman **Batches** menampilkan daftar semua batch (gelombang) pendaftaran proposal dari semua program. Batch menentukan periode waktu kapan proposal bisa diterima.

![Daftar Batch](/img/admin/program-batches-list.png)

### Elemen Halaman Batches

#### Search dan Filter
- **Search**: Cari batch berdasarkan nama atau nomor urut
- **Program Filter**: Tampilkan batch dari program tertentu
- **Status Filter**: Tampilkan batch berdasarkan status:
  - Active (Terbuka untuk pendaftaran)
  - Draft (Konsep, belum terbuka)
  - Closed (Ditutup, tidak menerima proposal baru)
  - All Status

#### Tombol Create
Klik tombol **Add Batch** untuk membuat batch baru. Batch harus dikaitkan dengan program yang sudah ada.

### Struktur Tabel Batch

Tabel menampilkan kolom-kolom berikut untuk setiap batch:

| Kolom | Keterangan |
|-------|-----------|
| **Batch Details** | Nama batch, program induk, dan tahun |
| **Submission Period** | Tanggal mulai dan tanggal akhir periode pendaftaran proposal |
| **Status** | Status batch (Active/Draft/Closed) |
| **Proposal Count** | Jumlah proposal yang telah diterima di batch ini |
| **Last Updated** | Tanggal terakhir batch diubah |
| **Actions** | Menu aksi (Edit, Delete) |

### Aksi pada Batch (Actions Menu)

Klik tombol menu **(≡)** di akhir baris batch untuk membuka menu aksi:

- **Edit**: Membuka form edit untuk mengubah informasi batch (nama, tanggal, status)
- **Delete**: Menghapus batch (akan meminta konfirmasi)

:::warning[Perhatian Penghapusan Batch]

Batch yang sudah menerima proposal tidak dapat dihapus kecuali jika semua proposal telah dihapus terlebih dahulu.

:::

## Membuat Batch Baru

### Langkah-Langkah

1. Di halaman **Batches**, klik tombol **Add Batch**
2. Dialog **Create New Batch** akan terbuka
3. Isi form dengan data batch:
   - **Program** (Pilih Program): Pilih program induk untuk batch ini
   - **Batch Name** (Nama Batch): Nama batch (contoh: "Gelombang 1", "Batch 2026-A")
   - **Year** (Tahun): Tahun untuk batch ini
   - **Sequence** (Urutan): Nomor urut batch dalam program (1, 2, 3, dst)
   - **Submission Start Date** (Tanggal Mulai): Tanggal dimulainya periode penerimaan proposal
   - **Submission End Date** (Tanggal Akhir): Tanggal berakhirnya periode penerimaan proposal
   - **Status**: Pilih status batch:
     - **Draft**: Batch masih dalam persiapan (tidak menerima proposal)
     - **Active**: Batch terbuka, menerima proposal dalam periode yang ditentukan
     - **Closed**: Batch ditutup, tidak menerima proposal baru

4. Klik **Save** untuk membuat batch
5. Batch akan muncul di daftar dan peneliti dapat mulai mengirimkan proposal

:::info[Periode Penerimaan]

Sistem akan otomatis menutup batch (reject proposal) jika tanggal saat ini sudah melebihi Submission End Date, meskipun status masih "Active". Pastikan tanggal dikonfigurasi dengan benar.

:::

## Mengedit Batch

### Langkah-Langkah

1. Di halaman **Batches**, klik tombol menu **(≡)** pada batch yang ingin diedit
2. Pilih **Edit**
3. Form edit batch akan terbuka dengan data lama
4. Ubah field yang diperlukan:
   - Nama, tahun, urutan, tanggal mulai/akhir, atau status
5. Klik **Save** untuk menyimpan perubahan

:::tip[Perubahan Tanggal]

Jika periode pendaftaran sudah berlalu, ubah status batch menjadi **Closed** agar jelas bagi pengguna bahwa batch ini tidak lagi menerima proposal.

:::

## Menghapus Batch

### Langkah-Langkah

1. Di halaman **Batches**, klik tombol menu **(≡)** pada batch yang ingin dihapus
2. Pilih **Delete**
3. Dialog konfirmasi **Delete Batch** akan muncul
4. Klik tombol **Delete** untuk mengkonfirmasi
5. Batch akan dihapus dari sistem

:::warning[Ketentuan Penghapusan Batch]

Batch hanya bisa dihapus jika tidak memiliki proposal yang terkait. Jika ada proposal di batch tersebut, hapus proposal atau transfer ke batch lain terlebih dahulu.

:::

## Best Practice

### Program Management

1. **Buat program dalam status Draft**: Siapkan program dengan lengkap (nama, budget, durasi) sebelum mengaktifkannya
2. **Tentukan batch dengan jelas**: Setiap batch harus memiliki periode penerimaan yang jelas dan tidak tumpang tindih
3. **Monitor anggaran**: Pantau penggunaan anggaran program dibandingkan dengan Budget Limit yang telah ditetapkan
4. **Arsipkan program lama**: Tutup program yang sudah selesai dengan mengubah status menjadi **Closed**

### Batch Management

1. **Periode penerimaan realistis**: Berikan waktu yang cukup bagi peneliti untuk mempersiapkan proposal
2. **Komunikasikan jadwal**: Pastikan peneliti mengetahui tanggal mulai dan tanggal akhir batch
3. **Review sebelum aktivasi**: Periksa pengaturan batch sebelum mengubah status menjadi **Active**
4. **Maintain sequential numbering**: Gunakan nomor urut yang konsisten untuk mudah diidentifikasi (Batch 1, Batch 2, dst)

## Troubleshooting

### Program tidak bisa dihapus

**Masalah**: Tombol Delete tidak responsif atau muncul pesan error  
**Solusi**: Pastikan program tidak memiliki batch yang terkait. Hapus atau tutup semua batch terlebih dahulu.

### Batch tidak menerima proposal padahal status Active

**Masalah**: Dosen tidak bisa mengirimkan proposal meski batch status Active  
**Solusi**: Periksa tanggal Submission End Date. Jika sudah terlewati, sistem akan reject proposal. Update tanggal atau ubah status batch menjadi **Closed**.

### Tidak bisa membuat batch tanpa program

**Masalah**: Button Add Batch tidak aktif atau form tidak muncul  
**Solusi**: Pastikan sudah ada minimal satu program yang terdaftar. Buat program terlebih dahulu sebelum membuat batch.
