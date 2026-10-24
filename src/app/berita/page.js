import PageHeader from "@/components/PageHeader";
import BeritaList from "@/components/BeritaList";

export const metadata = {
  title: "Berita | SMAN 9 Kota Tangerang Selatan",
};

export default function BeritaPage() {
  return (
    <>
      <PageHeader
        judul="Berita Sekolah"
        subjudul="Informasi dan kegiatan terbaru SMAN 9 Tangsel"
      />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <BeritaList />
      </section>
    </>
  );
}
