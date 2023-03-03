import React from 'react'

import { Helmet } from 'react-helmet'

import IMac from '../components/-mac'
import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="page-page">
        <section className="page-hero-section">
          <div className="page-container1">
            <div className="page-hero-container">
              <img
                alt="DSC06436removebgpreview21818"
                src="/playground_assets/dsc06436removebgpreview21818-aoq5-1500w.png"
                className="page-dsc06436removebgpreview21"
              />
            </div>
            <div className="page-content">
              <span className="page-text">
                <span className="page-text01">
                  <span>Hi,</span>
                  <br></br>
                  <span></span>
                </span>
                <span className="page-text05">
                  <span>I’m Ricky Jiang</span>
                  <br></br>
                  <span></span>
                </span>
                <span>Front End Engineer</span>
              </span>
              <span className="page-text10">
                <span>
                  With over 8 years of experience in the industry, I am a
                  passionate web developer with a focus on delivering
                  high-quality, responsive, and user-friendly websites. My
                  expertise in both front-end and back-end development allows me
                  to create seamless web experiences that bring ideas to life.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span className="page-text12">
                Whether it&apos;s building a website from scratch or revamping
                an existing one, I strive to exceed expectations and deliver
                results that make an impact.
              </span>
              <div className="page-actions">
                <button className="page-button">
                  <span className="page-text13">VIEW MY RESUME</span>
                </button>
                <button className="page-button1">
                  <span className="page-text14">DOWNLOAD MY RESUME</span>
                </button>
              </div>
            </div>
          </div>
          <img
            alt="ellipse24754"
            src="/playground_assets/ellipse24754-jbp-200h.png"
            className="page-ellipse2"
          />
          <img
            alt="ellipse14755"
            src="/playground_assets/ellipse14755-514e-200h.png"
            className="page-ellipse1"
          />
        </section>
        <section className="page-work-section">
          <div className="page-container2">
            <div className="page-content1">
              <div className="page-overview">
                <h2 className="page-text15 Sub-Title">
                  A Look Back at My 8-Year Career Journey in Frontend
                  Development
                </h2>
                <p className="page-text16 A1Description">
                  I have had the opportunity to work on a variety of projects
                  with diverse teams in my career as a developer. From my
                  experience in the field, I have honed my skills in frontend
                  and backend development, as well as project management and
                  team collaboration. I am dedicated to delivering high-quality
                  work and continuously improving my abilities.
                </p>
              </div>
              <div className="page-container3">
                <div className="page-work">
                  <span className="page-text17">
                    <span>Oct 2021 ~ Dec 2022</span>
                  </span>
                  <span className="page-text19">
                    <span>Memento Blockchain</span>
                  </span>
                  <span className="page-text21">
                    <span>full-stack engineer</span>
                  </span>
                  <span className="page-text23 A1Description">
                    While working in the blockchain industry, I overcame several
                    challenges as a newcomer, including understanding the
                    business logic and codebase...
                  </span>
                  <button className="page-button2">
                    <span className="page-read-more">READ MORE</span>
                  </button>
                </div>
                <div className="page-work1">
                  <span className="page-text24">
                    <span>Oct 2021 ~ Dec 2022</span>
                  </span>
                  <span className="page-text26">
                    <span>Memento Blockchain</span>
                  </span>
                  <span className="page-text28">
                    <span>full-stack engineer</span>
                  </span>
                  <span className="page-text30 A1Description">
                    <span>
                      While working in the blockchain industry, I overcame
                      several challenges as a newcomer, including understanding
                      the business logic and codebase...
                    </span>
                  </span>
                  <button className="page-button3">
                    <span className="page-read-more1">READ MORE</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="page-content2">
              <div className="page-work2">
                <span className="page-text32">
                  <span>Oct 2021 ~ Dec 2022</span>
                </span>
                <span className="page-text34">
                  <span>Memento Blockchain</span>
                </span>
                <span className="page-text36">
                  <span>full-stack engineer</span>
                </span>
                <span className="page-text38 A1Description">
                  While working in the blockchain industry, I overcame several
                  challenges as a newcomer, including understanding the business
                  logic and codebase...
                </span>
                <button className="page-button4">
                  <span className="page-read-more2">READ MORE</span>
                </button>
              </div>
              <div className="page-work3">
                <span className="page-text39">
                  <span>Oct 2021 ~ Dec 2022</span>
                </span>
                <span className="page-text41">
                  <span>Memento Blockchain</span>
                </span>
                <span className="page-text43">
                  <span>full-stack engineer</span>
                </span>
                <span className="page-text45 A1Description">
                  While working in the blockchain industry, I overcame several
                  challenges as a newcomer, including understanding the business
                  logic and codebase...
                </span>
                <button className="page-button5">
                  <span className="page-read-more3">READ MORE</span>
                </button>
              </div>
            </div>
          </div>
          <div className="page-container4">
            <img
              alt="keyboard4713"
              src="/playground_assets/keyboard4713-dard-200h.png"
              className="page-keyboard"
            />
            <img
              alt="line4741"
              src="/playground_assets/line4741-clt6.svg"
              className="page-line"
            />
            <IMac rootClassName="-mac-root-class-name"></IMac>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Page
