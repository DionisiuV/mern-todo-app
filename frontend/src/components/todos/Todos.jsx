import React, { useState } from 'react';
import AddTodo from './AddTodo';
import ListTodos from './ListTodos';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function Todos() {
	const [ todo, setTodo ] = useState({
		name: '',
		isComplete: false
	});

	const auth = useSelector((state) => state.auth);
	if (!auth._id) return <Navigate to="/signin" />;

	return (
		<div>
			<AddTodo todo={todo} setTodo={setTodo} />
			<ListTodos todo={todo} setTodo={setTodo} />
		</div>
	);
}
