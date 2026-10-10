import PageHeader from "@/components/PageHeader";
import Foto from "@/components/Foto";
import guru from "@/data/guru";

export const metadata = {
  title: "Guru & Tenaga Pendidik | SMAN 9 Kota Tangerang Selatan",
};

export default function GuruPage() {
  return (
    <>
      <PageHeader
        judul="Guru & Tenaga Pendidik"
        subjudul="Pendidik yang mendampingi peserta didik SMAN 9 Tangsel"
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {guru.map((g) => (
            <article
              key={g.id}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg"
            >
              <Foto
                src={g.foto}
                alt={g.nama}
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="aspect-[4/5]"
              />
              <div className="p-4">
                <h2 className="text-base font-bold leading-snug text-navy">
                  {g.nama}
                </h2>
                <p className="mt-1 text-sm text-gray-600">{g.jabatan}</p>
                {g.mapel && (
                  <span className="mt-2 inline-block rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy">
                    {g.mapel}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Daftar ini menampilkan sebagian pegawai. Data lengkap tersedia di{" "}
          <a
            href="https://www.sman9tangsel.sch.id/pegawai"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-navy underline hover:text-gold-dark"
          >
            situs resmi sekolah
          </a>
          .
        </p>
      </section>
    </>
  );
}
