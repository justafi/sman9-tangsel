import Link from "next/link";
import BeritaList from "@/components/BeritaList";
import HeroSlider from "@/components/HeroSlider";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSlider>
        <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 md:py-28">
          <p className="mb-4 inline-block rounded-full border border-gold px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
            Selamat Datang
          </p>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            SMA Negeri 9 Kota Tangerang Selatan
          </h1>
          <p className="mb-2 text-xl font-bold text-gold sm:text-2xl">
            &ldquo;Berjuang, Berkarya, Berhasil.&rdquo;
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-base text-gray-200 sm:text-lg">
            Berkarakter, Kreatif, Inovatif, dan Peduli Lingkungan.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/about"
              className="w-full rounded-lg bg-gold px-6 py-3 text-sm font-bold text-navy transition-colors hover:bg-gold-dark sm:w-auto"
            >
              Tentang Kami
            </Link>
            <Link
              href="/berita"
              className="w-full rounded-lg border-2 border-gold px-6 py-3 text-sm font-bold text-gold transition-colors hover:bg-gold hover:text-navy sm:w-auto"
            >
              Berita Sekolah
            </Link>
          </div>
        </div>
      </HeroSlider>

      {/* Ucapan selamat datang & profil singkat */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-navy sm:text-3xl">
              Profil Singkat Sekolah
            </h2>
            <div className="mb-4 h-1 w-16 rounded bg-gold" />
            <p className="mb-4 leading-relaxed text-gray-700">
              Berdiri pada tahun 2006, SMAN 9 Kota Tangerang Selatan
              mengembangkan potensi peserta didik melalui pendidikan berkualitas,
              penguatan karakter, prestasi akademik dan nonakademik, teknologi
              informasi, serta budaya peduli lingkungan.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center font-semibold text-navy transition-colors hover:text-gold-dark"
            >
              Selengkapnya tentang sekolah &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <p className="text-2xl font-extrabold text-navy sm:text-3xl">2006</p>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">Tahun Berdiri</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <p className="text-2xl font-extrabold text-navy sm:text-3xl">4</p>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">Pilar Karakter</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <p className="text-2xl font-extrabold text-navy sm:text-3xl">1</p>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">Semangat Bersama</p>
            </div>
          </div>
        </div>
      </section>

      {/* Berita terbaru */}
      <section className="mx-auto max-w-6xl px-4 pb-6 sm:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">Berita Terbaru</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded bg-gold" />
        </div>

        <BeritaList batas={3} />

        <div className="mt-10 text-center">
          <Link
            href="/berita"
            className="inline-block rounded-lg bg-navy px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-gold hover:text-navy"
          >
            Lihat Semua Berita
          </Link>
        </div>
      </section>
    </>
  );
}
