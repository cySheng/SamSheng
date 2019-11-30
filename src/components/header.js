import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <nav>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <Link to="/page-2">Projects</Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
