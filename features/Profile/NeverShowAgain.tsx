import React from 'react'
import styled from 'styled-components'
import { FlatButton, PrimaryButton } from '../../components/Button'

const Modal = styled.div`
    background-color: ${({ theme }) => theme.body};
    border-radius: 14px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

interface INeverShowAgainProps {
    handleYes: () => void
    handleNo: () => void
}

const NeverShowAgain = ({ handleYes, handleNo }: INeverShowAgainProps) => {
  return (
    <div className='w-full h-screen fixed bg-[#14141525] flex justify-center items-center top-0 left-0'>
        <Modal>
            <div>
                <h3>Not Interested?</h3>
                <p>Are you sure, you are not interested to register as an expert?</p>
            </div>
            <div className='flex gap-x-4 items-center'>
                <PrimaryButton text="Yes, I'm not interested" onClick={handleYes} />
                <FlatButton text="Cancel" onClick={handleNo} />
            </div>
        </Modal>
    </div>
  )
}

export default NeverShowAgain