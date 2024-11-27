import React from 'react'

const Title = ({ titleText, titleText2 }) => {
  return (
    <h1 className='py-4 text-2xl text-center md:text-3xl xl:text-5xl'>
      {titleText}
      {' '}
      <span className="font-bold text-green-500">
        {titleText2}
      </span>
    </h1>
  )
}

export default Title