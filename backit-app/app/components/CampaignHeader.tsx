
import { FaFilter } from "react-icons/fa";
import { SiCampaignmonitor } from "react-icons/si";
import { MdOutlineTrackChanges } from "react-icons/md";
const CampaignHeader = () => {
    return (
        <div className='p-2 flex flex-row bg-gray-100 mt-2 mb-2'>
            <button className='btn btn-outline btn-neutral btn-sm font-bold'>Filters <FaFilter /></button>
            <button className='btn btn-primary btn-sm btn-outline font-bold ml-10'>Saved Campaigns <MdOutlineTrackChanges /></button>
            <button className='btn btn-secondary btn-outline btn-sm font-bold ml-auto'>Start a Campaign <SiCampaignmonitor /></button>
        </div>
    )
}

export default CampaignHeader