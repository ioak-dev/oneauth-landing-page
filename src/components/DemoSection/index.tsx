import React from "react"
import "./style.scss"
import SectionTile from "./SectionTile"
import content from "../../assets/content/DemoSection.json"

export default function DemoSection() {
  return (
    <div className="demo-section">
      <div className="demo-section--container column-layout">
        <SectionTile data={content} />
      </div>
    </div>
  )
}
