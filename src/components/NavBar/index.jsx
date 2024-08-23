import styles from './NavBar.module.css'

function NavBar() {
  return (
    <nav className={ styles.navbar }>
      <ul>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ESPECIAL</a>
        </li>
        <li>
          <a href="#">MENU</a>
        </li>
        <li>
          <a href="#">EVENTOS</a>
        </li>
        <li>
          <a href="#">CONTACTE-NOS</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar