import { memo, useCallback, useEffect, useState } from "react"
import s from "./Timer.module.css"

type TimerPropsType = {
	time: number,
	animationDuration: number,
	setIsStartMovement: (val: boolean) => void
}

export const Timer = memo(({ time, animationDuration, setIsStartMovement }: TimerPropsType) => {
	const [isTimerClicked, setIsTimerClicked] = useState<boolean>(false);
	const [value, setValue] = useState<number>(time);
	const [timerId, setTimerId] = useState<number | undefined>(undefined);

	const start = () => {
		setValue(time);
		const timeId = +setInterval(() => {
			setValue(prevState => prevState - 1);
		}, 1000);
		setTimerId(timeId);
	}

	const stop = useCallback(() => {
		clearInterval(timerId);
		setTimerId(undefined);
		setIsTimerClicked(false);
	}, [timerId, setIsTimerClicked]);

	const onClickButton = () => {
		setIsTimerClicked(true);
		setIsStartMovement(true);
		start();
	}

	const buttonValue = isTimerClicked ? value : "START";

	useEffect(() => {
		if (isTimerClicked && value === 0) {
			stop();
		}
		if (value === (time - animationDuration)) {
			setIsStartMovement(false);
		}
	}, [value, time, isTimerClicked, setIsStartMovement, animationDuration, stop]);

	return (
		<button
			className={s.timerShape}
			disabled={!!timerId}
			onClick={onClickButton}>
			{buttonValue}
		</button>
	)
})