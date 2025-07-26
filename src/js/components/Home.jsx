import React, { useState } from "react";


const Home = () => {
	const [tasks, setTasks] = useState([]);
	const [inputTaskValue, setInputTaskValue] = useState('');

	const handleInputChange = (e) => {
		setInputTaskValue(e.target.value)
		console.log(e.target.value);
	}
	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			setTasks([...tasks, { id: Date.now(), text: inputTaskValue }]);
			setInputTaskValue('');
		}
	}

	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id))
	}
	return (
		<div className="container">
			<h1>Todos</h1>
			<input type="text" value={inputTaskValue} onChange={handleInputChange} onKeyDown={handleKeyDown} />
			
			<ol>{tasks.map((task) => (<li key={task.id}>
				{task.text}
				<button onClick={() => deleteTask(task.id)}>X</button>
			</li>))}</ol>

		</div>
	);
};

export default Home;