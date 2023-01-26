/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';

import { FlatButton } from '../../components/Button'
import Assignments from '../../features/Profile/Assignments';
import Tasks from '../../features/Profile/Tasks';
import { removeToken } from '../../redux/features/tokenSlice';
import { userLogout } from '../../redux/features/userSlice';

const ProfileHead = styled.div`
    background-color: ${({ theme }) => theme.body_secondary};
`
const tasks = [
    {
        _id: '1',
        title: 'Food App - Flutter',
        deadline: '2023-02-10',
        question: 'https://www.google.com',
        format: '',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        status: 'Working',
    },
    {
        _id: '2',
        title: 'Documentation',
        deadline: '2023-02-22',
        question: 'https://www.google.com',
        format: 'APA7',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        status: 'Working',
    }
]

const assignments = [
    {
        _id: '1',
        title: 'Machine Learning to recognize hand gestures',
        deadline: '2023-03-01',
        question: 'https://www.google.com',
        format: 'Harvard1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        status: 'Working',
    },
]

const Profile = () => {
    const router = useRouter()
    const dispatch = useDispatch();
    const { user } = useSelector((state: any) => state.user)

    const [avatar, setAvatar] = useState<string>('/images/huTao.png');

    const handleLogout = () => {
        dispatch(removeToken())
        dispatch(userLogout())
        router.push('/')
    }

    return (
        <div className='flex flex-col w-full min-h-[80vh] mt-8'>
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

            <div className='flex gap-x-12 w-full h-[calc(80vh-208px)]'>
                <div className='flex-1'>
                    <Tasks tasksData={tasks} />
                </div>
                <div className='flex-1'>
                    <Assignments assignmentData={assignments} />
                </div>
            </div>
        </div>
    )
}

export default Profile