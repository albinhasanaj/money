import Container from '@/components/Container'
import React from 'react'


const ContainersContainer = ({ data, username }: { data: any, username: string }) => {

        
    return (
        <div className='flex flex-col gap-10'>
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
        </div>
    )
}

export default ContainersContainer