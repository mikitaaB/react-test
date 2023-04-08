import { memo } from "react"
import s from "./block.module.css"

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