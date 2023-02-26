import React from "react";
import "./Header.scss";

const Header = () => {
	return (
		<header className="hero_section" id="header">
			<h5 data-aos="fade-up" data-aos-delay="800" data-aos-duration="700">
				Hello there! My name is
			</h5>
			<h1 data-aos="fade-up" data-aos-delay="900" data-aos-duration="700">
				JAKUB ZOLKOS
			</h1>
			{/* <h1
				data-aos="fade-up"
				data-aos-delay="1000"
				data-aos-duration="700"
			>
				JAKUB ZOLKOS
			</h1> */}
			<p data-aos="fade-up" data-aos-delay="1100" data-aos-duration="700">
				I am a computer engineering student specializing in backend development and data analysis. 
			</p>
			<div
				className="button flex bg-none"
				data-aos="fade-up"
				data-aos-delay="1200"
				data-aos-duration="700"
			>
				<a href='#work' className="bg-none"><button className = 'mr-5 text-white bg-[#F92672] border-[#F92672]'>MY WORK</button></a>
				<a href='#contact'className="bg-none"><button className = 'text-[#F92672] hover:text-white border-[#F92672]'>CONTACT ME</button></a>
			</div>
		</header>
	);
};

export default Header;
