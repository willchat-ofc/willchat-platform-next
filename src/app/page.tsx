import { Header } from "@/components/Header";
import { SideBar } from "@/components/SideBar";
import { SignInForm } from "@/components/SignInForm";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Header />
      <section className="w-full h-full flex">
        <SideBar />
      </section>
    </main>
  );
}
