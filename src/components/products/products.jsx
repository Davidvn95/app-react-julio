import Card from './components/card/card'
import styles from './products.module.css'
import { tortasData } from '../../lib/data'

export default function Products() {
  return (
    <section>
      <h2> Productos</h2>
      <div className={styles.container}>
        {tortasData.map(({ image, title, calidad }) => {
          return <Card key={title} imagen={image} titulo={title} calidad={calidad} />
        })}
      </div>
    </section>
  )
}
