"use client";
import { useEffect, useState } from 'react';
import Navbar from "../../../../components/Navbar"
import Dropdown from '../../../../components/DropDown';
export default function ParticularStock({params} : any) {
    let stockDisplay=params.id;
    stockDisplay=stockDisplay.replace(/%20/g," ");
    const [selectedStartDate, setSelectedStartDate] = useState('');
    const handleStartDateChange = (event : any) => {
        setSelectedStartDate(event.target.value);
    };
    const [selectedEndDate, setSelectedEndDate] = useState('');
    const handleEndDateChange = (event : any) => {
        setSelectedEndDate(event.target.value);
    };
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
                <div className="flex justify-between">
                <h1 className="text-white text-4xl">{stockDisplay}</h1>
                <div className="flex gap-6">
                <Dropdown />
                <div className="flex gap-4 items-center">
                    <h1 className="text-white">Live</h1>
                    <label className="inline-flex gap-2 items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                    <h1 className="text-white">Algo</h1>
                </div>
                </div>
                </div>
                <hr className="mt-5 mb-5 mx-auto border-gray-400 border-2" />
                <div className={`${isSmallScreen ? 'flex flex-col gap-6' : 'flex gap-6 justify-center'}`}>
                    <div className={`${isSmallScreen ? "w-full h-1/4" : "w-1/4"} bg-green-300 px-2 py-2`}>
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
                    <div className={`${isSmallScreen ? "w-full h-1/4" : "w-1/4"} bg-green-300 px-2 py-2`}>
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
                    <div className={`${isSmallScreen ? "w-full h-1/4" : "w-1/4"} bg-green-300 px-2 py-2`}>
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
                    <div className={`${isSmallScreen ? "w-full h-1/4" : "w-1/4"} bg-green-300 px-2 py-2`}>
                        <div className="flex flex-col">
                            <div className="flex">
                                <h1 className="text-2xl">Time Period</h1>
                            </div>
                            <div className="flex justify-between">
                                <h1 className="text-2xl">6 Months</h1>
                                <h2 className="bg-white rounded-xl px-1 py-1">+11%</h2>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}