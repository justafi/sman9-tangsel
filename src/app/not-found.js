import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="mb-2 text-6xl font-extrabold text-gold">404</p>
      <h1 className="mb-3 text-2xl font-bold text-navy">Halaman tidak ditemukan</h1>
      <p className="mb-6 text-gray-600">
        Berita atau halaman yang Anda cari tidak tersedia.
      </p>
      <Link
        href="/berita"
        className="inline-block rounded-lg bg-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-gold hover:text-navy"
      >
        Kembali ke Berita
      </Link>
    </section>
  );
}
