import React from "react"
import "./style.scss"

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
      <div className="demo-sectiontile--illustration">
        <img src={require(`../../assets/${props.data.illustration}`)} />
      </div>
      <div className="demo-sectiontile--content">
        <h2 className="heading--2 space-bottom-1">{props.data.title}</h2>
        <p className="heading--3">{props.data.description}</p>
      </div>
    </div>
  )
}
