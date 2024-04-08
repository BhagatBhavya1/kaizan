'use client'
import { useEffect, useState } from 'react';
import Navbar from "../../../components/NavbarBack"
import {fields,justindex,TargetValueData,tss} from "../../../components/TargetValueData";
export default function TargetValue() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const checkScreenSize = () => {
            const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            setIsSmallScreen(width < 625);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);
    return (
        <div className="flex flex-col bg-slate-950 min-h-screen px-6 py-6 w-full">
            <div className="sticky top-1 z-10 px-3 rounded-md mb-4">
            <Navbar />
            </div>
            <div className="bg-green-950 px-8 py-4 rounded-md justify-center">
                <h1 className="text-white text-4xl">Reliance Industries</h1>
                <hr className="mt-5 mb-5 mx-auto border-gray-400 border-2" />
                <div className={`${isSmallScreen ? 'flex flex-col gap-6' : 'flex gap-6 justify-center'}`}>
                    <div className={`${isSmallScreen ? "w-full h-1/3" : "w-1/3"} bg-green-300 px-2 py-2`}>
                        <div className="flex flex-col">
                            <div className="flex">
                                <h1 className="text-2xl">Latest Price</h1>
                            </div>
                            <div className="flex justify-between">
                                <h1 className="text-2xl">391.59</h1>
                                <h2 className="bg-white rounded-xl px-1 py-1">+5,2%</h2>  
                            </div>
                        </div>
                    </div>
                    <div className={`${isSmallScreen ? "w-full h-1/3" : "w-1/3"} bg-green-300 px-2 py-2`}>
                    <div className="flex flex-col">
                            <div className="flex">
                                <h1 className="text-2xl">High Price</h1>
                            </div>
                            <div className="flex justify-between">
                                <h1 className="text-2xl">400.43</h1>
                                <h2 className="bg-white rounded-xl px-1 py-1">+2,5%</h2>  
                            </div>
                        </div>
                    </div>
                    <div className={`${isSmallScreen ? "w-full h-1/3" : "w-1/3"} bg-green-300 px-2 py-2`}>
                    <div className="flex flex-col">
                            <div className="flex">
                                <h1 className="text-2xl">Low Price</h1>
                            </div>
                            <div className="flex justify-between">
                                <h1 className="text-2xl">176.32</h1>
                                <h2 className="px-1 py-1 bg-black rounded-xl text-white">-1,2%</h2>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-12 justify-center bg-green-300 mt-6 rounded-lg">
                <div className="w-full flex">
                    {justindex.map((item,index)=>(
                        <div key={index} className="w-1/2 flex px-6 py-6">
                            <h1>{item}</h1>
                        </div>
                    ))}
                    {fields.map((item,index)=>(
                        <div key={index} className="w-1/2 flex px-6 py-6">
                            <h1>{item}</h1>
                        </div>
                    ))}
                    {tss.map((item,index)=>(
                        <div key={index} className="w-1/6 flex px-6 py-6">
                            <h1>{item}</h1>
                        </div>
                    ))}
                </div>
            </div>
            {TargetValueData.map((item,index)=>(
                <div key={index} className="flex justify-center">
                    {item[0].map((someitem,someindex)=>(
                        <div key={someindex} className="w-1/2 flex px-6 py-6 text-blue-600 gap-2" style={{border: '1px solid white'}}>
                            <div>
                                <input id="green-checkbox" type="checkbox" value="" className="w-6 h-6 text-green-950 rounded-lg focus:ring-green-900 dark:focus:ring-green-900 focus:ring-1" />
                            </div>
                            <h1>{someitem}</h1>
                        </div>
                    ))}
                    {item[1].map((someitem,someindex)=>(
                        <div key={someindex} className="w-1/2 flex px-6 py-6 text-gray-600" style={{border: '1px solid white'}}>
                            <h1>{someitem}</h1>
                        </div>
                    ))}
                    {item[2].map((someitem,someindex)=>(
                        <div key={someindex} className="w-1/6 flex px-6 py-6 text-gray-600" style={{border: '1px solid white'}}>
                            <h1>{someitem}</h1>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}