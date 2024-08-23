import NavBar from '../NavBar'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={ styles.header }>
      <div className={`p-block ${ styles.header_top } `}>
        <div className={ styles.logo }>
          <img src="/images/logo1.png" alt="Burger House" />
        </div>
        <NavBar />
      </div>
      <div className={ styles.header_content }>
        <div className={ styles.h_box }>
          <p>
            It is good time for the greate taste <br /> of Burger
          </p>
        </div>
        <h2>BURGER</h2>
        <h3>WEEK</h3>
      </div>
    </header>
  )
}

export default Header