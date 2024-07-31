import ContainersContainer from '@/components/ContainersContainer'
import React from 'react'

const Project = ({ params }: { params: { posts: string } }) => {
    const { posts } = params

    let textToDisplay = ""

    if (posts == "home") {
        textToDisplay = "Projects Completed: 2/3"
    } else if (posts == "learn") {
        textToDisplay = "Knowledge gathered: 100%"
    } else if (posts == "review") {
        textToDisplay = "Solved: 50%"
    }
    return (
        <div className=' bg-[#D1D1D1] w-full items-center flex flex-col pt-10'>
            <p className='text-black text-[16px] w-[756px] text-start pb-2'>{textToDisplay}</p>
            <ContainersContainer />
        </div>
    )
}

export default Project