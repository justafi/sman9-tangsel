"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const menu = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Berita", href: "/berita" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b-4 border-gold bg-navy shadow-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo / Nama Sekolah */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Logo SMAN 9 Tangsel"
            width={44}
            unoptimized
            height={44}
            className="h-11 w-11 rounded-full border-2 border-gold bg-white object-cover"
          />
          <span className="leading-tight">
            <span className="block text-base font-bold text-white sm:text-lg">
              SMAN 9 Tangsel
            </span>
            <span className="block text-xs font-medium text-gold">
              Kota Tangerang Selatan
            </span>
          </span>
        </Link>

        {/* Menu desktop */}
        <ul className="hidden items-center gap-2 md:flex">
          {menu.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-200 hover:bg-gold hover:text-navy ${
                  isActive(item.href)
                    ? "bg-gold text-navy"
                    : "text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Tombol menu mobile */}
        <button
          type="button"
          aria-label="Buka menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-gold p-2 text-gold transition-colors hover:bg-gold hover:text-navy md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-navy-light bg-navy-dark px-4 py-3 md:hidden">
          {menu.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-4 py-2 text-sm font-semibold transition-colors hover:bg-gold hover:text-navy ${
                  isActive(item.href) ? "bg-gold text-navy" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
