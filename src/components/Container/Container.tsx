import { memo, useCallback, useEffect, useRef } from "react"
import { Block } from "../Block/Block"
import { Circle } from "../Circle/Circle"
import s from "./container.module.css"

type ContainerPropsType = {
	animationDuration: number,
	isStartMovement: boolean
}

export const Container = memo(({ animationDuration, isStartMovement }: ContainerPropsType) => {
	const blockOneRef = useRef<HTMLDivElement>(null);
	const blockTwoRef = useRef<HTMLDivElement>(null);
	const circleRef = useRef<HTMLDivElement>(null);

	const moveCircleToBlock = useCallback(() => {
		const blockOneRefCoord = blockOneRef.current?.getBoundingClientRect();
		const blockTwoRefCoord = blockTwoRef.current?.getBoundingClientRect();
		const circleElem = circleRef.current;

		if (circleElem && blockOneRefCoord && blockTwoRefCoord) {
			const circleRadius = circleElem.getBoundingClientRect().height / 2;
			const blockHalfHeight = blockOneRefCoord.height / 2;

			const coordStartX = blockOneRefCoord.left + blockHalfHeight - circleRadius;
			const coordStartY = blockOneRefCoord.top + blockHalfHeight - circleRadius;

			const coordEndX = blockTwoRefCoord.left + blockHalfHeight - circleRadius;
			const coordEndY = blockTwoRefCoord.top + blockHalfHeight - circleRadius;

			circleElem.animate([
				{ transform: `translate(${coordStartX}px, ${coordStartY}px)` },
				{ transform: `translate(${coordEndX}px, ${coordEndY}px)` }
			], {
				duration: animationDuration * 1000,
				easing: 'ease-out'
			});
		}
	}, [animationDuration]);

	useEffect(() => {
		if (isStartMovement) {
			moveCircleToBlock();
		}
	}, [isStartMovement, moveCircleToBlock]);

	return (
		<div className={s.blocksContainer}>
			<Block
				blockTitle={1}
				blockClass={s.blockOneClass}
				componentRef={blockOneRef} />
			<Block
				blockTitle={2}
				blockClass=""
				componentRef={blockTwoRef} />
			<Circle
				isStartMovement={isStartMovement}
				componentRef={circleRef} />
		</div>
	)
})