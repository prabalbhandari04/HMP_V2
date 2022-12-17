import React, { useState } from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { RiFileUploadFill } from 'react-icons/ri'
import { MdClose } from "react-icons/md"
import { AiFillFilePdf, AiFillFileImage } from 'react-icons/ai'

import { PrimaryButton, PromiseButton } from '../../components/Button';
import useExpert from '../../hooks/useExpert';

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
const MessageBox = styled.div<{ error: boolean }>`
    background-color: ${props => props.error ? '#f1223a25' : '#1a9a1a25'};
    border-radius: 8px;
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
    width: 100%;

    color: ${props => props.error ? '#f1223a' : '#1a9a1a'};
    font-size: 16px;
    font-weight: 400;
    
    display: flex;
    align-items: center;
    justify-content: center;
`

const ExpertForm = () => {
    const { user } = useSelector((state: any) => state.user)

    const [tags, setTags] = useState<string[]>([]);
    const [error, setError] = useState<string>('');

    const [qualification, setQualification] = useState<string>('');
    const [bank, setBank] = useState<string>('');
    const [file, setFile] = useState<File | null>(null);
    const [cvType, setCvType] = useState<string>('');
    const [cvName, setCvName] = useState<string>('');

    const [message, setMessage] = useState({
        error: false,
        text: ''
    });

    const handleTags = (e: any) => {
        if (e.key === "," || e.key=== "Enter" && e.target.value !== "") {
            setTags([...tags, e.target.value]);
            e.target.value = "";
        }
        else if (e.key === "Backspace" && tags.length && e.target.value == 0){
            const tagsCopy = [...tags];
            tagsCopy.pop();
            e.preventDefault();
            setTags(tagsCopy);
        }
        else if(tags.length < 1 && e.key === "Backspace"){
            setError("Since there is no tags you can't able to delete any tags");
        }
        else if(e.target.value == "" && e.key === "," || e.key === "Enter"){
            setError("The tag should be one character long!");
        }
    }

    const removeTags = (index: number) => {
        const tagsCopy = [...tags];
        tagsCopy.splice(index, 1);
        setTags(tagsCopy);
    }

    const handleUpload = (e: any) => {
        // upload file
        e.preventDefault();
        const uploaded_file = e.target.files[0];
        setFile(uploaded_file);
        setCvName(uploaded_file.name);
        setCvType(uploaded_file.type);
    }
    const handleDelete = () => {
        setFile(null);
        setCvName('');
        setCvType('');
    }

    const handleSuccess = () => {
        setMessage({
            error: false,
            text: 'Your application has been submitted successfully!'
        });
    }
    const handleError = (err: any) => {
        setMessage({
            error: true,
            text: err.response.data.msg
        });
    }

    const { mutate, isLoading } = useExpert(handleSuccess, handleError);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(tags, qualification, bank, file, cvType, cvName);

        const formData = new FormData();
        formData.append('username', user.username);
        formData.append('email', user.email);
        formData.append('skills', tags.toString());
        formData.append('qualification', qualification);
        formData.append('bankAccount', bank);
        formData.append('image', file!);
        
        console.log(formData)

        if(tags.length < 1 || qualification === '' || bank === '' || file === null){
            setMessage({
                error: true,
                text: 'All fields are required!'
            });
            return;
        }

        setTags([]);
        setQualification('');
        setBank('');
        setFile(null);
        setCvName('');
        setCvType('');
        mutate({userId: user._id, data: formData});
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
                <label>Skills</label>
                <TagInput>
                    {
                        tags.map((tag, index) => (
                            <Tag key={index}>
                                <p>{tag}</p>
                                <MdClose onClick={() => removeTags(index)} />
                            </Tag>
                        ))      
                    }
                    <input 
                        type='text' 
                        placeholder='Press "," or "Enter" key to add a skill' 
                        className='bg-transparent outline-none border-none flex-1'
                        onKeyDown={(e) => {handleTags(e)}}   
                    />
                </TagInput>
            </div>
            <div className='flex flex-col gap-y-2'>
                <label>Qualifications</label>
                <Input
                    type='text'
                    placeholder='Bsc in Computer Science, +2, etc.,'
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                />
            </div>
            <div className='flex flex-col gap-y-2'>
                <label>Bank A/C</label>
                <Input
                    type='text'
                    placeholder='Your account number for payment.'
                    value={bank}
                    onChange={(e) => setBank(e.target.value)}
                />
            </div>
            <div className='flex flex-col gap-y-2 mb-8'>
                <label>Upload C.V.</label>
                {
                    cvName === '' ? 
                    <UploadBtn htmlFor='cv'>
                        <RiFileUploadFill />
                        <p>Upload</p>
                    </UploadBtn>
                    :
                    <FileUploaded>
                        {
                            cvType === 'application/pdf' ?
                            <AiFillFilePdf />
                            :
                            <AiFillFileImage />
                        }
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
                <PromiseButton text='Working' /> 
                : 
                <PrimaryButton text='Apply' onClick={handleSubmit} />
            }
        </div>
    )
}

export default ExpertForm