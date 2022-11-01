/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import styled from 'styled-components'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { RiQuillPenFill } from 'react-icons/ri'

const stepsdata = [
    'Make use of your knowledge and time to earn money',
    "Your skills will be used wisely",
    'You can earn upto 20k per month',
    'You can build your portfolio easily',
    'Develop your skills by facing new challenges',
]

const Icon = styled.div`
    color: ${({ theme }) => theme.primary};
`

const ExpertSteps = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (
        <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-y-4'>
            <div className='w-full md:w-1/2' data-aos='fade-up'>
                <img src='/vectors/expert.png' alt='We help you find the best experts for you assignment' className='w-full h-auto' />
            </div>

            <div className='w-full md:w-1/2 flex flex-col gap-y-8'>
                <h2 data-aos='fade-up'>Why should you register as Expert?</h2>
                <ul className='flex flex-col gap-y-2 ml-4' data-aos='fade-up' data-aos-duration='1500'>
                {
                    stepsdata.map((step, index) => (    
                        <li key={index}>
                            <div className='flex gap-2 items-center'>
                                <Icon>
                                    <RiQuillPenFill className='text-[21px]' />
                                </Icon>
                                <p>{step}</p>
                            </div>
                        </li> 
                    ))
                }
                </ul>
            </div>
        </div>
    )
}

export default ExpertSteps