// import {UserStockData} from "../../../components/UserStockData";
"use client"
import Image from "next/image";
import Navbar from "../../../components/Navbar"
import Link from "next/link";
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
export default function MyPortfolio() {
    const [stockNames, setStockNames] = useState([]);
    // const [UserStockData,setUserStockData] = useState([]);
    useEffect(() => {
        const chatSocket = io('http://localhost:5000/all_watch',{query: {
            status:"All",
            symbol: "", // Send selected stock symbol to the backend
        }});
         // Connect to the 'chat' namespace
        // Chat namespace
        chatSocket.on('message', (msg) => {

            // console.log('Cdata :', msg);
            console.log("x = ",msg.symbol);
            console.log("price",msg.ltp);
            setStockNames(prevStockNames => {
                const symbolIndex = prevStockNames.findIndex(stock => stock.symbol === msg.symbol);
                if (symbolIndex !== -1) {
                    // Symbol exists, update its values
                    return prevStockNames.map((stock, index) => index === symbolIndex ? { ...stock, ltp: msg.ltp, chp: msg.chp } : stock);
                } else {
                    // Symbol doesn't exist, add it to the list
                    return [...prevStockNames, { symbol: msg.symbol, ltp: msg.ltp, chp: msg.chp }];
                }
            });
        });
        // chatSocket.on('stock_list',(stock)=>{
        //     // console.log('stock_list',stock);
        //     // setStockNames(prevStockNames => {
        //     //     const updatedStocks = stock.map(item => ({ ...item, price: 0 }));
        //     //     return updatedStocks;
        //     // });
        //     // console.log("names",stockNames);
        // });
        return () => {
            chatSocket.disconnect();
        };
    }, []);
    return (
        <div className="bg-slate-950 min-h-screen">
            <div className="flex flex-col py-6">
            <div className="sticky top-1 z-10 px-3 rounded-md mb-4">
            <Navbar />
            </div>
            {stockNames.map((item, index) => (
                index%2!==0 ? (
                    <Link href={`/particular-stock/${item.symbol}`}>
                    <div key={index} className="flex gap-4 gap-y-4 items-center text-center justify-between bg-slate-800 py-4 text-white">
                        <div className="w-1/3">
                            <h2>{item.symbol}</h2>
                        </div>
                        <div className="w-1/3">
                            <h2>{item.ltp}</h2>
                        </div>
                        {item.chp>0 ? (
                            <div className="w-1/3 text-green-500 flex items-center justify-center gap-1">
                            <Image
                            src="/tup.png"
                            alt="Example Image"
                            className="w-auto h-2"
                            layout="intrinsic"
                            width={4}
                            height={4}
                            />
                            <h2>+{item.chp}</h2>
                        </div>
                        ) : (
                            <div className="w-1/3 text-red-500 flex items-center justify-center gap-1">
                            <Image
                            src="/tdown.png"
                            alt="Example Image"
                            className="w-auto h-2"
                            layout="intrinsic"
                            width={4}
                            height={4}
                            />
                            <h2>-{item.chp}</h2>
                        </div>
                        )}
                    </div>
                    </Link>
                ) : (
                    <Link href={`/particular-stock/${item.stocks}`}>
                    <div key={index} className="flex gap-4 gap-y-4 items-center text-center justify-between bg-green-900 py-4 text-white">
                        <div className="w-1/3">
                            <h2>{item.symbol}</h2>
                        </div>
                        <div className="w-1/3">
                            <h2>{item.ltp}</h2>
                        </div>
                        {item.chp>0  ? (
                            <div className="w-1/3 text-green-500 flex items-center justify-center gap-1">
                            <Image
                            src="/tup.png"
                            alt="Example Image"
                            className="w-auto h-2"
                            layout="intrinsic"
                            width={4}
                            height={4}
                            />
                            <h2>+{item.chp}</h2>
                        </div>
                        ) : (
                            <div className="w-1/3 text-red-500 flex items-center justify-center gap-1">
                            <Image
                            src="/tdown.png"
                            alt="Example Image"
                            className="w-auto h-2"
                            layout="intrinsic"
                            width={4}
                            height={4}
                            />
                            <h2>-{item.chp}</h2>
                        </div>
                        )}
                    </div>
                    </Link>
                )
            ))}
            </div>
        </div>
    )
}