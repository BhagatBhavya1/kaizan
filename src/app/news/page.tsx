'use client'
import { useEffect, useState } from 'react';
import {NewsData} from "../../../components/NewsData";
import Navbar from "../../../components/Navbar"
export default function News() {
    const [isSmallScreen, setIsSmallScreen] = useState(0);
    const sArray=["grid-cols-4","grid-cols-2","grid-cols-1"];
    useEffect(() => {
        const checkScreenSize = () => {
            const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            if(width<795){
                setIsSmallScreen(1);
            }
            if(width<489){
                setIsSmallScreen(2);
            }
        };
        console.log(setIsSmallScreen)
        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);
    return (
        <div className="bg-slate-900 min-h-screen py-6 flex flex-col">
            <div className="sticky top-1 z-10 px-3 rounded-md mb-4">
            <Navbar />
            </div>
            <div className="bg-green-950 ml-6 mr-6">
                <div className="container mx-auto">
                    <div className={`grid ${sArray[isSmallScreen]} gap-4 px-2 py-10`}>
                        {NewsData.map((item, index) => (
                            <div key={index} className="p-4 bg-transparent rounded-lg border-white border-4">
                                <h1 className="text-center items-center text-2xl text-white font-extrabold mb-2">{item.headline}</h1>
                                <p className="text-sm text-white">{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}