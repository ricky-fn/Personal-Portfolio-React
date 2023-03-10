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
                <button className="main-button">
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
        <div className="page-i-mac-section">
          <div className="page-logos">
            <img
              alt="GoogleChromeLogowine18710"
              src="/playground_assets/googlechromelogowine18710-sd19.svg"
              className="page-chrome"
            />
            <img
              alt="vue918260"
              src="/playground_assets/vue918260-fg4b.svg"
              className="page-vue"
            />
            <img
              alt="Figma18240"
              src="/playground_assets/figma18240-r4cz.svg"
              className="page-figma"
            />
            <div className="page-nodejs">
              <div className="page-group">
                <img
                  alt="Vector8266"
                  src="/playground_assets/vector8266-1pb9.svg"
                  className="page-vector"
                />
                <img
                  alt="Vector8267"
                  src="/playground_assets/vector8267-r418.svg"
                  className="page-vector01"
                />
                <img
                  alt="Vector8268"
                  src="/playground_assets/vector8268-w9m.svg"
                  className="page-vector02"
                />
                <div className="page-group1">
                  <img
                    alt="Vector8270"
                    src="/playground_assets/vector8270-aeae.svg"
                    className="page-vector03"
                  />
                  <div className="page-maskgroup">
                    <div className="page-group2"></div>
                    <div className="page-group3"></div>
                  </div>
                  <div className="page-maskgroup1">
                    <div className="page-group4"></div>
                    <div className="page-group5"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="page-cypress">
              <div className="page-group6">
                <img
                  alt="Vector8250"
                  src="/playground_assets/vector8250-8kpa.svg"
                  className="page-vector04"
                />
                <img
                  alt="Vector8251"
                  src="/playground_assets/vector8251-7dg.svg"
                  className="page-vector05"
                />
                <img
                  alt="Vector8252"
                  src="/playground_assets/vector8252-3s4v.svg"
                  className="page-vector06"
                />
                <img
                  alt="Vector8258"
                  src="/playground_assets/vector8258-o10g.svg"
                  className="page-vector07"
                />
                <img
                  alt="Vector8259"
                  src="/playground_assets/vector8259-hm5a.svg"
                  className="page-vector08"
                />
              </div>
            </div>
            <div className="page-react">
              <div className="page-group7">
                <img
                  alt="Vector8238"
                  src="/playground_assets/vector8238-fump.svg"
                  className="page-vector09"
                />
                <img
                  alt="Vector8239"
                  src="/playground_assets/vector8239-2b2.svg"
                  className="page-vector10"
                />
              </div>
            </div>
            <img
              alt="sass118246"
              src="/playground_assets/sass118246-b5r.svg"
              className="page-sass"
            />
          </div>
          <img
            alt="svgmanworkingonlaptopicon41828"
            src="/playground_assets/svgmanworkingonlaptopicon41828-bm7k.svg"
            className="page-manwithlaptop"
          />
        </div>
        <div className="page-contact-section">
          <img
            src="/playground_assets/background9219-o1et-800h.png"
            alt="background9219"
            className="page-background"
          />
          <div className="page-container5">
            <div className="page-photo">
              <img
                src="/playground_assets/dsc0644711075-8mhq-200w.png"
                alt="DSC0644711075"
                className="page-dsc064471"
              />
            </div>
            <div className="page-content3">
              <div className="page-container6">
                <div className="page-stayconnected">
                  <span className="page-title">
                    <span>To stay connected:</span>
                  </span>
                  <span className="page-text47">
                    <span>ricky.jc2022@gmail.com</span>
                  </span>
                  <span className="page-text49">
                    <span>LinkedIn Profile</span>
                  </span>
                  <span className="page-text51">
                    <span>View resume</span>
                  </span>
                </div>
                <div className="page-thiswebsite">
                  <span className="page-title1">
                    <span>This website:</span>
                  </span>
                  <div className="page-row">
                    <span className="page-text54">
                      <span>is powered by:</span>
                    </span>
                    <img
                      src="/playground_assets/reactjsar2119534-ubh.svg"
                      alt="reactjsar2119534"
                      className="page-reactjsar211"
                    />
                  </div>
                  <div className="page-row1">
                    <span className="page-text56">
                      <span>is hosted on:</span>
                    </span>
                    <img
                      src="/playground_assets/githublogo9530-j4sd.svg"
                      alt="githublogo9530"
                      className="page-githublogo"
                    />
                  </div>
                </div>
                <span className="page-text58">
                  <span>Bye!</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
