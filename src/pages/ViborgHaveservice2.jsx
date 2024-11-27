import React, { useEffect, useState } from 'react'

import Title from '../components/Title'
import Error from '../components/Error'
import Loader from '../components/Loader'

import useRequestData from '../Hooks/useRequestData'

const ViborgHaveservice2 = () => {

    const {makeRequest, isLoading, data, error} = useRequestData();

    useEffect(() => {
 
      makeRequest("");
     
    }, [])

  return ( //så laver man en return til at vise hvordan man vil opbygge siden
    <div className='container'>
      
        <Title titleText="ViborgHaveService2"/>
        { isLoading && <Loader /> }
        { error && <Error /> }

    </div>
  )
}

export default ViborgHaveservice2