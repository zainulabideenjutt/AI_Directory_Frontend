import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedTools from "../components/FeaturedTools";
import Stats from "../components/Stats";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Featured_Video from "@/components/FeaturedViideo";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Featured_Video />
        {/* <Hero /> */}
        <Categories />
        <FeaturedTools />
        <Stats />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
