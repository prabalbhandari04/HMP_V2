/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Landing from '../features/Home/Landing'
import Services from '../features/Home/Services'

const index = () => {
  return (
    <div className='w-full flex flex-col gap-12 mb-8'> 
      <Landing />
      <Services />
    </div>
  )
}

export default index