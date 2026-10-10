export default function PageHeader({ judul, subjudul }) {
  return (
    <section className="bg-navy py-14 text-center text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h1 className="mb-2 text-3xl font-extrabold sm:text-4xl">{judul}</h1>
        {subjudul && <p className="text-gold">{subjudul}</p>}
      </div>
    </section>
  );
}
