"use client";

import { useState } from "react";

const EMAIL = "admin@sman9tangsel.sch.id";
const TELEPON = "(021) 74638445";
const TELEPON_LINK = "tel:+622174638445";
const ALAMAT =
  "Jl. Hidup Baru No. 31, Serua Raya, Kel. Serua, Kec. Ciputat, Kota Tangerang Selatan, Banten.";

// Peta Google Maps (tanpa API key)
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  "SMA Negeri 9 Kota Tangerang Selatan, Jl. Hidup Baru No. 31, Serua, Ciputat"
)}&output=embed`;

export default function ContactSection() {
  const [form, setForm] = useState({ nama: "", email: "", pesan: "" });
  const [terkirim, setTerkirim] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setTerkirim(false);
  };

  // Frontend saja: form membuka aplikasi email dengan isi yang sudah terisi.
  const handleSubmit = (e) => {
    e.preventDefault();
    const subjek = encodeURIComponent(`Pesan dari website - ${form.nama}`);
    const isi = encodeURIComponent(
      `Nama: ${form.nama}\nEmail: ${form.email}\n\n${form.pesan}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subjek}&body=${isi}`;
    setTerkirim(true);
  };

  return (
    <section id="kontak" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold text-navy sm:text-3xl">Hubungi Kami</h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded bg-gold" />
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Ada pertanyaan seputar sekolah atau SPMB? Silakan hubungi kami melalui
          kontak di bawah ini atau kirim pesan lewat formulir.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Info kontak + peta */}
        <div className="space-y-4">
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="mb-1 text-sm font-bold uppercase tracking-wide text-gold-dark">
              Alamat
            </p>
            <p className="text-sm leading-relaxed text-gray-700">{ALAMAT}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={TELEPON_LINK}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-gold hover:shadow-md"
            >
              <p className="mb-1 text-sm font-bold uppercase tracking-wide text-gold-dark">
                Telepon
              </p>
              <p className="text-sm text-gray-700">{TELEPON}</p>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-gold hover:shadow-md"
            >
              <p className="mb-1 text-sm font-bold uppercase tracking-wide text-gold-dark">
                Email
              </p>
              <p className="break-words text-sm text-gray-700">{EMAIL}</p>
            </a>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <iframe
              title="Lokasi SMAN 9 Kota Tangerang Selatan"
              src={MAP_SRC}
              className="h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Formulir */}
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border-t-4 border-gold bg-white p-6 shadow-sm"
        >
          <h3 className="mb-4 text-xl font-bold text-navy">Kirim Pesan</h3>

          <label className="mb-1 block text-sm font-semibold text-gray-700" htmlFor="nama">
            Nama
          </label>
          <input
            id="nama"
            name="nama"
            type="text"
            required
            value={form.nama}
            onChange={handleChange}
            placeholder="Nama lengkap"
            className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-gold"
          />

          <label className="mb-1 block text-sm font-semibold text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="nama@email.com"
            className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-gold"
          />

          <label className="mb-1 block text-sm font-semibold text-gray-700" htmlFor="pesan">
            Pesan
          </label>
          <textarea
            id="pesan"
            name="pesan"
            rows={5}
            required
            value={form.pesan}
            onChange={handleChange}
            placeholder="Tulis pesan Anda di sini..."
            className="mb-4 w-full resize-none rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-gold"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-gold hover:text-navy"
          >
            Kirim Pesan
          </button>

          {terkirim && (
            <p className="mt-3 rounded-lg bg-gold/20 px-4 py-2 text-sm text-navy">
              Aplikasi email Anda akan terbuka dengan pesan yang sudah terisi.
              Tekan kirim di sana untuk mengirimkannya.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
