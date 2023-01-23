import React from "react";
import "./Header.scss";

const Header = () => {
	return (
		<header className="hero_section">
			<h5 data-aos="fade-up" data-aos-delay="800" data-aos-duration="700">
				Hello there! My name is
			</h5>
			<h1 data-aos="fade-up" data-aos-delay="900" data-aos-duration="700">
				Jakub Zolkos
			</h1>
			<h1
				data-aos="fade-up"
				data-aos-delay="1000"
				data-aos-duration="700"
			>
				BACKEND DEVELOPER
			</h1>
			<p data-aos="fade-up" data-aos-delay="1100" data-aos-duration="700">
				I'm a dedicated and passionate backend and AI developer with a sense of creative design.
			</p>
			<div
				className="button flex bg-none"
				data-aos="fade-up"
				data-aos-delay="1200"
				data-aos-duration="700"
			>
				<a href='#work' className="bg-none"><button className = 'mr-5 text-white bg-[#F92672] border-[#F92672]'>See My Work! </button></a>
				<a href='#contact'className="bg-none"><button className = 'text-white'>Contact Me</button></a>
			</div>
		</header>
	);
};

export default Header;
