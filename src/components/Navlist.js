import React from 'react'

const Navlist = ({navItems, onClick}) => {
  return (
      <ul>
      {navItems.map(item => (
          <li key={item.id} onClick={() => {
            document.getElementById("menu-bar").classList.remove("change");
          document.getElementById("nav").classList.remove("change");
          document.getElementById("menu-bg").classList.remove("change-bg");
          }}>
            <a href={item.path}>{item.title}</a>
          </li>
      ))}
          <li><img src="/search.svg" alt="" /></li>
        </ul>
  )
}

export default Navlist