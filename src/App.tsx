import { useState } from 'react';
import { Container } from './components/Container/Container';
import { Timer } from './components/Timer/Timer';
import s from './App.module.css';

function App() {
	const [isTimerClicked, setIsTimerClicked] = useState<boolean>(false);

	return (
		<div>
			<Container isTimerClicked={isTimerClicked} />
			<Timer
				timerClassName={s.timerPosition}
				isTimerClicked={isTimerClicked}
				setIsTimerClicked={setIsTimerClicked} />
		</div>
	);
}

export default App;