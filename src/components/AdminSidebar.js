"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { logout } from "@/lib/auth";

const menu = [
  { label: "Dashboard", href: "/admin" },
  { label: "Tambah Berita", href: "/admin/berita/tambah" },
  { label: "Lihat Website", href: "/" },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const keluar = () => {
    logout();
    router.replace("/admin/login");
  };

  return (
    <aside className="border-b-4 border-gold bg-navy text-white lg:min-h-screen lg:w-64 lg:shrink-0 lg:border-b-0 lg:border-r-4">
      <div className="px-5 py-4 lg:py-6">
        <p className="text-lg font-extrabold text-white">Admin Panel</p>
        <p className="text-xs font-medium text-gold">SMAN 9 Tangsel</p>
      </div>

      <nav className="flex gap-2 overflow-x-auto px-4 pb-4 lg:flex-col lg:pb-0">
        {menu.map((item) => {
          const aktif = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition-colors hover:bg-gold hover:text-navy ${
                aktif ? "bg-gold text-navy" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
        <button
          type="button"
          onClick={keluar}
          className="whitespace-nowrap rounded-lg border border-red-300 px-4 py-2 text-left text-sm font-semibold text-red-200 transition-colors hover:bg-red-600 hover:text-white lg:mt-4"
        >
          Keluar
        </button>
      </nav>
    </aside>
  );
}
