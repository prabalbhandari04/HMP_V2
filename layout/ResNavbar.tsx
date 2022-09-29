import { useRouter } from 'next/router'
import React, { FC } from 'react'
import styled from 'styled-components'

import { AiOutlineCloseCircle } from 'react-icons/ai'

interface NavProps {
    active?: boolean,
    handleClose?: () => void
}

const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.primary};
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
`
const ListItems = styled.li<NavProps>`
    font-size: 24px;
    color: ${props => props.active ? props.theme.secondary : props.theme.white};
    font-weight: 600;
    position: relative;
    cursor: pointer;

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        width: 120%;
        height: 4px;
        border-radius: 14px;
        background-color: #ffffff45;
        opacity: ${props => props.active ? '1' : '0'};
    }
`
const Line = styled.div`
    width: 4px;
    height: 80px;
    border-radius: 0 0 14px 14px;
    background-color: ${({ theme }) => theme.white};
`


const ResNavbar: FC<NavProps> = ({ handleClose }) => {
    const router = useRouter()
    const getIsActive = (path: string) => {
        if(router.pathname === path) {
            return true
        } else {
            return false
        }
    }
    
    return (
        <Container className='animate-slide-down flex flex-col gap-y-16 items-center'>
            <div className='flex flex-col items-center'>
                <Line />
                <AiOutlineCloseCircle className='text-[45px] text-[#fff] -mt-1' onClick={handleClose}/>
            </div>
            <ul className='flex flex-col justify-center items-center gap-y-8'>
                <ListItems active={getIsActive('/')}>Home</ListItems>
                <ListItems active={getIsActive('/expert')}>Apply as Expert</ListItems>
                <ListItems active={getIsActive('/task')}>Assign Task</ListItems>
                <ListItems active={getIsActive('/blog')}>Blog</ListItems>
                <ListItems active={getIsActive('/about')}>About</ListItems>
                <ListItems active={getIsActive('/login')}>Login</ListItems>
            </ul>
        </Container>
    )
}

export default ResNavbar