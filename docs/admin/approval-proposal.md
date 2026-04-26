---
id: approval-proposal
title: Approval Proposal
sidebar_label: Approval Proposal
sidebar_position: 8
---

# Approval Proposal

Fitur **Approval Proposal** memungkinkan Anda melakukan review administratif terhadap proposal yang telah disubmit oleh peneliti. Dalam tahap ini, Anda memeriksa kelengkapan dokumen, kevalidan data, dan kesesuaian dengan persyaratan administratif sebelum proposal diproses lebih lanjut.

## Mengakses Halaman Approval

1. Login ke ORBIT UNSURYA dengan akun administrator
2. Pada halaman dashboard, navigasikan ke URL `/dashboard/approvals` atau cari menu **Tugas Approval** jika tersedia di sidebar
3. Halaman **Tugas Approval** akan menampilkan daftar proposal yang menunggu approval Anda

![Halaman Approval Proposal](/img/admin/approval-page-list.png)

## Tampilan Halaman Approval

Halaman Tugas Approval menampilkan statistik utama:

- **Total Approvals**: Jumlah total assignment approval yang diberikan kepada Anda
- **Approved**: Jumlah proposal yang sudah Anda setujui
- **Rejected**: Jumlah proposal yang sudah Anda tolak
- **Pending**: Jumlah proposal yang menunggu approval dari Anda

## Pencarian dan Filter

### Pencarian Cepat
Gunakan kotak pencarian di bagian atas untuk mencari proposal berdasarkan:
- Judul proposal
- Nama ketua peneliti

### Filter Lanjutan
Klik tombol **Filter Lanjutan** untuk membuka panel filter dengan opsi:

![Filter Lanjutan](/img/admin/approval-filter.png)

- **Deadline**: Filter berdasarkan tanggal deadline proposal
- **Range Budget**: Filter berdasarkan kisaran anggaran yang diminta
- **Kategori**: Filter berdasarkan kategori penelitian atau PKM
- **Skema**: Filter berdasarkan skema pendanaan
- **Tingkat Urgensi**: Filter berdasarkan tingkat urgensi proposal

## Melakukan Approval Proposal

:::tip
Setiap proposal dalam status SUBMITTED akan muncul di halaman Tugas Approval dan perlu dilakukan review administratif.
:::

### Langkah-Langkah Approval

1. **Lihat daftar proposal**: Pada halaman Tugas Approval, Anda akan melihat daftar proposal yang membutuhkan approval
2. **Pilih proposal**: Klik pada proposal yang ingin Anda review
3. **Review data administratif**: Periksa kelengkapan dokumen dan validitas data proposal
4. **Buat keputusan**: Pilih untuk menyetujui (approve) atau menolak (reject) proposal
5. **Tambahkan catatan** (opsional): Tulis catatan atau alasan jika menolak proposal
6. **Simpan keputusan**: Klik tombol Approve atau Reject untuk menyimpan keputusan Anda

:::warning
Setelah Anda membuat keputusan approval, status proposal akan berubah ke WAITING_APPROVAL atau REJECTED_BY_APPROVER. Pastikan data sudah benar sebelum menyimpan.
:::

## Status Proposal

Setelah Anda melakukan approval, proposal akan masuk ke salah satu status berikut:

- **WAITING_APPROVAL**: Proposal sedang menunggu approval dari approver lain (jika ada multiple approvers)
- **APPROVED**: Proposal telah disetujui dan akan dilanjutkan ke tahap administratif
- **REJECTED_BY_APPROVER**: Proposal ditolak karena tidak memenuhi syarat administratif

## Riwayat Approval

Sistem ORBIT UNSURYA akan secara otomatis mencatat:
- Tanggal dan waktu Anda melakukan approval
- Keputusan yang Anda buat (approve/reject)
- Catatan atau alasan yang Anda berikan
- Data diri approver

Riwayat ini dapat dilihat dalam detail proposal untuk keperluan audit dan dokumentasi.

## Tips Efisiensi

:::tip
Berikut tips untuk melakukan approval proposal secara efisien:

1. **Gunakan filter untuk mengelompokkan**: Sortir proposal berdasarkan deadline atau kategori untuk prioritas
2. **Batch review**: Jika ada banyak proposal dengan kategori sama, review secara bersamaan untuk konsistensi
3. **Catatan terstruktur**: Jika menolak, tulis catatan yang spesifik sehingga peneliti dapat memperbaiki
4. **Periksa ulang**: Sebelum menyimpan keputusan, pastikan semua dokumen sudah diperiksa dengan teliti
:::

## Troubleshooting

**Proposal tidak muncul di halaman Approval**
- Pastikan proposal sudah berstatus SUBMITTED
- Refresh halaman browser (Ctrl+F5 atau Cmd+Shift+R)
- Periksa filter atau pencarian yang aktif

**Tidak bisa mengubah keputusan approval**
- Keputusan approval bersifat final dan tidak dapat diubah setelah disimpan
- Hubungi administrator jika perlu rollback keputusan

**Error saat menyimpan keputusan**
- Pastikan koneksi internet stabil
- Tunggu beberapa saat dan coba lagi
- Hubungi tim support jika error terus berlanjut
