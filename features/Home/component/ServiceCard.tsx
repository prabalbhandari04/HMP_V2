/* eslint-disable @next/next/no-img-element */
import React, { FC, useEffect } from 'react'
import styled from 'styled-components';

import AOS from 'aos'
import 'aos/dist/aos.css'

import { TiMediaPlay } from 'react-icons/ti'

interface ServiceCardProps {
    image: string;
    alt_text: string;
    title: string;
    description: string;
    duration?: string;
}

const ButtonWrapper = styled.div`
    border: 8px solid ${({ theme }) => theme.body};
    background-color: ${({ theme }) => theme.primary};
`
const Icon = styled.div`
    color: ${({ theme }) => theme.body};
    font-size: 36px;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        z-index: -1;
        background-color: ${props => props.theme.body}80;
        filter: blur(3px);
        transition: all 0.3s ease;
    }

    &:hover::before {
        transform: translate(-50%, -50%) scale(3);
    }

    @media (max-width: 768px) {
        font-size: 24px;
    }
    @media (max-width: 480px) {
        font-size: 18px;
    }
`

const ServiceCard: FC<ServiceCardProps> = ({ image, alt_text, title, description, duration }) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (
        <div className='flex-1 flex flex-col gap-y-4' data-aos='fade-up' data-aos-duration={duration}>
            <div className='relative rounded-lg'>
                <img src={image} alt={alt_text} className='w-full h-64 lg:h-96 rounded-lg object-cover object-center' />
                <ButtonWrapper className='absolute p-4 rounded-full -right-6 md:-right-8 top-1/2 -translate-y-1/2'>
                    <Icon>
                        <TiMediaPlay />
                    </Icon>
                </ButtonWrapper>
            </div>

            <div className='flex flex-col'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ServiceCard