import React, { FC } from 'react'
import styled from 'styled-components'

interface BtnProps {
    text: string
    onClick?: any
}

const Btn = styled.button`
    background: linear-gradient(-45deg, ${props => props.theme.primary}, ${props => props.theme.secondary}, ${props => props.theme.primary});
    background-size: 400%;
    width: max-content;
    max-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-position: 90% 0;

    padding: 1rem 2.5rem;

    border: none;
    border-radius: 36px;

    box-shadow: 3px 3px 9px 3px ${props => props.theme.primary}25;

    transition: background 0.8s;

    &:hover {
        background-position: 185% 50%;
    }

    span {
        color: ${props => props.theme.white};
    }
`
const FlatBtn = styled.button`
    background: transparent;
    border: none;
    width: max-content;
    max-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2.5rem;

    span {
        color: ${props => props.theme.primary};
        text-shadow: 0px 3px 3px ${props => props.theme.primary}50;
    }
`
const PromiseBtn = styled.button`
    background: linear-gradient(-45deg, ${props => props.theme.primary}, ${props => props.theme.secondary}, ${props => props.theme.primary});
    mix-blend-mode: luminosity;
    width: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 36px;
    gap: 0.75rem;

    padding: 1rem 2.5rem;

    span {
        color: ${props => props.theme.white};
    }

    cursor: not-allowed;
`
const Loader = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid #FFF;
    border-right: 3px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
    }
`

const PrimaryButton: FC<BtnProps> = ({ text, onClick }) => {
  return (
    <Btn onClick={onClick}>
        <span>
            {text}
        </span>
    </Btn>
  )
}

const FlatButton: FC<BtnProps> = ({ text, onClick }) => {
    return (
        <FlatBtn onClick={onClick}>
            <span>
                {text}
            </span>
        </FlatBtn>
    )
}

const PromiseButton: FC<BtnProps> = ({ text }) => {
    return (
        <PromiseBtn>
            <Loader />
            <span>
                {text}
            </span>
        </PromiseBtn>
    )
}

export { PrimaryButton, FlatButton, PromiseButton }