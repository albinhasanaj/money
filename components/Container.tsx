"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import TextArea from './TextArea'
import toast from 'react-hot-toast'

const Container = ({ header, author, info, sources, help, isDone, username }: { header: string, author: string, info: string, sources?: string[], help: string[], isDone: boolean, username: string }) => {

    const [toggleStuck, setToggleStuck] = React.useState(true)
    const [toggleDone, setToggleDone] = React.useState(isDone)


    const handleToggleStuck = () => {
        setToggleStuck(!toggleStuck)
    }

    const handleToggleDone = async () => {
        // fetch db
        try {
            
            const res = await fetch('/api/posts/updateDone', {
                method: 'PATCH',
                body: JSON.stringify({ title: header, username, isDone: !toggleDone }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (!res.ok) {
                throw new Error('Error updating')
            }

            toast.success('Updated')
        } catch (error) {
            console.error(error)
            toast.error('Error updating')
        } finally {
            setToggleDone(!toggleDone)
        }
        
    }



    return (
        <div className='w-[756px] min-h-[289px] h-auto flex-shrink-0 rounded-[15px] bg-[#E2E2E2] px-10 py-8 transition-colors duration-500 dark:bg-[#575757] dark:text-white'>
            {toggleStuck ? (
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col w-full gap-2'>
                        <div className='flex flex-row w-full justify-between '>
                            <h1 className='text-black text-2xl transition-colors duration-500 dark:text-white'>{header}</h1>
                            {help && (
                                <button onClick={handleToggleStuck} className='hover:animate-bounce'>Stuck?</button>
                            )}
                        </div>
                        <p className='text-black text-[16px] capitalize transition-colors duration-500 dark:text-white'>{author}</p>
                    </div>
                    <p className='text-black text-[16px] transition-colors duration-500 dark:text-white'>{info}</p>
                    <div className='flex justify-between'>
                        <div className="flex flex-col  w-[50%]">
                            {sources && (
                                <>
                                    <span>Sources</span>
                                    <div className="flex flex-col">
                                        {sources.map((source, index) => (
                                            <Link
                                                target='_blank'
                                                key={index} href={source}
                                                className='text-blue-500 hover:underline text-[12px]'
                                            >
                                                {source}
                                            </Link>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                        <div className=' w-[50%] flex flex-col items-end justify-end'>
                            {toggleDone ? (
                                <Image onClick={handleToggleDone} className='cursor-pointer hover:scale-90 rounded-full transition-all bg-green-700' src='/images/done.png' alt="" width={32} height={32} />
                            ) : (
                                <Image onClick={handleToggleDone} className='cursor-pointer hover:scale-90 rounded-full transition-all' src='/images/notdone.png' alt="" width={32} height={32} />
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className='flex flex-col w-full gap-2'>
                    <div className='flex flex-row w-full justify-between '>
                        <h1 className='text-black text-2xl transition-colors duration-500 dark:text-white'>{header}</h1>
                        <button onClick={handleToggleStuck} className='hover:animate-bounce'>Back</button>
                    </div>
                    <p className='text-black text-[16px] capitalize transition-colors duration-500 dark:text-white'>{author}</p>
                    <div>
                        <div className='flex flex-col gap-10 mt-5'>
                            {help.map((item, index) => (
                                <TextArea key={index} item={item} index={index} />
                            )
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Container
