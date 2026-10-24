"use client";

import Link from "next/link";
import Foto from "@/components/Foto";
import { useBerita } from "@/lib/beritaStore";

export default function BeritaDetail({ id }) {
  const { daftar, siap } = useBerita();
  const item = daftar.find((b) => String(b.id) === String(id));

  if (!siap) {
    return (
      <p className="mx-auto max-w-3xl px-4 py-20 text-center text-gray-500">
        Memuat berita...
      </p>
    );
  }

  if (!item) {
    return (
      <section className="mx-auto max-w-xl px-4 py-24 text-center">
        <p className="mb-2 text-6xl font-extrabold text-gold">404</p>
        <h1 className="mb-3 text-2xl font-bold text-navy">Berita tidak ditemukan</h1>
        <p className="mb-6 text-gray-600">
          Berita yang Anda cari tidak tersedia atau sudah dihapus.
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

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link
        href="/berita"
        className="mb-6 inline-flex items-center rounded-lg border border-navy px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
      >
        &larr; Kembali ke Berita
      </Link>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <Foto
          src={item.gambar}
          alt={item.judul}
          sizes="(min-width: 768px) 768px, 100vw"
          priority
          className="h-48 sm:h-72"
        />

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
            {(item.konten || []).map((paragraf, index) => (
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
