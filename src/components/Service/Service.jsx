import React from 'react';
import { TbWorld } from 'react-icons/tb';
import { CiMobile3 } from 'react-icons/ci';
import { RiComputerLine } from 'react-icons/ri';
import { IoMdHappy } from 'react-icons/io';
import { IoPulseOutline } from 'react-icons/io5';
import { BiSupport } from 'react-icons/bi';
import { motion } from 'framer-motion';

export const SlideLeft = delay => {
	return {
		initial: {
			opacity: 0,
			x: 50,
		},
		animate: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.2,
				delay: delay,
				ease: 'easeInOut',
			},
		},
	};
};

const ServiceData = [
	{
		id: 1,
		title: 'Web Development',
		link: '#',
		icon: <TbWorld />,
		delay: 0.2,
	},
	{
		id: 2,
		title: 'Mobile Development',
		link: '#',
		icon: <CiMobile3 />,
		delay: 0.3,
	},
	{
		id: 3,
		title: 'Software Development',
		link: '#',
		icon: <RiComputerLine />,
		delay: 0.4,
	},
	{
		id: 4,
		title: 'Satisfied Client',
		link: '#',
		icon: <IoMdHappy />,
		delay: 0.5,
	},
	{
		id: 5,
		title: 'SEO Optimization',
		link: '#',
		icon: <IoPulseOutline />,
		delay: 0.6,
	},
	{
		id: 5,
		title: '24/7 Support',
		link: '#',
		icon: <BiSupport />,
		delay: 0.7,
	},
];

const Service = () => {
	return (
		<section className="bg-white">
			<div className="container pb-14 pt-16">
				<h1 className="text-4xl font-bold text-left pb-10">
					Service we provide
				</h1>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
					{ServiceData.map(item => (
						<motion.div
							variants={SlideLeft(item.delay)}
							initial="initial"
							whileInView="animate"
							viewport={{ once: true }}
							className="bg-[#f4f4f4] rounded-2xl flex flex-col items-center justify-center gap-4 p-4 py-7 hover:bg-white hover:scale-110 hover:shadow-2xl duration-300"
						>
							<div className="text-4xl mb-4">{item.icon}</div>
							<h1 className="text-lg font-semibold text-center px-3">
								{item.title}
							</h1>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Service;
