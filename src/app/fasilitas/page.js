import PageHeader from "@/components/PageHeader";
import Foto from "@/components/Foto";
import fasilitas from "@/data/fasilitas";

export const metadata = {
  title: "Fasilitas | SMAN 9 Kota Tangerang Selatan",
};

export default function FasilitasPage() {
  return (
    <>
      <PageHeader
        judul="Fasilitas"
        subjudul="Sarana dan prasarana pendukung pembelajaran"
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fasilitas.map((f) => (
            <article
              key={f.id}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg"
            >
              <Foto src={f.foto} alt={f.nama} className="h-48" />
              <div className="p-5">
                <div className="mb-1 flex items-start justify-between gap-2">
                  <h2 className="text-lg font-bold text-navy">{f.nama}</h2>
                  {f.contoh && (
                    <span className="shrink-0 rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
                      contoh
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  {f.deskripsi}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs text-gray-500">
      
        </p>
      </section>
    </>
  );
}
