import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './layouts/Home';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

const theme = createTheme({
	typography: {
		fontFamily: 'monospace',
	},
	components: {
		MuiUseMediaQuery: {
			defaultProps: {
				noSsr: true,
			},
		},
	},
});

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<NavBar></NavBar>
				<Home></Home>
			</ThemeProvider>
		</>
	);
}

export default App;
