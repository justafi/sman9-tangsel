// Data galeri foto.
// Album mengikuti https://www.sman9tangsel.sch.id/foto (Kegiatan Sekolah, Prestasi Siswa, Bangunan Sekolah).
// Foto saat ini adalah gambar contoh. Ganti file di public/galeri/ dengan foto asli
// (nama file sama), atau tambah item baru di bawah.

export const album = [
  { id: "semua", nama: "Semua" },
  { id: "kegiatan", nama: "Kegiatan Sekolah" },
  { id: "prestasi", nama: "Prestasi Siswa" },
  { id: "bangunan", nama: "Bangunan Sekolah" },
];

const galeri = [
  { id: 1, album: "kegiatan", judul: "", src: "/galeri/kegiatan-1.jpg" },
  { id: 2, album: "kegiatan", judul: "", src: "/galeri/kegiatan-2.jpg" },
  { id: 3, album: "kegiatan", judul: "", src: "/galeri/kegiatan-3.jpg" },
  { id: 4, album: "prestasi", judul: "", src: "/galeri/prestasi-1.jpg" },
  { id: 5, album: "prestasi", judul: "", src: "/galeri/prestasi-2.jpg" },
  { id: 6, album: "prestasi", judul: "", src: "/galeri/prestasi-3.jpg" },
  { id: 7, album: "prestasi", judul: "", src: "/galeri/prestasi-4.jpg" },
  { id: 8, album: "bangunan", judul: "", src: "/galeri/bangunan-1.jpg" },
  { id: 9, album: "bangunan", judul: "", src: "/galeri/bangunan-2.jpg" },
  { id: 10, album: "bangunan", judul: "", src: "/galeri/bangunan-3.jpg" },
];

export default galeri;
