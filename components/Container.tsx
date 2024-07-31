"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Container = ({ header, author, info, sources }: { header: string, author: string, info: string, sources?: string[] }) => {
    return (
        <div className='w-[756px] min-h-[289px] h-auto flex-shrink-0 rounded-[15px] bg-[#E2E2E2] px-10 py-8'>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col w-full gap-2'>
                    <div className='flex flex-row w-full justify-between '>
                        <h1 className='text-black text-2xl'>{header}</h1>
                    </div>
                    <p className='text-black text-[16px]'>{author}</p>
                    
                </div>
                <p className='text-black text-[16px]'>{info}</p>
                    <div className="flex flex-col">
                        {sources && (
                            <>
                                <span>Sources</span>
                                <div className="flex flex-wrap gap-2">
                                    {sources.map((source, index) => (
                                        <Link key={index} href={source}
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
        </div>
    )
}

export default Container
