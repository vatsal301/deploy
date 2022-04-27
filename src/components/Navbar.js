import React from "react";
import PropTypes from "prop-types"

export default function Navbar(prop){
    return(
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode} p-2`}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a href="/" className="navbar-brand">{prop.logo}</a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item active">
                    <a href="/" className="nav-link">Home <span className="sr-only"></span></a>
                  </li>
                </ul>
            </div>
            <div className={`form-check form-switch text-${prop.mode==="light"?"dark" : "light"}`}>
                <input className="form-check-input" onClick={prop.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
          </div>
      </nav>
      </div>
    )
}

Navbar.propTypes = {
    logo : PropTypes.string.isRequired,
    value : PropTypes.string
}

Navbar.defaultProps = {
    logo : "Your Name",
    value : "Enter Something"
}