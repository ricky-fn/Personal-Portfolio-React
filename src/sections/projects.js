import React from 'react'
import {
  ScrollPage,
  Animator,
  batch,
  Fade,
  MoveOut,
  Sticky,
} from '@ricky-fn/react-scroll-motion'

const ProjectSection = () => {
  return (
    <section className="page-i-mac-section">
      <div className="container5">
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
    </section>
  )
}

export default ProjectSection
