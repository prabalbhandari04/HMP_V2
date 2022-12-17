/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components';

import { FlatButton } from '../../components/Button'
import { removeToken } from '../../redux/features/tokenSlice';
import { userLogout } from '../../redux/features/userSlice';

const ProfileHead = styled.div`
    background-color: ${({ theme }) => theme.body_secondary};
`

const Profile = () => {
    const router = useRouter()
    const dispatch = useDispatch();

    const [avatar, setAvatar] = useState<string>('/images/huTao.png');

    const user = { username: 'Reiri', email: 'reirihashi@gmail.com' }

    const handleLogout = () => {
        dispatch(removeToken())
        dispatch(userLogout())
        router.push('/')
    }

    return (
        <div className='flex w-full min-h-[80vh] mt-8'>
            <ProfileHead className='h-52 w-full flex items-end justify-between px-8 py-2 rounded-md'>
                <div className='flex items-end gap-x-8'>
                    <img src={avatar} alt='profile' className='rounded-full w-36 h-auto' />
                    <div className='flex flex-col'>
                        <h2>{user.username}</h2>
                        <p>{user.email}</p>
                    </div>
                </div>
                <FlatButton text='Logout' onClick={handleLogout}/>
            </ProfileHead>
        </div>
    )
}

export default Profile