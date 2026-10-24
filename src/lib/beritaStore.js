"use client";

import { useCallback, useEffect, useState } from "react";
import dataAwal from "@/data/berita";

// Semua berita disimpan di localStorage browser dengan kunci ini.
// Jika belum ada isinya, dipakai data awal dari src/data/berita.js.
export const STORAGE_KEY = "sman9_berita";

export const KATEGORI = [
  "Kegiatan Sekolah",
  "SPMB 2026",
  "Prestasi",
  "Pengumuman",
  "Lainnya",
];

const BULAN = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

/* ---------- Helper tanggal ---------- */

export function formatTanggal(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${BULAN[m - 1]} ${y}`;
}

export function isoDariTanggal(teks) {
  const cocok = /^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/.exec(teks || "");
  if (!cocok) return "";
  const idx = BULAN.findIndex((b) => b.toLowerCase() === cocok[2].toLowerCase());
  if (idx < 0) return "";
  return `${cocok[3]}-${String(idx + 1).padStart(2, "0")}-${cocok[1].padStart(2, "0")}`;
}

export function hariIniISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

/* ---------- Baca & tulis localStorage ---------- */

// Urutkan dari tanggal terbaru; jika tanggal sama, yang dibuat belakangan di atas.
function urutkan(daftar) {
  const iso = (b) => b.tanggalISO || isoDariTanggal(b.tanggal);
  return [...daftar].sort(
    (a, b) => iso(b).localeCompare(iso(a)) || Number(b.id) - Number(a.id)
  );
}

export function getBerita() {
  if (typeof window === "undefined") return urutkan(dataAwal);
  try {
    const mentah = window.localStorage.getItem(STORAGE_KEY);
    if (!mentah) return urutkan(dataAwal);
    const data = JSON.parse(mentah);
    return Array.isArray(data) ? urutkan(data) : urutkan(dataAwal);
  } catch {
    return urutkan(dataAwal);
  }
}

// Bisa melempar error jika penyimpanan penuh (QuotaExceededError).
function simpan(daftar) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(daftar));
}

export function tambahBerita(data) {
  const baru = { ...data, id: Date.now() };
  simpan([baru, ...getBerita()]);
  return baru;
}

export function ubahBerita(id, data) {
  simpan(
    getBerita().map((b) => (String(b.id) === String(id) ? { ...b, ...data, id: b.id } : b))
  );
}

export function hapusBerita(id) {
  simpan(getBerita().filter((b) => String(b.id) !== String(id)));
}

export function resetBerita() {
  window.localStorage.removeItem(STORAGE_KEY);
}

/* ---------- Hook untuk komponen ---------- */

// siap = false sampai data localStorage selesai dibaca di browser.
export function useBerita() {
  const [daftar, setDaftar] = useState(() => urutkan(dataAwal));
  const [siap, setSiap] = useState(false);

  const muat = useCallback(() => {
    setDaftar(getBerita());
    setSiap(true);
  }, []);

  useEffect(() => {
    muat();
    const onStorage = (e) => {
      if (e.key === STORAGE_KEY || e.key === null) muat();
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [muat]);

  return { daftar, siap, muat };
}
