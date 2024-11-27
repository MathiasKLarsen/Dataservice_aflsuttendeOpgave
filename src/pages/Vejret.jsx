import React, { useEffect, useState } from 'react'

import Title from '../components/Title'
import Error from '../components/Error'
import Loader from '../components/Loader'

import useRequestData from '../Hooks/useRequestData'

const Vejret = () => {

    const {makeRequest, isLoading, data, error} = useRequestData();

    useEffect(() => {
 
      makeRequest("");
     
    }, [])

  return ( //så laver man en return til at vise hvordan man vil opbygge siden
    <div className='container'>
      
        <Title titleText="Vejret"/>
        { isLoading && <Loader /> }
        { error && <Error /> }

    </div>
  )
}

export default Vejret