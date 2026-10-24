"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Foto from "@/components/Foto";
import {
  KATEGORI,
  formatTanggal,
  hariIniISO,
  isoDariTanggal,
  tambahBerita,
  ubahBerita,
} from "@/lib/beritaStore";

// Perkecil foto agar muat di localStorage (batas sekitar 5 MB untuk seluruh data).
function perkecilGambar(file, lebarMaks = 1000, kualitas = 0.75) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const img = new window.Image();
      img.onerror = reject;
      img.onload = () => {
        const skala = Math.min(1, lebarMaks / img.width);
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(img.width * skala);
        canvas.height = Math.round(img.height * skala);
        canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", kualitas));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-gold";
const labelClass = "mb-1 block text-sm font-semibold text-gray-700";

// Form tambah / ubah berita. Jika prop "item" ada, form berjalan dalam mode ubah.
export default function BeritaForm({ item }) {
  const router = useRouter();
  const mode = item ? "ubah" : "tambah";

  const [form, setForm] = useState({
    judul: item?.judul || "",
    kategori: item?.kategori || KATEGORI[0],
    tanggalISO: item ? item.tanggalISO || isoDariTanggal(item.tanggal) : hariIniISO(),
    penulis: item?.penulis || "Admin SMAN 9 Tangsel",
    ringkasan: item?.ringkasan || "",
    konten: item?.konten ? item.konten.join("\n\n") : "",
  });
  const [gambar, setGambar] = useState(item?.gambar || "");
  const [error, setError] = useState("");
  const [memproses, setMemproses] = useState(false);

  const opsiKategori = KATEGORI.includes(form.kategori)
    ? KATEGORI
    : [form.kategori, ...KATEGORI];

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const pilihFoto = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("File harus berupa gambar (JPG, PNG, WEBP).");
      return;
    }
    try {
      setGambar(await perkecilGambar(file));
      setError("");
    } catch {
      setError("Gambar tidak bisa dibaca. Coba file lain.");
    }
  };

  const kirim = (e) => {
    e.preventDefault();
    setMemproses(true);
    setError("");

    const konten = form.konten
      .split(/\n{2,}/)
      .map((p) => p.trim())
      .filter(Boolean);

    const data = {
      judul: form.judul.trim(),
      kategori: form.kategori,
      tanggalISO: form.tanggalISO,
      tanggal: form.tanggalISO ? formatTanggal(form.tanggalISO) : item?.tanggal || "",
      penulis: form.penulis.trim() || "Admin SMAN 9 Tangsel",
      ringkasan: form.ringkasan.trim(),
      konten,
      gambar,
    };

    try {
      if (mode === "tambah") tambahBerita(data);
      else ubahBerita(item.id, data);
      window.sessionStorage.setItem(
        "sman9_flash",
        mode === "tambah" ? "Berita berhasil ditambahkan." : "Berita berhasil diperbarui."
      );
      router.push("/admin");
    } catch {
      setError(
        "Gagal menyimpan. Penyimpanan browser mungkin penuh; coba pakai foto yang lebih kecil atau hapus berita lama."
      );
      setMemproses(false);
    }
  };

  return (
    <form
      onSubmit={kirim}
      className="grid gap-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8 lg:grid-cols-3"
    >
      <div className="space-y-4 lg:col-span-2">
        <div>
          <label htmlFor="judul" className={labelClass}>Judul</label>
          <input
            id="judul"
            name="judul"
            required
            value={form.judul}
            onChange={ubah}
            placeholder="Judul berita"
            className={inputClass}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="kategori" className={labelClass}>Kategori</label>
            <select
              id="kategori"
              name="kategori"
              value={form.kategori}
              onChange={ubah}
              className={inputClass}
            >
              {opsiKategori.map((k) => (
                <option key={k} value={k}>{k}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="tanggalISO" className={labelClass}>Tanggal</label>
            <input
              id="tanggalISO"
              name="tanggalISO"
              type="date"
              required
              value={form.tanggalISO}
              onChange={ubah}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="penulis" className={labelClass}>Penulis</label>
          <input
            id="penulis"
            name="penulis"
            value={form.penulis}
            onChange={ubah}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="ringkasan" className={labelClass}>Ringkasan</label>
          <textarea
            id="ringkasan"
            name="ringkasan"
            required
            rows={3}
            value={form.ringkasan}
            onChange={ubah}
            placeholder="Satu atau dua kalimat yang tampil di kartu berita"
            className={`${inputClass} resize-none`}
          />
        </div>

        <div>
          <label htmlFor="konten" className={labelClass}>Isi Berita</label>
          <textarea
            id="konten"
            name="konten"
            required
            rows={10}
            value={form.konten}
            onChange={ubah}
            placeholder="Tulis isi berita. Pisahkan paragraf dengan satu baris kosong."
            className={inputClass}
          />
          <p className="mt-1 text-xs text-gray-500">
            Pisahkan paragraf dengan satu baris kosong (tekan Enter dua kali).
          </p>
        </div>
      </div>

      {/* Foto */}
      <div className="space-y-3">
        <p className={labelClass}>Foto Berita</p>
        <Foto src={gambar} alt="Pratinjau foto" sizes="400px" className="aspect-video rounded-lg border border-gray-200" />
        <input
          type="file"
          accept="image/*"
          onChange={pilihFoto}
          className="block w-full text-sm text-gray-600 file:mr-3 file:rounded-lg file:border-0 file:bg-navy file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-gold hover:file:text-navy"
        />
        {gambar && (
          <button
            type="button"
            onClick={() => setGambar("")}
            className="text-sm font-semibold text-red-600 hover:underline"
          >
            Hapus foto
          </button>
        )}
        <p className="text-xs text-gray-500">
          Opsional. Foto otomatis diperkecil (maks. lebar 1000 px) agar muat di penyimpanan browser.
        </p>
      </div>

      {error && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 lg:col-span-3">
          {error}
        </p>
      )}

      <div className="flex flex-wrap gap-3 lg:col-span-3">
        <button
          type="submit"
          disabled={memproses}
          className="rounded-lg bg-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-gold hover:text-navy disabled:opacity-60"
        >
          {mode === "tambah" ? "Simpan Berita" : "Simpan Perubahan"}
        </button>
        <Link
          href="/admin"
          className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-navy hover:text-navy"
        >
          Batal
        </Link>
      </div>
    </form>
  );
}
