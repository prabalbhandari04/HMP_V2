/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import { PrimaryButton } from '../../components/Button'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.body};

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10rem;
`
const Span = styled.span`
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    font-weight: 400;

    cursor: pointer;
`
const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.body_secondary};
    box-shadow: 22px 31px 87px -53px ${props => props.theme.primary}50;
    border-radius: 14px;
`
const Input = styled.input`
    background-color: ${({ theme }) => theme.neutral};

    &:focus {
        outline: 1px solid ${({ theme }) => theme.primary};
    }
`

const Forgot = () => {
    const router = useRouter();

    return (
        <Container>
            <div className='w-full md:w-96 mx-auto lg:mx-0 h-[80vh] flex flex-col justify-center gap-y-16'>
                <div className='h-[50vh] flex flex-col justify-between'>
                    <div className='flex flex-col gap-y-3'>
                        <h1 className='leading-[4.5rem]'>Forgot Password?</h1>
                        <p>Don't worry. Enter you email address and we will allow you to register new password after we verify it's you</p>
                    </div>

                    <Span onClick={() => router.push('/auth')}>Back to Login</Span>
                </div>
            </div>

            <Wrapper className='w-1/2 h-[60vh] flex flex-col p-8 gap-y-4'>

                <form className='h-full flex flex-col gap-y-12 justify-around items-center'>
                    <div className='flex flex-col gap-y-2'>
                        <h2 className='text-center'>Email Verification</h2>
                        <p className='text-center'>Enter the email address you used to create your account.</p>
                    </div>
                    {/* <img src='/vectors/mail.png' alt='mail' className='w-48 h-auto mx-auto'/> */}
                    <div className='w-11/12 flex flex-col gap-y-3'>
                        <label>Email Address</label>
                        <Input type='email' className='w-full rounded-md p-4' />
                    </div>

                    <PrimaryButton text='Verify' />
                </form>
            </Wrapper>
        </Container>
    )
}

export default Forgot