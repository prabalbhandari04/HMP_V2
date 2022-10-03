/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled from 'styled-components'

import { FaCoins, FaUserSecret } from 'react-icons/fa'
import { BsFillFileEarmarkCheckFill } from 'react-icons/bs'
import { BiRevision } from 'react-icons/bi'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    flex-wrap: wrap;
`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.body};
    box-shadow: 22px 31px 87px -53px ${props => props.theme.primary}50;
    padding: 2rem 1rem;

    svg {
        color: ${props => props.theme.primary};
        font-size: 36px;
    }
`

const Services = () => {
  return (
    <Container className='gap-y-4'>
        <Card className='w-full md:w-[48%] lg:w-72 rounded-lg gap-8'>
            <FaCoins />
            <div className='flex flex-col gap-2 text-center'>
                <p>Money Back Guarantee</p>
                {/* <p>
                    70% money can be returned if the assignment is cancelled with in 5 hours. If the client is dissatisifed with the work, then 10 to 50% refund will be provided after the verification
                </p> */}
            </div>
        </Card>
        <Card className='w-full md:w-[48%] lg:w-72 rounded-lg gap-8'>
            <BsFillFileEarmarkCheckFill />
            <div className='flex flex-col gap-2 text-center'>
                <p>No Plagarism</p>
                {/* <p>
                    Your assignment is always done from scratch and you do not have to worry about similarities.
                </p> */}
            </div>
        </Card>
        <Card className='w-full md:w-[48%] lg:w-72 rounded-lg gap-8'>
            <FaUserSecret />
            <div className='flex flex-col gap-2 text-center'>
                <p>Confidentiality Guarantee</p>
                {/* <p>
                    It's just you and us. We do not ask for your personal details.
                </p> */}
            </div>
        </Card>
        <Card className='w-full md:w-[48%] lg:w-72 rounded-lg gap-8'>
            <BiRevision />
            <div className='flex flex-col gap-2 text-center'>
                <p>Free Revisions</p>
                {/* <p>
                    You also need to know what is done, our experts will revise assignment if you want for free.
                </p> */}
            </div>
        </Card>
    </Container>
  )
}

export default Services