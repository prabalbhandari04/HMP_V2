/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';

import { AiFillStar } from 'react-icons/ai'
import { IoCloseOutline } from 'react-icons/io5'

import { FlatButton } from '../../components/Button'
import { useThemeContext } from '../../context/ThemeContextProvider';
import Assignments from '../../features/Profile/Assignments';
import Tasks from '../../features/Profile/Tasks';
import { removeToken } from '../../redux/features/tokenSlice';
import { userLogout } from '../../redux/features/userSlice';
import NeverShowAgain from '../../features/Profile/NeverShowAgain';

const ProfileHead = styled.div`
    background-color: ${({ theme }) => theme.body_secondary};

    .expert-badge {
        background-color: ${({ theme }) => theme.primary};
        border-radius: 50%;
        padding: 0.5rem 0.5rem;
        position: absolute;
        top: 0;
        right: 0;
    }
`
const Alert = styled.div`
    background-color: ${({ theme }) => theme.primary};
    border-radius: 8px;
    padding: 1rem 2rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    p {
        color: #ffffff80;
    }

    span {
        color: #fff;
        font-weight: 600;
        cursor: pointer;
    }
`
// const tasks = [
//     {
//         _id: '1',
//         title: 'Food App - Flutter',
//         deadline: '2023-02-10',
//         question: 'https://www.google.com',
//         format: '',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
//         status: 'Working',
//     },
//     {
//         _id: '2',
//         title: 'Documentation',
//         deadline: '2023-02-22',
//         question: 'https://www.google.com',
//         format: 'APA7',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
//         status: 'Working',
//     }
// ]

// const assignments = [
//     {
//         _id: '1',
//         title: 'Machine Learning to recognize hand gestures',
//         deadline: '2023-03-01',
//         question: 'https://www.google.com',
//         format: 'Harvard1',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
//         status: 'Working',
//     },
// ]

const Profile = () => {
    const router = useRouter()
    const dispatch = useDispatch();
    const { user } = useSelector((state: any) => state.user)
    const { theme } = useThemeContext();
    const tasks: string[] = []
    const assignments: string[] = []
    const isExpert: boolean = false;

    const [avatar, setAvatar] = useState<string>('/images/huTao.png');
    const [showAlert, setShowAlert] = useState<boolean>(true);
    const [modal, setModal] = useState<boolean>(false);

    useEffect(() => {
        if(typeof window !== 'undefined') {
            const alert = localStorage.getItem('alert')
            if(alert === 'true' || alert === null) {
                setShowAlert(true)
            }
            else {
                setShowAlert(false)
            }
        }
    }, [])

    const handleLogout = () => {
        dispatch(removeToken())
        dispatch(userLogout())
        router.push('/')
    }

    const handleHideAlert = () => {
        if(showAlert) {
            localStorage.setItem('alert', 'false')
            setShowAlert(false)
            setModal(false)
        }
    }
    const handleKeepAlert = () => {
        setModal(false)
    }

    return (
        <div className='flex flex-col w-full min-h-[80vh] mt-8'>
            {
                !isExpert && showAlert &&
                <Alert>
                    <p>Do you want to earn as an expert? If yes, <span>Register as an Expert</span> and start earning</p>
                    <IoCloseOutline className='text-white text-[21px]' onClick={() => setModal(true)}/>
                </Alert>
            }
            <ProfileHead className='h-max md:h-52 w-full flex flex-col md:flex-row items-center md:items-end justify-between px-8 py-2 rounded-md'>
                <div className='flex flex-col md:flex-row items-center md:items-end gap-x-8'>
                    <div className='relative'>
                        <img src={avatar} alt='profile' className='rounded-full w-36 h-auto' />
                        {
                            isExpert &&
                            <div className='expert-badge'>
                                <AiFillStar className='text-white' />
                            </div>
                        }
                    </div>

                    <div className='flex flex-col items-center md:items-start mt-4 md:mt-0'>
                        <h2>{user.username}</h2>
                        <p>{user.email}</p>
                    </div>
                </div>
                <FlatButton text='Logout' onClick={handleLogout}/>
            </ProfileHead>

            <div className='flex flex-col lg:flex-row gap-x-12 w-full min-h-[calc(80vh-208px)] mt-8'>
                {
                    (tasks.length === 0 || tasks === undefined) && (assignments.length === 0 || assignments === undefined) 
                    ?
                    <div className='flex flex-col w-full justify-center items-center min-h-[calc(80vh-208px)] gap-y-2 opacity-60'>
                        {
                            theme?.dark ?
                            <img src='/gifs/book-dark.gif' alt='book' className='w-8 h-auto' />
                            :
                            <img src='/gifs/book-light.gif' alt='book' className='w-8 h-auto' />
                        }
                        <p>No tasks or assignments yet</p>
                    </div>
                    :
                    <>
                        <div className='flex-1'>
                            <Tasks tasksData={tasks} />
                        </div>
                        <div className='flex-1'>
                            <Assignments assignmentData={assignments} />
                        </div>
                    </>
                }   
            </div>
            
            {
                modal &&
                <NeverShowAgain 
                    handleYes={handleHideAlert}
                    handleNo={handleKeepAlert}
                />
            }
        </div>
    )
}

export default Profile