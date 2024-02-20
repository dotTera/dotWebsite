import Navbar from "@/app/components/Navbar";
import HomeHero from "@/app/components/HomeHero";

import ProductSection from "@/app/components/ProductSect";
import WhyUsSection from "@/app/components/WhyUsSection";
import BlogSection from "@/app/components/BlogSection";
import Footer from "@/app/components/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  ">
        <Navbar/>
        <HomeHero/>
        <ProductSection/>
        <WhyUsSection/>
        <BlogSection/>
        <div className="bg-main">
            <Footer/>

        </div>




    </main>
  )
}
