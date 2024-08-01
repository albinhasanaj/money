"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import TextArea from './TextArea'

const Container = ({ header, author, info, sources, help }: { header: string, author: string, info: string, sources?: string[], help: string[] }) => {

    const [toggleStuck, setToggleStuck] = React.useState(true)


    const handleToggleStuck = () => {
        setToggleStuck(!toggleStuck)
    }



    return (
        <div className='w-[756px] min-h-[289px] h-auto flex-shrink-0 rounded-[15px] bg-[#E2E2E2] px-10 py-8'>
            {toggleStuck ? (
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col w-full gap-2'>
                        <div className='flex flex-row w-full justify-between '>
                            <h1 className='text-black text-2xl'>{header}</h1>
                            {help && (
                                <button onClick={handleToggleStuck} className='hover:animate-bounce'>Stuck?</button>
                            )}
                        </div>
                        <p className='text-black text-[16px] capitalize'>{author}</p>
                    </div>
                    <p className='text-black text-[16px]'>{info}</p>
                    <div className="flex flex-col">
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
                </div>
            ) : (
                <div className='flex flex-col w-full gap-2'>
                    <div className='flex flex-row w-full justify-between '>
                        <h1 className='text-black text-2xl'>{header}</h1>
                        <button onClick={handleToggleStuck} className='hover:animate-bounce'>Back</button>
                    </div>
                    <p className='text-black text-[16px] capitalize'>{author}</p>
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
