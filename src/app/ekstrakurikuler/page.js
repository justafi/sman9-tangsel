import PageHeader from "@/components/PageHeader";
import Foto from "@/components/Foto";
import ekstrakurikuler from "@/data/ekstrakurikuler";

export const metadata = {
  title: "Ekstrakurikuler | SMAN 9 Kota Tangerang Selatan",
};

export default function EkstrakurikulerPage() {
  return (
    <>
      <PageHeader
        judul="Ekstrakurikuler"
        subjudul="Wadah mengembangkan minat, bakat, dan karakter peserta didik"
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ekstrakurikuler.map((e) => (
            <article
              key={e.id}
              className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg"
            >
              <Foto src={e.foto} alt={e.nama} className="h-48" />
              <div className="flex flex-1 flex-col p-5">
                <span className="mb-2 inline-block self-start rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy">
                  {e.kategori}
                </span>
                <h2 className="mb-2 text-lg font-bold text-navy">{e.nama}</h2>
                <p className="text-sm leading-relaxed text-gray-600">
                  {e.deskripsi}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
