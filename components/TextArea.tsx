import React from 'react'
import CodeDisplay from './CodeDisplay'

const TextArea = ({ item, index }: { item: string, index: number }) => {
    const [toggleBlur, setToggleBlur] = React.useState(false)
    const handleToggleBlur = () => {
        setToggleBlur(!toggleBlur)
    }
    return (
        <div
            onClick={handleToggleBlur}
            className={`${toggleBlur || index == 0 ? "" : "blur-[3.5px] cursor-pointer select-none hover:bg-black hover:bg-opacity-5"}`}>
            <CodeDisplay code={item} />
        </div>

    )
}

export default TextArea