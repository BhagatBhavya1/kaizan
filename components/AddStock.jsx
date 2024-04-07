import {AddStockData} from "./AddStockData";
import { FaSort } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
export default function AddStock() {
    const bgArray=["bg-green-900","bg-green-950"];
    return (
        <div className="w-1/2 flex flex-col border border-white rounded-md">
            <div className={`flex ${bgArray[1]} py-4 px-4`}>
                <div className="w-1/3">
                <div class="flex items-center me-4">
                    <input id="green-checkbox" type="checkbox" value="" className="w-6 h-6 text-green-950 rounded-lg focus:ring-green-900 dark:focus:ring-green-900 focus:ring-1" />
                </div>
                </div>
                <div className="w-1/3">
                    <div className="flex">
                        <h1 className="text-white">Stock Name</h1>
                        <button className="text-gray-500">
                            <FaSort />
                        </button>
                    </div>
                </div>
                <div className="w-1/3">
                    <div className="flex">
                        <h1 className="text-white">Register Date</h1>
                        <button className="text-gray-500">
                            <FaSort />
                        </button>
                    </div>
                </div>
            </div>
            {AddStockData.map((item,index)=>(
                <div className={`flex ${bgArray[index%2]} py-4 px-4`}>
                    <div className="w-1/3">
                    <div class="flex items-center me-4">
                    <input id="green-checkbox" type="checkbox" value="" className="w-6 h-6 text-green-950 rounded-lg focus:ring-green-900 dark:focus:ring-green-900 focus:ring-1" />
                </div>
                    </div>
                    <div className="w-1/3">
                        <h1 className="text-white">{item.stockname}</h1>
                    </div>
                    <div className="w-1/3">
                        <h1 className="text-white">{item.registerdata}</h1>
                    </div>
                </div>
            ))}
        </div>
    )
}