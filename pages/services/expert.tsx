import React from 'react'
import styled from 'styled-components'
import ExpertForm from '../../features/Services/ExpertForm'
import StepsTo from '../../features/Services/StepsTo'

const Span = styled.span`
    font-size: inherit;
    color: ${({ theme }) => theme.primary};
    font-weight: inherit;
`

const Expert = () => {
  return (
    <div className='flex flex-col gap-y-8 md:gap-y-24 mt-16'>
        <div>
            <h1>Become an <Span>Expert</Span></h1>
            <p>With these simple steps become an expert and earn upto 20k per month</p>
        </div>

        <div className='flex flex-col-reverse lg:flex-row gap-8'>
            <div className='w-full lg:w-1/2'>
                <ExpertForm />
            </div>
            <div className='w-full lg:w-1/2'>
                <StepsTo
                    register_detail='Register as a user to be eligible to apply for an expert. You can register by clicking on the register button on the top right corner of the page. The registration process is very simple and takes less than a minute.'
                    form_detail='Fill the form with your details and submit it. Your details will be reviewed by our team and you will be notified if you are eligible to become an expert. You will receive an email from our team.'
                    review_detail='You will receive tasks that match your expertise and you can start working on them. You can find the tasks in your profile. You will also be notified by mail if you receive a task.'
                />
            </div>
        </div>
    </div>
  )
}

export default Expert