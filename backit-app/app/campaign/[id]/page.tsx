'use client'

import CampaignDetails from "../../components/CampaignDetails"
import Navigation from "../../components/Navigation";
import { useParams } from "next/navigation";

const CampDetails = () => {
  const {id} = useParams();
  return (
    <div>
      <Navigation title={'Campaign: Revolutionary Solar - Powered Backpack'}/>
      <CampaignDetails/>
    </div>
  )
}

export default CampDetails