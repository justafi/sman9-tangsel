import Link from "next/link";

export default function Footer() {
  const tahun = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t-4 border-gold bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        {/* Identitas */}
        <div>
          <h3 className="mb-2 text-lg font-bold text-gold">SMAN 9 Tangsel</h3>
          <p className="text-sm leading-relaxed text-gray-200">
            SMA Negeri 9 Kota Tangerang Selatan
          </p>
          <p className="mt-3 text-sm italic text-gold-light">
            &ldquo;Berjuang, Berkarya, Berhasil.&rdquo;
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="mb-2 text-lg font-bold text-gold">Navigasi</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/" className="text-gray-200 transition-colors hover:text-gold">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-200 transition-colors hover:text-gold">
                About
              </Link>
            </li>
            <li>
              <Link href="/berita" className="text-gray-200 transition-colors hover:text-gold">
                Berita
              </Link>
            </li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="mb-2 text-lg font-bold text-gold">Kontak</h3>
          <address className="space-y-1 text-sm not-italic leading-relaxed text-gray-200">
            <p>
              Jl. Hidup Baru No. 31, Serua Raya, Kel. Serua, Kec. Ciputat, Kota
              Tangerang Selatan, Banten.
            </p>
            <p>Telp: (021) 74638445</p>
            <p>Email: admin@sman9tangsel.sch.id</p>
          </address>
        </div>
      </div>

      <div className="border-t border-navy-light bg-navy-dark py-4 text-center text-xs text-gray-300">
        &copy; {tahun} SMA Negeri 9 Kota Tangerang Selatan. Seluruh hak cipta dilindungi.
      </div>
    </footer>
  );
}
