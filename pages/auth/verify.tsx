/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styled from 'styled-components'

import { FaRegDotCircle } from 'react-icons/fa'
import { GoPrimitiveDot } from 'react-icons/go'

import { PrimaryButton } from '../../components/Button'
import { useRouter } from 'next/router'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.body};

    display: flex;
    align-items: center;
    justify-content: center;
`
const Span = styled.span`
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
`

const Verify = () => {
    const router = useRouter();
    
    return (
        <Container>
            <div className='flex flex-col w-full md:w-1/2 lg:w-1/3 gap-12'>
                <h1 className='leading-[4.5rem] text-center'>Registration Successful</h1>

                <img src='/vectors/mail.png' alt='mail' className='w-72 h-auto mx-auto' />

                <div className='flex flex-col gap-y-3'>
                    <p className='text-center'>Please check you mail and activate your account to continue.</p>
                    <Span onClick={() => router.push('/auth')}>Go to Login</Span>
                </div>
            </div>
        </Container>
    )
}

export default Verify