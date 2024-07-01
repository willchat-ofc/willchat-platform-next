import { Header } from "@/components/Header";
import { SignUpForm } from "@/components/SignUpForm";

export default function SignIn() {
  return (
    <main className="flex flex-col h-screen">
      <Header />
      <section className="w-full h-full flex items-center justify-center">
        <SignUpForm />
      </section>
    </main>
  );
}
