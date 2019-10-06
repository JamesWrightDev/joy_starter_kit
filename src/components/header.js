import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { showMenu: false }
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }

  render() {
    const { siteTitle } = this.props
    return (
      <header className="">
        <div>
          <h1 style={{ margin: 0 }}>
            <Link to="/">{siteTitle}</Link>
          </h1>
          <button onClick={() => this.toggleMenu()}>header button</button>

          {this.state.showMenu &&
             <div className={`header-menu--container` + (this.state.showMenu ? ' active' : ' inactive')}>
               <button onClick={() => this.toggleMenu()}>Close Menu</button>
             <ul className="header-menu--wrapper">
               <li className="header-menu--item">
                 <Link to="/article/">About</Link>
               </li>
               <li className="header-menu--item">
                 <Link to="/">Blog</Link>
               </li>
               <li className="header-menu--item">
                 <Link to="/">Contact</Link>
               </li>
             </ul>
           </div>
          }
        </div>
      </header>
    )
  }
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
