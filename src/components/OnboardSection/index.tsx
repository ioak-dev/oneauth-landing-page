import React from "react"
import "./style.scss"
import SectionTile from "./SectionTile"
import content from "../../assets/content/OnboardSection.json"
import gettingStartedIllustration from "../../assets/illustration/getting_started.svg"

export default function OnboardSection() {
  return (
    <div className="onboard-section">
      <div className="onboard-section--container column-layout">
        <div className="onboard-section--container--illustration">
          <img src={gettingStartedIllustration} alt="Secure identity" />
        </div>
        <div className="onboard-section--container--content">
          <h2 className="heading--2 space-bottom-1">{content.title}</h2>
          <div className="onboard-section--container--steps">
            {content.steps?.map((step, index) => (
              <SectionTile step={step} key={step.title} order={index + 1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
