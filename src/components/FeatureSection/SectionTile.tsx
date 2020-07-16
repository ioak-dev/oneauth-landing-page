import React from "react"
import "./style.scss"
import KeyPoints from "./KeyPoints"

interface Props {
  data: {
    title: string
    points: string[]
    illustration: any
    alignAlt: boolean
  }
}

export default function SectionTile(props: Props) {
  return (
    <div className="feature-sectiontile">
      {!props.data.alignAlt && (
        <div className="feature-sectiontile--illustration desktop-only">
          <img src={require(`../../assets/${props.data.illustration}`)} />
        </div>
      )}

      <div className="feature-sectiontile--illustration mobile-only">
        <img src={require(`../../assets/${props.data.illustration}`)} />
      </div>
      <div className="feature-sectiontile--content">
        <h2 className="heading--2 space-bottom-1">{props.data.title}</h2>
        <KeyPoints data={props.data.points} />
      </div>
      {props.data.alignAlt && (
        <div className="feature-sectiontile--illustration desktop-only">
          <img src={require(`../../assets/${props.data.illustration}`)} />
        </div>
      )}
    </div>
  )
}
