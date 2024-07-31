import React from 'react'

const TextArea = ({ item, index }: { item: string, index: number }) => {
    const [toggleBlur, setToggleBlur] = React.useState(false)
    const handleToggleBlur = () => {
        setToggleBlur(!toggleBlur)
    }
    return (
        <p onClick={handleToggleBlur} className={`${toggleBlur || index == 0 ? "" : "blur-[3.5px] cursor-pointer select-none hover:bg-black hover:bg-opacity-5"}`}>{item}</p>
    )
}

export default TextArea