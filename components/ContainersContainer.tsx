import Container from '@/components/Container'
import React from 'react'
import QuizContainer from './QuizContainer';
import toast from 'react-hot-toast';


const ContainersContainer = ({ data, username, quiz }: { data: any, username: string, quiz: boolean }) => {

    const updateTitle = " Complete Ethical Hacking Bootcamp"

    const fetchData = async () => {
        const res = await fetch('/api/db_insert/insert', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: updateTitle })
        });
        if (res.ok) {
            toast.success('Data fetched');
        } else {
            toast.error('Error fetching data');
        }
    }

    return (
        <div className='flex flex-col gap-10'>

            {/* fetch insert */}
            {/* <button 
            onClick={fetchData}
            >fetch me</button> */}

            {quiz ? (
                <>{data.map((item: any, index: number) => {
                    return (
                        <QuizContainer id={item._id} title={item.title} key={index} />
                    )
                })}</>
            ) : (
                <>
                    {data.map((item: any, index: number) => {

                        const isUserDone = item.isDone;
                        // find the user in the array
                        const user = isUserDone.find((user: any) => user.username === username);
                        // get the done status
                        const isDone = user.done;


                        return (

                            <Container key={index} header={item.title} author={item.name} info={item.description} sources={item.sources} help={item.help} isDone={isDone}
                                username={username}
                            />
                        )
                    }
                    )}
                </>
            )}
        </div>
    )
}

export default ContainersContainer