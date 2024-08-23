import styles from './MenuItem.module.css'

function MenuItem({ title, css, image }) {
  return (
    <div 
      style={{ backgroundImage: `url(${image})` }}
      className={ styles.menu_item }
    >
      <span>TRY IT OUT TODAY</span>
      <h2 className={ `${styles.title} ${ css }` }>{ title }</h2>
    </div>
  )
}

export default MenuItem