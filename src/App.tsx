import './App.css';
import { Block } from './components/Block/Block';
import { Timer } from './components/Timer/Timer';

function App() {
	const timerClassName = {
		bottom: 0,
		left: "50%",
		position: "absolute"
	}

	const blockOneClass = {
		color: "white"
	}

	const blockTwoClass = {
		color: "white"
	}



	return (
		<div className="App">
			<div className="blocksContainer">
				<Block
					blockTitle={1}
					blockClass={blockOneClass} />
				<Block
					blockTitle={2}
					blockClass={blockTwoClass} />
			</div>
			<Timer timerClassName={timerClassName} />
		</div>
	);
}

export default App;