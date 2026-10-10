import Link from "next/link";
import Image from "next/image";

export default function NewsCard({ berita }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg">
      {/* Gambar berita (dari folder public/berita) */}
      <div className="relative h-44 bg-gradient-to-br from-navy to-navy-light">
        {berita.gambar ? (
          <Image
            src={berita.gambar.replace(/^\/public/, "")}
            alt={berita.judul}
            fill
            unoptimized
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <span className="flex h-full items-center justify-center text-4xl font-extrabold text-gold/80">
            S9
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center justify-between gap-2 text-xs">
          <span className="rounded-full bg-gold px-3 py-1 font-semibold text-navy">
            {berita.kategori}
          </span>
          <span className="text-gray-500">{berita.tanggal}</span>
        </div>

        <h3 className="mb-2 text-lg font-bold leading-snug text-navy">
          {berita.judul}
        </h3>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">
          {berita.ringkasan}
        </p>

        <Link
          href={`/berita/${berita.id}`}
          className="mt-auto inline-flex items-center text-sm font-semibold text-navy transition-colors hover:text-gold-dark"
        >
          Baca selengkapnya &rarr;
        </Link>
      </div>
    </article>
  );
}
