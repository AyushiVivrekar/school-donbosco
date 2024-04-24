import React from 'react'
import HeroSection from './HeroSection'
import HomeAbout from './HomeAbout'
import HomeCardSection from './HomeCardSection'
import LatestHappening from './LatestHappening'
import AdmissionEnquiryForm from './AdmissionEnquiryForm'
import HomeFacilities from './HomeFacilities'

function Home() {
  return (
    <div>
      <HeroSection/>
      <HomeAbout/>
      <HomeFacilities/>
      <HomeCardSection/>
      <LatestHappening/>
    <AdmissionEnquiryForm/>
    </div>
  )
}

export default Home