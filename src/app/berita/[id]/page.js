import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import berita from "@/data/berita";

// Membuat halaman statis untuk setiap id berita
export function generateStaticParams() {
  return berita.map((item) => ({ id: String(item.id) }));
}

export function generateMetadata({ params }) {
  const item = berita.find((b) => b.id === Number(params.id));
  return {
    title: item
      ? `${item.judul} | SMAN 9 Tangsel`
      : "Berita tidak ditemukan | SMAN 9 Tangsel",
  };
}

export default function DetailBeritaPage({ params }) {
  const { id } = params;
  const item = berita.find((b) => b.id === Number(id));

  if (!item) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link
        href="/berita"
        className="mb-6 inline-flex items-center rounded-lg border border-navy px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
      >
        &larr; Kembali ke Berita
      </Link>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="relative h-48 bg-gradient-to-br from-navy to-navy-light sm:h-72">
          {item.gambar ? (
            <Image
              src={item.gambar.replace(/^\/public/, "")}
              alt={item.judul}
              fill
              unoptimized
              priority
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          ) : (
            <span className="flex h-full items-center justify-center text-6xl font-extrabold text-gold/80">
              S9
            </span>
          )}
        </div>

        <div className="p-6 sm:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-gold px-3 py-1 font-semibold text-navy">
              {item.kategori}
            </span>
            <span className="text-gray-500">{item.tanggal}</span>
            <span className="text-gray-400">&bull;</span>
            <span className="text-gray-500">{item.penulis}</span>
          </div>

          <h1 className="mb-6 text-2xl font-extrabold leading-snug text-navy sm:text-3xl">
            {item.judul}
          </h1>

          <div className="space-y-4">
            {item.konten.map((paragraf, index) => (
              <p key={index} className="leading-relaxed text-gray-700">
                {paragraf}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
