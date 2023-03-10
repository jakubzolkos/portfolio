import React from "react";
import useScroll from "../../hooks/useScroll";
import "./Navbar.scss";
import resume from "../../assets/jakub_zolkos_resume.pdf"
import logo from "../../../public/svg/logo.svg"

const Navbar = () => {
	const { scrollY, scrollDirection } = useScroll();

	const [mobileNav, setMobileNav] = React.useState(false);

	return (
		<>
			<nav
				className={
					scrollY >= 30
						? scrollDirection === "down"
							? "navbar active"
							: "navbar active"
						: "navbar" 
				}
			>
				<div
					className="left bg-none"
					data-aos="zoom-in"
					data-aos-duration="700"
				>
					<a href="#header"><img className = "bg-none" src={logo} alt=""/></a>
				</div>

				<div className="right bg-none">
					<ul className="bg-none">
						<li data-aos="fade-down" data-aos-duration="700" className="bg-none">
							<a href="#header">
								<span></span>{"<"}home{"/>"}
							</a>
						</li>
						<li
							data-aos="fade-down"
							data-aos-delay="400"
							data-aos-duration="700"
							className="bg-none"
						>
							<a href="#about">
								<span></span>{"<"}about{"/>"}
							</a>
						</li>
						<li
							data-aos="fade-down"
							data-aos-delay="500"
							data-aos-duration="700"
							className="bg-none"
						>
							<a href="#work">
								<span></span>{"<"}work{"/>"}
							</a>
						</li>
						<li
							data-aos="fade-down"
							data-aos-delay="600"
							data-aos-duration="700"
							className="bg-none"
						>
							<a href="#contact">
								<span></span>{"<"}contact{"/>"}
							</a>
						</li>
					</ul>

					<div
						className="resume tablet-lg:hidden"
						data-aos="fade-down"
						data-aos-delay="700"
						data-aos-duration="700"
					>
						<a href={resume} target="_blank" without rel="noopener noreferrer">Resume</a>
					</div>
				</div>

				<div className="mobile-nav">
					<button
						className="mobile-nav-toggle"
						onClick={() => setMobileNav(true)}
					>
						<svg viewBox="0 0 100 80" width="40" height="40">
							<rect fill="#F92672" width="100" height="8"></rect>
							<rect
								fill="#F92672"
								y="30"
								width="100"
								height="8"
							></rect>
							<rect
								fill="#F92672"
								y="60"
								width="100"
								height="8"
							></rect>
						</svg>
					</button>
				</div>
			</nav>

			<aside
				className={mobileNav ? "mobile-navbar active" : "mobile-navbar"}
			>
				<ul className="bg-none">
					<li className="bg-none">
						<a className='bg-none' href="#header">
							<span></span>Home
						</a>
					</li>
					<li className="bg-none">
						<a className='bg-none' href="#about">
							<span></span>About
						</a>
					</li>
					<li className="bg-none">
						<a className='bg-none' href="#work">
							<span></span>Work
						</a>
					</li>
					<li className="bg-none">
						<a className='bg-none' href="#contact">
							<span></span>Contact
						</a>
					</li>
				</ul>

				{/* <div className="resume">
					<a href="/">Resume</a>
				</div> */}

				<button
					className="close-menu"
					onClick={() => setMobileNav(false)}
				>
					<svg
						viewPort="0 0 12 12"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
					>
						<line
							x1="1"
							y1="25"
							x2="25"
							y2="1"
							stroke="#F92672"
							stroke-width="3"
						/>
						<line
							x1="1"
							y1="1"
							x2="25"
							y2="25"
							stroke="#F92672"
							stroke-width="3"
						/>
					</svg>
				</button>
			</aside>
		</>
	);
};

export default Navbar;
