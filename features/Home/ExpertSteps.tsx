/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import styled from 'styled-components'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { RiQuillPenFill } from 'react-icons/ri'

const stepsdata = [
    'Register as a User and Login',
    "Fill up the form with appropriate reasons in 'Become Expert' page",
    'Add all the skills you have and attach your CV.',
    'Admins will receive your request and will review it.',
    'If your information are suited for the role, you will be verified as expert and will be notified through mail.',
    'You will be notified through mail if any task suited for you is posted.',
    'You will have to compete with other experts if exists before you can receive task.',
    'Finally, you will be assigned the task and you can start working it by downloading the resources available from your profile section.',
    'In case you cannot submit the task in given time, you will be punished by losing your reputation.',
    'You will be paid after your submission is reviewed and approved.',
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
                <h2 data-aos='fade-up'>How do you get started as Expert?</h2>
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