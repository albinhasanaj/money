import Container from '@/components/Container'
import React from 'react'

const ContainersContainer = () => {
    return (
        <div className='flex flex-col gap-10'>
            <Container
                header='Python Scanner'
                author='Albin'
                info='Projekt som skanna alla ip adresser å sen gör man så här som exempel jätte
                    bra träning vi får lära oss om x å y å huir man implementerar cool sak som det här
                    osv för det är jätte coolt du vet'
                isDone={true}
            />
            <Container
                header='Egen socket'
                author='Oliver'
                info='projekt där vi skapar egen socket med hjälp av ,,,, bra projekt för vi kan göra si å så 
                    å du vet det är awesome jao'
                isDone={true}
            />
            <Container
                header='Recursion Algorithm'
                author='Rafey'
                info=' jksadpojfop ajsdpof jpadsojf paosdjf päsdjfp ojsadpf jdsapof japsdojf poasjf poasdjf psad
                    f asdfojasdpof jasdpof jopadsjf opasdj
                    f dasjf opåasjf dasopf jadspof 
                    dasf dasjf oadsjf aos fjaosp fjasp ofjaspojf podasjf sa'
                isDone={true}
            />
        </div>
    )
}

export default ContainersContainer