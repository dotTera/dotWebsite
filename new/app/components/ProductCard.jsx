import Image from "next/image";

import  arrow from "../../assets/arrow-1.png"


export default function ProductCard({image,header,desc}){
    return(
        <div className="border border-black p-2 flex flex-col md:w-1/4   w-full justify-around">
          <div className="flex  flex-col items-center">
              <Image src={image} alt="Photo Missing"  className=""/>
              <div className="text-main font-bold text-center py-2"> {header} </div>
              <div className="bg-slate-100 p-2 rounded-lg text-center ">
                  {desc}
              </div>
          </div>
            <div className="flex justify-end p-2">
                <Image src={arrow} alt="Photo Missing" className="cursor-pointer" />
            </div>
        </div>
    )
}