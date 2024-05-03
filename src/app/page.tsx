import { DataTableDemo } from "@/components/DataTable";
import { Header } from "@/components/Header";
import { SideBar } from "@/components/SideBar";

export default async function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Header />
      <section className="w-full h-full flex">
        <SideBar />
        <DataTableDemo />
      </section>
    </main>
  );
}
