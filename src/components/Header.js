

const Header = () => {
  return (
    <header className="container">
      <a href="#">Home</a>
      <h1 className="mobile-h1">STUDENT LIFE</h1>
      <div id="hero">
        <div className="hero-left">
          <h1>STUDENT LIFE</h1>
          <h2>There is so much going on at Ludlow University, both on and off the campus.</h2>
          <h3>Lisa Smith</h3>
          <p>Student, BSc (Hons) Computer Games Design</p>
          <button className="btn">View student stories</button>
        </div>

        <div className="hero-right">
          <div className="img-div">
            <img src="https://raw.githubusercontent.com/RemWinter/design-dev-test/main/public/hero_img.png" alt="" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header