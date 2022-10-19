/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled from 'styled-components'

import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import { PrimaryButton } from '../components/Button'

const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.body};
    position: sticky;
    top: 0;
    z-index: 10;
    margin-top: 3rem;
`
const Icon = styled.div`
    font-size: 27px;
    color: ${({ theme }) => theme.text};
`
const ListItems = styled.li`
    cursor: pointer;
    color: ${({ theme }) => theme.text};
    opacity: 0.7;
    font-weight: 300;

    &:hover {
        opacity: 1;
    }
`
const CopyrightSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    border-top: 1px solid ${({ theme }) => theme.text}20;
`

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <Container>
            <footer className='flex flex-col max-w-[1366px] mx-auto py-2 px-4 gap-y-16'>
                <div className='flex justify-between items-end'>
                    <img src='/logo/hmp_logo.png' alt='logo' className='w-32 h-auto' />
                    <div className='flex gap-x-4 md:gap-x-8'>
                        <Icon className='hover:text-[#4267B2]' onClick={() => window.open("https://www.facebook.com/handlemypaper", "_blank")}>
                        <FaFacebook />
                        </Icon>
                        <Icon className='hover:text-[#e4476c]' onClick={() => window.open("https://www.instagram.com/handlemypaper/", "_blank")}>
                        <FaInstagram />
                        </Icon>
                        <Icon className='hover:text-[#333333]' onClick={() => window.open("https://www.tiktok.com/@handlemypaper", "_blank")}>
                        <FaTiktok />
                        </Icon>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-y-16'>
                    <div className='w-full md:w-auto flex justify-between md:justify-start md:gap-x-16'>
                        <div className='flex flex-col gap-y-8'>
                            <h2>Quick Links</h2>
                            <ul className='flex flex-col gap-y-2'>
                                <ListItems>Home</ListItems>
                                <ListItems>Assign a Task</ListItems>
                                <ListItems>Apply for Expert</ListItems>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-y-8'>
                            <h2>Legal</h2>
                            <ul className='flex flex-col gap-y-2'>
                                <ListItems>Terms & Conditions</ListItems>
                                <ListItems>Privacy Policy</ListItems>
                            </ul>
                        </div>
                    </div>

                    <div className='flex flex-col md:items-end gap-y-8'>
                        <div className='flex flex-col md:items-end'>
                            <h2>Join our Newsletter</h2>
                            <p>Get notified about latest tasks.</p>
                        </div>

                        <div className='flex gap-x-2'>
                            <PrimaryButton text='Subscribe' />
                        </div>
                    </div>
                </div>

                <CopyrightSection>
                    <p>© {year} Handle My Paper. All rights reserved.</p>
                </CopyrightSection>
            </footer>
        </Container>
    )
}

export default Footer