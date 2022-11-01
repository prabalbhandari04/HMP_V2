/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styled from 'styled-components'

import Login from '../../features/Auth/Login'
import Register from '../../features/Auth/Register'

import { MdOutlineClose } from 'react-icons/md'
import { useRouter } from 'next/router'

interface ToggleProps {
    active?: boolean
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.body};

    display: flex;
    align-items: center;
`
const ToggleWrapper = styled.div`
    background-color: ${({ theme }) => theme.fade_secondary}; 
    padding: 1rem 0;   
    border-radius: 24px;
`
const Paragraph = styled.p<ToggleProps>`    
    color: ${props => props.active ? props.theme.body : props.theme.text};
    width: 50%;
    z-index: 2;
    text-align: center;
    cursor: pointer;

    font-weight: 400;
`
const Toggle = styled.div<ToggleProps>`
    position: absolute;
    top: 0;
    left: ${props => props.active ? '0' : '50%'};
    right: ${props => props.active ? '50%' : '0'};
    width: 50%;
    height: 100%;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 24px;

    transition: all 0.3s ease-in;
`
const Icon = styled.div`
    font-size: 24px;
    color: ${({ theme }) => theme.text};
`

const Auth = () => {
    const router = useRouter();

    const [step, setStep] = useState(0)

    const getActive = (index: number) => {
        if(step === index) return true
        else return false
    }

    return (
        <Container>
            <div className='w-full md:w-96 mx-auto lg:mx-0 h-[80vh] flex flex-col gap-y-16'>
                <div className='flex justify-between items-center'>
                    <ToggleWrapper className='relative flex w-48'>
                        <Paragraph active={getActive(0)} onClick={() => setStep(0)}>Login</Paragraph>
                        <Paragraph active={getActive(1)} onClick={() => setStep(1)}>Register</Paragraph>

                        <Toggle active={getActive(0)}/>
                    </ToggleWrapper>

                    <Icon onClick={() => router.push('/')}>
                        <MdOutlineClose />
                    </Icon>
                </div>

                {
                    step === 0 ? <Login /> : <Register />
                }
            </div>  

            <div className='hidden flex-1 h-[80vh] lg:flex items-center justify-center'>
                <img src='/vectors/expert.png' alt='Let Experts handle your assignment' className='w-full h-auto object-cover' />
            </div>      
        </Container>
    )
}

export default Auth