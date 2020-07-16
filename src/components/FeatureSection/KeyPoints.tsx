import React from "react"
import "./style.scss"

interface Props {
  data: string[]
}

export default function KeyPoints(props: Props) {
  return (
    <div className="feature-keypoints">
      {props.data.map(point => (
        <div className="feature-keypoints--point">
          <i className="fa fa-check" />
          <div>{point}</div>
        </div>
      ))}
    </div>
  )
}
