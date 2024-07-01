import { Header } from "@/components/Header";
import { SignInForm } from "@/components/SignInForm";

export default function SignIn() {
  return (
    <main className="flex flex-col h-screen">
      <Header />
      <section className="w-full h-full flex items-center justify-center">
        <SignInForm />
      </section>
    </main>
  );
}
