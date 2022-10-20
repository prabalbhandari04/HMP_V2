import React, { useState } from 'react'
import styled from 'styled-components'
import Login from '../../features/Auth/Login'
import Register from '../../features/Auth/Register'

interface ToggleProps {
    active?: boolean
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.body};

    display: flex;
    align-items: center;
`
const ToggleWrapper = styled.div`
    background-color: ${({ theme }) => theme.fade_secondary}; 
    padding: 1rem 0;   
    border-radius: 8px;
`
const Paragraph = styled.p<ToggleProps>`    
    color: ${props => props.active ? props.theme.body : props.theme.text};
    width: 50%;
    z-index: 2;
    text-align: center;
    cursor: pointer;
`
const Toggle = styled.div<ToggleProps>`
    position: absolute;
    top: 0;
    left: ${props => props.active ? '0' : '50%'};
    right: ${props => props.active ? '50%' : '0'};
    width: 50%;
    height: 100%;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 8px;

    transition: all 0.3s ease-in;
`

const Auth = () => {
    const [step, setStep] = useState(0)

    const getActive = (index: number) => {
        if(step === index) return true
        else return false
    }

    return (
        <Container>
            <div className='w-96 h-[80vh] flex flex-col gap-y-12'>
                <ToggleWrapper className='relative flex w-48'>
                    <Paragraph active={getActive(0)} onClick={() => setStep(0)}>Login</Paragraph>
                    <Paragraph active={getActive(1)} onClick={() => setStep(1)}>Register</Paragraph>

                    <Toggle active={getActive(0)}/>
                </ToggleWrapper>

                {
                    step === 0 ? <Login /> : <Register />
                }
            </div>        
        </Container>
    )
}

export default Auth