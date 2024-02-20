
import Image from "next/image";


export default function BlogCard({image,author,heading,desc}){
    return(
        <div className="flex flex-col p-3 mb-2">
            <div className="h-1/2">
                <Image src={image} alt="Photo Missing" className="object-cover h-[200px]"/>
            </div>
            <div className="text-main pt-2">{author}</div>
            <div className="py-3 font-semibold">{heading}</div>
            <div className="text-gray-400">{desc}</div>
            <div className="flex flex-row gap-2.5 py-2">
                <div className="bg-slate-200 p-1  cursor-pointer">Community</div>
                <div className="bg-slate-200 p-1  cursor-pointer">Farmers</div>
                <div className="bg-slate-200 p-1  cursor-pointer">Management</div>

            </div>
        </div>
    )
}