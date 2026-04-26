import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/tentang-orbit',
        'getting-started/login-navigasi',
        'getting-started/role-pengguna',
      ],
    },
    {
      type: 'category',
      label: 'Panduan Admin',
      collapsed: true,
      items: [
        'admin/user-management',
        'admin/dosen-management',
        'admin/reviewer-management',
        'admin/program-management',
        'admin/research-taxonomy',
        'admin/rab-management',
        'admin/reporting-periods',
        'admin/approval-proposal',
        'admin/assignments',
        'admin/monev-assignments',
        'admin/funded-proposals',
        'admin/funding-kontrak',
        'admin/activity-monitoring',
        'admin/progress-report-recap',
        'admin/final-report-recap',
        'admin/proposal-revision-recap',
      ],
    },
    {
      type: 'category',
      label: 'Panduan Dosen',
      collapsed: true,
      items: [
        'dosen/membuat-proposal',
        'dosen/manajemen-proposal',
        'dosen/kegiatan-mandiri',
        'dosen/irp',
        'dosen/bank-template',
      ],
    },
    {
      type: 'category',
      label: 'Panduan Reviewer',
      collapsed: true,
      items: [
        'reviewer/assigned-proposals',
        'reviewer/melakukan-review',
      ],
    },
    {
      type: 'category',
      label: 'Fitur Umum',
      collapsed: true,
      items: [
        'umum/notifikasi',
        'umum/profil',
      ],
    },
  ],
};

export default sidebars;
