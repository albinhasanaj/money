"use client"
import Container from '@/components/Container'
import React from 'react'

const Project = ({ params }: { params: { posts: string } }) => {
    const { posts } = params
    const [showHelp, setShowHelp] = React.useState(true)
    let textToDisplay = ""

    if (posts == "home") {
        textToDisplay = "Projects Completed: 2/3"
    } else if (posts == "learn") {
        textToDisplay = "Knowledge gathered: 100%"
    } else if (posts == "review") {
        textToDisplay = "Solved: 50%"
    }
    const toggleHelp = () => {
        setShowHelp(!showHelp)
    }

    return (
        <div className=' bg-[#D1D1D1] w-full items-center flex flex-col pt-10'>
            {showHelp ? (
                <div>
                    <p className='text-black text-[16px] w-[756px] text-start pb-2'>{textToDisplay}</p>
                    <div className='flex flex-col gap-10'>
                        <div className='flex items-center gap-3'>
                            <Container
                                header='Python Scanner'
                                author='Albin'
                                info='Projekt som skanna alla ip adresser å sen gör man så här som exempel jätte
                                bra träning vi får lära oss om x å y å huir man implementerar cool sak som det här
                                osv för det är jätte coolt du vet'
                                isDone={true}
                            />
                            <a onClick={toggleHelp} className='text-black text-[16px] select-none cursor-pointer'>Stuck?</a>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Container
                                header='Egen socket'
                                author='Oliver'
                                info='projekt där vi skapar egen socket med hjälp av ,,,, bra projekt för vi kan göra si å så 
                                å du vet det är awesome jao'
                                isDone={true}
                            />
                            <a onClick={toggleHelp} className='text-black text-[16px] select-none cursor-pointer'>Stuck?</a>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Container
                                header='Recursion Algorithm'
                                author='Rafey'
                                info=' jksadpojfop ajsdpof jpadsojf paosdjf päsdjfp ojsadpf jdsapof japsdojf poasjf poasdjf psad
                                f asdfojasdpof jasdpof jopadsjf opasdj
                                f dasjf opåasjf dasopf jadspof 
                                dasf dasjf oadsjf aos fjaosp fjasp ofjaspojf podasjf sa'
                                isDone={true}
                            />
                            <a onClick={toggleHelp} className='text-black text-[16px] select-none cursor-pointer'>Stuck?</a>
                        </div>
                    </div>
                </div>
            ) : (
                <h1 onClick={toggleHelp}></h1>
            )}
        </div>
    )
}

export default Project