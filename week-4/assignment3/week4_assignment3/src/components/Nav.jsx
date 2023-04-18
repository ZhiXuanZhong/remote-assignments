import { useState } from 'react'

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  function handleClick() {
    setIsOpen(!isOpen)
    console.log('here');
  }

  return (
    <nav className="main-nav">
      <div className="main-nav__logo">
        <a href="#" className="main-nav__logo-link">
          Website Title / Logo
        </a>
      </div>

      <div className="main-nav__ham ham__label">
        <div className="bar-icon" id="side-menu-open" onClick={handleClick}>
          <div className="icon-bar"></div>
          <div className="icon-bar"></div>
          <div className="icon-bar"></div>
        </div>
      </div>

      <ul
        className={
        `main-nav__menu main-nav__menu--list-bg-light 
        ${isOpen ? 'main-nav__menu--show' : ''}`
        }
      >
        <li className="main-nav__menu-item">
          <a href="#" className="main-nav__menu-item-link">
            Item 1
          </a>
        </li>
        <li className="main-nav__menu-item">
          <a href="#" className="main-nav__menu-item-link">
            Item 2
          </a>
        </li>
        <li className="main-nav__menu-item">
          <a href="#" className="main-nav__menu-item-link">
            Item 3
          </a>
        </li>
        <li className="main-nav__menu-item">
          <a href="#" className="main-nav__menu-item-link">
            Item 4
          </a>
        </li>
        <li>
          <div id="side-menu-close" onClick={handleClick}>
            X
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
