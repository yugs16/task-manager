import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './layouts/Home';

function App() {
	return (
		<>
			<NavBar></NavBar>
			<Home></Home>
		</>
	);
}

export default App;
