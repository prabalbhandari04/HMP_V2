/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

import { BiMenuAltRight } from 'react-icons/bi'
import { MdNightlight, MdLightMode } from 'react-icons/md'

import ResNavbar from './ResNavbar'
import { useThemeContext } from '../context/ThemeContextProvider'
import useThemeChanger from '../hooks/useThemeChanger'

const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.body};
    position: sticky;
    top: 0;
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
const NavItems = styled.li`
    cursor: pointer;

    &::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background-color: ${({ theme }) => theme.primary};
        transition: all 0.3s;
    }
    &&:hover::after {
        width: 100%;
    }
`
const Menu = styled.div`
    font-size: 36px;
    color: ${({ theme }) => theme.text};
`
const Icon = styled.div`
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
    const { theme } = useThemeContext()
    const { toggleTheme } = useThemeChanger()

    const [open, setOpen] = useState(false)

    return (
        <Container>
            <nav className='flex max-w-[1366px] mx-auto py-2 px-4 justify-between items-center'>
                <Brand className='relative w-16'>
                    <img src='/logo/hmp_logo.png' alt='logo' className='w-full h-auto' />
                </Brand>

                <div className='lg:flex gap-x-16 items-center hidden'>
                    <ul className='flex gap-x-12 items-center'>
                        <NavItems>Home</NavItems>
                        <NavItems>Become Expert</NavItems>
                        <NavItems>Assign Task</NavItems>
                        <NavItems>Blog</NavItems>
                        <NavItems>About</NavItems>
                    </ul>

                    <div className='flex gap-x-8 items-center'>
                        <Icon onClick={() => toggleTheme() }>
                            {
                                theme?.dark ? 
                                <MdLightMode /> :
                                <MdNightlight />
                            }
                        </Icon>
                        <Button 
                            text='Login'
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