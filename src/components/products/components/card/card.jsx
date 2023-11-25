import styles from './card.module.css'

export default function Card({ imagen, titulo, calidad }) {
  return (
    <div className={styles.container}>
      <img src={imagen} alt="" />
      <h4>{titulo}</h4>
      <span>{calidad}</span>
      <span>$15000</span>
      <button>Agregar al carrito</button>
    </div>
  )
}