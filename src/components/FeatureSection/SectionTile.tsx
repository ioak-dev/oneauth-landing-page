import React from "react"
import "./style.scss"
import KeyPoints from "./KeyPoints"
import OakAnimateElement from "../oakfly/OakAnimateElement"

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
          <OakAnimateElement direction="right">
            <img src={require(`../../assets/${props.data.illustration}`)} />
          </OakAnimateElement>
        </div>
      )}

      <div className="feature-sectiontile--illustration mobile-only">
        <OakAnimateElement>
          <img src={require(`../../assets/${props.data.illustration}`)} />
        </OakAnimateElement>
      </div>
      <div className="feature-sectiontile--content">
        <OakAnimateElement>
          <h2 className="heading--2 space-bottom-1">{props.data.title}</h2>
        </OakAnimateElement>
        <OakAnimateElement>
          <KeyPoints data={props.data.points} />
        </OakAnimateElement>
      </div>
      {props.data.alignAlt && (
        <div className="feature-sectiontile--illustration desktop-only">
          <OakAnimateElement direction="left">
            <img src={require(`../../assets/${props.data.illustration}`)} />
          </OakAnimateElement>
        </div>
      )}
    </div>
  )
}
