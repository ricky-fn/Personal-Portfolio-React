import React from 'react'
import {
  ScrollPage,
  Animator,
  batch,
  Fade,
  MoveOut,
  Sticky,
} from 'react-scroll-motion'

const HeroSection = () => {
  return (
    <ScrollPage>
      <section className="page-hero-section">
        <div className="page-container1">
          <Animator animation={batch(Fade(), MoveOut(0, -200))}>
            <div className="page-hero-container">
              <img
                src="/playground_assets/dsc06436removebgpreview21818-aoq5-1500w.png"
                className="page-dsc06436removebgpreview21"
              />
            </div>
          </Animator>
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
              Whether it&apos;s building a website from scratch or revamping an
              existing one, I strive to exceed expectations and deliver results
              that make an impact.
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
    </ScrollPage>
  )
}

export default HeroSection
