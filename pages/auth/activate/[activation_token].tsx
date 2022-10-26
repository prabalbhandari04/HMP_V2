/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import Confetti from 'react-confetti'

import { FlatButton, PrimaryButton, PromiseButton } from '../../../components/Button'
import axiosInstance from '../../../utils/axios.config'

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

const Activate = () => {
    const router = useRouter();
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    
    //get id from params
    const { activation_token } = router.query
    console.log(activation_token)

    const handleActivate = async(e: any) => {
        e.preventDefault();
        setLoading(true)
        try {
            const res = await axiosInstance.post('/user/activation/', { activation_token })
            setTimeout(() => {
                setLoading(false)
                if(res && res.status === 200) {
                    setSuccess(true)
                    setError(false)
                }
                if(res && res.status === 500) {
                    setLoading(false)
                    setError(true)
                    setSuccess(false)
                }
            }, 1500)
        }
        catch(err) {
            console.log(err)
            setLoading(false)
            setError(true)
            setSuccess(false)
        }
    }   

    if (success) {
        return (
            <>
                <Confetti width={window.innerWidth} height={window.innerHeight} />
                <Container>
                    <div className='flex flex-col w-full md:w-1/2 lg:w-1/3 gap-12'>
                        <h1 className='leading-[4.5rem] text-center'>Activated</h1>

                        <img src='/vectors/tick.png' alt='tick' className='w-72 h-auto mx-auto' />

                        <div className='flex flex-col gap-y-3 items-center'>
                            <p className='text-center'>Your account has been activated. Start <Span>Finding Experts</Span> now or <Span>Apply To Become Expert</Span></p>
                            <FlatButton text='Go To Login' onClick={() => router.push('/auth')} />
                        </div>
                    </div>
                </Container>
            </>
        )
    }
    else if (error) {
        return (
            <>
                {/* <Confetti width={window.innerWidth} height={window.innerHeight} /> */}
                <Container>
                    <div className='flex flex-col w-full md:w-1/2 lg:w-1/3 gap-12'>
                        <h1 className='leading-[4.5rem] text-center'>Expired</h1>

                        <img src='/vectors/calender.png' alt='expired' className='w-72 h-auto mx-auto' />

                        <div className='flex flex-col gap-y-3 items-center'>
                            <p className='text-center'>Your activation code has expired 😔</p>
                            <PrimaryButton text='Resend' onClick={() => {}} />
                        </div>
                    </div>
                </Container>
            </>
        )
    }
    else {
        return (
            <Container>
                <div className='flex flex-col w-full md:w-1/2 lg:w-1/3 gap-12'>
                    <h1 className='leading-[4.5rem] text-center'>One More Step</h1>
    
                    <img src='/vectors/tick.png' alt='success' className='w-72 h-auto mx-auto' />
    
                    <div className='flex flex-col gap-y-3 items-center'>
                        <p className='text-center'>Activate your account by pushing the button below</p>
                        {
                            loading ? <PromiseButton text='Processing' /> : <PrimaryButton text='Activate' onClick={handleActivate} />
                        }
                    </div>
                </div>
            </Container>
        )
    }
}

export default Activate