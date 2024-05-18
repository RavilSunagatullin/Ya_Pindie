'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Style from './Footer.module.css'

export const Footer = () => {
  const pathname = usePathname()
  return (
    <footer className={Style['footer']}>
      {pathname === '/' ? (
        <div className={Style['footer__logo']}>
          <span className={Style['footer__logo-name']}>pindie</span>
          <span className={Style['footer__logo-copy']}>, XXI век</span>
        </div>
      ) : (
        <Link href="/" className={Style['footer__logo']}>
          <span className={Style['footer__logo-name']}>pindie</span>
          <span className={Style['footer__logo-copy']}>, XXI век</span>
        </Link>
      )}

      <ul className={Style['social-list']}>
        <li className={Style['social-list__item']}>
          <a
            href="https://www.youtube.com/@YandexPracticum"
            target="_blank"
            className={`button ${Style['social-list__link']}`}
          >
            YT
          </a>
        </li>
        <li className={Style['social-list__item']}>
          <a href="https://vk.com/yandex.practicum" target="_blank" className={`button ${Style['social-list__link']}`}>
            ВК
          </a>
        </li>
        <li className={Style['social-list__item']}>
          <a href="https://t.me/s/yndx_practicum" target="_blank" className={`button ${Style['social-list__link']}`}>
            TG
          </a>
        </li>
      </ul>
    </footer>
  )
}
