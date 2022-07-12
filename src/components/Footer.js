import React from 'react'

const footer = () => {
  return (
    <footer className='container'>
      <div className="footer-left">
        <div className="footer-left-content">
        <img className='logo' src="./design-dev-test/logo.svg" alt="" />
        <div className="social-icons">
          <img src="./design-dev-test/twitter.svg" alt="" className="icon" />          
          <img src="./design-dev-test/linkedin.svg" alt="" className="icon" />        
          <img src="./design-dev-test/google.svg" alt="" className="icon" />          
          <img src="./design-dev-test/facebook.svg" alt="" className="icon" />          
        </div>
        </div>
      </div>

      <div className="footer-right">
        <div className="img-div">
          <img src="./design-dev-test/twitter_embed.png" alt="" />
        </div>
      </div>
      
    </footer>
  )
}

export default footer