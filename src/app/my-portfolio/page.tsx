import {PortfolioData} from "../../../components/PortfolioData";
import Image from "next/image";
import Navbar from "../../../components/Navbar";
export default function MyPortfolio() {
    return (
        <div className="bg-slate-950 min-h-screen">
            <div className="flex flex-col py-4">
            <div className="sticky top-1 z-10 px-3 rounded-md mb-4">
            <Navbar />
            </div>
            <div className="flex gap-4 gap-y-4 items-center text-center justify-between bg-slate-900 py-4 text-white">
                <div className="w-3/5 flex">
                    <div className="w-1/4">
                        <h2>Symbol</h2>
                    </div>
                    <div className="w-1/4">
                        <h2>Net Quantity</h2>
                    </div>
                    <div className="w-1/4">
                        <h2>T1 Quantity</h2>
                    </div>
                    <div className="w-1/4">
                        <h2>Remaining Quantity</h2>
                    </div>
                </div>
                <div className="w-2/5 flex">
                    <div className="w-1/3">
                        <h2>Avg. Cost Price</h2>
                    </div>
                    <div className="w-1/3">
                        <h2>LTP</h2>
                    </div>
                    <div className="w-1/3">
                        <h2>Days</h2>
                    </div>
                </div>
            </div>
            {PortfolioData.map((item, index) => (
                index%2!==0 ? (
                    <div className="flex gap-4 gap-y-4 items-center text-center justify-between bg-slate-900 py-4 text-white">
                        <div className="flex w-3/5">
                            <div className="w-1/4">
                                <h2>{item.symbol}</h2>
                            </div>
                            <div className="w-1/4">
                                <h2>{item.nq}</h2>
                            </div>
                            <div className="w-1/4">
                                <h2>{item.t1q}</h2>
                            </div>
                            <div className="w-1/4">
                                <h2>{item.rq}</h2>
                            </div>
                        </div>
                        <div className="flex w-2/5">
                        <div className="w-1/3">
                            <h2>{item.acp}</h2>
                        </div>
                        <div className="w-1/3">
                            <h2>{item.ltp}</h2>
                        </div>
                        <div className={`w-1/3 ${item.days[0]==='-' ? "text-red-600" : "text-green-600"}`}>
                            <h2>{item.days}</h2>
                        </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex gap-4 gap-y-4 items-center text-center justify-between bg-green-950 py-4 text-white">
                        <div className="flex w-3/5">
                            <div className="w-1/4">
                                <h2>{item.symbol}</h2>
                            </div>
                            <div className="w-1/4">
                                <h2>{item.nq}</h2>
                            </div>
                            <div className="w-1/4">
                                <h2>{item.t1q}</h2>
                            </div>
                            <div className="w-1/4">
                                <h2>{item.rq}</h2>
                            </div>
                        </div>
                        <div className="flex w-2/5">
                        <div className="w-1/3">
                            <h2>{item.acp}</h2>
                        </div>
                        <div className="w-1/3">
                            <h2>{item.ltp}</h2>
                        </div>
                        <div className={`w-1/3 ${item.days[0]==='-' ? "text-red-600" : "text-green-600"}`}>
                            <h2>{item.days}</h2>
                        </div>
                        </div>
                    </div>
                )
            ))}
            </div>
        </div>
    )
}