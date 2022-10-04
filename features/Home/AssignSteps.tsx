/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import styled from 'styled-components'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { RiQuillPenFill } from 'react-icons/ri'

const stepsdata = [
    'Register as a User and Login',
    'Fill up the form with appropriate informations',
    'Attach you task PDF file explaing everything needed.',
    'If you have other resources to attach please kindly zip them together and upload them.',
    'Admins will receive your task and start searching for the best expert to work on it.',
    'You will be notified once the task is assigned to an expert.',
    'You will have to pay us through the QR code provided to you one week before your deadline.',
    'You will receive your task on time and you will be able to review it.',
]

const Icon = styled.div`
    color: ${({ theme }) => theme.primary};
`

const AssignSteps = () => {
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
                <h2 data-aos='fade-up'>How do you begin?</h2>
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

export default AssignSteps