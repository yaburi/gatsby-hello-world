import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `teal` }}>
    <Header headerText="Contact" />
    <Link to="/">Home</Link>
    <p>Send us a message!</p>
  </div>
)