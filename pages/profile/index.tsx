import { useRouter } from 'next/router';
import React from 'react'
import { useDispatch } from 'react-redux'
import { PrimaryButton } from '../../components/Button'
import { removeToken } from '../../redux/features/tokenSlice';
import { userLogout } from '../../redux/features/userSlice';

const Profile = () => {
    const router = useRouter()
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(removeToken())
        dispatch(userLogout())
        router.push('/')
    }

    return (
        <div className='flex justify-center items-center w-full h-[80vh]'>
            <PrimaryButton text='Logout' onClick={handleLogout}/>
        </div>
    )
}

export default Profile