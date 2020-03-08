import React, { useState, useEffect } from 'react';

//Helper Function:
//**DO NOT USE IN PRODUCTION
const getStateFromLocalStorage = () => {
	const storage = localStorage.getItem('counterStorage');
	console.log(storage);

	if (storage) return JSON.parse(storage).count;
	return 0;
};

const storeStateInLocalStorage = count => {
	localStorage.setItem('counterStorage', JSON.stringify({ count }));
	console.log(localStorage);
};

const useLocalStorage = (initialState, key) => {
	const get = () => {
		const storage = localStorage.getItem(key);
		console.log(localStorage, storage);
		if (storage) return JSON.parse(storage).value;
		return initialState;
	};

	const [value, setValue] = useState(get());

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify({ value }));
	}, value);

	return [value, setValue];
};

const Counter = ({ max, step }) => {
	const [count, setCount] = useLocalStorage(0, 'count');

	const increment = () => setCount(c => (c >= max ? c : c + step));
	const decrement = () => setCount(count - 1);
	const reset = () => setCount(0);

	useEffect(() => {
		document.title = `Counter: ${count}`;
	}, [count]);

	useEffect(() => {
		storeStateInLocalStorage(count);
	}, [count]);

	return (
		<div className="Counter">
			<p className="count">{count}</p>
			<section className="controls">
				<button onClick={increment}>Increment</button>
				<button onClick={decrement}>Decrement</button>
				<button onClick={reset}>Reset</button>
			</section>
		</div>
	);
};

export default Counter;
