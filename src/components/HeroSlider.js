"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Daftar foto slide. Ganti file di public/hero/ atau tambah/kurangi di sini.
const slides = [
  "/hero/hero-1.jpg",
  "/hero/hero-2.jpg",
  "/hero/hero-3.jpg",
];

const INTERVAL = 5000; // ganti slide setiap 5 detik

export default function HeroSlider({ children }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* Foto background yang bergeser satu per satu */}
      {slides.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={i === 0}
          unoptimized
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay navy supaya teks tetap terbaca */}
      <div className="absolute inset-0 bg-navy/70" />

      {/* Konten hero (teks & tombol) */}
      <div className="relative z-10">{children}</div>

      {/* Indikator slide */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-gold" : "w-2.5 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
