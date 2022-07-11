import React from 'react'

const FeatureBanner = () => {
  return (
    <section id='feature-banner' className='container'>
      <div className="feature-top">
        <h1>Upcoming events</h1>
        <button className='btn'>View all events</button>
      </div>
      <div className="feature-bottom">
        <div className="img-div">
          <div className="event-date">
            <h1><span>01</span><br />AUG</h1>
          </div>
          <img src="https://raw.githubusercontent.com/RemWinter/design-dev-test/main/public/events_image1.png" alt=""/>
          <div className="grad-overlay"></div>
          <h1 className='event-title'>Ludlow campus rock festival 2019</h1>
        </div>
        <div className="img-div">
        <div className="event-date">
            <h1><span>14</span><br />AUG</h1>
          </div>
          <img src="https://raw.githubusercontent.com/RemWinter/design-dev-test/main/public/events_image2.png" alt="" />
          <div className="grad-overlay"></div>
          <h1 className='event-title'>2019 game design exhibition</h1>
        </div>
        <div className="img-div">
        <div className="event-date">
            <h1><span>21</span><br />AUG</h1>
          </div>
          <img src="https://raw.githubusercontent.com/RemWinter/design-dev-test/main/public/events_image3.png" alt="" />
          <div className="grad-overlay"></div>
          <h1 className='event-title'>Study collaboration session </h1>          
        </div>
      </div>
    </section>
  )
}

export default FeatureBanner