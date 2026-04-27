---
id: approval-proposal
title: Approval Proposal
sidebar_label: Approval Proposal
sidebar_position: 8
---

# Approval Proposal

Fitur **Approval Proposal** memungkinkan administrator/LPPM melakukan review administratif terhadap proposal yang telah disubmit oleh peneliti. Dalam tahap ini, Anda menetapkan approver untuk setiap proposal dan approver yang ditugaskan akan melakukan persetujuan atau penolakan.

## Mengakses Halaman Tugas Approval

1. Login ke ORBIT UNSURYA dengan akun administrator
2. Navigasi ke halaman **Tugas Approval** melalui URL: `/dashboard/approvals`

![Halaman Tugas Approval](/img/admin/approval-page-list.png)

## Tampilan Halaman Tugas Approval

Halaman **Tugas Approval** menampilkan empat kartu statistik utama:

- **Total Approvals** — Jumlah total approval task yang ditugaskan kepada Anda
- **Approved** — Jumlah proposal yang sudah Anda setujui
- **Rejected** — Jumlah proposal yang sudah Anda tolak
- **Pending** — Jumlah proposal yang masih menunggu approval dari Anda

## Mencari dan Memfilter

### Pencarian Cepat

Gunakan kotak pencarian **Cari judul proposal, nama ketua...** di bagian atas untuk mencari proposal berdasarkan judul atau nama ketua peneliti.

### Filter Lanjutan

Klik tombol **Filter Lanjutan** untuk membuka panel filter dengan opsi:

![Filter Lanjutan](/img/admin/approval-filter.png)

- **Deadline** — Filter berdasarkan tanggal deadline approval
- **Range Budget** — Filter berdasarkan kisaran anggaran yang diminta
- **Kategori** — Filter berdasarkan kategori penelitian atau PKM
- **Skema** — Filter berdasarkan skema pendanaan
- **Tingkat Urgensi** — Filter berdasarkan tingkat urgensi proposal

## Menetapkan Approver untuk Proposal

Sebelum proposal muncul di halaman Tugas Approval, admin perlu menetapkan approver terlebih dahulu dari halaman detail proposal.

### Langkah Menetapkan Approver

1. Buka halaman **Semua Proposal** melalui menu sidebar atau navigasi ke `/dashboard/proposals`

![Daftar Semua Proposal](/img/admin/approval-proposals-list.png)

2. Cari proposal dengan status **Terkirim**
3. Klik tombol **Open menu** (ikon titik tiga) di kolom Action, lalu pilih **Assign Approver/Reviewer**

   Atau klik **Lihat Detail** untuk membuka halaman detail proposal, kemudian klik tombol **Assign Approver & Reviewer** di bagian atas halaman.

![Halaman Detail Proposal](/img/admin/approval-proposal-detail.png)

4. Dialog **Assign Reviewers & Approvers** akan terbuka

![Dialog Assign Approver](/img/admin/approval-assign-dialog.png)

5. Pada tab **Approvers**, klik dropdown **Choose an approver to assign** dan pilih approver yang dituju
6. Isi **Deadline (Optional)** jika ada batas waktu approval
7. Tambahkan **Notes (Optional)** untuk instruksi khusus kepada approver
8. Klik tombol **Assign Approver**

:::info[Informasi]

Setelah approver ditetapkan, proposal akan muncul di halaman **Tugas Approval** milik approver yang bersangkutan.

:::

## Status Proposal dalam Proses Approval

Anda dapat melihat status dan progress approval proposal dari bagian **Status Approval & Review** di halaman detail proposal.

![Status Approval dan Review](/img/admin/approval-proposal-detail-status.png)

Bagian ini menampilkan:
- **Status Saat Ini** — Status proposal saat ini (contoh: Disubmit, Disetujui, Ditolak)
- **Progress Workflow** — Checklist langkah-langkah pengisian proposal (Step 1 sampai 5)
- **Statistik Review** — Jumlah reviewer selesai, skor rata-rata, dan jumlah approval selesai

## Melakukan Approval Proposal

Setelah admin menetapkan Anda sebagai approver untuk sebuah proposal, proposal tersebut akan muncul di halaman **Tugas Approval** Anda.

:::warning[Perhatian]

Keputusan approval bersifat final. Pastikan Anda telah memeriksa semua dokumen proposal dengan teliti sebelum membuat keputusan.

:::

### Proposal yang Perlu Direview

Pantau proposal yang membutuhkan review dari halaman **Dashboard Admin** di bagian **Proposal Perlu Review Administratif**.

![Dashboard Admin](/img/admin/approval-dashboard.png)

Bagian ini menampilkan:
- Judul dan detail singkat proposal yang menunggu review administratif
- Informasi pengusul dan kategori
- Lama proposal menunggu review (dalam hari)

## Status Proposal Setelah Approval

Setelah keputusan approval dibuat, proposal akan masuk ke salah satu status berikut:

| Status | Keterangan |
|--------|------------|
| **Disetujui** | Proposal telah disetujui oleh approver dan dapat dilanjutkan ke tahap review |
| **Pass Administratif** | Proposal lolos review administratif dan siap untuk ditugaskan ke reviewer |
| **Ditolak oleh Approver** | Proposal ditolak karena tidak memenuhi syarat administratif |

## Riwayat Approval

Sistem ORBIT UNSURYA secara otomatis mencatat setiap keputusan approval, meliputi:
- Tanggal dan waktu keputusan dibuat
- Keputusan yang diambil (disetujui/ditolak)
- Catatan atau alasan yang diberikan
- Identitas approver

Riwayat ini dapat dilihat dalam halaman detail proposal untuk keperluan audit dan dokumentasi.
