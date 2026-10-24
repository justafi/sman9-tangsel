import AdminShell from "@/components/AdminShell";

export const metadata = {
  title: "Admin | SMAN 9 Kota Tangerang Selatan",
};

export default function AdminLayout({ children }) {
  return <AdminShell>{children}</AdminShell>;
}
