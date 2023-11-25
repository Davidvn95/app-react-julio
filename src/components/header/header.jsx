import styles from './header.module.css'
import imageLogo from '../../assets/menu.png'
import imageCart from '../../assets/cart.png'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={imageLogo} alt="Logo imagen" />
        <span>Logo</span>
      </div>
      <nav className={styles.navBar}>
        <a href="">Inicio</a>
        <a href="">Productos</a>
        <a href="">Servicios</a>
        <a href="">Contacto</a>
        <img src={imageCart} alt="" />
      </nav>
    </header>
  )
}
