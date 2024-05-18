import { CardList } from './CardList'
import { CardSlider } from './CardSlider'
import Styles from './CardsListSection.module.css'

export const CardListSection = (props) => {
  return (
    <section className={Styles['list-section']}>
      <h2 className={Styles['list-section__title']} id={props.id}>
        {props.title}
      </h2>
      {props.type === 'slider' ? <CardSlider data={props.data} /> : <CardList data={props.data} />}
    </section>
  )
}
