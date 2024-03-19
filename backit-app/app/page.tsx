import React from 'react'
import Navigation from './components/Navigation'
import Campaigns from './components/Campaigns'
import CampaignHeader from './components/CampaignHeader'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Navigation title={"Campaigns"}/>
      <CampaignHeader />
      <Campaigns />
      <Footer/>
    </div>
  )
}

export default page