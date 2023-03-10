import React from 'react'

import { Helmet } from 'react-helmet'
import { ScrollContainer, ScrollPage } from 'react-scroll-motion'

import './page.css'

import HeroSection from '../sections/hero'
import WorkSection from '../sections/work'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <ScrollContainer snap="none">
        <HeroSection />
        <WorkSection />
        <ScrollPage></ScrollPage>
      </ScrollContainer>
    </div>
  )
}

export default Page
