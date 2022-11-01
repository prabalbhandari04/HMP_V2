/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react'
import styled from 'styled-components'

interface StepsProps {
    register_detail: string,
    form_detail: string,
    review_detail: string,
}

const Card = styled.div`
    box-shadow: 22px 31px 87px -53px ${props => props.theme.primary}50;
    padding: 1rem;
    border-radius: 8px;
`

const StepsTo: FC<StepsProps> = ({ register_detail, form_detail, review_detail }) => {
  return (
    <div className='w-full flex flex-col md:flex-row lg:flex-col gap-y-8 gap-x-4'>
        <Card className='w-full md:w-1/3 lg:w-full flex md:flex-col lg:flex-row gap-x-4 items-center'>
            <img src='/vectors/girl.png' alt='steps' className='w-1/3 h-20 object-contain flex-shrink-0' />
            <div className='flex-1 flex flex-col md:items-center md:text-center lg:items-start lg:text-left md:gap-y-2'>
                <h2>Register</h2>
                <p>{register_detail}</p>
            </div>
        </Card>
        <Card className='w-full md:w-1/3 lg:w-full flex md:flex-col lg:flex-row gap-x-4 items-center'>
            <img src='/vectors/pencil.png' alt='steps' className='w-1/3 h-20 object-contain flex-shrink-0' />
            <div className='flex-1 flex flex-col md:items-center md:text-center lg:items-start lg:text-left md:gap-y-2'>
                <h2>Fill the Form</h2>
                <p>{form_detail}</p>
            </div>
        </Card>
        <Card className='w-full md:w-1/3 lg:w-full flex md:flex-col lg:flex-row gap-x-4 items-center'>
            <img src='/vectors/bell.png' alt='steps' className='w-1/3 h-20 object-contain flex-shrink-0' />
            <div className='flex-1 flex flex-col md:items-center md:text-center lg:items-start lg:text-left md:gap-y-2'>
                <h2>Receive Task</h2>
                <p>{review_detail}</p>
            </div>
        </Card>
    </div>
  )
}

export default StepsTo