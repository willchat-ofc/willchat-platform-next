import { Header } from "@/components/Header";
import { SignInForm } from "@/components/SignInForm";
import { SignUpForm } from "@/components/SignUpForm";

export default function Home() {
  return (
    <main className="h-screen flex flex-col h-screen">
      <Header />
      <section className="w-full h-full flex items-center justify-center">
        <SignInForm />
      </section>
    </main>
  );
}
