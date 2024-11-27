import React, { useEffect, useState } from 'react'

import Title from '../components/Title'
import Error from '../components/Error'
import Loader from '../components/Loader'

import useRequestData from '../Hooks/useRequestData'

const Home = () => {

  const {makeRequest, isLoading, data, error} = useRequestData();

    useEffect(() => {
 
      makeRequest("");
     
    }, [])

  return ( //så laver man en return til at vise hvordan man vil opbygge siden
    <div className='container'>
      
        <Title titleText="Velkommen til Dataservice Afsluttende Opgave"/>
        { isLoading && <Loader /> }
        { error && <Error /> }

    </div>
  )
}

export default Home