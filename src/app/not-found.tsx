import Link from "next/link";
import { Shield } from "@/components/Seal";

export default function NotFound() {
  return (
    <section className="royal-field flex min-h-[70vh] flex-col items-center justify-center px-5 py-28 text-center text-white">
      <Shield uid="404" className="h-24 w-auto" />
      <h1 className="display pt-8 text-4xl">This page is not here.</h1>
      <p className="pt-4 text-white/75">Try the teaching, or come back to the seal.</p>
      <div className="flex flex-wrap justify-center gap-3 pt-8">
        <Link href="/" className="btn-gold">
          Home
        </Link>
        <Link href="/teaching" className="btn-outline">
          Teaching
        </Link>
      </div>
    </section>
  );
}
