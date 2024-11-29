import React from 'react';
import Hero from './components/Hero/Hero';
import Service from './components/Service/Service';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';

const App = () => {
	return (
		<main className="overflow-x-hidden bg-white text-dark">
			<Hero />
			<Service />
			<Banner />
			<Subscribe />
		</main>
	);
};

export default App;
