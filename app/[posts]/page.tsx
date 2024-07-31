"use client";
import ContainersContainer from '@/components/ContainersContainer'
import React, { useEffect } from 'react'

const Project = ({ params }: { params: { posts: string } }) => {
    const { posts } = params
    const [data, setData] = React.useState([])

    let textToDisplay = ""

    const fetchData = async (destination: string) => {
        try {
            const res = await fetch(`/api/posts/${destination}`)
            const data = await res.json()
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }
    

    useEffect(() => {
        if (posts == "home") {
            try {
                fetchData("getProjects") 
            } catch (error) {
                
            }
            textToDisplay = "Projects Completed: 2/3"
        } else if (posts == "learn") {
            textToDisplay = "Knowledge gathered: 100%"
        } else if (posts == "review") {
            textToDisplay = "Solved: 50%"
        }
    }, []);
    return (
        <div className=' bg-[#D1D1D1] w-full items-center flex flex-col pt-10'>
            <p className='text-black text-[16px] w-[756px] text-start pb-2'>{textToDisplay}</p>
            <ContainersContainer data={data} />
        </div>
    )
}

export default Project