'use client'
import { redirect } from 'next/navigation'
import { AuthRegisterForm } from '../components/AuthForm/AuthRegisterForm'
import { useStore } from '../store/app-store'
import Style from './register.module.css'

export default function Login() {
  const authContext = useStore()
  return (
    <main className={'main-inner'}>
      <div className={Style['wrapper']}>{authContext.isAuth ? redirect('/') : <AuthRegisterForm />}</div>
    </main>
  )
}
