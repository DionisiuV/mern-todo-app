import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { Typography, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { signUp } from '../../store/actions/authActions';

const useStyles = makeStyles({
	formStyle: {
		margin: '0px auto',
		padding: '30px',
		borderRadius: '9px',
		boxShadow: '0px 0px 12px -3px #000000'
	},
	spacing: {
		maginTop: '20px'
	}
});

export default function SignUp() {
	const classes = useStyles();
	const [ user, setUser ] = useState({
		name: '',
		email: '',
		password: ''
	});

	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(signUp(user));

		setUser({
			name: '',
			email: '',
			password: ''
		});
	};

	if (auth._id) return <Navigate to="/" />;

	return (
		<div>
			<form noValidate autoComplete="off" className={classes.formStyle} onSubmit={handleSubmit}>
				<Typography variant="h5">signUp;</Typography>
				<TextField
					className={classes.spacing}
					id="enter-name"
					label="enterName"
					variant="outlined"
					value={user.name}
					onChange={(e) => setUser({ ...user, name: e.target.value })}
					fullWidth
				/>
				<TextField
					className={classes.spacing}
					id="enter-email"
					label="enterEmail"
					variant="outlined"
					fullWidth
					value={user.email}
					onChange={(e) => setUser({ ...user, email: e.target.value })}
				/>
				<TextField
					className={classes.spacing}
					id="enter-password"
					type="password"
					label="enterPassword"
					variant="outlined"
					fullWidth
					value={user.password}
					onChange={(e) => setUser({ ...user, password: e.target.value })}
				/>
				<Button variant="contained" color="primary" className={classes.spacing} type="submit">
					SignUp
				</Button>
			</form>
		</div>
	);
}
