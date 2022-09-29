/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

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

const Navbar = () => {
  return (
    <Container>
        <div className='flex max-w-[1366px] mx-auto py-2 px-4 justify-between items-center'>
            <Brand className='relative w-16'>
                <img src='/logo/hmp_logo.png' alt='logo' className='w-full h-auto' />
            </Brand>

            <div className='flex gap-x-12 items-center'>
                <ul className='flex gap-x-8 items-center'>
                    <NavItems>Home</NavItems>
                    <NavItems>Services</NavItems>
                    <NavItems>Blog</NavItems>
                    <NavItems>About</NavItems>
                </ul>

                <Button 
                    text='Login'
                />
            </div>
        </div>
    </Container>
  )
}

export default Navbar