import React, { useContext } from 'react'
import classNames from 'classnames'
import {
  ScrollPage,
  Animator,
  Zoom,
  StickyIn,
  ScrollDataContext,
  ScrollPageContext,
} from '@ricky-fn/react-scroll-motion'

import BrowserTab from '../components/browserTab'

function calculatorForMac(initial, final, position, unit) {
  return `${initial + Math.ceil((final - initial) * position)}${unit}`
}

function motionRange(initial, target, fn) {
  let realProgress = 0
  return (progress) => {
    if (progress <= initial) {
      realProgress = 0
    } else if (progress >= target) {
      realProgress = 1
    } else {
      realProgress = (progress - initial) / (target - initial)
    }

    return fn(realProgress)
  }
}

const WorkSection = () => {
  const { currentPage, currentProgress } = useContext(ScrollDataContext)
  const { page } = useContext(ScrollPageContext)
  const isActive = currentPage === page
  const scaleAndZoomOut = () => ({
    out: {
      style: {
        position: 'fixed',
        marginLeft: motionRange(0, 0.15, (p) =>
          calculatorForMac(70, -520, p, 'px')
        ),
        marginTop: motionRange(0, 0.15, (p) =>
          calculatorForMac(-130, -420, p, 'px')
        ),
        width: motionRange(0, 0.15, (p) =>
          calculatorForMac(566, 1200, p, 'px')
        ),
      },
    },
  })

  return (
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
              development, as well as project management and team collaboration.
              I am dedicated to delivering high-quality work and continuously
              improving my abilities.
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
                  challenges as a newcomer, including understanding the business
                  logic and codebase...
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
          <img src="/playground_assets/Artboard.svg" />
          <div className="browser-container">
            <div className="browser-header">
              <div className="browser-tabs">
                <BrowserTab
                  className={classNames('tab', {
                    'with-shape':
                      (isActive && currentProgress <= 0.15) || !isActive,
                  })}
                >
                  New Tab
                </BrowserTab>
                <BrowserTab
                  className={classNames('tab', {
                    'with-shape':
                      isActive &&
                      currentProgress > 0.15 &&
                      currentProgress <= 0.3,
                  })}
                  style={{
                    display:
                      isActive && currentProgress > 0.15 ? 'block' : 'none',
                  }}
                >
                  DOMANI | ÐAPP
                </BrowserTab>
                <BrowserTab
                  className={classNames('tab', {
                    'with-shape':
                      isActive &&
                      currentProgress > 0.3 &&
                      currentProgress <= 0.45,
                  })}
                  style={{
                    display:
                      isActive && currentProgress > 0.15 ? 'block' : 'none',
                  }}
                >
                  Tessaract
                </BrowserTab>
                <BrowserTab
                  className={classNames('tab', {
                    'with-shape':
                      isActive &&
                      currentProgress > 0.45 &&
                      currentProgress <= 0.6,
                  })}
                  style={{
                    display:
                      isActive && currentProgress > 0.15 ? 'block' : 'none',
                  }}
                >
                  Covid-19 Visualizer
                </BrowserTab>
                <BrowserTab
                  className={classNames('tab', {
                    'with-shape':
                      isActive &&
                      currentProgress > 0.6 &&
                      currentProgress <= 0.75,
                  })}
                  style={{
                    display:
                      isActive && currentProgress > 0.15 ? 'block' : 'none',
                  }}
                >
                  Turbine JavaScript
                </BrowserTab>
              </div>
            </div>
            <div className="browser-body">
              <div
                className="browser-page"
                style={{
                  display:
                    isActive && currentProgress > 0.15 && currentProgress <= 0.3
                      ? 'block'
                      : 'none',
                }}
              >
                <img src="/playground_assets/project-domani.png" />
              </div>
              <div
                className="browser-page"
                style={{
                  display:
                    isActive && currentProgress > 0.3 && currentProgress <= 0.45
                      ? 'block'
                      : 'none',
                }}
              >
                <img src="/playground_assets/project-tessaract.png" />
              </div>
              <div
                className="browser-page"
                style={{
                  display:
                    isActive && currentProgress > 0.45 && currentProgress <= 0.6
                      ? 'block'
                      : 'none',
                }}
              >
                <img src="/playground_assets/project-covid19.png" />
              </div>
              <div
                className="browser-page"
                style={{
                  display:
                    isActive && currentProgress > 0.6 && currentProgress <= 0.75
                      ? 'block'
                      : 'none',
                }}
              >
                <img src="/playground_assets/project-turbine.png" />
              </div>
            </div>
          </div>
        </Animator>
      </div>
    </section>
  )
}

export default WorkSection
