import { useEffect, useState } from "react"
import s from "./Timer.module.css"

type TimerPropsType = {
	timerClassName: any
}

export const Timer = ({ timerClassName }: TimerPropsType) => {
	const [value, setValue] = useState<number|string>("START");
	const [timerId, setTimerId] = useState<number | undefined>(undefined);

	const onClickButton = () => {
		typeof value === "string" ? start() : stop();
	}

	const start = () => {
		setValue(5);
		const timeId = +setInterval(() => {
			setValue((prevState: any) => {
				if (typeof prevState === "number") {
					return prevState - 1;
				}
				return prevState;
			});
		}, 1000);
		setTimerId(timeId)
	}

	const stop = () => {
		clearInterval(timerId);
		setTimerId(undefined)
		setValue("START");
	}

	useEffect(() => {
		if (typeof value === "number" && value === 0) {
			stop();
		}
	}, [value]);

	return (
		<div style={timerClassName}>
			<button
				className={s.timerShape}
				disabled={!!timerId}
				onClick={onClickButton}>
				{value}
			</button>
		</div>
	)
}