import { useState } from 'react';
import { Container } from './components/Container/Container';
import { Timer } from './components/Timer/Timer';
import s from './app.module.css';

function App() {
	const [isStartMovement, setIsStartMovement] = useState<boolean>(false);

	return (
		<div className={s.app}>
			<Container
				animationDuration={2}
				isStartMovement={isStartMovement} />
			<div className={s.timerPosition}>
				<Timer
					time={5}
					animationDuration={2}
					setIsStartMovement={setIsStartMovement} />
			</div>
		</div>
	);
}

export default App;