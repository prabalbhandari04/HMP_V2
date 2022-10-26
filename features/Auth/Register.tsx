import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import { useDispatch, useSelector } from 'react-redux'
import { postAuthFailure, postAuthStart, postAuthSuccess } from '../../redux/features/authSlice'

import { FaRegDotCircle } from 'react-icons/fa'
import { GoPrimitiveDot } from 'react-icons/go'

import { PrimaryButton, PromiseButton } from '../../components/Button'
import axiosInstance from '../../utils/axios.config'

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
const Error = styled.div`
    background-color: #f1223a25;
    border-radius: 8px;
    padding: 0.75rem 1rem;
`

const Register = () => {
    const { isFetching, error } = useSelector((state: any) => state.auth)
    const router = useRouter();

    const [show, setShow] = useState({
        password: false,
        confirmPassword: false
    });
    const [data, setData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        username: ''
    })
    const [isError, setIsError] = useState({
        fields: false,
        password: false,
    })
    const [errorMessage, setErrorMessage] = useState('')

    const dispatch = useDispatch();

    const handleRegister = async(e: { preventDefault: () => void }) => {
        e.preventDefault();

        if(data.email === '' || data.password === '' || data.confirmPassword === '' || data.username === '') {
            setIsError({
                ...error,
                fields: true,
                password: false
            })
            console.log('eta')
        }
        else if(data.password !== data.confirmPassword) {
            setIsError({
                ...error,
                fields: false,
                password: true
            })
            console.log('password')
        }
        else {
            setIsError({
                ...error,
                fields: false,
                password: false
            })
            setErrorMessage('')

            dispatch(postAuthStart());

            try {
                const res = await axiosInstance.post('/user/register', { email: data.email, username: data.username, password: data.password });
                dispatch(postAuthSuccess(res.data));
                router.push('/auth/verify');
            }
            catch(err: any) {
                dispatch(postAuthFailure());
                console.log(err);
                setErrorMessage(err.response.data.msg);
            }
        }
    }

    return (
        <div className='w-full flex flex-col gap-y-8'>
            <div>
                <h2>Create an Account.</h2>
                <p className='opacity-60'>Find the best experts for your assignment</p>
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
                            isError.fields && <label className='text-red-600'>*</label>
                        }
                    </div>
                    <Input 
                        type='email' 
                        className='w-full rounded-md p-4'
                        value={data.email} 
                        onChange={(e: any) => setData({ ...data, email: e.target.value})} 
                    />
                </div>
                <div className='flex flex-col gap-y-2 w-full'>
                    <div className='flex gap-x-4'>
                        <label>Username</label>
                        {
                            isError.fields && <label className='text-red-600'>*</label>
                        }
                    </div>
                    <Input 
                        type='text' 
                        className='w-full rounded-md p-4' 
                        value={data.username} 
                        onChange={(e: any) => setData({ ...data, username: e.target.value})} 
                    />
                </div>
                <div className='flex flex-col gap-y-2 w-full relative'>
                    <div className='flex gap-x-4'>
                        <label>Password</label>
                        {
                            isError.fields && <label className='text-red-600'>*</label>
                        }
                    </div>
                    <Input 
                        type={show.password ? 'text' : 'password'} 
                        className='w-full rounded-md p-4' 
                        value={data.password} 
                        onChange={(e: any) => setData({ ...data, password: e.target.value})} 
                    />
                    
                    <Icon onClick={() => setShow({ ...show, password: !show.password})}>
                        {
                            show.password ? <FaRegDotCircle /> : <GoPrimitiveDot />
                        }
                    </Icon>
                </div>
                <div className='flex flex-col gap-y-2 w-full relative mb-8'>
                    <div className='flex gap-x-4'>
                        <label>Confirm Password</label>
                        {
                            isError.fields && <label className='text-red-600'>*</label>
                        }
                        {
                            isError.password && <label className='text-red-600 scale-75'>Passwords do not match</label>
                        }
                    </div>
                    <Input 
                        type={show.confirmPassword ? 'text' : 'password'} 
                        className='w-full rounded-md p-4' 
                        value={data.confirmPassword} 
                        onChange={(e: any) => setData({ ...data, confirmPassword: e.target.value})} 
                    />
                    
                    <Icon onClick={() => setShow({ ...show, confirmPassword: !show.confirmPassword})}>
                        {
                            show.confirmPassword ? <FaRegDotCircle /> : <GoPrimitiveDot />
                        }
                    </Icon>
                </div>
                
                {
                    isFetching ? <PromiseButton text='Registering' /> : <PrimaryButton onClick={handleRegister} text='Register' />
                }
            </form> 
        </div>
    )
}

export default Register