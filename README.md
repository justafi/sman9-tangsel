# Website Profil SMAN 9 Kota Tangerang Selatan

Frontend saja: Next.js (App Router) + Tailwind CSS, murni JavaScript.
Tanpa TypeScript, database, API, backend, maupun autentikasi.

## Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Struktur

```
src/
  app/
    layout.js            # Navbar + {children} + Footer
    page.js              # Home
    about/page.js        # About
    berita/page.js       # Daftar berita
    berita/[id]/page.js  # Detail berita (dynamic route)
    guru/page.js         # Guru & tenaga pendidik
    fasilitas/page.js    # Fasilitas
    ekstrakurikuler/page.js
    prestasi/page.js
    galeri/page.js       # Galeri + filter album + lightbox
    kontak/page.js       # Kontak + formulir (mailto)
  components/
    Navbar.js
    Footer.js
    NewsCard.js
  data/
    berita.js            # Data berita statis
    guru.js  prestasi.js  fasilitas.js  ekstrakurikuler.js  galeri.js
```

Warna custom (navy, gold, soft) ada di `tailwind.config.js`.
Isi berita, fasilitas, dan prestasi adalah data contoh; ganti dengan data resmi sekolah.

## Mengganti foto

Semua foto ada di folder `public/`. Foto saat ini hanya gambar contoh; ganti dengan foto asli
dengan nama file yang sama (atau ubah path-nya di `src/data/berita.js`).

- `public/logo.png` : logo sekolah di Navbar (disarankan persegi, mis. 256x256)
- `public/berita/*.jpg` : foto tiap berita (disarankan rasio 16:9, mis. 1200x675, di bawah 300 KB)

Untuk berita baru, tambahkan field `gambar: "/berita/nama-file.jpg"` pada data berita.

## Dashboard Admin (berita)

- `/admin` : dashboard, daftar berita, cari, ubah, hapus, reset ke data awal
- `/admin/berita/tambah` : form tambah berita (judul, kategori, tanggal, penulis, ringkasan, isi, foto)
- `/admin/berita/[id]/edit` : form ubah berita

Berita disimpan di **localStorage** browser (kunci `sman9_berita`). Halaman Home, `/berita`, dan
`/berita/[id]` membaca data dari sana; jika kosong dipakai data awal `src/data/berita.js`.
Karena localStorage, perubahan hanya terlihat di browser dan perangkat yang sama.
