"use client"
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { WhyUs } from "../../components/HomePage";
import { contact } from "../../components/ContactUs";
import { FaEnvelope, FaLinkedin, FaComment, FaShieldAlt, FaClock } from 'react-icons/fa';
import { FaShield } from "react-icons/fa6";
import { NewsData } from "../../components/NewsData";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Navbar from "../../components/NavbarHome";
import { setMaxListeners } from "events";
export default function Home() {
    const size=NewsData.length;
    const [i,setI]=useState(0);
    const [il,setIl]=useState(NewsData.length - 1);
    const [ir,setIr]=useState(1);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const checkScreenSize = () => {
            const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            setIsSmallScreen(width < 535);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);
    const goLeft=()=> {
        console.log("go left");
        let newI=(i+1)%size;
        setI(newI);
        let newIl=(newI-1)%size,newRi=(newI+1)%size;
        if(newIl<0){
            newIl+=size;
        }
        setIl(newIl);
        setIr(newRi);
    }
    const goRight=()=>{
        console.log("go left");
        let newI=(i-1)%size;
        if(newI<0){
            newI=newI + size;
        }
        setI(newI);
        let newIl=(newI-1)%size,newRi=(newI+1)%size;
        if(newIl<0){
            newIl+=size;
        }
        setIl(newIl);
        setIr(newRi);
    }
    return (
        <div className="flex flex-col bg-green-100 relative">
            <div className="absolute top-4 left-4 right-4 z-10">
                <Navbar />
            </div>
            <div className="relative">
                <Image
                    src="/home_bg.png"
                    alt="Example Image"
                    className="w-full"
                    layout="responsive"
                    width={1000}
                    height={1000}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
            <div className="z-0">
                <div className="flex flex-col text-center items-center justify-center px-10 bg-green-100">
                    <h1 className="text-4xl">Why Us ?</h1>
                    <div className={`mt-4 w-full justify-left grid ${isSmallScreen ? "grid-cols-1" : "grid-cols-2"} gap-8 px-2 py-4 mb-20`}>
                        {WhyUs.map((item, index) => (
                            <div key={index} className="justify-left bg-slate-950 rounded-lg px-6">
                                <h1 className="mt-6 mb-6 text-4xl text-left items-left justify-left text-green-400 font-extrabold">{item.header}</h1>
                                <p className="mb-6 text-sm text-white text-left items-left justify-left">{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-slate-950 flex flex-col px-5">
                    <h1 className="text-2xl text-green-300 justify-center text-center items-center py-10">TRANDING TRADS</h1>
                    <div className="flex gap-x-6">
                        <div className="p-4 bg-transparent w-1/3 mt-20 rounded-lg border-white border-4 mb-4">
                            <h1 className="text-center items-center text-2xl text-white font-extrabold mb-2">{NewsData[il].headline}</h1>
                            <p className="text-sm text-white">{NewsData[il].content}</p>
                        </div>
                        <div className="p-4 bg-transparent w-1/3 rounded-lg border-white border-4 mb-4">
                            <h1 className="text-center items-center text-2xl text-white font-extrabold mb-2">{NewsData[i].headline}</h1>
                            <p className="text-sm text-white">{NewsData[i].content}</p>
                        </div>
                        <div className="p-4 bg-transparent w-1/3 mt-20 rounded-lg border-white border-4 mb-4">
                            <h1 className="text-center items-center text-2xl text-white font-extrabold mb-2">{NewsData[ir].headline}</h1>
                            <p className="text-sm text-white">{NewsData[ir].content}</p>
                        </div>
                    </div>
                    <div className="flex py-2 gap-2">
                        <div className="flex w-1/2 justify-end">
                            <button onClick={goRight}>
                                <span className="text-3xl text-white"><FaArrowAltCircleLeft /></span>
                            </button>
                        </div>
                        <div className="flex w-1/2 justify-between">
                            <button onClick={goLeft}>
                                <span className="text-3xl text-white"><FaArrowAltCircleRight /></span>
                            </button>
                            <Link href="/news" className="py-2 px-2 border border-green-300">
                                <h1 className="text-green-300">See All</h1>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-green-100 flex flex-col justify-center items-center text-center">
                    <h1 className="py-10 text-2xl justify-center text-center items-center">
                        FACES BEHIND KAIZAN
                    </h1>
                    <Image
                        src="/people.png"
                        alt="Example Image"
                        className="py-5"
                        width={800}
                        height={800}
                    />
                </div>

                <div id="contact-section" className="mb-5 flex flex-col bg-slate-950 px-10 py-10 rounded-b-3xl overflow-hidden">
                    <h1 className="text-green-100 text-2xl text-center item-center justify-center">CONTACT US</h1>
                    <div className="flex mt-12 justify-center text-center items-center">
                        {contact.map((item,index)=>(
                            <h1 key={index} className="w-1/6 text-white font-bold">{item}</h1>
                        ))}
                    </div>
                    <div className="flex py-8 text-3xl text-white justify-center items-center">
                        <div className="w-1/12 flex justify-center">
                            <Link href="/"><FaEnvelope /></Link>
                        </div>
                        <div className="w-1/12 flex justify-center">
                            <Link href="/"><FaLinkedin /></Link>
                        </div>
                        <div className="w-1/12 flex justify-center">
                            <Link href="/"><FaComment /></Link>
                        </div>
                        <div className="w-1/12 flex justify-center">
                            <Link href="/"><FaShield /></Link>
                        </div>
                        <div className="w-1/12 flex justify-center">
                            <Link href="/"><FaClock /></Link>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <h1 className="text-gray-500">Any text <span>&copy;</span> Kaizanuniversal 2020. All right reserved</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
