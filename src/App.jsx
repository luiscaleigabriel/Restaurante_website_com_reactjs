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
      </Container>
    </>
  )
}

export default App
