import HomeHero from "../components/home-hero/HomeHero.jsx"
import ProductDetailCard from "../components/product-detail/ProductDetailCard.jsx"
import FAQ from "../components/faq/FAQ.jsx"
import ContactForm from "../components/contact-us/ContactUs.jsx"
import Footer from "../components/footer/Footer.jsx"
import DotNumbers from "../components/dot-numbers/DotNumbers.jsx"
// import Pricing from  "../components/pricing/Pricing.jsx"
import Offer from "../components/product-detail/Offer.jsx"

export default function Home(){
    return(
        <>
          
          <HomeHero/>
          {/*<ProductDetailCard/>*/}
            <Offer/>
           {/*<CustomerReviews/>*/}
           {/* <DotNumbers/>*/}
            <ProductDetailCard/>
            <FAQ/>
           {/* <Pricing/>*/}
            <ContactForm/>
            <Footer/>

          </>
    )
}