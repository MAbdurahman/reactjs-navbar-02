import React from 'react';
import Navbar from './../components/Navbar';
import ScrollTopButton from './../components/ScrollTopButton';
import Home from './../pages/Home';
import About from './../pages/About';
import Skills from './../pages/Skills';
import Portfolio from './../pages/Portfolio';
import Contact from './../pages/Contact';

function App() {
	return (
		<div id='app'>
			<Navbar />
			<ScrollTopButton />
			<Home />
			<About />
			<Skills />
			<Portfolio />
			<Contact />
		</div>
	);
}

export default App;
