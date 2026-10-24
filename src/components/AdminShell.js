"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import AdminSidebar from "@/components/AdminSidebar";
import { sudahLogin } from "@/lib/auth";

// Penjaga halaman admin: belum login -> diarahkan ke /admin/login.
export default function AdminShell({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [masuk, setMasuk] = useState(false);
  const halamanLogin = pathname === "/admin/login";

  useEffect(() => {
    const ok = sudahLogin();
    setMasuk(ok);
    if (!ok && !halamanLogin) router.replace("/admin/login");
  }, [pathname, halamanLogin, router]);

  // Halaman login tampil sendiri tanpa sidebar
  if (halamanLogin) return <>{children}</>;

  if (!masuk) {
    return (
      <p className="p-10 text-center text-sm text-gray-500">Memeriksa akses...</p>
    );
  }

  return (
    <div className="min-h-screen bg-soft lg:flex">
      <AdminSidebar />
      <div className="min-w-0 flex-1 p-4 sm:p-8">{children}</div>
    </div>
  );
}
