'use client'
import { useGetDataByCategory } from './api/api-hooks'
import { endpoints } from './api/config'
import { Banner } from './components/Banner/Banner'
import { CardListSection } from './components/CardListSection/CardListSection'
import { Preloader } from './components/Preloader/Preloader'
import { Promo } from './components/Promo/Promo'

export default function Home() {
  const popularGames = useGetDataByCategory(endpoints.games, 'popular')
  const newGames = useGetDataByCategory(endpoints.games, 'new')
  return (
    <main className="main">
      <Banner />
      {popularGames ? (
        <CardListSection id="popular" title="Популярные" data={popularGames} type="slider" />
      ) : (
        <Preloader />
      )}
      {newGames ? <CardListSection id="new" title="Новинки" data={newGames} type="slider" /> : <Preloader />}
      <Promo />
    </main>
  )
}
