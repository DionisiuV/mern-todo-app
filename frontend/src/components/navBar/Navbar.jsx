import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { AppBar, Typography, Toolbar, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { Link, useNavigate, Navigate } from 'react-router-dom';
import { signOut } from '../../store/actions/authActions';

const useStyles = makeStyles({
	root: {
		flexGrow: 1
	},
	linkStyle: {
		color: '#fafafa',
		textDecoration: 'none'
	},
	authButton: {}
});

export default function Navbar() {
	const classes = useStyles();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSignOut = () => {
		dispatch(signOut());

		navigate('/signin');
	};

	const auth = useSelector((state) => state.auth);

	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h4" className={classes.root}>
						<Link className={classes.linkStyle} to="/">
							toDoApp;
						</Link>
					</Typography>

					{auth._id ? (<>					<Typography variant="subtitle" className={classes.root}>
						Logged in as {auth.name}
					</Typography>
					<Button color="inherit" onClick={() => handleSignOut()}>
						SignOut
					</Button></>) : (<>					<Button color="inherit">
						<Link className={classes.linkStyle} to="/signin">
							SignIn
						</Link>
					</Button>
					<Button color="inherit">
						<Link className={classes.linkStyle} to="/signup">
							SignUp
						</Link>
					</Button></>)}


				</Toolbar>
			</AppBar>
		</div>
	);
}
