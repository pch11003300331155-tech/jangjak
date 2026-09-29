import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStatement from "@/components/BrandStatement";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import Supply from "@/components/Supply";
import Branches from "@/components/Branches";
import TongnamuTeaser from "@/components/TongnamuTeaser";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BrandStatement />
      <Products />
      <TongnamuTeaser />
      <Gallery />
      <Features />
      <Process />
      <Reviews />
      <Supply />
      <Branches />
      <CtaBanner />
      <Footer />
    </main>
  );
}
