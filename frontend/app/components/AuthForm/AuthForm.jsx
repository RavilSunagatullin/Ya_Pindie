import { useEffect, useState } from 'react'
import { authorize, isResponseOk } from '../../api/api-utils'
import { endpoints } from '../../api/config'
import { useStore } from '../../store/app-store'
import Styles from './AuthForm.module.css'

export const AuthForm = (props) => {
  const [authData, setAuthData] = useState({ email: '', password: '' })
  const [message, setMessage] = useState({ status: null, text: null })
  const authContext = useStore()
  const handleInput = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const userData = await authorize(endpoints.auth, authData)
    if (isResponseOk(userData)) {
      authContext.login({ ...userData, id: userData._id }, userData.jwt)
      setMessage({ status: 'success', text: 'Вы авторизовались!' })
    } else {
      setMessage({ status: 'error', text: 'Неверные почта или пароль' })
    }
  }

  useEffect(() => {
    let timer
    if (authContext.user) {
      timer = setTimeout(() => {
        setMessage({ status: null, text: null })
        props.close()
      }, 1000)
    }
    return () => clearTimeout(timer)
  }, [authContext.user])

  return (
    <form onSubmit={handleSubmit} className={Styles['form']}>
      <h2 className={Styles['form__title']}>Авторизация</h2>
      <div className={Styles['form__fields']}>
        <label className={Styles['form__field']}>
          <span className={Styles['form__field-title']}>Email</span>
          <input
            onInput={handleInput}
            className={Styles['form__field-input']}
            type="email"
            placeholder="hello@world.com"
            name="email"
          />
        </label>
        <label className={Styles['form__field']}>
          <span className={Styles['form__field-title']}>Пароль</span>
          <input
            onInput={handleInput}
            className={Styles['form__field-input']}
            type="password"
            placeholder="***********"
            name="password"
          />
        </label>
      </div>
      {message.status && <p className={Styles['form__message']}>{message.text}</p>}
      <div className={Styles['form__actions']}>
        <button className={Styles['form__reset']} type="reset" name="resetBtn">
          Очистить
        </button>
        <button onInput={handleInput} className={Styles['form__submit']} type="submit" name="submitBtn">
          Войти
        </button>
      </div>
    </form>
  )
}
