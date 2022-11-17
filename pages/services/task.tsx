import React from 'react'
import styled from 'styled-components'

import StepsTo from '../../features/Services/StepsTo'
import TaskForm from '../../features/Services/TaskForm'

const Span = styled.span`
    font-size: inherit;
    color: ${({ theme }) => theme.primary};
    font-weight: inherit;
`

const Expert = () => {
  return (
    <div className='flex flex-col gap-y-8 md:gap-y-24 mt-16'>
        <div>
            <h1>Find an <Span>Expert</Span></h1>
            <p>With these simple steps find an expert and let them handle your assignment.</p>
        </div>

        <div className='flex flex-col-reverse lg:flex-row gap-8'>
            <div className='w-full lg:w-1/2'>
                <TaskForm />
            </div>
            <div className='w-full lg:w-1/2'>
                <StepsTo
                    register_detail='Register as a user to be eligible to upload and assign your task to reliable experts. You can register by clicking on the register button on the top right corner of the page. The registration process is very simple and takes less than a minute.'
                    form_detail='Fill the form with details required for your assignment and submit it. Your assignemnt will be reviewed by our team and we will find a suitable expert for your assignment. You will receive an email from our team once your assignment is handed over to the expert.'
                    review_detail='Your assignment will be completed by the expert and you will receive a notification. You can review the assignment and report if anything is incomplete or so.'
                />
            </div>
        </div>
    </div>
  )
}

export default Expert