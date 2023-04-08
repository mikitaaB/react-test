import { memo } from "react"
import s from "./Circle.module.css"

type CirclePropsType = {
    isStartMovement: boolean,
    componentRef: React.Ref<HTMLDivElement>
}

export const Circle = memo(({ isStartMovement, componentRef }: CirclePropsType) => (
    <div className={isStartMovement ? s.circle : s.circle_hidden} ref={componentRef}></div>
))