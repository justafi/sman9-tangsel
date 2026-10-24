import BeritaDetail from "@/components/BeritaDetail";

export const metadata = {
  title: "Detail Berita | SMAN 9 Kota Tangerang Selatan",
};

// Berita bisa ditambah lewat dashboard admin (localStorage), jadi halaman
// detail dirender di browser berdasarkan params.id.
export default function DetailBeritaPage({ params }) {
  const { id } = params;
  return <BeritaDetail id={id} />;
}
