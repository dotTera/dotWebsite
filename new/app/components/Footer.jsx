import Image from "next/image";
import im from "../../assets/footer.png"


export default function Footer(){
    return(
        <div className="relative md:h-[200px] h-full  bg-main ">
            <Image src={im} alt="Photo Missing" className="h-full w-full  md:block"/>
            <div className="absolute inset-2  md:inset-6 ">
                <div className="md:text-3xl md:w-3/4 font-semibold text-white  text-base">
                    Ready to join the list of farmers using dotTerra to increase their productivity and profits whilst being sustainable?
                </div>
                <div className="p-3 bg-white text-main w-fit  mt-2 cursor-pointer">Get Started</div>

            </div>
        </div>
    )
}