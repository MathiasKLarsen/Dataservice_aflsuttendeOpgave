import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Title from '../components/Title'
import Error from '../components/Error'
import Loader from '../components/Loader'

import useRequestData from '../Hooks/useRequestData'
import ViborgHaveservice2 from './ViborgHaveservice2'

const ViborgHaveservice1 = () => {

    const {makeRequest: aboutUsRequest, data: aboutUsData, isLoading, error} = useRequestData()
    const {makeRequest: servicesRequest, data: servicesData} = useRequestData()

    useEffect(() => {
 
        aboutUsRequest("http://localhost:5023/aboutus");
        servicesRequest("http://localhost:5023/services?limit=2");
     
    }, [])

  return ( 
    <div className='container'>
      
        { isLoading && <Loader /> }
        { error && <Error /> }

        <div className='flex gap-10'>
            <div className='flex flex-col gap-5 items-start'>
                <Title titleText="Velkommen til" titleText2="Viborg Haveservice" />
                { aboutUsData &&
                    <div key={aboutUsData.id} className='flex flex-col gap-4 p-5 border border-blue-500'>
                        <div className='flex flex-col gap-4 [&_li]:list-[circle] [&_li]:list-inside' dangerouslySetInnerHTML={{__html: aboutUsData.content}}></div>
                    </div>
                }
                <Link className='p-5 bg-green-500 text-white' to={"/viborghaveservice2"}>SE ALLE YDELSER</Link>
            </div>
            <div className='basis-1/2'>
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
    </div>
  )
}

export default ViborgHaveservice1