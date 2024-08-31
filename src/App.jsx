import Container from "./components/Container"
import Header from "./components/Header"
import "./App.css"
import MenuItem from "./components/MenuItem"

function App() {
  return (
    <>
      <Header />
      <Container>
        <section className="blog">
          <MenuItem title='HAMBURGUER MAIS POPULAR' image='/images/about.png' />
          <div className="blog_more">
            <MenuItem title='MORE FUN MORE TASTE' image='/images/about.png' />
            <MenuItem title='FRESH & CHILI' image='/images/about.png' />
          </div>
        </section>
        <div style={{textAlign: 'center', margin: '20px'}}>
          <a href="#" className="btn btn-yel">VER MAIS</a>
        </div>
        <section>
          <h2>CHOOSE & ENJOY</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet error reprehenderit autem minima repellendus odio tempore, temporibus nihil ab exercitationem earum tempora reiciendis doloribus at consequuntur praesentium repudiandae harum eum?</p>
          <div className="cards">
            
          </div>
        </section>
      </Container>
    </>
  )
}

export default App
