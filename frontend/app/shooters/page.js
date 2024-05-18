'use client'
import { useGetDataByCategory } from '../api/api-hooks'
import { endpoints } from '../api/config'
import { CardListSection } from '../components/CardListSection/CardListSection'
import { Preloader } from '../components/Preloader/Preloader'

export default function Shooters() {
  const shootersGames = useGetDataByCategory(endpoints.games, 'shooter')
  return (
    <main className={'main-inner'}>
      {shootersGames ? (
        <CardListSection id="shoote" title="Shooters" data={shootersGames} type="slider" />
      ) : (
        <Preloader />
      )}
    </main>
  )
}
