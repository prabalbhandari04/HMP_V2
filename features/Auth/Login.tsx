import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { useDispatch, useSelector } from 'react-redux'

import { FaRegDotCircle } from 'react-icons/fa'
import { GoPrimitiveDot } from 'react-icons/go'

import { PrimaryButton, PromiseButton } from '../../components/Button'

import { getTokenSuccess } from '../../redux/features/tokenSlice'
import useLogin from '../../hooks/useLogin'
import { userInfoSuccess } from '../../redux/features/userSlice'

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
const Error = styled.div`
    background-color: #f1223a25;
    border-radius: 8px;
    padding: 0.75rem 1rem;
`

const Login = () => {
    const router = useRouter();

    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const [fields, setFields] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    const dispatch = useDispatch();
    const handleSuccess = (res: any) => {
        dispatch(getTokenSuccess(res.msg));
        dispatch(userInfoSuccess(res.user));
        router.push('/');
    }
    const handleError = () => {
        console.log('Something went wrong');
    }
    const { mutate, isLoading } = useLogin(handleSuccess, handleError);
    

    const handleLogin = async(e: { preventDefault: () => void }) => {
        e.preventDefault();
        console.log('chalirako xa')

        if (data.email === '' || data.password === '') {
            setFields(true);
        } 
        else {
            setFields(false);
            mutate(data);
        }
    }

    return (
        <div className='w-full flex flex-col gap-y-8'>
            <div>
                <h2>Welcome Back.</h2>
                <p className='opacity-60'>Hope you find the best expert.</p>
            </div>

            <form className='w-full flex flex-col gap-y-4'>
                {
                    errorMessage !== '' && 
                    <Error>
                        <p className='text-red-700'>{errorMessage}</p>
                    </Error>
                }
                <div className='flex flex-col gap-y-2 w-full'>
                    <div className='flex gap-x-4'>
                        <label>Email Address</label>
                        {
                            fields && <label className='text-red-600'>*</label>
                        }
                    </div>
                    <Input 
                        type='email' 
                        className='w-full rounded-md p-4'
                        value={data.email}
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                    />
                </div>
                <div className='flex flex-col gap-y-2 w-full relative'>
                    <div className='flex gap-x-4'>
                        <label>Password</label>
                        {
                            fields && <label className='text-red-600'>*</label>
                        }
                    </div>
                    <Input 
                        type={show ? 'text' : 'password'} 
                        className='w-full rounded-md p-4' 
                        value={data.password}
                        onChange={(e) => setData({ ...data, password: e.target.value })}
                    />
                    
                    <Icon>
                        {
                            show ? <FaRegDotCircle onClick={() => setShow(false)}/> : <GoPrimitiveDot onClick={() => setShow(true)}/>
                        }
                    </Icon>
                </div>
                <Span onClick={() => router.push('/auth/forgot')}>Forgot Password?</Span>
                {
                    isLoading ? 
                    <PromiseButton text='Loggin In' /> 
                    : 
                    <PrimaryButton text='Login' onClick={handleLogin} />
                }
            </form> 
        </div>
    )
}

export default Login