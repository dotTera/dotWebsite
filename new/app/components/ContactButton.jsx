
import Link from "next/link";

export function  ContactButton({icon,name,message,link}) {
    return (
        <Link href={link} className="flex shadow-md whitespace-normal p-2 rounded-xl bg-green-100 w-1/4 m-2 ">
            <div className="cursor-pointer text-main text-2xl p-2 pr-4 ">
                {icon}
            </div>
            <div className="flex flex-col ">
                <div className="font-bold">{name}</div>
                <div className="">{message}</div>
            </div>

        </Link>
    )
}