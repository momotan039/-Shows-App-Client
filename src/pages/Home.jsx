import React, { useEffect } from 'react'
import { fetchUsers } from '../api/auth'
import SearchBar from '../components/search bar/SearchBar'
import TrendingShows from '../components/trending shows/TrendingShows'
import RecommendedShows from '../components/recommended shows/RecommendedShows'

function Home() {
  return (
    <div className="home">
      <SearchBar/>
      <TrendingShows/>
      <RecommendedShows mediaType='movie'/>
    </div>
  )
}

export default Home