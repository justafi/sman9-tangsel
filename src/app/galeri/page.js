import PageHeader from "@/components/PageHeader";
import GaleriGrid from "@/components/GaleriGrid";

export const metadata = {
  title: "Galeri | SMAN 9 Kota Tangerang Selatan",
};

export default function GaleriPage() {
  return (
    <>
      <PageHeader
        judul="Galeri"
        subjudul="Dokumentasi kegiatan, prestasi, dan lingkungan SMAN 9 Tangsel"
      />
      <GaleriGrid />
    </>
  );
}
