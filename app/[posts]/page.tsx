"use client";
import ContainersContainer from '@/components/ContainersContainer'
import React, { useEffect } from 'react'

//@ts-expect-error no types for js-cookie
import Cookies from 'js-cookie';

const Project = ({ params }: { params: { posts: string } }) => {
    const { posts } = params
    const [data, setData] = React.useState([])
    const [username, setUsername] = React.useState("")

    const [textToDisplay, setTextToDisplay] = React.useState("")

    const fetchData = async (destination: string) => {
        try {
            const res = await fetch(`/api/posts/${destination}`)
            if (res.ok) {
                const data = await res.json()
                if (data.length == 0) {
                    // toast.error("No data found")
                    console.error("No data found")
                } else {
                    setData(data)
                }
                return data.length
            }
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        const username = Cookies.get('name')
        setUsername(username)
    }, [])


    useEffect(() => {
        const fetchAndSetData = async () => {
            if (posts == "home") {
                try {
                    const username = Cookies.get('name')
                    const length = await fetchData("getProjects?name=" + username)
                    setTextToDisplay("Projects Total: " + length)
                } catch (error) {
                    // toast.error("Error fetching data")
                    console.error(error)
                }
            } else if (posts == "learn") {
                try {
                    const length = await fetchData("getLearn")
                    setTextToDisplay("Total learning: " + length)
                } catch (error) {
                    // toast.error("Error fetching data")
                    console.error(error)
                }
            } else if (posts == "quiz") {
                try {
                    const length = await fetchData("getQuiz")
                    setTextToDisplay("Total quizzes: " + length)
                } catch (error) {
                    // toast.error("Error fetching data")
                    console.error(error)

                }
            }
        }

        fetchAndSetData();
    }, [posts]);
    return (
        <div className=' bg-[#D1D1D1] dark:bg-[#121212] duration-500 transition-colors w-full items-center flex flex-col pt-10'>
            <p className='text-black text-[16px] w-[756px] text-start pb-2 transition-colors duration-500 dark:text-white'>{textToDisplay}</p>
            <ContainersContainer data={data} username={username} quiz={posts == "quiz"} />
        </div>
    )
}

export default Project