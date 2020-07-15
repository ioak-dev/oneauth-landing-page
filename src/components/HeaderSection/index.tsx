import React from "react"
import "./style.scss"
import oneauthWhite from "../../assets/oneauth_white.svg"
import oneauthBlack from "../../assets/oneauth_black.svg"
import { Link } from "gatsby"

interface Props {
  black?: boolean
}

export default function HeaderSection(props: Props) {
  return (
    <div className="header-section">
      <Link to="/" title="Go to landing page">
        <img
          className="logo"
          src={props.black ? oneauthBlack : oneauthWhite}
          alt="Oneauth logo"
        />
      </Link>
    </div>
  )
}
