import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import { motion } from 'framer-motion';

const Footer = () => {
	return (
		<footer className="py-28 bg-[#f4f4f4]">
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="container"
			>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
					{/* first section */}
					<div className="space-y-4 max-w-[300px]">
						<h1 className="text-2xl font-bold">The Coding Journey</h1>
						<p className="text-dar2">
							TCJ is a platform dedicated to empowering aspiring developers.
							From beginner tutorials to advanced programming concepts, we
							provide a comprehensive learning experience designed to help you
							master coding skills, build projects, and launch you tech career.
						</p>
					</div>
					{/* second section */}
					<div className="grid grid-cols-2 gap-10">
						<div className="space-y-4">
							<h1 className="text-2xl font-bold">Courses</h1>
							<div className="text-dar2">
								<ul className="space-y-2 text-lg">
									<li className="cursor-pointer hover:text-secondary duration-200">
										Web Development
									</li>
									<li className="cursor-pointer hover:text-secondary duration-200">
										Software Development
									</li>
									<li className="cursor-pointer hover:text-secondary duration-200">
										App Development
									</li>
									<li className="cursor-pointer hover:text-secondary duration-200">
										E-Learning
									</li>
								</ul>
							</div>
						</div>
						<div className="space-y-4">
							<h1 className="text-2xl font-bold">Links</h1>
							<div className="text-dar2">
								<ul className="space-y-2 text-lg">
									<li className="cursor-pointer hover:text-secondary duration-200">
										Home
									</li>
									<li className="cursor-pointer hover:text-secondary duration-200">
										Service
									</li>
									<li className="cursor-pointer hover:text-secondary duration-200">
										About
									</li>
									<li className="cursor-pointer hover:text-secondary duration-200">
										Contact
									</li>
								</ul>
							</div>
						</div>
					</div>
					{/* third section */}
					<div className="space-y-4 max-w-[300px]">
						<h1 className="text-2xl font-bold">Get In Touch</h1>
						<div className="flex items-center">
							<input
								type="text"
								placeholder="Enter your email"
								className="p-3 rounded-s-lg bg-white w-full focus:ring-0 focus:outline-none placeholder:text-dar2"
							/>
							<button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">
								Go
							</button>
						</div>
						{/* social icons */}
						<div className="flex space-x-6 py-3">
							<a href="#">
								<FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
							</a>
							<a href="#">
								<FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
							</a>
							<a href="#">
								<TbWorld className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
							</a>
							<a href="#">
								<FaYoutube className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
							</a>
						</div>
					</div>
				</div>
			</motion.div>
		</footer>
	);
};

export default Footer;
