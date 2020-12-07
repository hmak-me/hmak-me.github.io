import React from "react"
import Header from "./header"
import "./index.styl"

const Layout = ({ children, className }) => {
  return (
    <>
      <Header />
      <main className={className}>{children}</main>
    </>
  )
}

export default Layout
