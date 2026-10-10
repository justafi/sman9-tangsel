import NewsCard from "@/components/NewsCard";
import berita from "@/data/berita";

export const metadata = {
  title: "Berita | SMAN 9 Kota Tangerang Selatan",
};

export default function BeritaPage() {
  return (
    <>
      <section className="bg-navy py-14 text-center text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="mb-2 text-3xl font-extrabold sm:text-4xl">Berita Sekolah</h1>
          <p className="text-gold">Informasi dan kegiatan terbaru SMAN 9 Tangsel</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {berita.map((item) => (
            <NewsCard key={item.id} berita={item} />
          ))}
        </div>
      </section>
    </>
  );
}
