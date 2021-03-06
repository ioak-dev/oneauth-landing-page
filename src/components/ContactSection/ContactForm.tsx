import React, { useState } from "react"
import "./style.scss"
import OakButton from "../oakfly/OakButton"
import OakTextPlain from "../oakfly/OakTextPlain"

interface Props {
  closeForm: any
}

export default function ContactForm(props: Props) {
  const [state, setState] = useState({
    name: "",
    email: "",
    description: "",
  })
  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.value })
  }
  const contact = () => {
    console.log("send email to support")
    console.log(state)
  }
  return (
    <div className="contact-form">
      <form>
        <OakTextPlain
          id="name"
          data={state}
          handleChange={handleChange}
          label="Name"
        />
        <OakTextPlain
          id="email"
          data={state}
          handleChange={handleChange}
          label="Email"
        />
        <OakTextPlain
          id="description"
          data={state}
          handleChange={handleChange}
          label="Description"
          multiline
          rows={5}
        />
      </form>
      <div className="contact-form--action">
        <OakButton
          theme="primary"
          variant="appear"
          faIcon="fas fa-paper-plane"
          action={contact}
        >
          Send
        </OakButton>
        <OakButton
          theme="default"
          variant="block"
          faIcon="fas fa-ban"
          action={props.closeForm}
        >
          Cancel
        </OakButton>
      </div>
    </div>
  )
}
