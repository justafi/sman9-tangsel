"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { login, sudahLogin } from "@/lib/auth";

export default function LoginAdminPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [lihat, setLihat] = useState(false);
  const [error, setError] = useState("");

  // Jika sudah login, langsung ke dashboard
  useEffect(() => {
    if (sudahLogin()) router.replace("/admin");
  }, [router]);

  const kirim = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      router.replace("/admin");
    } else {
      setError("Username atau password salah.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-navy px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border-t-4 border-gold bg-white p-8 shadow-xl">
        <div className="mb-6 text-center">
          <span className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-navy text-lg font-extrabold text-gold">
            S9
          </span>
          <h1 className="text-2xl font-extrabold text-navy">Login Admin</h1>
          <p className="mt-1 text-sm text-gray-500">SMAN 9 Kota Tangerang Selatan</p>
        </div>

        <form onSubmit={kirim} className="space-y-4">
          <div>
            <label htmlFor="username" className="mb-1 block text-sm font-semibold text-gray-700">
              Username
            </label>
            <input
              id="username"
              autoComplete="username"
              required
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError("");
              }}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-gold"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-semibold text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={lihat ? "text" : "password"}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                className="w-full rounded-lg border border-gray-300 py-2 pl-4 pr-20 text-sm outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-gold"
              />
              <button
                type="button"
                onClick={() => setLihat(!lihat)}
                className="absolute inset-y-0 right-0 px-4 text-xs font-semibold text-navy hover:text-gold-dark"
              >
                {lihat ? "Sembunyi" : "Lihat"}
              </button>
            </div>
          </div>

          {error && (
            <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700">{error}</p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-gold hover:text-navy"
          >
            Masuk
          </button>
        </form>

        <p className="mt-6 text-center text-sm">
          <Link href="/" className="font-semibold text-navy hover:text-gold-dark">
            &larr; Kembali ke website
          </Link>
        </p>
      </div>
    </div>
  );
}
