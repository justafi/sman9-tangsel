"use client";

import NewsCard from "@/components/NewsCard";
import { useBerita } from "@/lib/beritaStore";

// Grid kartu berita. Prop "batas" untuk membatasi jumlah (mis. 3 di Home).
export default function BeritaList({ batas }) {
  const { daftar } = useBerita();
  const tampil = batas ? daftar.slice(0, batas) : daftar;

  if (tampil.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center text-gray-500">
        Belum ada berita.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tampil.map((item) => (
        <NewsCard key={item.id} berita={item} />
      ))}
    </div>
  );
}
