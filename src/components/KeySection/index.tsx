import React from "react"
import "./style.scss"
import SectionTile from "./SectionTile"
import content from "../../assets/content/KeySection.json"
import OakAnimateElement from "../oakfly/OakAnimateElement"

export default function KeySection() {
  return (
    <div className="key-section">
      <div className="key-section--container column-layout">
        {content.data.map(item => (
          <OakAnimateElement>
            <SectionTile data={item} key={item.title} />
          </OakAnimateElement>
        ))}
      </div>
    </div>
  )
}
