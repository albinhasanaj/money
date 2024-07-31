import Container from '@/components/Container'
import React from 'react'

const ContainersContainer = ({data}: {data: any}) => {

    const datan = [
        {
            header: 'Python Scanner',
            author: 'Albin',
            info: "Projekt som skanna alla ip adresser å sen",
            isDone: true
        }, {
            header: 'Egen socket',
            author: 'Oliver',
            info: 'projekt där vi skapar egen socket med hjälp av ,,,,',
            isDone: true
        }]



    return (
        <div className='flex flex-col gap-10'>
            {data.map((item:any, index:number) => (
                <Container key={index} header={item.title} author={item.name} info={item.description} isDone={true} />
            ))}
        </div>
    )
}

export default ContainersContainer