/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import styled from 'styled-components'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { RiQuillPenFill } from 'react-icons/ri'

const stepsdata = [
    'Admins review your submitted assignment',
    'Admins assign the assignment to an qualified experts',
    'One of the experts will handle your assignment',
    'Their work will be reviewed by admins',
    'You will pay for the assignment',
    'You will receive the assignment',
    'Experts will be paid for their work',
]

const Icon = styled.div`
    color: ${({ theme }) => theme.primary};
`

const Steps = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (
        <div className='flex flex-col md:flex-row justify-between items-center gap-y-4'>
            <div className='w-full md:w-1/2' data-aos='fade-up'>
                <img src='/vectors/expert.png' alt='We help you find the best experts for you assignment' className='w-full h-auto' />
            </div>

            <div className='w-full md:w-1/2 flex flex-col gap-y-8'>
                <h2 data-aos='fade-up'>How is your assignment done?</h2>
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

export default Steps