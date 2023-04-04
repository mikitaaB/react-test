import s from "./block.module.css"

type BlockPropsType = {
    blockClass: any,
    blockTitle: number
}

export const Block = ({ blockClass, blockTitle }: BlockPropsType) => (
    <div className={`${s.blockShape} ${blockClass}`}>{blockTitle}</div>
)