/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import { BiMenuAltRight } from 'react-icons/bi'
import { MdNightlight, MdLightMode } from 'react-icons/md'

import ResNavbar from './ResNavbar'
import { PrimaryButton } from '../components/Button'

import { useThemeContext } from '../context/ThemeContextProvider'
import useThemeChanger from '../hooks/useThemeChanger'

interface NavProps {
    active?: boolean,
}

const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.body};
    position: sticky;
    top: 0;
    z-index: 10;
`
const Brand = styled.div`
    &::after {
        content: '';
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -40%);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        filter: blur(2px);
        z-index: -1;
        background-color: ${({ theme }) => theme.primary}25;
        transition: all 0.3s;
    }
    &:hover::after {
        transform: scale(8);
    }
`
const NavItems = styled.li<NavProps>`
    cursor: pointer;
    color: ${props => props.active ? props.theme.primary : props.theme.text};

    &::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background-color: ${({ theme }) => theme.primary};
        transition: all 0.3s;
    }
    &&:hover::after {
        width: ${props => props.active ? '0' : '100%'};
    }
`
const Menu = styled.div`
    font-size: 36px;
    color: ${({ theme }) => theme.text};
`
export const Icon = styled.div`
    position: relative;
    font-size: 24px;
    color: ${({ theme }) => theme.text};

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        filter: blur(2px);
        z-index: -1;
        background-color: ${({ theme }) => theme.primary}25;
        transition: all 0.3s;
    }
    &:hover::after {
        transform: scale(5);
    }
`

const Navbar = () => {
    const router = useRouter()
    const { theme } = useThemeContext()
    const { toggleTheme } = useThemeChanger()

    const [open, setOpen] = useState(false)

    const getIsActive = (path: string) => {
        if(router.pathname === path) {
            return true
        } else {
            return false
        }
    }

    return (
        <Container>
            <nav className='flex max-w-[1366px] mx-auto py-2 px-4 justify-between items-center'>
                <Brand className='relative w-16'>
                    <img src='/logo/hmp_logo.png' alt='logo' className='w-full h-auto' />
                </Brand>

                <div className='lg:flex gap-x-16 items-center hidden'>
                    <ul className='flex gap-x-12 items-center'>
                        <NavItems active={getIsActive('/')}>Home</NavItems>
                        <NavItems active={getIsActive('/expert')}>Become Expert</NavItems>
                        <NavItems active={getIsActive('/task')}>Assign Task</NavItems>
                        <NavItems active={getIsActive('/blog')}>Blog</NavItems>
                        <NavItems active={getIsActive('/about')}>About</NavItems>
                    </ul>

                    <div className='flex gap-x-8 items-center'>
                        <Icon onClick={() => toggleTheme() }>
                            {
                                theme?.dark ? 
                                <MdLightMode /> :
                                <MdNightlight />
                            }
                        </Icon>
                        <PrimaryButton 
                            text='Login'
                            onClick = {() => router.push('/auth')}
                        />
                    </div>
                </div>

                <Menu className='lg:hidden'>
                    <BiMenuAltRight onClick={() => setOpen(true)}/>
                </Menu>
            </nav>
            {
                open &&
                <ResNavbar 
                    handleClose={() => setOpen(false)}
                />
            }
        </Container>
    )
}

export default Navbar