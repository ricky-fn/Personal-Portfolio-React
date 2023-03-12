import React from 'react'

import { Helmet } from 'react-helmet'
import { ScrollContainer, ScrollPage } from '@ricky-fn/react-scroll-motion'

import './page.css'

import HeroSection from '../sections/hero'
import WorkSection from '../sections/work'
import ProjectSection from '../sections/projects'
import ContactSection from '../sections/contact'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <ScrollContainer>
        <ScrollPage>
          <HeroSection />
        </ScrollPage>
        <ScrollPage pageHeight={window.innerHeight * 4}>
          <WorkSection />
        </ScrollPage>
        <ScrollPage>
          <ProjectSection />
        </ScrollPage>
        <ScrollPage>
          <ContactSection />
        </ScrollPage>
      </ScrollContainer>
    </div>
  )
}

export default Page
