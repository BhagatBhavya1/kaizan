import {navbar3} from "./NavbarData";
import { MdHomeFilled } from "react-icons/md";
import Link from "next/link";
export default function Navbar(){
    return (
        <nav>
        <div className="bg-green-950 flex justify-between rounded-md px-6 py-2">
            <div>
                <h1 className="text-2xl text-white font-bold">Kaizan Universal</h1>
            </div>
            <div className="flex gap-12">
                {navbar3.map((item,index)=>(
                    <Link href={item.route}>
                    <h1 className="text-md text-white">{item.name}</h1>
                    </Link>
                ))}
                <Link href="/">
                <span className="text-2xl text-white flex justify-center items-center text-center"><MdHomeFilled /></span>
                </Link>
            </div>
        </div>
        </nav>
    )
}