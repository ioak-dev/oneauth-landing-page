import React from "react"
import "./style.scss"

interface Props {
  data: {
    title: string
    description: string
    faIcon: any
  }
}

export default function SectionTile(props: Props) {
  return (
    <div className="key-sectiontile">
      <i className={props.data.faIcon} />
      <h2 className="heading--2 key-sectiontile--title">{props.data.title}</h2>
      <p className="heading--3">{props.data.description}</p>
    </div>
  )
}
