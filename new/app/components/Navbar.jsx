import Image from "next/image";
import logo from "../../assets/logo-1.png"
import Link from "next/link";

export default function Navbar(){
    return(
        <div className="flex flex-col md:flex-row justify-between px-2  mr-2 py-2 items-center">
            <Link href="/" className="">
                <Image src={logo} alt="Photo" width="125" height="125" className="cursor-pointer"/>
            </Link>
            <div className="flex gap-2 text-main">
                <div className="flex md:flex-row gap-3 text-sm md:text-lg">
                    <Link href="/product"  className="" >Products</Link>
                    <Link href="/contactus" className="">Contact Us</Link>
                    <Link href="/aboutus" className="">About Us</Link>
                    <Link href="/blog" className="">Blog</Link>

                </div>
                <div className="text-main border border-main p-1 w-fit cursor-pointer text-sm md:text-lg ">Get Started </div>
            </div>
        </div>
    )
}