'use client'
import { useEffect, useState } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { useStore } from './store/app-store'

export const App = (props) => {
  const store = useStore()

  useEffect(() => {
    store.checkAuth()
  }, [])
  return (
    <>
      <div className={'content'}>
        <Header />
        <div className={'wrapper'}>{props.children}</div>
      </div>
      <Footer />
    </>
  )
}
