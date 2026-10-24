import BeritaForm from "@/components/BeritaForm";

export default function TambahBeritaPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="mb-1 text-2xl font-extrabold text-navy sm:text-3xl">Tambah Berita</h1>
      <p className="mb-6 text-sm text-gray-600">
        Berita yang disimpan akan langsung tampil di halaman Home dan Berita.
      </p>
      <BeritaForm />
    </div>
  );
}
