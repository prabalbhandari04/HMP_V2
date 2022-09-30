/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import Button from '../components/Button'

const index = () => {
  const data = {
    experts: 14,
    users: 32,
    assignments: 9,
  }
  const experts = useSpring({
    val: data.experts,
    from: { val: 0 },
  })
  const users = useSpring({
    val: data.users,
    from: { val: 0 },
  })
  const assignments = useSpring({
    val: data.assignments,
    from: { val: 0 },
  })

  return (
    <div className='w-full min-h-[80vh] lg:min-h-[800px] flex flex-col-reverse lg:flex-row gap-8 justify-center items-center'> 
      <div className='w-full lg:w-2/5 flex flex-col gap-y-8 mt-12 md:mt-0 items-center lg:items-start'>
        <h1 className='uppercase leading-none text-center lg:text-left'>let experts handle your assignment</h1>
        <div className='flex gap-x-12 mb-8'>
          <div className='flex gap-x-2 items-center'>
            <animated.h2 className='font-medium'>{experts.val.interpolate(val => Math.floor(val))}</animated.h2>
            <p>Experts</p>
          </div>
          <div className='flex gap-x-2 items-center'>
            <animated.h2 className='font-medium'>{users.val.interpolate(val => Math.floor(val))}</animated.h2>
            <p>Users</p>
          </div>
          <div className='flex gap-x-2 items-center'>
            <animated.h2 className='font-medium'>{assignments.val.interpolate(val => Math.floor(val))}</animated.h2> 
            <p>Assignments</p>
          </div>
        </div>

        <Button text='Get Started' />
      </div>
      <div className='w-full lg:w-1/2 flex lg:justify-end'>
        <img src='/vectors/working.png' alt='working' className='w-11/12 h-auto scale-110 lg:scale-125' />
      </div>
    </div>
  )
}

export default index