import React, { useState } from 'react'
import styled from 'styled-components'

import { FaRegDotCircle } from 'react-icons/fa'
import { GoPrimitiveDot } from 'react-icons/go'

import { PrimaryButton } from '../../components/Button'

const Icon = styled.div`
    font-size: 24px;
    position: absolute;
    top: 3rem;
    right: 4%;
    color: ${({ theme }) => theme.primary};
`
const Input = styled.input`
    background-color: ${({ theme }) => theme.neutral};
    
    &:focus {
        outline: 1px solid ${({ theme }) => theme.primary};
    }
`
const Span = styled.span`
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    margin-bottom: 2rem;
`

const Register = () => {
    const [show, setShow] = useState({
        password: false,
        confirmPassword: false
    });

    return (
        <div className='w-full flex flex-col gap-y-8'>
            <div>
                <h2>Create an Account.</h2>
                <p className='opacity-60'>Find the best experts for your assignment</p>
            </div>

            <form className='w-full flex flex-col gap-y-4'>
                <div className='flex flex-col gap-y-2 w-full'>
                    <label>Email Address</label>
                    <Input type='email' className='w-full rounded-md p-4'/>
                </div>
                <div className='flex flex-col gap-y-2 w-full'>
                    <label>Username</label>
                    <Input type='text' className='w-full rounded-md p-4'/>
                </div>
                <div className='flex flex-col gap-y-2 w-full relative'>
                    <label>Password</label>
                    <Input type={show.password ? 'text' : 'password'} className='w-full rounded-md p-4' />
                    
                    <Icon onClick={() => setShow({ ...show, password: !show.password})}>
                        {
                            show.password ? <FaRegDotCircle /> : <GoPrimitiveDot />
                        }
                    </Icon>
                </div>
                <div className='flex flex-col gap-y-2 w-full relative mb-8'>
                    <label>Confirm Password</label>
                    <Input type={show.confirmPassword ? 'text' : 'password'} className='w-full rounded-md p-4' />
                    
                    <Icon onClick={() => setShow({ ...show, confirmPassword: !show.confirmPassword})}>
                        {
                            show.confirmPassword ? <FaRegDotCircle /> : <GoPrimitiveDot />
                        }
                    </Icon>
                </div>

                <PrimaryButton text='Register' />
            </form> 
        </div>
    )
}

export default Register