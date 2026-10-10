"use client";

import { useEffect, useState } from "react";
import Foto from "@/components/Foto";
import galeri, { album } from "@/data/galeri";

export default function GaleriGrid() {
  const [aktif, setAktif] = useState("semua");
  const [terpilih, setTerpilih] = useState(null);

  const daftar =
    aktif === "semua" ? galeri : galeri.filter((f) => f.album === aktif);

  // Tutup lightbox dengan tombol Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setTerpilih(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      {/* Filter album */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {album.map((a) => (
          <button
            key={a.id}
            type="button"
            onClick={() => setAktif(a.id)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              aktif === a.id
                ? "border-navy bg-navy text-white"
                : "border-gray-300 bg-white text-navy hover:border-gold hover:bg-gold"
            }`}
          >
            {a.nama}
          </button>
        ))}
      </div>

      {/* Grid foto */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {daftar.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setTerpilih(f)}
            className="group overflow-hidden rounded-xl border border-gray-200 bg-white text-left shadow-sm transition-all hover:-translate-y-1 hover:border-gold hover:shadow-lg"
          >
            <Foto
              src={f.src}
              alt={f.judul}
              className="aspect-[4/3] transition-transform duration-300 group-hover:scale-105"
            />
            <p className="px-3 py-2 text-sm font-semibold text-navy">{f.judul}</p>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {terpilih && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setTerpilih(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Tutup"
              onClick={() => setTerpilih(null)}
              className="absolute -top-10 right-0 rounded-lg bg-gold px-3 py-1 text-sm font-bold text-navy hover:bg-gold-dark"
            >
              Tutup
            </button>
            <Foto
              src={terpilih.src}
              alt={terpilih.judul}
              sizes="100vw"
              className="aspect-[16/10] rounded-xl"
            />
            <p className="mt-3 text-center font-semibold text-white">
              {terpilih.judul}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
