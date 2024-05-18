'use client'
import { useGetDataByCategory } from '../api/api-hooks'
import { endpoints } from '../api/config'
import { CardListSection } from '../components/CardListSection/CardListSection'
import { Preloader } from '../components/Preloader/Preloader'

export default function New() {
  const tdsGames = useGetDataByCategory(endpoints.games, 'TDS')
  return (
    <main className={'main-inner'}>
      {tdsGames ? <CardListSection id="tds" title="TDS игры" data={tdsGames} type="slider" /> : <Preloader />}
    </main>
  )
}
