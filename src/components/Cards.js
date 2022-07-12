import React from 'react'

const Cards = () => {
  return (
    <section className='container' id='cards'>
      <div className="cards-top">
        <div className="img-div card1">
          <img src="https://raw.githubusercontent.com/RemWinter/design-dev-test/main/public/card_img1.png" alt="" />
          <div className="copy-overlay">
            <h1>Activities and clubs</h1>
            <img className='arrow' src="https://raw.githubusercontent.com/RemWinter/design-dev-test/main/public/arrow.svg" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
        <div className="img-div card2">
          <img src="https://raw.githubusercontent.com/RemWinter/design-dev-test/main/public/card_img2.png" alt="" />  
          <div className="copy-overlay">
            <h1>Accommodation</h1>
            <img className='arrow' src="https://raw.githubusercontent.com/RemWinter/design-dev-test/main/public/arrow.svg" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>

        </div>
      </div>
      <div className="cards-bottom">
        <div className="img-div card3">
          <img src="https://raw.githubusercontent.com/RemWinter/design-dev-test/main/public/card_img3.png" alt="" />
          <div className="copy-overlay">
            <h1>Chat to a student</h1>
            <img className='arrow' src="https://raw.githubusercontent.com/RemWinter/design-dev-test/main/public/arrow.svg" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
        <div className="img-div card4">
          <img src="https://raw.githubusercontent.com/RemWinter/design-dev-test/main/public/card_img4.png" alt="" />  
          <div className="copy-overlay">
            <h1>Support</h1>
            <img className='arrow' src="https://raw.githubusercontent.com/RemWinter/design-dev-test/main/public/arrow.svg" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
        <div className="img-div card5">
          <img src="https://raw.githubusercontent.com/RemWinter/design-dev-test/main/public/card_img5.png" alt="" />  
          <div className="copy-overlay">
            <h1>Life in Ludlow</h1>
            <img className='arrow' src="https://raw.githubusercontent.com/RemWinter/design-dev-test/main/public/arrow.svg" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards