import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SMAN 9 Kota Tangerang Selatan",
  description:
    "Website profil SMA Negeri 9 Kota Tangerang Selatan (SMAN 9 Tangsel). Berkarakter, Kreatif, Inovatif, dan Peduli Lingkungan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="flex min-h-screen flex-col bg-soft font-sans text-gray-800 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
