import React from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Loading from './components/Shared/Loading';
import LeftSide from './components/SideElement/LeftSide';
import RightSide from './components/SideElement/RightSide';
import Work from './components/Work/Work';

const App = () => {
	

	return (
		<>
		<Navbar />
		<LeftSide />
		<Header />
		<About />
		<Work />
		<Contact />
		<Footer/>
		</>
	);
};

export default App;
