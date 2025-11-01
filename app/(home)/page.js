
import { CTA } from "./_components/cta";
import { Features } from "./_components/features";
import { Hero } from "./_components/Hero";
import { Workflow } from "./_components/workflow";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Hero />
      <Features />
      <Workflow />
      <CTA />
    </main>
  )
};