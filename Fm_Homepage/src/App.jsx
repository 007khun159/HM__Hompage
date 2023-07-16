import './styles/style.css'
import Logo from './assets/images/logo.svg'
import Desktop_Web from './assets/images/image-web-3-desktop.jpg'
import Mobile_Web from './assets/images/image-web-3-mobile.jpg'

function App() {
  return (
    <div>
      <div className="container">
        <header>
          <nav>
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="links">
              <a href='#'>Home</a>
              <a href='#'>New</a>
              <a href='#'>Popular</a>
              <a href='#'>Tending</a>
              <a href='#'>Catagories</a>
            </div>
          </nav>
        </header>

        <section className="hero-section">
          <div className="first-section">
            <div className="hero-img">
              <img className='desktop_img' src={Desktop_Web} alt="Desktop Web" />
              <img className='mobile_img' src={Mobile_Web} alt="Mobile Web" />
            </div>
            <div className="intro">
              <h1>The Bright Future of Web 3.0?</h1>
              <div className="description">
                <p>
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button>Read more</button>
              </div>
            </div>
            <aside className='news'>
              <h2>New</h2>
              <div className="card">
                <h3>Hydrogen VS Electric Cars</h3>
                <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
              </div>
              <div className="card">
                <h3>The Downsides of AI Artistry</h3>
                <p>What are the possible adverse effects of on-demand AI image generation?</p>
              </div>
              <div className="card">
                <h3>Is VC Funding Drying Up?</h3>
                <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
              </div>
            </aside>
          </div>
          <div className="second-section">Second-section-Section</div>
        </section>
      </div>
    </div>
  )
}

export default App
