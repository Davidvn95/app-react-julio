import Segment from './components/segments/segment';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <section className={styles.footer}>
      <Segment segment={'Segmento 1'} listItems={['item 1', 'item 2', 'item 3', 'item 4', 'item 5']}/>
      <Segment segment={'Segmento 1'} listItems={['item 1', 'item 2', 'item 3', 'item 4', 'item 5']}/>
      <Segment segment={'Segmento 1'} listItems={['item 1', 'item 2', 'item 3', 'item 4', 'item 5']}/>
      <Segment segment={'Segmento 1'} listItems={['item 1', 'item 2', 'item 3', 'item 4', 'item 5']}/>
    </section>
  )
}