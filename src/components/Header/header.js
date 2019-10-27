import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { Component } from "react";
import HeaderStyles from './header.module.scss';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { showMenu: false }
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu })
  }

  render() {
    const { siteTitle } = this.props;

    return (
      <header className="body">
          <h1 style={{ margin: 0 }}>
            <Link to="/">{siteTitle}</Link>
          </h1>
          <button className={HeaderStyles.menuIcon} onClick={() => this.toggleMenu()}>header button</button>

          {this.state.showMenu &&
               <div
               className={this.state.showMenu ?
                HeaderStyles.headerMenu__container + ' ' +HeaderStyles.active :
                HeaderStyles.headerMenu__container
                }>
               <button onClick={() => this.toggleMenu()}>Close Menu</button>
             <ul className={HeaderStyles.headerMenu__wrapper}>
               <li className={HeaderStyles.headerMenu__item}>
                 <Link to="/article/">About</Link>
               </li>
               <li className={HeaderStyles.headerMenu__item}>
                 <Link to="/">Blog</Link>
               </li>
               <li className={HeaderStyles.headerMenu__item}>
                 <Link to="/">Contact</Link>
               </li>
             </ul>
           </div>
          }

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
