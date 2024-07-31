import Container from '@/components/Container'
import React from 'react'

const ContainersContainer = ({data}: {data: any}) => {

    return (
        <div className='flex flex-col gap-10'>
            {data.map((item:any, index:number) => (
                <Container key={index} header={item.title} author={item.name} info={item.description} sources={item.sources} />
            ))}
        </div>
    )
}

export default ContainersContainer