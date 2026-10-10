// Data fasilitas.
// Gedung A, B, dan C berasal dari https://www.sman9tangsel.sch.id/
// Item dengan contoh: true adalah data contoh (dummy); ganti atau hapus sesuai kondisi sekolah.
// Foto: taruh di public/fasilitas/ dengan nama file sesuai field "foto".

const fasilitas = [
  {
    id: "gedung-a",
    nama: "Gedung A",
    deskripsi: "Salah satu gedung utama kegiatan belajar mengajar.",
    foto: "/fasilitas/gedung-a.jpg",
    contoh: false,
  },
  {
    id: "gedung-b",
    nama: "Gedung B",
    deskripsi: "Salah satu gedung utama kegiatan belajar mengajar.",
    foto: "/fasilitas/gedung-b.jpg",
    contoh: false,
  },
  {
    id: "gedung-c",
    nama: "Gedung C",
    deskripsi: "Salah satu gedung utama kegiatan belajar mengajar.",
    foto: "/fasilitas/gedung-c.jpg",
    contoh: false,
  },
  
];

export default fasilitas;
