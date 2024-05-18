'use client'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'
import { useGetMe } from '../api/api-hooks'
import { getJWT } from '../api/api-utils'
import { endpoints } from '../api/config'
import { Preloader } from '../components/Preloader/Preloader'
import { useStore } from '../store/app-store'
import Style from './me.module.css'

export default function Me() {
  const authContext = useStore()
  const meData = useGetMe(endpoints.me, getJWT())
  const buttonHandler = () => {
    authContext.logout()
    redirect('/')
  }
  useEffect(() => {
    if (!authContext.isAuth) {
      redirect('/')
    }
  }, [])
  return (
    <main className={'main-inner'}>
      <div className={Style['wrapper']}>
        {!authContext.isAuth ? (
          redirect('/')
        ) : meData ? (
          <div className={Style['profile']}>
            <p>Приветствую, {meData.username}!</p>
            <p>Email: {meData.email}</p>
            <button onClick={buttonHandler} className="button">
              Выйти
            </button>
          </div>
        ) : (
          <Preloader />
        )}
      </div>
    </main>
  )
}
