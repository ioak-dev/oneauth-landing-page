import React from "react"
import "./style.scss"
import OakButton from "../oakfly/OakButton"

interface Props {
  data: {
    title: string
    description: string
    illustration: any
    actionLabel: string
  }
}

export default function SectionTile(props: Props) {
  return (
    <div className="demo-sectiontile">
      <div className="demo-sectiontile--content">
        <h2 className="heading--2">{props.data.title}</h2>
        <p className="heading--3 space-bottom-1">{props.data.description}</p>
        <OakButton theme="primary" variant="appear" faIcon="fas fa-snowman">
          {props.data.actionLabel}
        </OakButton>
      </div>
      <div className="demo-sectiontile--illustration">
        <img src={require(`../../assets/${props.data.illustration}`)} />
      </div>
    </div>
  )
}
