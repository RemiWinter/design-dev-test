import { useEffect, useRef, useState } from "react"
import Navlist from "./Navlist"

const Navbar = () => {
  const [navItems, setNavItems] = useState([
    { title: 'Study', path: '#', id: 1 },
    { title: 'Research', path: '#', id: 2 },
    { title: 'About Us', path: '#', id: 3 }
  ])

  const nav = useRef()

  const menuBar =useRef()

  // function menuOnClick() {
  //   menuBar.current.classList.toggle("change");
  //   document.getElementById("nav").classList.toggle("change");
  //   document.getElementById("menu-bg").classList.toggle("change-bg");
  // }

  return (
    <>
      <nav id="navbar-full">
        <div className="nav-content container">
          <div id="nav-left">
            <a href="#" id="logo">
              <img src="./design-dev-test/logo.svg" alt="" />
            </a>
          </div>
          <div id="nav-right">
            <Navlist navItems={navItems}/>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div id="menu">
        <div id="menu-bar" className="ham" ref={menuBar} onClick={() => {
          document.getElementById("menu-bar").classList.toggle("change");
          document.getElementById("nav").classList.toggle("change");
          document.getElementById("menu-bg").classList.toggle("change-bg");
        }}>
          <div id="bar1" className="bar ham"></div>
          <div id="bar2" className="bar ham"></div>
          <div id="bar3" className="bar ham"></div>
        </div>
        <nav className="nav" id="nav" ref={nav}>
          <Navlist navItems={navItems}/>
          {/* <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
          </ul> */}
        </nav> 
      </div>

      <div className="menu-bg" id="menu-bg"></div>
      <div className="nav-logo">
          <a href="#" id="logo">
            <img src="./design-dev-test/logo.svg" alt="" />
          </a>
      </div>

    </>
  )
}

export default Navbar