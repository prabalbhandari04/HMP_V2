import React, { FC } from 'react'
import styled from 'styled-components'

interface BtnProps {
    text: string
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

    &:hover span{
        transform: scale(1.05);
    }
`

const PrimaryButton: FC<BtnProps> = ({ text }) => {
  return (
    <Btn>
        <span>
            {text}
        </span>
    </Btn>
  )
}

const FlatButton: FC<BtnProps> = ({ text }) => {
    return (
        <FlatBtn>
            <span>
                {text}
            </span>
        </FlatBtn>
    )
}

export { PrimaryButton, FlatButton }