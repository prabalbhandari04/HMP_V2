/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled from 'styled-components'

import { useThemeContext } from '../../context/ThemeContextProvider'

import { DocumentDownload } from 'iconsax-react'

interface ITaskProps {
    tasksData: any[]
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

const Tasks = ({ tasksData }: ITaskProps) => {
    const { theme } = useThemeContext();

    if(tasksData === undefined || tasksData.length === 0) {
        return (
            <div className='flex flex-col w-full h-full justify-center items-center gap-y-2 opacity-60'>
                {
                    theme?.dark ?
                    <img src='/gifs/book-dark.gif' alt='book' className='w-8 h-auto' />
                    :
                    <img src='/gifs/book-light.gif' alt='book' className='w-8 h-auto' />
                }
                <p>No tasks available</p>
            </div>
        )
    }
  return (
    <div className='flex flex-col gap-y-12 py-12'>
        <div className='flex gap-x-4 items-center'>
            <Badge>
                <p className='text-white'>{tasksData.length}</p>
            </Badge>
            <h3>Your Tasks</h3>              
        </div>

        <div className='flex flex-col gap-y-6'>
        {
            tasksData.map((t, index) => (
                <TasksContainer key={index}>
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex flex-col gap-y-1'>
                            <p className='font-bold'>{t.title}</p>
                            <p>Deadline: <span className='highlight-text'>{t.deadline}</span></p>
                        </div>
                        <p>{t.description}</p>
                    </div>
                    <DocumentDownload
                        size="27"
                        color='#8C52FF'
                        variant="Bold"
                    />

                </TasksContainer>
            ))
        }
        </div>
    </div>
  )
}

export default Tasks