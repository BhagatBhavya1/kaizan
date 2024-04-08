"use client";
import Navbar from "../../../components/NavbarAdmin"
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaArrowDown } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoFilterOutline } from "react-icons/io5";
import { IoIosCloudDownload } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import {AddUserData} from "../../../components/AddUserData";
export default function AddAdminUser() {
    return (
        <div className="flex flex-col bg-slate-950 min-h-screen py-4">
            <div className="sticky top-1 z-10 px-3 rounded-md mb-4">
                <Navbar />
            </div>
            <div className="flex justify-between px-6">
                <div>
                    <h1 className="text-white text-xl">Current users</h1>
                </div>
                <div className="flex gap-4">
                    <button className="flex gap-2 items-center text-center justify-center px-4 py-2 bg-slate-700 text-black rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <span className="flex text-green-300 text-lg justify-center items-center text-center"><RiDeleteBin6Line /></span>
                        <h1 className="text-green-300">Delete</h1>
                    </button>
                    <button className="flex gap-2 items-center text-center justify-center px-4 py-2 bg-slate-700 text-black rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <span className="flex text-green-300 text-lg justify-center items-center text-center"><IoFilterOutline /></span>
                        <h1 className="text-green-300">Filters</h1>
                    </button>
                    <button className="flex gap-2 items-center text-center justify-center px-4 py-2 bg-slate-700 text-black rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <span className="flex text-green-300 text-lg justify-center items-center text-center"><IoIosCloudDownload /></span>
                        <h1 className="text-green-300">Export</h1>
                    </button>
                    <button className="flex gap-2 items-center text-center justify-center px-4 py-2 bg-green-600 text-black rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <span className="flex text-black text-lg justify-center items-center text-center"><FaPlus /></span>
                        <h1 className="text-black">Add new</h1>
                    </button>
                </div>
            </div>
            <div className="flex gap-4 px-4">
                <div className="flex w-11/12 gap-4 py-3">
                    <div className="w-1/6 justify-center items-center text-center border-b border-white">
                        <h1 className="border-b border-white text-white font-bold">Access</h1>
                    </div>
                    <div className="w-1/6 justify-center items-center text-center border-b border-white">
                        <div className="flex gap-2 justify-center items-center text-center">
                            <h1 className="text-white font-bold">Employee ID</h1>
                            <button>
                                <span className="text-gray-600"><FaArrowDown /></span>
                            </button>
                        </div>
                    </div>
                    <div className="w-1/6 justify-center items-center text-center border-b border-white">
                        <div className="flex gap-2 justify-center items-center text-center">
                            <h1 className="text-white font-bold">Employee Name</h1>
                            <button>
                                <span className="text-gray-600"><FaArrowDown /></span>
                            </button>
                        </div>
                    </div>
                    <div className="w-1/6 justify-center items-center text-center border-b border-white">
                        <div className="flex gap-2 justify-center items-center text-center">
                            <h1 className="text-white font-bold">Employee Email</h1>
                            <button>
                                <span className="text-gray-600"><FaArrowDown /></span>
                            </button>
                        </div>
                    </div>
                    <div className="w-1/6 justify-center items-center text-center border-b border-white">
                        <div className="flex gap-2 justify-center items-center text-center">
                            <h1 className="text-white font-bold">Contact number</h1>
                            <button>
                                <span className="text-gray-600"><FaArrowDown /></span>
                            </button>
                        </div>
                    </div>
                    <div className="w-1/6 justify-center items-center text-center border-b border-white">
                        <div className="flex gap-2 justify-center items-center text-center">
                            <h1 className="text-white font-bold">Current Status</h1>
                            <button>
                                <span className="text-gray-600"><FaArrowDown /></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex w-1/12 border-b border-white justify-center items-center text-center">
                    {/* <button>
                        <span className="text-white"><HiOutlineDotsVertical /></span>
                    </button> */}
                </div>
            </div>   
            {AddUserData.map((item,index)=>(
                <div className="flex gap-4 px-4">
                    <div className="flex w-11/12 gap-4 py-3">
                        <div className="w-1/6 justify-center items-center text-center border-b border-white">
                        <div>
                            <input id="green-checkbox" type="checkbox" value="" className="w-6 h-6 text-green-950 rounded-lg focus:ring-green-900 dark:focus:ring-green-900 focus:ring-1" />
                        </div>
                        </div>
                        <div className="w-1/6 justify-center items-center text-center">
                            <h1 className="border-b border-white text-white font-bold">{item.employeeid}</h1>
                        </div>
                        <div className="w-1/6 justify-center items-center text-center">
                            <h1 className="border-b border-white text-gray-600">{item.employeename}</h1>
                        </div>
                        <div className="w-1/6 justify-center items-center text-center">
                            <h1 className="border-b border-white text-gray-600">{item.employeeemail}</h1>
                        </div>
                        <div className="w-1/6 justify-center items-center text-center">
                            <h1 className="border-b border-white text-gray-600">{item.contactno}</h1>
                        </div>
                        <div className="w-1/6 border-b border-white justify-center items-center text-center">
                            {item.currentstatus ? (
                                <div className="flex gap-3 border border-green-600 rounded-xl text-green-600 justify-center items-center text-center">
                                    <span><GoDotFill /></span>
                                    <h1>Active</h1>
                                </div>
                            ) : (
                                <div className="flex gap-3 border border-red-600 rounded-xl text-red-600 justify-center items-center text-center">
                                    <span><GoDotFill /></span>
                                    <h1>Inactive</h1>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex w-1/12 border-b border-white justify-center items-center text-center">
                        <button>
                            <span className="text-white"><HiOutlineDotsVertical /></span>
                        </button>
                    </div>
                </div>        
            ))}
        </div>
    )
}