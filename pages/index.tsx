/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

import Landing from '../features/Home/Landing'
import Why from '../features/Home/Why'
import AssignSteps from '../features/Home/AssignSteps'
import ExpertSteps from '../features/Home/ExpertSteps'
import Services from '../features/Home/Services'

const index = () => {
  return (
    <div className='w-full flex flex-col gap-24 mb-8'> 
      <Landing />
      <Why />
      <AssignSteps />
      <ExpertSteps />
      <Services />
    </div>
  )
}

export default index