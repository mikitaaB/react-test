import { memo } from "react"
import s from "./Block.module.css"

type BlockPropsType = {
    blockClass: any,
    blockTitle: number,
    componentRef: React.Ref<HTMLDivElement>
}

export const Block = memo(({ blockClass, blockTitle, componentRef }: BlockPropsType) => (
    <div className={`${s.blockShape} ${blockClass}`} ref={componentRef}>
        {blockTitle}
    </div>
))