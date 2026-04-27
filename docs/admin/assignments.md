---
id: assignments
title: Assignments (Penugasan Reviewer)
sidebar_label: Assignments (Penugasan Reviewer)
sidebar_position: 9
---

# Assignments (Penugasan Reviewer)

Halaman ini menjelaskan cara admin menugaskan reviewer ke proposal, mengelola penugasan yang sudah ada, dan memantau status penugasan.

## Cara Mengakses

Penugasan reviewer dilakukan dari halaman **Semua Proposal** atau dari halaman **Detail Proposal**.

### Dari Halaman Semua Proposal

1. Masuk ke **Dashboard Admin**, lalu klik **Semua Proposal** di menu sidebar bagian **Proses Proposal**

2. Halaman akan menampilkan daftar semua proposal beserta status dan informasi pengusul

![Halaman Semua Proposal](/img/admin/assignments-proposals-list.png)

3. Cari proposal yang ingin ditugaskan reviewer, lalu klik tombol **Open menu** (ikon tiga titik) di kolom Action

4. Klik **Assign Approver/Reviewer**

![Menu Action Proposal](/img/admin/assignments-action-menu.png)

:::info[Kapan Penugasan Bisa Dilakukan?]

Tombol **Assign Approver/Reviewer** tersedia untuk proposal yang sudah melewati tahap **Pass Administratif** (status: `administrative_passed`) atau yang sudah dalam status **Sedang Direview**.

:::

### Dari Halaman Detail Proposal

Sebagai alternatif, buka halaman detail proposal, lalu klik tombol **Assign Approver & Reviewer** yang tersedia di bagian atas halaman.

![Halaman Detail Proposal](/img/admin/assignments-proposal-detail.png)

---

## Menugaskan Reviewer

Setelah mengklik **Assign Approver/Reviewer**, dialog **Assign Reviewers & Approvers** akan terbuka.

### Tab Approvers

Tab **Approvers** menampilkan daftar approver yang sudah ditugaskan, serta form untuk menugaskan approver baru.

![Dialog Tab Approvers](/img/admin/assignments-dialog-approvers.png)

### Tab Reviewers

Tab **Reviewers** menampilkan daftar reviewer yang sudah ditugaskan, serta form untuk menugaskan reviewer baru.

![Dialog Tab Reviewers](/img/admin/assignments-dialog-reviewers.png)

### Langkah Menugaskan Reviewer

1. Klik tab **Reviewers**

2. Di bagian **Assign New Reviewer**, klik dropdown **Choose a reviewer to assign**

3. Gunakan kotak pencarian untuk menemukan reviewer, lalu klik nama reviewer yang ingin ditugaskan

![Dropdown Pilih Reviewer](/img/admin/assignments-reviewer-dropdown.png)

4. Setelah reviewer dipilih, isi field opsional jika diperlukan:
   - **Deadline (Optional)**: Batas waktu reviewer menyelesaikan review
   - **Notes (Optional)**: Instruksi atau catatan khusus untuk reviewer

5. Klik tombol **Assign Reviewer**

![Reviewer Dipilih, Siap Ditugaskan](/img/admin/assignments-reviewer-selected.png)

6. Jika berhasil, akan muncul notifikasi **"Assignment created successfully!"** dan reviewer akan terlihat di bagian **Current Reviewer Assignments** dengan status **Pending**

![Reviewer Berhasil Ditugaskan](/img/admin/assignments-reviewer-assigned-list.png)

:::tip

Reviewer yang baru ditugaskan akan mendapatkan notifikasi di sistem. Mereka perlu **menerima** penugasan tersebut sebelum statusnya berubah menjadi **In Progress**.

:::

---

## Status Penugasan

Setiap penugasan reviewer memiliki status yang menunjukkan progres penugasan:

| Status | Keterangan |
|--------|------------|
| **Pending** | Penugasan baru dibuat, reviewer belum merespons |
| **In Progress** | Reviewer sudah menerima penugasan dan sedang mengerjakan review |
| **Diterima** | Reviewer menerima penugasan |
| **Ditolak** | Reviewer menolak penugasan |

Setelah reviewer menerima penugasan, status di dialog berubah menjadi **In Progress**:

![Reviewer Status In Progress](/img/admin/assignments-reviewer-inprogress.png)

---

## Menghapus Penugasan

Untuk menghapus reviewer yang sudah ditugaskan:

1. Buka dialog **Assign Reviewers & Approvers** dari proposal yang diinginkan
2. Klik tab **Reviewers**
3. Di bagian **Current Reviewer Assignments**, klik tombol **Remove assignment** di samping nama reviewer

:::warning

Menghapus penugasan akan menghilangkan semua data penugasan reviewer tersebut dari proposal ini.

:::

---

## Memantau Status Penugasan

Admin dapat memantau progress penugasan langsung dari halaman detail proposal.

1. Buka halaman detail proposal yang ingin dipantau
2. Klik bagian **Status Approval & Review** untuk memperluas panel

Panel ini menampilkan:
- **Status Saat Ini**: Status terkini proposal (misal: Dalam Review)
- **Progress Workflow**:
  - **Reviewer**: Jumlah reviewer yang sudah menyelesaikan review (misal: 0/1)
  - **Skor Rata-rata**: Skor rata-rata dari seluruh reviewer
  - **Approval**: Jumlah approval yang sudah selesai
- **Reviewer Assignments**: Daftar reviewer yang ditugaskan beserta tanggal penugasan dan tanggal penerimaan

![Monitoring Status Penugasan](/img/admin/assignments-status-review.png)

### Melihat Evaluasi Reviewer

Untuk melihat hasil evaluasi dari reviewer, klik tombol **Lihat Evaluasi Reviewer** di halaman detail proposal. Halaman ini menampilkan semua penilaian yang telah diserahkan oleh reviewer.

![Halaman Evaluasi Reviewer](/img/admin/assignments-evaluasi-reviewer.png)

---

## Tampilan dari Sisi Reviewer

Setelah admin menugaskan reviewer, reviewer akan melihat penugasan tersebut di halaman **Tugas Assignment** (`/dashboard/assignments`).

:::info[Tampilan Khusus Reviewer]

Bagian ini menggambarkan tampilan yang hanya terlihat saat login menggunakan akun **Reviewer** — bukan akun Admin. Admin tidak dapat melihat halaman ini secara langsung.

:::

### Tab Pending Assignment

Reviewer melihat semua penugasan yang belum direspons. Setiap kartu penugasan menampilkan:
- Nomor assignment dan tipe (Review)
- Nama admin yang menugaskan dan waktu penugasan
- ID dan judul proposal terkait
- Tombol **Lihat Detail Proposal**, **Tolak**, dan **Terima Assignment**

![Tugas Assignment — Reviewer Pending](/img/admin/assignments-reviewer-pending.png)

#### Menolak Penugasan

Jika reviewer tidak dapat menerima penugasan (misalnya karena konflik kepentingan), klik **Tolak** untuk membuka dialog penolakan:

1. Klik **Tolak** pada kartu penugasan
2. Isi kolom **Catatan** dengan alasan penolakan (wajib diisi)
3. Klik **Ya, Tolak** untuk mengkonfirmasi penolakan

![Dialog Tolak Assignment](/img/admin/assignments-tolak-dialog.png)

:::info[Catatan Penolakan Wajib Diisi]

Reviewer wajib mengisi alasan penolakan sebelum dapat menolak penugasan.

:::

### Tab All Assignment

Tab **All Assignment** menampilkan seluruh riwayat penugasan dengan fitur pencarian dan filter:

- **Cari**: Cari berdasarkan nomor assignment, judul proposal, atau nama admin penugasan
- **Filter Status**: Semua Status / Menunggu / Diterima / Ditolak
- **Filter Tipe**: Semua Tipe / Review

![Semua Assignment — Reviewer](/img/admin/assignments-all-tab-reviewer.png)

Untuk penugasan yang sudah diterima, tersedia tombol **Ke Tugas Review** untuk langsung membuka halaman pengerjaan review.
