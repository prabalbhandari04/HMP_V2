/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled from 'styled-components'

import { useThemeContext } from '../../context/ThemeContextProvider'

import { DocumentDownload } from 'iconsax-react'

interface IAssignmentProps {
    assignmentData: any[]
}

const Badge = styled.div`
    background-color: ${({ theme }) => theme.primary};
    border-radius: 8px;
    padding: 0.5rem 1rem;
`
const TasksContainer = styled.div`
    background-color: ${({ theme }) => theme.fade_secondary};
    border-radius: 8px;
    padding: 1rem 2rem;
    justify-content: space-between;
    display: flex;
    gap: 1.5rem;

    .highlight-text {
        color: ${({ theme }) => theme.primary};
    }
`

const Assignments = ({ assignmentData }: IAssignmentProps) => {
    const { theme } = useThemeContext();

    if(assignmentData === undefined || assignmentData.length === 0) {
        return (
            <div className='flex flex-col w-full h-full justify-center items-center gap-y-2 opacity-60'>
                {
                    theme?.dark ?
                    <img src='/gifs/book-dark.gif' alt='book' className='w-8 h-auto' />
                    :
                    <img src='/gifs/book-light.gif' alt='book' className='w-8 h-auto' />
                }
                <p>No assignments available</p>
            </div>
        )
    }
  return (
    <div className='flex flex-col gap-y-12 py-12'>
        <div className='flex gap-x-4 items-center'>
            <Badge>
                <p className='text-white'>{assignmentData.length}</p>
            </Badge>
            <h3>Your Assignments</h3>              
        </div>

        <div className='flex flex-col gap-y-6'>
        {
            assignmentData.map((a, index) => (
                <TasksContainer key={index}>
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex flex-col gap-y-1'>
                            <p className='font-bold'>{a.title}</p>
                            <p>Deadline: <span className='highlight-text'>{a.deadline}</span></p>
                        </div>
                        <p>{a.description}</p>
                    </div>
                    <p className='highlight-text'>{a.status}</p>

                </TasksContainer>
            ))
        }
        </div>
    </div>
  )
}

export default Assignments