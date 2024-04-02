"use client"
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import Navbar from "../../../components/NavbarAdmin"
import AddStock from "../../../components/AddStock"
export default function AdminAddStock() {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (event : any) => {
        setSearchTerm(event.target.value);
    };
    return (
        <div className="flex flex-col bg-slate-950 min-h-screen py-4">
            <div className="px-3 rounded-md mb-4">
            <Navbar />
            </div>
            <div className="flex gap-2 px-4 py-2 justify-center items-center text-center">
                <div className="relative mx-auto w-5/6 justify-center items-center text-center">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none justify-center">
                    <FaSearch className="text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="bg-transparent block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
                <div className="w-1/6 flex justify-center items-center text-center">
                <button
                    className="flex items-center text-center justify-center px-4 py-2 bg-green-600 text-black rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                    <FaPlus className="mr-2" />
                    Add new Stock
                </button>
                </div>
            </div>
            <div className="ml-10 flex mr-10 gap-2 py-4">
            <AddStock />
            <AddStock />
            </div>
        </div>
    )
}