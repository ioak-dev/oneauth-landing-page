import React from "react"
import "./style.scss"

interface Props {
  data: {
    title: string
    description: string
    illustration: any
    alignAlt: boolean
  }
}

export default function SectionTile(props: Props) {
  return (
    <div className="feature-sectiontile">
      {!props.data.alignAlt && (
        <div className="feature-sectiontile--illustration">
          <img src={require(`../../assets/${props.data.illustration}`)} />
        </div>
      )}
      <div className="feature-sectiontile--content">
        <h2 className="heading--2">{props.data.title}</h2>
        <p className="heading--3">{props.data.description}</p>
      </div>
      {props.data.alignAlt && (
        <div className="feature-sectiontile--illustration">
          <img src={require(`../../assets/${props.data.illustration}`)} />
        </div>
      )}
    </div>
  )
}
