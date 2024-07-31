"use client"
import { toggleButtonClasses } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Container = ({ header, author, info, isDone }: { header: string, author: string, info: string, isDone: boolean }) => {
    const [makeDone, setIsDone] = React.useState(isDone)
    const toggleIsDone = () => {
        setIsDone(!makeDone)
    }

    return (
        <div className='w-[756px] min-h-[289px] h-auto flex-shrink-0 rounded-[15px] bg-[#E2E2E2] px-10 py-8'>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col w-full gap-2'>
                    <div className='flex flex-row w-full justify-between '>
                        <h1 className='text-black text-2xl'>{header}</h1>
                        <a href="/" className='text-black text-[16px]'>Stuck?</a>
                    </div>
                    <p className='text-black text-[16px]'>{author}</p>
                </div>
                <p className='text-black text-[16px]'>{info}</p>
                <div className='flex justify-end'>
                    <Image {...makeDone ? { src: '/images/done.png' } : { src: '/images/notdone.png' }}
                        width={38}
                        height={38}
                        alt='checkmark'
                        onClick={toggleIsDone}
                        className='cursor-pointer opacity-70 hover:opacity-100'
                    />
                </div>
            </div>
        </div>
    )
}

export default Container