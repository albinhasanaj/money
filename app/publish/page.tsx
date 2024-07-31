"use client"
import Input from '@/components/Input'
import React from 'react'

const Publish = ({ toggleView, title }: { toggleView: boolean, title: string }) => {

  const [sources, setSources] = React.useState([""])
  const [view, setView] = React.useState(toggleView)
  const [addTitle, setAddTitle] = React.useState(title)
  const toggleHidden = (e: any) => {
    console.log(e.target.innerText)
    setView(!view)
    if (e.target.innerText == "Project") {
      setAddTitle("Project")
    } else if (e.target.innerText == "Learn") {
      setAddTitle("Learn")
    } else if (e.target.innerText == "Review") {
      setAddTitle("Review")
    }
  }



  return (
    <div>
      <section className={view ? 'hidden' : 'flex w-[1000px] items-center max-h-screen select-none'}>
        <div className='flex flex-wrap gap-10 justify-center'>
          <div onClick={toggleHidden} className='size-[400px] bg-[#D9D9D9] flex flex-col text-black items-center justify-around cursor-pointer '>
            <span className='text-[24px]'>Project</span>
          </div>
          <div onClick={toggleHidden} className='size-[400px] bg-[#D9D9D9] flex flex-col text-black items-center justify-around cursor-pointer'>
            <span className='text-[24px]'>Learn</span>
          </div>
          <div onClick={toggleHidden} className='size-[400px] bg-[#D9D9D9] flex flex-col text-black items-center justify-around cursor-pointer'>
            <span className='text-[24px]'>Review</span>
          </div>
        </div>
      </section>

      <section className={view ? 'w-full flex flex-col' : 'hidden'}>
        <div className='w-[756px] h-[813px] rounded-[15px] bg-[#E2E2E2] flex flex-col items-center py-5'>
          <h1 className='text-black text-2xl'>{addTitle}</h1>
          <div>
            <Input placeholder='Title' />
            <Input placeholder='description about project u type here' />
            {sources.map((source: any, index: any) => {
              return <Input key={index} placeholder="Source" setSources={setSources} sources={sources} />
            }
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Publish