import React from 'react'
import { useEffect } from 'react'

const Input = ({ placeholder, setSources, sources }: { placeholder: string, setSources?: any, sources?: any }) => {

    const autoFocus = React.useRef<HTMLInputElement>(null)
    const [input, setInput] = React.useState('')

    const handleInput = (e: any) => {
        setInput(e.target.value)
        if (placeholder === "Source" && e.key === 'Enter') {
            setSources([...sources, input])
            setInput('')
        }
    }

    useEffect(() => {
        if (autoFocus.current) {
            autoFocus.current.focus()
        }
    },
        [sources, placeholder])



    return (
        <input
            ref={autoFocus}
            onKeyDown={handleInput}
            type="text"
            placeholder={placeholder}
            className='py-3 px-4 block w-[300px] border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none ' />
    )
}

export default Input