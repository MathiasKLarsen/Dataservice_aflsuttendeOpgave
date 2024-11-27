import React, { useEffect, useState } from 'react'

import Title from '../components/Title'
import Error from '../components/Error'
import Loader from '../components/Loader'

import useRequestData from '../Hooks/useRequestData'

const ViborgHaveservice1 = () => {

    const {makeRequest: aboutUsRequest, data: aboutUsData, isLoading, error} = useRequestData()
    const {makeRequest: servicesRequest, data: servicesData} = useRequestData()

    useEffect(() => {
 
        aboutUsRequest("http://localhost:5023/aboutus");
        servicesRequest("http://localhost:5023/services");
     
    }, [])

  return ( 
    <div className='container'>
      
        <Title titleText="Velkommen til" titleText2="Viborg Haveservice" />
        { isLoading && <Loader /> }
        { error && <Error /> }

        <div className='grid grid-cols-4 gap-10'>
            { aboutUsData &&
                <div key={aboutUsData.id} className='flex flex-col gap-4 p-5 border border-blue-500'>
                    <h2><span className='text-lg font-bold'>Title: </span>{aboutUsData.title}</h2>
                    <p><span className='text-lg font-bold'>Content: </span>{aboutUsData.content}</p>
                </div>
            }
        </div>
        <div>
            { servicesData && 
                servicesData.map(s => 
                    <div key={s.id} className='flex flex-col gap-4 p-5 border border-blue-500'>
                        <h2><span className='text-lg font-bold'></span>{s.title}</h2>
                        <p><span className='text-lg font-bold'></span>{s.content}</p>
                        <img src={"http://localhost:5023/images/" + s.image} alt={s.title} className='object-scale-down w-full h-[150px]'/>
                    </div>
                )
            }
        </div>
        
    </div>
  )
}

export default ViborgHaveservice1