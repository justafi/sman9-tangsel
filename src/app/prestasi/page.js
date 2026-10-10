import PageHeader from "@/components/PageHeader";
import prestasi from "@/data/prestasi";

export const metadata = {
  title: "Prestasi | SMAN 9 Kota Tangerang Selatan",
};

const kategori = ["Olahraga", "Seni", "Akademik"];

function warnaJuara(juara) {
  if (juara === "Juara 1") return "bg-gold text-navy";
  if (juara === "Juara 2") return "bg-gray-300 text-navy";
  if (juara === "Juara 3") return "bg-amber-700 text-white";
  return "bg-navy text-white";
}

export default function PrestasiPage() {
  return (
    <>
      <PageHeader
        judul="Prestasi"
        subjudul="Capaian akademik dan nonakademik peserta didik SMAN 9 Tangsel"
      />

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-14 sm:px-6">
        {kategori.map((kat) => {
          const items = prestasi.filter((p) => p.kategori === kat);
          if (items.length === 0) return null;
          return (
            <section key={kat}>
              <h2 className="mb-3 text-2xl font-bold text-navy">{kat}</h2>
              <div className="mb-5 h-1 w-16 rounded bg-gold" />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p) => (
                  <article
                    key={p.id}
                    className="rounded-xl border-l-4 border-gold bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <span
                      className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-bold ${warnaJuara(
                        p.juara
                      )}`}
                    >
                      {p.juara}
                    </span>
                    <h3 className="text-lg font-bold text-navy">{p.lomba}</h3>
                    <p className="mt-1 text-sm text-gray-600">{p.ajang}</p>
                  </article>
                ))}
              </div>
            </section>
          );
        })}

        <p className="text-xs text-gray-500">
          
        </p>
      </div>
    </>
  );
}
