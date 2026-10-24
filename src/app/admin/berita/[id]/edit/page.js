"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import BeritaForm from "@/components/BeritaForm";
import { useBerita } from "@/lib/beritaStore";

export default function EditBeritaPage() {
  const { id } = useParams();
  const { daftar, siap } = useBerita();
  const item = daftar.find((b) => String(b.id) === String(id));

  if (!siap) {
    return <p className="text-gray-500">Memuat data berita...</p>;
  }

  if (!item) {
    return (
      <div className="mx-auto max-w-xl py-16 text-center">
        <h1 className="mb-3 text-2xl font-bold text-navy">Berita tidak ditemukan</h1>
        <Link
          href="/admin"
          className="inline-block rounded-lg bg-navy px-6 py-3 text-sm font-bold text-white hover:bg-gold hover:text-navy"
        >
          Kembali ke Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="mb-1 text-2xl font-extrabold text-navy sm:text-3xl">Ubah Berita</h1>
      <p className="mb-6 text-sm text-gray-600">Perubahan langsung tampil di website setelah disimpan.</p>
      <BeritaForm item={item} />
    </div>
  );
}
