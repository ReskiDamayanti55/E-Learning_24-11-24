import React from 'react';
import Hero from './components/Hero/Hero';
import Service from './components/Service/Service';
import Banner from './components/Banner/Banner';

const App = () => {
	return (
		<main className="overflow-x-hidden bg-white text-dark">
			<Hero />
			<Service />
			<Banner />
		</main>
	);
};

export default App;
