/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

import Landing from '../features/Home/Landing'
import Services from '../features/Home/Services'
import Steps from '../features/Home/Steps'

const index = () => {
  return (
    <div className='w-full flex flex-col gap-24 mb-8'> 
      <Landing />
      <Services />
      <Steps />
    </div>
  )
}

export default index