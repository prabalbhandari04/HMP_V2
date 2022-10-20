import React, { useState } from 'react'
import styled from 'styled-components'

import { FaRegDotCircle } from 'react-icons/fa'
import { GoPrimitiveDot } from 'react-icons/go'

import { PrimaryButton } from '../../components/Button'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.body};

    display: flex;
    align-items: center;
    justify-content: center;
`
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

const Change = () => {
    const [show, setShow] = useState({
        password: false,
        confirmPassword: false
    })

    return (
        <Container>
            <div className='flex flex-col w-full md:w-1/2 lg:w-1/3 gap-24'>
                <h1 className='leading-[4.5rem] '>Change Password</h1>

                <form className='flex flex-col gap-y-8'>
                    <div className='flex flex-col gap-y-2 relative'>
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

                    <PrimaryButton text='Submit' />
                </form>
            </div>
        </Container>
    )
}

export default Change