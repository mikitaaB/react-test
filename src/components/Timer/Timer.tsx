import { useCallback, useEffect, useState } from "react"
import s from "./timer.module.css"

type TimerPropsType = {
	timerClassName: any,
	isTimerClicked: boolean,
	setIsTimerClicked: (val: boolean) => void
}

export const Timer = (props: TimerPropsType) => {
	const { timerClassName, isTimerClicked, setIsTimerClicked } = props;
	const [value, setValue] = useState<number>(5);
	const [timerId, setTimerId] = useState<number | undefined>(undefined);

	const onClickButton = () => {
		setIsTimerClicked(true);
		start();
	}

	const start = () => {
		setValue(5);
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

	const buttonValue = isTimerClicked ? value : "START";

	useEffect(() => {
		if (isTimerClicked && value === 0) {
			stop();
		}
	}, [value, isTimerClicked, stop]);

	return (
		<button
			className={`${s.timerShape} ${timerClassName}`}
			disabled={!!timerId}
			onClick={onClickButton}>
			{buttonValue}
		</button>
	)
}