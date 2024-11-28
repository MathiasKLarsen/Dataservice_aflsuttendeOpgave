import React, { useEffect, useState } from 'react'
import Loader from "../components/Loader"
import Error from "../components/Error"
import bgbilled from "/udtalelser-bg.jpg"

import useRequestData from "../Hooks/useRequestData";

const ViborgHaveservice2 = () => {

  const { makeRequest, isLoading, data, error } = useRequestData();

  const [slider, setSlider] = useState(0)

  useEffect(() => {
    makeRequest("http://localhost:5023/reviews")
  }, [])


  return (

    <section>

      {isLoading && <Loader />}
      {error && <Error />}

      <div className='relative'>
          <img src={bgbilled} alt="have" />
          <div className='absolute inset-0 bg-green-500 opacity-70'></div>
        <div className='absolute inset-0 flex flex-col items-center justify-center w-3/5 gap-10 mx-auto text-white'>
          <h1 className='text-5xl text-center'>kundeudtalelser</h1>
          {
            data?.slice(slider,slider + 1).map(r =>
              <div className='text-center'>
                  <p className='mb-5'>" {r.content} "</p>
                  <p>- {r.author}</p>
              </div>
            )
          }
          <div className='flex gap-2'>
            {
              data?.map((x, index )=>
                <button onClick={() => 
                  setSlider(index)
                } className={`w-3 h-3 bg-white rounded-full ${slider === index ? "opacity-100" : "opacity-50"}`} type='button' key={x._id}></button>
              )
            }
          </div>
        </div>
      </div>

    </section>

  )
}

export default ViborgHaveservice2