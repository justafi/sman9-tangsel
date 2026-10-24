"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Foto from "@/components/Foto";
import { hapusBerita, resetBerita, useBerita } from "@/lib/beritaStore";

export default function AdminDashboardPage() {
  const { daftar, muat } = useBerita();
  const [cari, setCari] = useState("");
  const [pesan, setPesan] = useState("");

  // Pesan sukses dari halaman tambah / ubah
  useEffect(() => {
    try {
      const flash = window.sessionStorage.getItem("sman9_flash");
      if (flash) {
        setPesan(flash);
        window.sessionStorage.removeItem("sman9_flash");
      }
    } catch {
      /* abaikan */
    }
  }, []);

  const hapus = (item) => {
    if (!window.confirm(`Hapus berita "${item.judul}"?`)) return;
    try {
      hapusBerita(item.id);
      muat();
      setPesan("Berita berhasil dihapus.");
    } catch {
      setPesan("Gagal menghapus berita.");
    }
  };

  const reset = () => {
    if (
      !window.confirm(
        "Kembalikan semua berita ke data awal? Berita yang Anda tambah atau ubah akan hilang."
      )
    )
      return;
    resetBerita();
    muat();
    setPesan("Berita dikembalikan ke data awal.");
  };

  const kategoriUnik = new Set(daftar.map((b) => b.kategori)).size;
  const terbaru = daftar[0];
  const tampil = daftar.filter((b) =>
    b.judul.toLowerCase().includes(cari.trim().toLowerCase())
  );

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold text-navy sm:text-3xl">Dashboard Admin</h1>
          <p className="text-sm text-gray-600">Kelola berita yang tampil di website sekolah.</p>
        </div>
        <Link
          href="/admin/berita/tambah"
          className="rounded-lg bg-navy px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-gold hover:text-navy"
        >
          + Tambah Berita
        </Link>
      </div>

      {pesan && (
        <p className="mb-4 rounded-lg bg-gold/20 px-4 py-3 text-sm font-semibold text-navy">
          {pesan}
        </p>
      )}

      {/* Statistik */}
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border-t-4 border-gold bg-white p-5 shadow-sm">
          <p className="text-3xl font-extrabold text-navy">{daftar.length}</p>
          <p className="text-sm text-gray-500">Total Berita</p>
        </div>
        <div className="rounded-xl border-t-4 border-navy bg-white p-5 shadow-sm">
          <p className="text-3xl font-extrabold text-navy">{kategoriUnik}</p>
          <p className="text-sm text-gray-500">Kategori</p>
        </div>
        <div className="rounded-xl border-t-4 border-gold bg-white p-5 shadow-sm">
          <p className="truncate text-base font-bold text-navy">{terbaru ? terbaru.tanggal : "-"}</p>
          <p className="text-sm text-gray-500">Berita Terbaru</p>
        </div>
      </div>

      {/* Daftar berita */}
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 p-4">
          <h2 className="text-lg font-bold text-navy">Daftar Berita</h2>
          <input
            value={cari}
            onChange={(e) => setCari(e.target.value)}
            placeholder="Cari judul berita..."
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-navy focus:ring-2 focus:ring-gold sm:w-64"
          />
        </div>

        {tampil.length === 0 ? (
          <p className="p-8 text-center text-gray-500">Tidak ada berita yang cocok.</p>
        ) : (
          <ul className="divide-y divide-gray-100">
            {tampil.map((b) => (
              <li key={b.id} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
                <Foto
                  src={b.gambar}
                  alt={b.judul}
                  sizes="96px"
                  className="h-20 w-full shrink-0 rounded-lg sm:w-32"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-bold leading-snug text-navy">{b.judul}</p>
                  <p className="mt-1 text-xs text-gray-500">
                    <span className="mr-2 rounded-full bg-gold px-2 py-0.5 font-semibold text-navy">
                      {b.kategori}
                    </span>
                    {b.tanggal}
                  </p>
                </div>
                <div className="flex shrink-0 gap-2 text-sm font-semibold">
                  <Link
                    href={`/berita/${b.id}`}
                    className="rounded-lg border border-gray-300 px-3 py-2 text-gray-700 hover:border-navy hover:text-navy"
                  >
                    Lihat
                  </Link>
                  <Link
                    href={`/admin/berita/${b.id}/edit`}
                    className="rounded-lg bg-navy px-3 py-2 text-white hover:bg-gold hover:text-navy"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    onClick={() => hapus(b)}
                    className="rounded-lg border border-red-300 px-3 py-2 text-red-600 hover:bg-red-600 hover:text-white"
                  >
                    Hapus
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500">
        <p>Data disimpan di localStorage browser ini, jadi hanya terlihat di browser dan perangkat yang sama.</p>
        <button
          type="button"
          onClick={reset}
          className="font-semibold text-red-600 hover:underline"
        >
          Reset ke data awal
        </button>
      </div>
    </div>
  );
}
