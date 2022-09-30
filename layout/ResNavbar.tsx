import { useRouter } from 'next/router'
import React, { FC } from 'react'
import styled from 'styled-components'

import { AiOutlineClose } from 'react-icons/ai'
import { MdNightlight, MdLightMode } from 'react-icons/md'

import { useThemeContext } from '../context/ThemeContextProvider'
import { themes } from '../context/Themes'
import { Icon } from './Navbar'
import useThemeChanger from '../hooks/useThemeChanger'

interface NavProps {
    active?: boolean,
    handleClose?: any
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

const ResNavbar: FC<NavProps> = ({ handleClose }) => {
    const { theme } = useThemeContext();
    const { toggleTheme } = useThemeChanger();

    const router = useRouter()
    const getIsActive = (path: string) => {
        if(router.pathname === path) {
            return true
        } else {
            return false
        }
    }
    
    return (
        <Container className='animate-slide-down flex flex-col gap-y-16 justify-center items-center'>
            <div className='w-full px-16 flex justify-between items-center'>
                <Icon onClick={() => toggleTheme()}>
                    {
                        theme === themes.light ? 
                        <MdNightlight className='text-[#f7f7f7]' /> :
                        <MdLightMode className='text-[#f7f7f7]' />
                    }
                </Icon>
                <Icon onClick={handleClose}>
                    <AiOutlineClose className='text-[#f7f7f7] text-[27px]'/>
                </Icon>
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