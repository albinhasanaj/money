import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const QuizContainer = ({ id, title }: { id: string, title: string }) => {
    const router = useRouter()

    const handleClick = () => {
        router.push(`/quiz/${id}`)
    }

    return (
        <div onClick={handleClick} className='w-[756px] min-h-[289px] h-auto flex-shrink-0 rounded-[15px] bg-[#E2E2E2] px-10 py-8 transition-colors duration-500 dark:bg-[#575757] dark:text-white cursor-pointer relative'>
            <Image src="/images/cool.png" width={250} height={250} alt="Quiz Image"
            className="absolute rotate-90 left-0 bottom-0 rounded-[15px]"
            />
            <h1 className='text-[32px] text-center'>{title}</h1>
            <Image src="/images/cool.png" width={250} height={250} alt="Quiz Image"
            className="absolute right-0 bottom-0 rounded-[15px] brightness-50"
            />
            <div className='w-[300px] h-[200px] bg-blue-500 left-[50%] top-[50%] absolute transform translate-x-[-50%] translate-y-[-50%] rounded-full blur-[350px]'/>
        </div>
    )
}

export default QuizContainer
