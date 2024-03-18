import React from 'react'
import { FaBookmark } from "react-icons/fa";
const Campaigns = () => {
    return (
        <div className="grid grid-cols-3 gap-2 p-2">
            <div className="p-5 rounded-lg flex flex-col bg-neutral cursor-pointer">
                <div className='flex flex-row'>
                    <h1 className='font-bold text-accent w-2/3'>Revolutionary Solar-Powered Backpack</h1>
                    <div className="tooltip tooltip-bottom tooltip-accent font-bold ml-auto  p-0" data-tip="Save & Track">
                        <button className='ml-auto text-white font-bold tooltip-white'><FaBookmark /></button>
                    </div>
                </div>
                <h1 className='text-xs mt-2 text-white'>Category: <span className='text-warning font-bold'>Technology</span></h1>
                <h1 className='text-xs mt-2 text-white'>Timeline: <span className='text-info font-bold'>March - April 2024</span></h1>
                <h1 className='text-xs mt-2 text-white'>Creator: <span className='font-bold'>Anshuman Kundu</span></h1>
                <div className='mt-4 flex flex-col mx-auto bg-white p-4 rounded-lg'>
                    <h1 className='font-bold text-sm text-center'>Funds</h1>
                    <h1 className='mt-4 text-center font-bold text-primary text-xs'>Goal: $25,000</h1>
                    <h1 className='mt-2 text-center font-bold text-primary text-xs'>Duration: 01.04.2024 - 01.05.2024</h1>
                    <progress className="progress progress-success w-56 mt-5" value="70" max="100"></progress>
                    <button className='btn btn-error btn-sm text-white font-bold mt-5 mx-auto '>Details</button>
                </div>
            </div>
            <div className="p-5 rounded-lg flex flex-col bg-neutral cursor-pointer">
                <div className='flex flex-row'>
                    <h1 className='font-bold text-accent w-2/3'>Revolutionary Solar-Powered Backpack</h1>
                    <div className="tooltip tooltip-bottom tooltip-accent font-bold ml-auto  p-0" data-tip="Save & Track">
                        <button className='ml-auto text-white font-bold tooltip-white'><FaBookmark /></button>
                    </div>
                </div>
                <h1 className='text-xs mt-2 text-white'>Category: <span className='text-warning font-bold'>Technology</span></h1>
                <h1 className='text-xs mt-2 text-white'>Timeline: <span className='text-info font-bold'>March - April 2024</span></h1>
                <h1 className='text-xs mt-2 text-white'>Creator: <span className='font-bold'>Anshuman Kundu</span></h1>
                <div className='mt-4 flex flex-col mx-auto bg-white p-4 rounded-lg'>
                    <h1 className='font-bold text-sm text-center'>Funds</h1>
                    <h1 className='mt-4 text-center font-bold text-primary text-xs'>Goal: $25,000</h1>
                    <h1 className='mt-2 text-center font-bold text-primary text-xs'>Duration: 01.04.2024 - 01.05.2024</h1>
                    <progress className="progress progress-success w-56 mt-5" value="70" max="100"></progress>
                    <button className='btn btn-error btn-sm text-white font-bold mt-5 mx-auto '>Details</button>
                </div>
            </div>
        </div>

    )
}

export default Campaigns