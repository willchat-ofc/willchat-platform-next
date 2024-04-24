import { Header } from "@/components/Header";
import { SignInForm } from "@/components/SignInForm";

export default function Home() {
  return (
    <main className="h-screen">
      <Header />
      <SignInForm />
    </main>
  );
}
