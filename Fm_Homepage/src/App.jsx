import './styles/style.css'


import Logo from './assets/images/logo.svg'
import Desktop_Web from './assets/images/image-web-3-desktop.jpg'
import Mobile_Web from './assets/images/image-web-3-mobile.jpg'

function App() {
  

  return (
    <div>

        <div className="container">

          <nav>
            <div className="logo">
                <img src={Logo}/>
            </div>
            <div className="links">
                <a href='#'>Home</a>
                <a href='#'>New</a>
                <a href='#'>Popular</a>
                <a href='#'>Tending</a>
                <a href='#'>Catagories</a>
            </div>
          </nav>

              <section className="hero-section">
                      <div className="first-section">

                        <div className="hero-img">

                          <img src={Desktop_Web}/>
                          <img src={Mobile_Web}/>

                        </div>
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
                          <h3></h3>
                          <p></p>
                        </div>
                        <div className="card">
                          <h3></h3>
                          <p></p>
                        </div>
                        <div className="card">
                          <h3></h3>
                          <p></p>
                        </div>
                      </aside>
                      <div className="second-section">

                      </div>




              </section>

        
        </div>

    </div>
  )
}

export default App
