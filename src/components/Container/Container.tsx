import { useEffect } from "react"
import { Block } from "../Block/Block"
import { Circle } from "../Circle/Circle"
import s from "./container.module.css"

type ContainerPropsType = {
    isTimerClicked: boolean
}

export const Container = ({ isTimerClicked }: ContainerPropsType) => {

    useEffect(() => {
        if (isTimerClicked) {
            // moveCircleToBlock();
        }
    }, [isTimerClicked]);

    return (
        <div className={s.blocksContainer}>
            <Block
                blockTitle={1}
                blockClass={s.blockOneClass} />
            <Block
                blockTitle={2}
                blockClass="" />
            <Circle isTimerClicked={isTimerClicked} />
        </div>
    )
}