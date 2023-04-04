import { useState } from "react"
import s from "./Block.module.css"

type BlockPropsType = {
    blockClass: any,
    blockTitle: number
}

export const Block = ({ blockClass, blockTitle }: BlockPropsType) => {
    const [value, setValue] = useState(5);

    return (
        <div style={blockClass} className={s.blockShape}>{blockTitle}</div>
    )
}