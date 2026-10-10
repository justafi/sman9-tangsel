import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Kontak | SMAN 9 Kota Tangerang Selatan",
};

export default function KontakPage() {
  return (
    <>
      <section className="bg-navy py-14 text-center text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="mb-2 text-3xl font-extrabold sm:text-4xl">Kontak</h1>
          <p className="text-gold">Hubungi SMAN 9 Kota Tangerang Selatan</p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
