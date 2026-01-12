import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import BlockchainAnimation from "@/components/BlockchainAnimation";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <BlockchainAnimation />
      <Footer />
    </main>
  );
}
