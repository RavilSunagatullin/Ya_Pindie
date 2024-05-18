'use client'
import { useGetDataByCategory } from '../api/api-hooks'
import { endpoints } from '../api/config'
import { CardListSection } from '../components/CardListSection/CardListSection'
import { Preloader } from '../components/Preloader/Preloader'

export default function Popular() {
  const popularGames = useGetDataByCategory(endpoints.games, 'popular')
  return (
    <main className={'main-inner'}>
      {popularGames ? (
        <CardListSection id="popular" title="Популярные" data={popularGames} type="slider" />
      ) : (
        <Preloader />
      )}
    </main>
  )
}
