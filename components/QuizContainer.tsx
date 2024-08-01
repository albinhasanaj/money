import React from 'react'
import { useRouter } from 'next/navigation'

const QuizContainer = ({ id, title }: { id: string, title: string }) => {
    const router = useRouter()

    const handleClick = () => {
        router.push(`/quiz/${id}`)
    }


    return (
        <div onClick={handleClick} className='w-[756px] min-h-[289px] h-auto flex-shrink-0 rounded-[15px] bg-[#E2E2E2] px-10 py-8 transition-colors duration-500 dark:bg-[#575757] dark:text-white'>
            <h1 className='text-[32px] text-center'>{title}</h1>
        </div>
    )
}

export default QuizContainer