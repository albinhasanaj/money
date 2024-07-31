"use client"
import Input from '@/components/Input'
import React from 'react'

const Publish = ({ toggleView, title }: { toggleView: boolean, title: string }) => {

  const [sources, setSources] = React.useState([""])
  const [view, setView] = React.useState(toggleView)
  const [addTitle, setAddTitle] = React.useState(title)
  const [addTextArea, setAddTextArea] = React.useState([""])
  const [showTextArea, setShowTextArea] = React.useState(false)
  const toggleHidden = (e: any) => {
    console.log(e.target.innerText)
    setView(!view)
    if (e.target.innerText == "Project") {
      setAddTitle("Project")
      setShowTextArea(true)
    } else if (e.target.innerText == "Learn") {
      setAddTitle("Learn")
      setShowTextArea(false)
    } else if (e.target.innerText == "Review") {
      setAddTitle("Review")
      setShowTextArea(false)
    }
  }


  const handleAddTextArea = () => {
    setAddTextArea([...addTextArea, ""])
  }

  if (sources.length > 1 && sources[sources.length - 1] === "") {
    sources.pop()
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
        <div className='w-[756px] h-auto rounded-[15px] bg-[#E2E2E2] flex flex-col items-center py-5'>
          <button className='self-start text-3xl' onClick={toggleHidden}>⬅️ bakc</button>
          <h1 className='text-black text-2xl'>{addTitle}</h1>
          <div className='flex gap-10 mt-8 flex-col justify-between h-full'>
            <div className='flex gap-4'>
              <div className='flex flex-col gap-4'>
                <Input placeholder='Title*' />
                <Input placeholder='Description*' />
              </div>
              <div className='flex flex-col gap-4'>
                {sources.map((source: any, index: any) => {
                  return <Input key={index} placeholder="Source" setSources={setSources} sources={sources} />
                }
                )}
              </div>
            </div>
            {showTextArea && (
              <div className='flex flex-col items-center gap-8'>
                {addTextArea.map((textArea: any, index: any) => {
                  return <textarea
                    name=""
                    id=""
                    placeholder='test'
                    className='h-[200px] block px-5 py-3 w-[600px] border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none '></textarea>
                })}
                <button onClick={handleAddTextArea}>Add more Help</button>
              </div>
            )}
            <div className='w-full flex justify-center'>
              <button className='w-[300px] h-[45px] border-black border-[2px] bg-[#cac9c9] rounded-md'>Publish</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Publish