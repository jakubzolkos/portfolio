import React from "react";
import "./About.scss";
import Portrait from "../../assets/portrait.jpg"

const DownloadIcon = () => {
	return (
		<svg 
			className= "bg-none ml-3" 
			viewBox="0 0 16 16" 
			width="20px"
			height="20px"
			fill="none"
			stroke="currentColor"
			strokeWidth="0.8"
		> 
		
		<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" fill="white"></path> 
		<path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" fill="white"></path> </svg>
	);
};


const About = () => {
	return (
		<section className="about grid grid-rows-2" id="about">
			<div
				className="about_container"
				data-aos="fade-up"
				data-aos-duration="700"
			>
				<h2>About Me</h2>

				<div className="inner bg-none">
					<div className="about_text bg-none">
						<div className="bg-none">
							<p className="bg-none">
								My name is Jakub and I am a computer engineering junior at Boston University, concentrating in machine
								learning and statistics. I am passionate about API development and building web applications with Python and JavaScript. In my free time, I enjoy weightlifting
								and playing the piano :{")"}
							</p>
							<p className="bg-none">
								Currently, I am a software engineer at {" "}
								<a
									href="https://www.bu.edu/epic/"
									rel="noopener noreferrer"
									target="_blank"
								>
									Engineering Proudct Innovation Center
								</a>
								, a manufacturing
								facility of BU, where I'm responsible for developing a web application for 
								authorizing entry to the machine shop and maintaining student databases. 			
							</p>
							<p>
							I am actively searching for summer internship opportunities in web development or data science. Please feel 
							free to email me at zolkos@bu.edu or fill the contact form below!
							</p>
							<a href='#work' className="bg-none">
								<button className = 'text-white border-[#F92672] flex justify-center items-center'>
									Resume
									<DownloadIcon/>
							</button> </a>
							
						</div>
				
					</div>

					<div className="about_pic">
						<div className="wrapper">
							<img src={Portrait} alt="" />
						</div>
					</div>
				</div>

			</div>
		</section>
		
	);
};

export default About;
