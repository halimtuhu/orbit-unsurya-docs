---
id: notifikasi
title: Notifikasi
sidebar_label: Notifikasi
sidebar_position: 1
---

# Notifikasi

Halaman ini menjelaskan cara menggunakan fitur notifikasi di ORBIT UNSURYA — mulai dari membaca notifikasi, menandai dibaca, hingga jenis-jenis notifikasi yang diterima oleh setiap peran pengguna.

## Ikon Lonceng Notifikasi

Ikon lonceng notifikasi terletak di **header (navigasi atas)** aplikasi, di sebelah kiri tombol menu pengguna. Ikon ini tampil di semua halaman setelah login.

![Ikon lonceng dengan badge notifikasi belum dibaca](/img/umum/notifikasi-bell-badge.png)

### Badge Jumlah Notifikasi

Badge merah di sudut kanan atas ikon lonceng menampilkan jumlah notifikasi yang **belum dibaca**:

- Badge muncul saat ada notifikasi yang belum dibaca
- Angka berkurang setiap kali notifikasi dibaca
- Badge menghilang ketika semua notifikasi sudah dibaca

![Ikon lonceng tanpa badge (semua sudah dibaca)](/img/umum/notifikasi-bell-no-badge.png)

:::info[Pembaruan Otomatis]

Badge jumlah notifikasi diperbarui secara otomatis di latar belakang — Anda tidak perlu me-refresh halaman.

:::

---

## Dropdown Notifikasi

### Membuka Dropdown

Klik ikon **lonceng** di header untuk membuka panel dropdown notifikasi.

### Tampilan Notifikasi Belum Dibaca

Setiap item notifikasi menampilkan:

| Elemen | Keterangan |
|--------|------------|
| Ikon | Ikon info |
| Judul | Judul notifikasi (teks tebal) |
| Isi | Ringkasan isi notifikasi |
| Waktu | Waktu relatif, contoh: "5 menit yang lalu", "sekitar 21 jam yang lalu" |

Notifikasi yang **belum dibaca** ditampilkan dengan latar belakang berwarna berbeda dan indikator titik biru di sebelah kanan.

![Dropdown notifikasi dengan notifikasi belum dibaca](/img/umum/notifikasi-dropdown-unread.png)

### Header Dropdown

- Judul **"Notifikasi"** di bagian atas
- Tombol **"Tandai semua dibaca"** — hanya muncul jika ada notifikasi yang belum dibaca

### Menutup Dropdown

- Klik ikon lonceng lagi
- Klik area mana saja di luar dropdown

---

## Menandai Notifikasi sebagai Dibaca

### Menandai Satu Notifikasi

1. Klik ikon lonceng untuk membuka dropdown
2. Klik salah satu item notifikasi yang belum dibaca
3. Notifikasi otomatis ditandai sebagai dibaca
4. Badge jumlah berkurang
5. Jika notifikasi memiliki tautan, halaman akan berpindah ke halaman terkait

### Menandai Semua Notifikasi Sekaligus

1. Klik ikon lonceng untuk membuka dropdown
2. Klik tombol **"Tandai semua dibaca"** di bagian atas dropdown
3. Semua notifikasi berubah menjadi sudah dibaca
4. Tombol "Tandai semua dibaca" menghilang
5. Badge merah pada ikon lonceng menghilang

![Semua notifikasi sudah dibaca — badge dan tombol hilang](/img/umum/notifikasi-semua-dibaca.png)

---

## Notifikasi Sudah Dibaca

Notifikasi yang sudah dibaca tetap tampil di dropdown, namun tanpa indikator warna dan tanpa titik biru. Tombol "Tandai semua dibaca" tidak muncul saat semua notifikasi sudah dibaca.

![Dropdown saat semua notifikasi sudah dibaca](/img/umum/notifikasi-dropdown-read.png)

---

## Jenis Notifikasi per Peran

Setiap peran pengguna menerima notifikasi yang berbeda sesuai dengan konteks pekerjaan masing-masing.

### Notifikasi untuk Admin

![Dropdown notifikasi admin](/img/umum/notifikasi-bell-badge.png)

Admin menerima notifikasi untuk event yang memerlukan tindakan dari admin, seperti pengajuan baru dari dosen yang menunggu review.

### Notifikasi untuk Dosen

![Dropdown notifikasi dosen dengan beberapa notifikasi](/img/umum/notifikasi-dropdown-dosen.png)

Dosen menerima notifikasi tentang perkembangan pengajuan dan proposal mereka.

### Notifikasi untuk Reviewer

![Dropdown notifikasi reviewer](/img/umum/notifikasi-dropdown-reviewer.png)

Reviewer menerima notifikasi saat ada penugasan baru yang perlu ditindaklanjuti.

---

## Event yang Memicu Notifikasi

Sistem mengirim notifikasi secara otomatis saat terjadi event-event berikut:

### Modul Proposal

| Event | Penerima | Judul Notifikasi |
|-------|----------|------------------|
| Proposal disubmit | Semua Admin aktif | Proposal Baru Diajukan |
| Proposal disetujui | Ketua Peneliti + Semua Admin | Proposal Disetujui |
| Proposal ditolak oleh Approver | Ketua Peneliti | Proposal Ditolak |
| Proposal ditolak evaluasi Admin | Ketua Peneliti | Proposal Ditolak |
| Permintaan revisi konten | Ketua Peneliti | Revisi Konten Diminta |
| Proposal ditarik (withdrawn) | Semua Admin aktif | Proposal Ditarik |

### Modul Penugasan

| Event | Penerima | Judul Notifikasi |
|-------|----------|------------------|
| Penugasan sebagai Reviewer | Reviewer yang ditugaskan | Penugasan Baru |
| Penugasan sebagai Penyetuju | Penyetuju yang ditugaskan | Penugasan Baru |

### Modul Pendanaan

| Event | Penerima | Judul Notifikasi |
|-------|----------|------------------|
| Proposal masuk shortlist | Ketua Peneliti | Proposal Masuk Shortlist |
| Proposal mendapat pendanaan | Ketua Peneliti | Proposal Mendapat Pendanaan |
| Proposal tidak mendapat pendanaan | Ketua Peneliti | Proposal Tidak Mendapat Pendanaan |

---

## Catatan Penting

:::info[Notifikasi Bersifat In-App]

Notifikasi hanya muncul di dalam aplikasi melalui ikon lonceng. Tidak ada notifikasi email atau push notification ke perangkat.

:::

:::info[Tidak Ada Halaman Notifikasi Terpisah]

Semua notifikasi diakses melalui dropdown di header. Tidak ada halaman daftar notifikasi lengkap.

:::

:::info[Notifikasi Tidak Dapat Dihapus]

Notifikasi tidak dapat dihapus — hanya dapat ditandai sebagai dibaca. Setiap pengguna hanya dapat melihat notifikasi miliknya sendiri.

:::
