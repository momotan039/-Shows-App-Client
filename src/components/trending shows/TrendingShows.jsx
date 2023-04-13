import React, { useEffect, useState } from 'react'
import Shows from '../shows/Shows'
import { getTrendingShows } from '../../api/shows'
import { useDispatch } from 'react-redux'
import { showLoader } from '../../redux/actions/loaderActions'

function TrendingShows() {
    const [shows,setShows]=useState(null)
    const dispatch=useDispatch()
    const _getTrendingShows=async()=>{
        try {
            const data=await getTrendingShows()
            setShows(data.results)
        } catch (error) {
            alert(error.response.data.message)
        }
    }
    useEffect(()=>{
        _getTrendingShows()
    },[])
  return (
    <div className='trending'>
    <Shows title='Trending Shows' shows={shows}/>
    </div>
  )
}

export default TrendingShows