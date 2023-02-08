import React from "react";
import useScroll from "../../hooks/useScroll";
import "./Navbar.scss";
import resume from "../../assets/jakub_zolkos_resume.pdf"

const Logo = () => {
	return (
		<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100" height="100"><path fill="#F92672" d="m46.63 48.077-11.422 6.527v3.853l3.362 1.92 11.427-6.529 11.43 6.529 3.368-1.924v-3.848l-11.426-6.524V35.02l-3.37-1.925-3.369 1.925v13.056z"/><path fill="#3A3C4E" d="M50 10 15 30v40l35 20 34.99-19.994.01-.016V30L50 10zm0 7.699 24.891 14.22-6.732 3.849L50 25.396 31.846 35.771l-6.739-3.852L50 17.699zm-3.37 62.678L21.734 66.152V37.691l6.734 3.849v20.761L46.63 72.68v7.697zm-11.422-21.92V41.546l14.791-8.451 14.796 8.451v16.907L50 66.904l-14.792-8.447zm18.161 21.92V72.68l18.16-10.375V41.54l6.734-3.849v28.461h.002L53.369 80.377z"/></svg>
	);
};


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
					<a href="#header"><img className = "bg-none"alt=""/><Logo/></a>
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
