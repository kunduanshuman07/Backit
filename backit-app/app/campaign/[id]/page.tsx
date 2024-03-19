'use client'

import Footer from "@/app/components/Footer";
import CampaignDetails from "../../components/CampaignDetails"
import Navigation from "../../components/Navigation";
import { useParams } from "next/navigation";

const CampDetails = () => {
  const {id} = useParams();
  return (
    <div>
      <Navigation title={'Campaign: Revolutionary Solar - Powered Backpack'}/>
      <CampaignDetails/>
      <Footer/>
    </div>
  )
}

export default CampDetails