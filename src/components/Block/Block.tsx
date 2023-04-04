import s from "./Block.module.css"

type BlockPropsType = {
    blockClass: any,
    blockTitle: number
}

export const Block = ({ blockClass, blockTitle }: BlockPropsType) => {

    return (
        <div style={blockClass} className={s.blockShape}>{blockTitle}</div>
    )
}