import Image from "next/image";
import image from "../../assets/hero-im.png"


export default function HomeHero(){

    return(
        <div className="flex flex-col md:flex-row p-2 h-auto">

            <div className="flex flex-col md:flex-col  justify-around  pb-2 pr-2 ">
                <div className="text-main font-bold text-3xl ">
                    Welcome to where farmers gets empowered globally to thrive amidst climate changes and create a more sustainable future for themselves and the planet
                </div>
                <div className="body-text">
                    dotTerra offers a comprehensive suite of precision agriculture products and services that address the pressing needs of farmers (in Central Asia, Africa, North America and Europe). Our innovative technology and data-driven approach empower farmers to optimise their crop management, increase yields, and improve sustainability.
                </div>

            </div>

            <div className="">
                <Image src={image} alt="Photo" />

            </div>
        </div>
    )
}