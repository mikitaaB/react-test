import s from "./circle.module.css"

type CirclePropsType = {
    isTimerClicked: boolean
}

export const Circle = ({ isTimerClicked }: CirclePropsType) => {

    return (
        <div className={s.circle}></div>
    )
}