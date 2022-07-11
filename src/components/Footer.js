import React from 'react'

const footer = () => {
  return (
    <footer className='container'>
      <div className="footer-left">
        <div className="footer-left-content">
        <img className='logo' src="/logo.svg" alt="" />
        <div className="social-icons">
          <img src="https://raw.githubusercontent.com/RemWinter/design-dev-test/main/public/twitter.svg" alt="" className="icon" />          
          <img src="https://raw.githubusercontent.com/RemWinter/design-dev-test/main/public/linkedin.svg" alt="" className="icon" />        
          <img src="https://raw.githubusercontent.com/RemWinter/design-dev-test/main/public/google.svg" alt="" className="icon" />          
          <img src="https://raw.githubusercontent.com/RemWinter/design-dev-test/main/public/facebook.svg" alt="" className="icon" />          
        </div>
        </div>
      </div>

      <div className="footer-right">
        <div className="img-div">
          <img src="https://raw.githubusercontent.com/RemWinter/design-dev-test/main/public/twitter_embed.png" alt="" />
        </div>
      </div>
      
    </footer>
  )
}

export default footer