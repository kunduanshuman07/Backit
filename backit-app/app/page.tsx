import React from 'react'
import Navigation from './components/Navigation'
import Campaigns from './components/Campaigns'
import CampaignHeader from './components/CampaignHeader'

const page = () => {
  return (
    <div>
      <Navigation title={"Campaigns"}/>
      <CampaignHeader />
      <Campaigns />
    </div>
  )
}

export default page