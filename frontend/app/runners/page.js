'use client'
import { useGetDataByCategory } from '../api/api-hooks'
import { endpoints } from '../api/config'
import { CardListSection } from '../components/CardListSection/CardListSection'
import { Preloader } from '../components/Preloader/Preloader'

export default function Runners() {
  const runnersGames = useGetDataByCategory(endpoints.games, 'runner')
  return (
    <main className={'main-inner'}>
      {runnersGames ? <CardListSection id="runner" title="Runners" data={runnersGames} type="slider" /> : <Preloader />}
    </main>
  )
}
