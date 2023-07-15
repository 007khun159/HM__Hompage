import './styles/style.css'


import Logo from './assets/images/logo.svg'


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

              <section className="hero-section"></section>

        
        </div>

    </div>
  )
}

export default App
