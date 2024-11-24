import React from 'react';

// icons
import { IoMdMenu } from 'react-icons/io';

const NavMenuBar = [
	{
		id: 1,
		title: 'Home',
		path: '/',
	},
	{
		id: 2,
		title: 'Service',
		path: '/',
	},
	{
		id: 3,
		title: 'About Us',
		path: '/',
	},
	{
		id: 4,
		title: 'Our Team',
		path: '/',
	},
	{
		id: 5,
		title: 'Contact Us',
		path: '/',
	},
];

const Navbar = () => {
	return (
		<nav>
			<div className="container py-10 flex justify-between items-center">
				{/* Logo section */}
				<div>
					<h1 className="font-bold text-2xl">The Coding Journey</h1>
				</div>
				{/* Menu section */}
				<div className="hidden lg:block">
					<ul className="flex items-center gap-3 ">
						{NavMenuBar.map(item => {
							return (
								<li key={item.id}>
									<a
										href={item.path}
										className="inline-block py-2 px-3 hover:text-secondary relative group"
									>
										<div className="w-2 h-2 bg-secondary absolute mt-2 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
										{item.title}
									</a>
								</li>
							);
						})}
						<button className="primary-btn">Sign In</button>
					</ul>
				</div>
				{/* Mobile Hamburger menu section */}
			</div>
		</nav>
	);
};

export default Navbar;