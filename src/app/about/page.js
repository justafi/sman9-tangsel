export const metadata = {
  title: "About | SMAN 9 Kota Tangerang Selatan",
};

const misi = [
  "Pengembangan karakter positif peserta didik.",
  "Pengembangan kreativitas dan inovasi.",
  "Penguasaan ilmu pengetahuan dan teknologi (IPTEK).",
  "Penguatan keterampilan hidup (life skills).",
  "Pemanfaatan teknologi dalam pembelajaran.",
  "Penumbuhan kepedulian terhadap lingkungan.",
  "Pengembangan kemampuan bekerja sama dan berwawasan global.",
];

// Data dummy fasilitas & prestasi
const fasilitas = [
  { nama: "Laboratorium Komputer", deskripsi: "Mendukung pembelajaran teknologi informasi." },
  { nama: "Laboratorium IPA", deskripsi: "Praktikum Fisika, Kimia, dan Biologi." },
  { nama: "Perpustakaan", deskripsi: "Koleksi buku dan ruang baca yang nyaman." },
  { nama: "Lapangan Olahraga", deskripsi: "Sarana kegiatan olahraga dan upacara." },
  { nama: "Musala", deskripsi: "Tempat ibadah bagi warga sekolah." },
  { nama: "Area Hijau", deskripsi: "Taman dan lingkungan sekolah yang asri." },
];

const prestasi = [
  { nama: "Olimpiade Sains", deskripsi: "Peserta didik meraih medali tingkat kota." },
  { nama: "Lomba Karya Ilmiah", deskripsi: "Juara dalam kompetisi inovasi pelajar." },
  { nama: "Kejuaraan Olahraga", deskripsi: "Prestasi pada berbagai cabang olahraga." },
  { nama: "Seni dan Budaya", deskripsi: "Penampilan terbaik di festival seni pelajar." },
  { nama: "Sekolah Peduli Lingkungan", deskripsi: "Program kebersihan dan penghijauan sekolah." },
  { nama: "Diterima di PTN", deskripsi: "Lulusan diterima di berbagai perguruan tinggi negeri." },
];

export default function AboutPage() {
  return (
    <>
      {/* Header halaman */}
      <section className="bg-navy py-14 text-center text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="mb-2 text-3xl font-extrabold sm:text-4xl">Tentang Sekolah</h1>
          <p className="text-gold">SMA Negeri 9 Kota Tangerang Selatan</p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-14 px-4 py-14 sm:px-6">
        {/* Sejarah */}
        <section>
          <h2 className="mb-3 text-2xl font-bold text-navy">Sejarah Singkat</h2>
          <div className="mb-5 h-1 w-16 rounded bg-gold" />
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="leading-relaxed text-gray-700">
              Berdiri pada tahun 2006, SMAN 9 Kota Tangerang Selatan
              mengembangkan potensi peserta didik melalui pendidikan berkualitas,
              penguatan karakter, prestasi akademik dan nonakademik, teknologi
              informasi, serta budaya peduli lingkungan. Dengan semangat
              &ldquo;Berjuang, Berkarya, Berhasil&rdquo;, sekolah terus
              berkembang menjadi tempat belajar yang berkarakter, kreatif,
              inovatif, dan peduli lingkungan.
            </p>
          </div>
        </section>

        {/* Visi & Misi */}
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border-t-4 border-gold bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-bold text-navy">Visi</h2>
            <p className="italic leading-relaxed text-gray-700">
              &ldquo;Mewujudkan insan yang berkarakter positif, kreatif,
              inovatif, menguasai IPTEK, berwawasan global, serta berbudaya
              peduli lingkungan.&rdquo;
            </p>
          </div>

          <div className="rounded-xl border-t-4 border-navy bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-bold text-navy">Misi</h2>
            <ul className="space-y-2">
              {misi.map((item, index) => (
                <li key={index} className="flex gap-3 text-gray-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Alamat */}
        <section>
          <h2 className="mb-3 text-2xl font-bold text-navy">Alamat &amp; Kontak</h2>
          <div className="mb-5 h-1 w-16 rounded bg-gold" />
          <div className="grid gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-3">
            <div>
              <p className="mb-1 text-sm font-bold uppercase tracking-wide text-gold-dark">Alamat</p>
              <p className="text-sm leading-relaxed text-gray-700">
                Jl. Hidup Baru No. 31, Serua Raya, Kel. Serua, Kec. Ciputat, Kota
                Tangerang Selatan, Banten.
              </p>
            </div>
            <div>
              <p className="mb-1 text-sm font-bold uppercase tracking-wide text-gold-dark">Telepon</p>
              <p className="text-sm text-gray-700">(021) 74638445</p>
            </div>
            <div>
              <p className="mb-1 text-sm font-bold uppercase tracking-wide text-gold-dark">Email</p>
              <p className="break-words text-sm text-gray-700">admin@sman9tangsel.sch.id</p>
            </div>
          </div>
        </section>

        {/* Fasilitas */}
        <section>
          <h2 className="mb-3 text-2xl font-bold text-navy">Fasilitas</h2>
          <div className="mb-5 h-1 w-16 rounded bg-gold" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fasilitas.map((item) => (
              <div
                key={item.nama}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-gold hover:shadow-md"
              >
                <h3 className="mb-1 text-base font-bold text-navy">{item.nama}</h3>
                <p className="text-sm text-gray-600">{item.deskripsi}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Prestasi */}
        <section>
          <h2 className="mb-3 text-2xl font-bold text-navy">Prestasi</h2>
          <div className="mb-5 h-1 w-16 rounded bg-gold" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {prestasi.map((item) => (
              <div
                key={item.nama}
                className="rounded-xl border-l-4 border-gold bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="mb-1 text-base font-bold text-navy">{item.nama}</h3>
                <p className="text-sm text-gray-600">{item.deskripsi}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-500">
            *Data fasilitas dan prestasi di atas adalah contoh (dummy) dan dapat diganti dengan data resmi sekolah.
          </p>
        </section>
      </div>
    </>
  );
}
