import Style from './Card.module.css'

export const Card = (props) => {
  return (
    <article className={Style['card']}>
      <img src={props.image} alt={`${props.title} image`} className={Style['card__image']} />
      <div className={Style['card__content-block']}>
        <h3 className={Style['card__title']}>{props.title}</h3>
        <p className={Style['card__description']}>{props.description}</p>
        <div className={Style['card__info-container']}>
          <p className={Style['card__author']}>
            Автор: <span className={Style['card__accent']}>{props.developer}</span>
          </p>
          <p className={Style['card__votes']}>
            Голосов на сайте: <span className={Style['card__accent']}>{props.users.length}</span>
          </p>
        </div>
      </div>
    </article>
  )
}
