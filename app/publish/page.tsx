import React from 'react'

const Publish = () => {
  return (
    <section className='w-[1000px] flex items-center h-screen'>
        <div className='flex flex-wrap gap-10 justify-center'>
        <div className='size-[400px] bg-[#D9D9D9] flex flex-col text-black items-center justify-around'>
            <span className='text-[24px]'>Project</span>
            <span className='text-[128px]'>+</span>
        </div>
        <div className='size-[400px] bg-[#D9D9D9] flex flex-col text-black items-center justify-around'>
            <span className='text-[24px]'>Learn</span>
            <span className='text-[128px]'>+</span>
        </div>
        <div className='size-[400px] bg-[#D9D9D9] flex flex-col text-black items-center justify-around'>
            <span className='text-[24px]'>Review</span>
            <span className='text-[128px]'>+</span>
        </div>
        </div>
    </section>
  )
}

export default Publish