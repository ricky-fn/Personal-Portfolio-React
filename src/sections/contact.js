import React from 'react'
import {
  ScrollPage,
  Animator,
  batch,
  Fade,
  MoveOut,
  Sticky,
} from '@ricky-fn/react-scroll-motion'

const ContactSection = () => {
  return (
    <section className="page-contact-section">
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
    </section>
  )
}

export default ContactSection
