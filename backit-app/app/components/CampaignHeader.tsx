import React from 'react'
import { FaFilter } from "react-icons/fa";
import { SiCampaignmonitor } from "react-icons/si";
import { MdOutlineTrackChanges } from "react-icons/md";
const CampaignHeader = () => {
    return (
        <div className='p-2 flex flex-row bg-gray-200 mb-2'>
            <button className='btn btn-neutral btn-sm font-bold text-white'>Filters <FaFilter /></button>
            <button className='btn btn-info btn-sm text-white font-bold ml-10'>Saved Campaigns <MdOutlineTrackChanges /></button>
            <button className='btn btn-secondary btn-sm text-white font-bold ml-auto'>Start a Campaign <SiCampaignmonitor /></button>
        </div>
    )
}

export default CampaignHeader