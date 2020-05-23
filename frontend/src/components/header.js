import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div id="main-nav" className="container">
      <nav class="navbar navbar-expand-lg navbar-light">
      <Link className ="navbar-brand" to="/">{siteTitle}</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="mr-auto navbar-nav">
            <Link className ="nav-item nav-link" to="/">Recipes</Link>
            <Link className ="nav-item nav-link" to="/menu/">Menu</Link>
            <Link className ="nav-item nav-link" to="/about/">About</Link>
          </div>
          <Link id="menuButton" className ="btn btn-primary push-right" to="/menu/">Menu</Link>
        </div>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
