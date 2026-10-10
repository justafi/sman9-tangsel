// Database statis berita SMAN 9 Kota Tangerang Selatan.
// Catatan: tanggal, ringkasan, dan isi berita adalah teks contoh (dummy).
// Silakan ganti dengan konten resmi sekolah.

const berita = [
  {
    id: 1,
    gambar: "/berita/mpls.jpg",
    judul: "MPLS di awal masuk SMAN 9 Kota Tangerang Selatan",
    kategori: "Kegiatan Sekolah",
    tanggal: "14 Juli 2026",
    penulis: "Humas SMAN 9 Tangsel",
    ringkasan:
      "Peserta didik baru mengikuti Masa Pengenalan Lingkungan Sekolah (MPLS) untuk mengenal budaya, tata tertib, dan program unggulan sekolah.",
    konten: [
      "SMAN 9 Kota Tangerang Selatan menyelenggarakan Masa Pengenalan Lingkungan Sekolah (MPLS) bagi peserta didik baru. Kegiatan ini menjadi langkah awal agar siswa dapat beradaptasi dengan lingkungan, guru, dan teman-teman barunya.",
      "Selama MPLS, peserta didik diperkenalkan dengan profil sekolah, tata tertib, layanan pembelajaran, serta berbagai kegiatan ekstrakurikuler yang dapat diikuti untuk mengembangkan minat dan bakat.",
      "Melalui kegiatan ini, sekolah berharap seluruh peserta didik baru siap menjalani proses belajar dengan semangat Berjuang, Berkarya, Berhasil serta menjunjung nilai karakter positif dan kepedulian terhadap lingkungan.",
    ],
  },
  {
    id: 2,
    gambar: "/berita/spmb-non-akademik.jpg",
    judul:
      "Hasil seleksi SPMB Jalur Prestasi Non Akademik SMAN 9 Kota Tangerang Selatan 2026",
    kategori: "SPMB 2026",
    tanggal: "20 Juni 2026",
    penulis: "Panitia SPMB",
    ringkasan:
      "Pengumuman hasil seleksi Sistem Penerimaan Murid Baru (SPMB) melalui jalur prestasi non akademik tahun 2026.",
    konten: [
      "Panitia SPMB SMAN 9 Kota Tangerang Selatan mengumumkan hasil seleksi jalur prestasi non akademik tahun 2026. Seleksi dilakukan berdasarkan prestasi yang dapat dibuktikan melalui dokumen resmi.",
      "Calon peserta didik yang dinyatakan lolos diwajibkan melakukan daftar ulang sesuai jadwal dan persyaratan yang telah ditentukan oleh panitia.",
      "Informasi lengkap mengenai daftar peserta yang diterima, jadwal daftar ulang, dan dokumen yang harus dibawa dapat dilihat melalui pengumuman resmi sekolah.",
    ],
  },
  {
    id: 3,
    gambar: "/berita/spmb-akademik.jpg",
    judul:
      "Hasil seleksi SPMB Jalur Prestasi Akademik SMAN 9 Kota Tangerang Selatan 2026",
    kategori: "SPMB 2026",
    tanggal: "19 Juni 2026",
    penulis: "Panitia SPMB",
    ringkasan:
      "Pengumuman hasil seleksi SPMB jalur prestasi akademik tahun 2026 beserta tahapan daftar ulang bagi peserta yang diterima.",
    konten: [
      "SMAN 9 Kota Tangerang Selatan telah menyelesaikan proses seleksi SPMB jalur prestasi akademik tahun 2026. Penilaian didasarkan pada capaian akademik calon peserta didik sesuai ketentuan yang berlaku.",
      "Bagi peserta yang dinyatakan diterima, panitia meminta untuk segera melakukan daftar ulang dan melengkapi berkas administrasi sesuai jadwal.",
      "Panitia mengucapkan selamat kepada seluruh peserta yang lolos dan terima kasih kepada semua calon peserta didik yang telah berpartisipasi.",
    ],
  },
  {
    id: 4,
    gambar: "/berita/diterima-ptn.jpg",
    judul: "SELAMAT ANDA SUDAH DITERIMA DI PTN",
    kategori: "Prestasi",
    tanggal: "5 Juni 2026",
    penulis: "Humas SMAN 9 Tangsel",
    ringkasan:
      "Keluarga besar SMAN 9 Tangsel mengucapkan selamat kepada alumni yang berhasil diterima di Perguruan Tinggi Negeri (PTN).",
    konten: [
      "Keluarga besar SMAN 9 Kota Tangerang Selatan mengucapkan selamat kepada para lulusan yang telah diterima di Perguruan Tinggi Negeri (PTN) melalui berbagai jalur seleksi.",
      "Capaian ini merupakan buah dari kerja keras peserta didik, bimbingan guru, serta dukungan orang tua selama masa pembelajaran di sekolah.",
      "Semoga para alumni terus berjuang, berkarya, dan berhasil di jenjang pendidikan selanjutnya serta senantiasa mengharumkan nama almamater.",
    ],
  },
  {
    id: 5,
    gambar: "/berita/spmb-domisili.jpg",
    judul:
      "Hasil seleksi SPMB Jalur Domisili Lingkungan SMAN 9 Kota Tangerang Selatan 2026",
    kategori: "SPMB 2026",
    tanggal: "18 Juni 2026",
    penulis: "Panitia SPMB",
    ringkasan:
      "Pengumuman hasil seleksi SPMB jalur domisili lingkungan sekitar sekolah tahun 2026.",
    konten: [
      "Panitia SPMB SMAN 9 Kota Tangerang Selatan mengumumkan hasil seleksi jalur domisili lingkungan tahun 2026. Seleksi mempertimbangkan kedekatan tempat tinggal calon peserta didik dengan sekolah sesuai ketentuan yang berlaku.",
      "Peserta yang diterima diharapkan segera menyelesaikan proses daftar ulang pada waktu yang telah ditetapkan.",
      "Untuk informasi lebih lanjut, calon peserta didik dan orang tua dapat menghubungi sekolah melalui kontak resmi yang tertera pada situs ini.",
    ],
  },
  {
    id: 6,
    gambar: "/berita/info-spmb.jpg",
    judul: "Informasi SPMB SMAN 9 Kota Tangerang Selatan 2026",
    kategori: "SPMB 2026",
    tanggal: "2 Juni 2026",
    penulis: "Panitia SPMB",
    ringkasan:
      "Informasi umum pelaksanaan Sistem Penerimaan Murid Baru (SPMB) SMAN 9 Kota Tangerang Selatan tahun 2026.",
    konten: [
      "SMAN 9 Kota Tangerang Selatan membuka Sistem Penerimaan Murid Baru (SPMB) tahun 2026 melalui beberapa jalur, yaitu jalur domisili lingkungan, prestasi akademik, dan prestasi non akademik.",
      "Calon peserta didik diharapkan membaca ketentuan, persyaratan, dan jadwal pelaksanaan dengan teliti agar proses pendaftaran berjalan lancar.",
      "Pertanyaan seputar SPMB dapat disampaikan melalui telepon (021) 74638445 atau email admin@sman9tangsel.sch.id.",
    ],
  },
];

export default berita;
