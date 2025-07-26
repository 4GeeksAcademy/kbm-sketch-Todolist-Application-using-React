import React, { useState } from "react";


const Home = () => {
	const [tasks, setTasks] = useState([]);
	const [inputTaskValue, setInputTaskValue] = useState('');

	const handleInputChange = (e) => {
		setInputTaskValue(e.target.value);
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter' && inputTaskValue.trim() !== '') {
			setTasks([...tasks, { id: Date.now(), text: inputTaskValue.trim() }]);
			setInputTaskValue('');
		}
	};

	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	return (
		<div className="container">
			<h1>Todos</h1>
			<input
				type="text"
				value={inputTaskValue}
				onChange={handleInputChange}
				onKeyDown={handleKeyDown}
				placeholder="What needs to be done?"
			/>
			<ol>
				{tasks.length === 0 ? (
					<li className="no-task">No tasks, add a task</li>
				) : (
					tasks.map((task) => (
						<li key={task.id} className="task-item">
							<span>{task.text}</span>
							<button onClick={() => deleteTask(task.id)} className="delete-btn">X</button>
						</li>
					))
				)}
			</ol>
		</div>
	);
};

export default Home;