import React from 'react'
import { ScrollPage, Animator, Zoom, StickyIn } from 'react-scroll-motion'

function calculatorForMac(initial, final, position, unit) {
  return `${initial + Math.ceil((final - initial) * position)}${unit}`
}

const WorkSection = () => {
  const scaleAndZoomOut = () => ({
    out: {
      style: {
        // `p` is number (0~1)
        // When this page filled your screen, `p` will be 0
        // When just after this page disappear, `p` will be 1
        position: 'fixed',
        'margin-left': (p) => calculatorForMac(75, -662, p, 'px'),
        'margin-top': (p) => calculatorForMac(-100, -400, p, 'px'),
        width: (p) => calculatorForMac(421, 1314, p, 'px'),
      },
    },
  })

  return (
    <ScrollPage>
      <section className="page-work-section">
        <div className="page-container2">
          <div className="page-content1">
            <div className="page-overview">
              <h2 className="page-text15 Sub-Title">
                A Look Back at My 8-Year Career Journey in Frontend Development
              </h2>
              <p className="page-text16 A1Description">
                I have had the opportunity to work on a variety of projects with
                diverse teams in my career as a developer. From my experience in
                the field, I have honed my skills in frontend and backend
                development, as well as project management and team
                collaboration. I am dedicated to delivering high-quality work
                and continuously improving my abilities.
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
                  challenges as a newcomer, including understanding the business
                  logic and codebase...
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
                    While working in the blockchain industry, I overcame several
                    challenges as a newcomer, including understanding the
                    business logic and codebase...
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
          <Animator
            animation={scaleAndZoomOut()}
            className="-mac-root-class-name"
          >
            <img src="/playground_assets/iMac.svg" />
          </Animator>
        </div>
      </section>
    </ScrollPage>
  )
}

export default WorkSection
