import React from 'react'

const footer = () => {
  return (
    <footer className='container'>
      <div className="footer-left">
        <div className="footer-left-content">
        <img className='logo' src="/logo.svg" alt="" />
        <div className="social-icons">
          <img src="/twitter.svg" alt="" className="icon" />          
          <img src="/linkedin.svg" alt="" className="icon" />        
          <img src="/google.svg" alt="" className="icon" />          
          <img src="/facebook.svg" alt="" className="icon" />          
        </div>
        </div>
      </div>

      <div className="footer-right">
        <div className="img-div">
          <img src="/twitter_embed.png" alt="" />
        </div>
      </div>
      
    </footer>
  )
}

export default footer