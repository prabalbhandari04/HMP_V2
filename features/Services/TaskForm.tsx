import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

import { RiFileUploadFill } from 'react-icons/ri'
import { MdClose } from "react-icons/md"
import { AiFillFileZip } from 'react-icons/ai'
import { PrimaryButton, PromiseButton } from '../../components/Button';
import { MessageBox } from './ExpertForm';
import useAssignTask from '../../hooks/useAssignTask';
import { useSelector } from 'react-redux';

const TagInput = styled.div`
    width: 100%;
    display: flex;
    align-items: center; 
    gap: 0.5rem;
    border-radius: 4px;
    padding: 1rem;
    background-color: ${({ theme }) => theme.neutral};
    flex-wrap: wrap;
`
const Tag = styled.div`
    background-color: ${({ theme }) => theme.primary}25;
    color: ${({ theme }) => theme.primary};
    padding: 0.5rem 1rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    justify-content: space-between;
    gap: 0.5rem;

    p {
        font-size: 14px;
    }

    svg {
        font-size: 16px;
        cursor: pointer;
        color: ${({ theme }) => theme.text};
    }
`
const Input = styled.input`
    background-color: ${({ theme }) => theme.neutral};
    width: 100%;
    border-radius: 4px;
    padding: 1rem;
    border: none;

    &:focus {
        outline: 1px solid ${({ theme }) => theme.primary};
    }
`
const TextArea = styled.textarea`
    background-color: ${({ theme }) => theme.neutral};
    width: 100%;
    border-radius: 4px;
    padding: 1rem;
    border: none;

    &:focus {
        outline: 1px solid ${({ theme }) => theme.primary};
    }
`
const UploadBtn = styled.label`
    background: ${({ theme }) => theme.neutral};
    background: linear-gradient(317deg, ${({ theme }) => theme.neutral} 0%, ${({ theme }) => theme.text}15 100%);
    border-radius: 4px;
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    width: fit-content;

    svg {
        font-size: 21px;
        color: ${({ theme }) => theme.primary};
    }

    &:hover {
        cursor: pointer;
        background: ${({ theme }) => theme.primary}25;
    }
    
`
const FileUploaded = styled.div`
    position: relative;

    background: ${({ theme }) => theme.primary}25;
    border-radius: 4px;
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    width: fit-content;

    p {
        color: ${({ theme }) => theme.primary};
    }
    svg {
        font-size: 21px;
        color: ${({ theme }) => theme.primary};
    }   
`
const Delete = styled.div`
    svg {
        color: #fff;
        font-size: 16px;
    }
`

const TaskForm = () => {
    const { user } = useSelector((state: any) => state.user)

    const [title, setTitle] = useState<string>('');
    const [deadline, setDeadline] = useState<any>('');
    const [format, setFormat] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [file, setFile] = useState<File | null>(null);
    const [cvName, setCvName] = useState<string>('');

    const [message, setMessage] = useState({
        error: false,
        text: ''
    });

    useEffect(() => {
        if(message.text !== '') {
            setTimeout(() => {
                setMessage({
                    ...message,
                    text: ''
                })
            }, 5000)
        }
    }, [message])

    const handleUpload = (e: any) => {
        // upload file
        e.preventDefault();
        const uploaded_file = e.target.files[0];
        setFile(uploaded_file);
        setCvName(uploaded_file.name);
    }
    const handleDelete = () => {
        setFile(null);
        setCvName('');
    }

    const handleSuccess = () => {
        setMessage({
            error: false,
            text: 'Your task has been submitted successfully!'
        });
    }
    const handleError = (err: any) => {
        if(err.response.data.msg !== undefined) {
            setMessage({
                error: true,
                text: err.response.data.msg
            });
        }
        else {
            setMessage({
                error: true,
                text: 'Something went wrong. Please try again later and if still persists, please contact us @support@handlemypaper.com.'
            });
        }
    }

    const { mutate, isLoading } = useAssignTask(handleSuccess, handleError);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (title === '') {
            setMessage({
                error: true,
                text: 'Title is required.'
            });
            return;
        }
        if (deadline === '') {
            setMessage({
                error: true,
                text: 'Deadline is required.'
            });
            return;
        }
        if (format === '') {
            setMessage({
                error: true,
                text: 'Format is required.'
            });
            return;
        }
        if (description === '') {
            setMessage({
                error: true,
                text: 'Description is required.'
            })
            return;
        }
        if (file === null) {
            setMessage({
                error: true,
                text: 'Question is required.'
            })
            return;
        }
        if (file.size > 52428800) {
            setMessage({
                error: true,
                text: 'File size is too large.'
            })
            return;
        }
        
        
        const formData = new FormData();
        formData.append('title', title);
        formData.append('deadline', deadline);
        formData.append('format', format);
        formData.append('description', description);
        formData.append('question', file!);

        mutate({
            userId: user._id, data: formData
        });
        
    }

    return (
        <div className='flex flex-col gap-y-4'>
            <div className='flex flex-col gap-y-2'>
                {
                    message.text !== '' &&
                    <MessageBox error={message.error}>
                        {message.text}
                    </MessageBox>
                }
                <label>Title</label>
                <Input
                    type='text'
                    placeholder='Web API Development for ....'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className='flex flex-col gap-y-2'>
                <label>Deadline</label>
                <Input
                    type='date'
                    placeholder='Bsc in Computer Science, +2, etc.,'
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                />
            </div>
            <div className='flex flex-col gap-y-2'>
                <label>Format</label>
                <Input
                    type='text'
                    placeholder='APA7 / Previous Year Question'
                    value={format}
                    onChange={(e) => setFormat(e.target.value)}
                />
            </div>
            <div className='flex flex-col gap-y-2'>
                <label>Description</label>
                <TextArea
                    placeholder='This task is strictly required to be done using .....'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={5}
                    className='resize-none min-h-24'
                />
            </div>
            <div className='flex flex-col gap-y-2 mb-8'>
                <label>Upload Task Resource (Must be less than 50mb).</label>
                {
                    cvName === '' ? 
                    <UploadBtn htmlFor='cv'>
                        <RiFileUploadFill />
                        <p>Upload</p>
                    </UploadBtn>
                    :
                    <FileUploaded>
                        <AiFillFileZip />
                        <p>{cvName}</p>

                        <Delete className='absolute -right-2 -top-2 bg-red-600 rounded-full p-2' onClick={handleDelete}>
                            <MdClose className='text-white'/>
                        </Delete>
                    </FileUploaded>
                }
                <input
                    type='file'
                    id='cv'
                    placeholder='Upload your C.V.'
                    onChange={handleUpload}
                    className='hidden'
                />
            </div>

            {
                isLoading ? 
                <PromiseButton text='Informing Admins..' /> 
                : 
                <PrimaryButton text='Apply' onClick={handleSubmit} />
            }
        </div>
    )
}

export default TaskForm