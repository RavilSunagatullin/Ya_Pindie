'use client'
import { useEffect, useState } from 'react'
import Style from './Promo.module.css'

export const Promo = () => {
  const [codeIsVisible, handleButtonClick] = useState(false)
  const openCode = () => {
    handleButtonClick(true)
  }

  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text)
    } catch (e) {
      console.error('not copy')
    }
  }

  const closeCode = () => {
    copyToClipboard('WEBTEENS10')
    handleButtonClick(false)
  }
  useEffect(() => {
    let timeout
    if (codeIsVisible) {
      timeout = setTimeout(() => {
        closeCode()
      }, 5000)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [codeIsVisible])
  return (
    <section className={Style['promo']}>
      <div className={Style['promo__description-block']}>
        <h2 className={Style['promo__title']}>Твой промо-код</h2>
        <p className={Style['promo__description']}>
          Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!
        </p>
        <button className={`button ${Style['promo__button']}`} onClick={openCode}>
          {codeIsVisible ? <span className={Style['promo-code']}>WEBTEENS10</span> : 'Получить код'}
        </button>
      </div>
      <img src="/images/promo-illustration.svg" alt="Собака" className={Style['promo__image']} />
    </section>
  )
}
