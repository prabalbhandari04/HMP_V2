import React, { useState } from 'react'

import { FaRegDotCircle } from 'react-icons/fa'
import { GoPrimitiveDot } from 'react-icons/go'
import styled from 'styled-components'

const Icon = styled.div`
    font-size: 24px;
    position: absolute;
    top: 3rem;
    right: 4%;
    color: ${({ theme }) => theme.primary};
`
const Input = styled.input`
    &:focus {
        outline: 1px solid ${({ theme }) => theme.primary};
    }
`

const Login = () => {
    const [show, setShow] = useState(false);

    return (
        <div className='w-full flex flex-col gap-y-8'>
            <div>
                <h2>Welcome Back.</h2>
                <p className='opacity-60'>Hope you earn the most.</p>
            </div>

            <form className='w-full flex flex-col gap-y-4'>
                <div className='flex flex-col gap-y-2 w-full'>
                    <label>Email Address</label>
                    <Input type='email' className='w-full rounded-md p-4'/>
                </div>
                <div className='flex flex-col gap-y-2 w-full relative'>
                    <label>Password</label>
                    <Input type={show ? 'text' : 'password'} className='w-full rounded-md p-4' />
                    
                    <Icon>
                        {
                            show ? <FaRegDotCircle onClick={() => setShow(false)}/> : <GoPrimitiveDot onClick={() => setShow(true)}/>
                        }
                    </Icon>
                </div>
            </form> 
        </div>
    )
}

export default Login