import React from "react"
import "./style.scss"
import OakButton from "../oakfly/OakButton"
import content from "../../assets/content/HeroSection.json"
import AppPreview from "./AppPreview"
import HeaderSection from "../HeaderSection"
import CallToAction from "./CallToAction"
import heroDesktopIllustration from "../../assets/illustration/hero_desktop.svg"
import heroMobileIllustration from "../../assets/illustration/hero_mobile.svg"
import OakAnimateElement from "../oakfly/OakAnimateElement"

export default function HeroSection() {
  return (
    <div className="hero-section-group">
      <HeaderSection black />
      <div className="hero-section">
        <div className="hero-section--container column-layout">
          <div className="hero-section--container--illustration">
            <OakAnimateElement direction="right">
              <img
                className="desktop-only"
                src={heroDesktopIllustration}
                alt="Secure identity"
              />
            </OakAnimateElement>
            <OakAnimateElement>
              <img
                className="mobile-only"
                src={heroDesktopIllustration}
                alt="Secure identity"
              />
            </OakAnimateElement>
          </div>
          <div className="hero-section--container--content">
            <OakAnimateElement>
              <h1 className="heading--1">{content.title}</h1>
            </OakAnimateElement>
            <OakAnimateElement>
              <p className="heading--3">{content.subtitle}</p>
            </OakAnimateElement>
            <OakAnimateElement>
              <div className="hero-section--container--cta">
                <CallToAction data={content.callToAction} />
              </div>
            </OakAnimateElement>
          </div>
        </div>
      </div>
    </div>
  )
}
