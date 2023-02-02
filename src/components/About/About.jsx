import React, { useState } from "react";
import "./About.scss";
import Portrait from "../../assets/portrait.jpg"
import resume from "../../assets/jakub_zolkos_resume.pdf"


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

const FrontendIcon = () => {
	return (
		<svg className="bg-none" width="100px" height="100px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7.90451 6.92144C8.41341 6.45495 8.44779 5.66424 7.9813 5.15534C7.51481 4.64645 6.7241 4.61207 6.2152 5.07856L7.90451 6.92144ZM1.46194 11.1314L2.3066 12.0529L2.3066 12.0529L1.46194 11.1314ZM1.46194 11.8686L2.3066 10.9471L2.3066 10.9471L1.46194 11.8686ZM6.2152 17.9214C6.7241 18.3879 7.51481 18.3536 7.9813 17.8447C8.44779 17.3358 8.41341 16.545 7.90451 16.0786L6.2152 17.9214ZM6.2152 5.07856L0.617287 10.21L2.3066 12.0529L7.90451 6.92144L6.2152 5.07856ZM0.617287 12.79L6.2152 17.9214L7.90451 16.0786L2.3066 10.9471L0.617287 12.79ZM0.617287 10.21C-0.139356 10.9036 -0.139356 12.0964 0.617287 12.79L2.3066 10.9471C2.63087 11.2444 2.63087 11.7556 2.3066 12.0529L0.617287 10.21Z" fill="#a8b2d1"/>
<path d="M16.0557 16.0786C15.5468 16.545 15.5125 17.3358 15.9789 17.8447C16.4454 18.3536 17.2361 18.3879 17.745 17.9214L16.0557 16.0786ZM22.4983 11.8686L21.6537 10.9471L21.6537 10.9471L22.4983 11.8686ZM22.4983 11.1314L21.6537 12.0529L21.6537 12.0529L22.4983 11.1314ZM17.745 5.07856C17.2361 4.61207 16.4454 4.64645 15.979 5.15534C15.5125 5.66424 15.5468 6.45495 16.0557 6.92144L17.745 5.07856ZM17.745 17.9214L23.343 12.79L21.6537 10.9471L16.0557 16.0786L17.745 17.9214ZM23.343 10.21L17.745 5.07856L16.0557 6.92144L21.6537 12.0529L23.343 10.21ZM23.343 12.79C24.0996 12.0964 24.0996 10.9036 23.343 10.21L21.6537 12.0529C21.3294 11.7556 21.3294 11.2444 21.6537 10.9471L23.343 12.79Z" fill="#a8b2d1"/>
<path d="M15.2127 3.80317C15.3801 3.13343 14.9729 2.45476 14.3032 2.28732C13.6334 2.11989 12.9548 2.52709 12.7873 3.19683L15.2127 3.80317ZM8.78732 19.1968C8.61989 19.8666 9.02709 20.5452 9.69683 20.7127C10.3666 20.8801 11.0452 20.4729 11.2127 19.8032L8.78732 19.1968ZM12.7873 3.19683L8.78732 19.1968L11.2127 19.8032L15.2127 3.80317L12.7873 3.19683Z" fill="#a8b2d1"/>
</svg>
	);
}

const BackendIcon = () => {
	return (
		<svg className="bg-none" height="100px" width="100px"  xmlns="http://www.w3.org/2000/svg" 
	 viewBox="0 0 512 512" >

	<path d="M455.925,324.816v-0.305c-43.168,34.714-115.123,56.648-200,56.648c-74.15,0-138.432-16.743-182.279-44.12
		c-6.223-3.94-12.07-8.112-17.48-12.524v0.178c-0.076-0.062-0.162-0.119-0.24-0.182v92.043c0,52.626,89.717,95.445,200,95.445
		s200-42.819,200-95.445v-56.488l0.15-35.363C456.026,324.742,455.974,324.777,455.925,324.816z" fill = "#a8b2d1"/>
	<path d="M255.925,340.831c110.283,0,200-42.82,200-95.444v-5.188V201.87v-16.675l0.15-10.437
		c-0.049,0.039-0.102,0.074-0.15,0.113v-0.301c-43.168,34.714-115.123,56.648-200,56.648c-74.117,0-138.375-16.73-182.221-44.087
		c-6.244-3.952-12.111-8.137-17.539-12.562v0.182c-0.076-0.062-0.162-0.119-0.24-0.182v27.3v38.329v5.188
		C55.925,298.012,145.642,340.831,255.925,340.831z" fill = "#a8b2d1"/>
	<path d="M255.925,190.89c110.283,0,200-42.819,200-95.444c0-1.507-0.328-2.974-0.472-4.463
		c-0.836-8.539-3.844-16.81-9.098-24.622C420.507,27.918,344.952,0,255.925,0C166.898,0,91.343,27.918,65.497,66.36
		c-5.256,7.812-8.264,16.083-9.098,24.622c-0.147,1.488-0.475,2.956-0.475,4.463C55.925,148.07,145.642,190.89,255.925,190.89z" fill = "#a8b2d1"/>

</svg>
	);
}

const ToolsIcon = () => {
	return (
<svg className="bg-none" xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 399.997 399.997">

			<path d="M281.547,143.478c-0.456-2.581-2.917-4.305-5.501-3.851l-17.05,3.005c-2.047-4.803-4.662-9.302-7.764-13.418
				l11.139-13.272c0.809-0.965,1.201-2.211,1.094-3.466c-0.111-1.256-0.715-2.414-1.68-3.225l-14.913-12.514
				c-0.964-0.809-2.213-1.202-3.468-1.093c-1.254,0.109-2.413,0.714-3.224,1.678l-11.13,13.265c-4.566-2.326-9.45-4.123-14.57-5.306
				V87.969c0-2.624-2.125-4.751-4.748-4.751h-19.466c-2.622,0-4.748,2.127-4.748,4.751v17.312
				c-5.122,1.183-10.004,2.979-14.572,5.306l-11.128-13.265c-1.688-2.008-4.682-2.271-6.69-0.584l-14.913,12.513
				c-0.966,0.811-1.568,1.969-1.68,3.225c-0.107,1.255,0.284,2.501,1.094,3.466l11.138,13.272
				c-3.102,4.116-5.716,8.617-7.763,13.418l-17.05-3.005c-2.579-0.454-5.045,1.27-5.501,3.851l-3.381,19.173
				c-0.218,1.24,0.064,2.519,0.788,3.549c0.722,1.032,1.823,1.733,3.064,1.951l17.063,3.011c0.277,5.284,1.197,10.398,2.68,15.268
				l-14.994,8.657c-1.092,0.631-1.886,1.665-2.213,2.882c-0.325,1.219-0.154,2.514,0.475,3.604l9.733,16.86
				c0.63,1.092,1.667,1.886,2.885,2.212c0.403,0.109,0.816,0.163,1.229,0.163c0.826,0,1.645-0.216,2.373-0.638l15.009-8.664
				c3.533,3.776,7.518,7.127,11.868,9.967l-5.926,16.277c-0.43,1.184-0.375,2.489,0.158,3.631c0.533,1.142,1.496,2.022,2.68,2.455
				l18.294,6.658c0.524,0.19,1.075,0.286,1.625,0.286c0.686,0,1.371-0.149,2.005-0.444c1.142-0.532,2.025-1.496,2.456-2.681
				l5.925-16.278c2.54,0.307,5.127,0.469,7.75,0.469s5.21-0.162,7.75-0.469l5.926,16.278c0.432,1.185,1.313,2.146,2.455,2.681
				c0.636,0.295,1.318,0.444,2.007,0.444c0.549,0,1.101-0.097,1.623-0.286l18.295-6.658c1.185-0.433,2.146-1.313,2.681-2.457
				c0.532-1.142,0.588-2.445,0.157-3.629l-5.927-16.277c4.352-2.84,8.335-6.188,11.868-9.967l15.009,8.664
				c0.729,0.422,1.547,0.637,2.373,0.637c0.412,0,0.826-0.053,1.229-0.162c1.218-0.326,2.253-1.12,2.884-2.212l9.732-16.86
				c0.631-1.089,0.802-2.385,0.477-3.604c-0.327-1.217-1.123-2.253-2.213-2.882l-14.994-8.657c1.48-4.87,2.402-9.983,2.68-15.268
				l17.063-3.011c1.241-0.218,2.341-0.919,3.062-1.951c0.726-1.031,1.006-2.309,0.788-3.549L281.547,143.478z M200,193.117
				c-14.424,0-26.117-11.692-26.117-26.116c0-14.424,11.693-26.116,26.117-26.116s26.117,11.692,26.117,26.116
				C226.117,181.425,214.424,193.117,200,193.117z" fill = "#a8b2d1"/>
			<path d="M366.684,24.971H33.316C14.945,24.971,0,39.917,0,58.288V275.56c0,18.371,14.945,33.317,33.316,33.317h107.412
				l-20.387,44.955c-2.105,4.643-1.709,10.037,1.053,14.321c2.762,4.285,7.51,6.873,12.607,6.873h131.996c0,0,0.014,0,0.02,0
				c8.285,0,15-6.715,15-15c0-2.493-0.605-4.848-1.686-6.916l-20.062-44.233h107.412c18.371,0,33.316-14.946,33.316-33.317V58.288
				C400,39.917,385.055,24.971,366.684,24.971z M370,275.561c0,1.829-1.488,3.316-3.316,3.316H33.316
				c-1.828,0-3.316-1.487-3.316-3.316V58.288c0-1.829,1.488-3.317,3.316-3.317h333.367c1.828,0,3.316,1.488,3.316,3.317L370,275.561
				L370,275.561z" fill = "#a8b2d1"/>

</svg>
	);
}


const AboutSection = () => {
	return (
			<div className = "w-full h-[600px] bg-none">
	
				<div className="inner bg-none">
					<div className="about_text bg-none">
						<div className="bg-none">
							<p className="bg-none">
								My name is Jakub and I am a computer engineering junior at Boston University, concentrating in machine
								learning and statistics. I am passionate about API development and building web applications with Python and JavaScript. In my free time, I enjoy weightlifting
								and playing the piano.
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
								facility of BU, where I'm responsible for developing a professional web application for 
								authorizing entry to the machine shop and maintaining student databases. 			
							</p>
							<p>
							
							</p>
							<a className = "bg-none desktop-md:flex desktop-md:justify-center" href={resume} target="_blank" without rel="noopener noreferrer">
								<button className = 'text-white border-[#F92672] flex justify-center items-center'>
									DOWNLOAD RESUME
									<DownloadIcon/>
								</button>
							</a>
							
						</div>
				
					</div>

					<div className="about_pic">
						<div className="wrapper">
							<img src={Portrait} alt="" />
						</div>
					</div>
				</div>

		</div>		
	);
};

const Skills = () => {
	return (
	  <div className="w-full bg-none">
		<div className="grid grid-cols-3 gap-4 justify-center items-center bg-none">
		  <div className="bg-none border-r border-gray-200">
		  <div className="flex justify-center mb-5 bg-none"><BackendIcon/></div>
		  	<h1 className="flex justify-center text-[30px] font-bold mb-10 bg-none text-[#F92672]"> Backend </h1>
			<p className="text-center text-[23px] mb-2 bg-none">Django</p>
			<p className="text-center text-[23px] mb-2 bg-none">Flask</p>
			<p className="text-center text-[23px] mb-2 bg-none">FastAPI</p>
			<p className="text-center text-[23px] bg-none">Heroku</p>
		  </div>
		  <div className="bg-none border-r border-gray-200">
			<div className="flex justify-center mb-5 bg-none"><FrontendIcon/></div>
			<h1 className="flex justify-center text-[30px] font-bold mb-10 bg-none text-[#F92672]"> Frontend </h1>
			<p className="text-center text-[23px] mb-2 bg-none">React</p>
			<p className="text-center text-[23px] mb-2 bg-none">HTML/CSS</p>
			<p className="text-center text-[23px] mb-2 bg-none">JavaScript</p>
			<p className="text-center text-[23px] bg-none">TailwindCSS</p>
		  </div>
		  <div className="bg-none">
		  <div className="flex justify-center mb-5 bg-none"><ToolsIcon/></div>
		  	<h1 className="flex justify-center text-[30px] font-bold mb-10 bg-none text-[#F92672]"> Tools </h1>
			<p className="text-center text-[23px] mb-2 bg-none">Git</p>
			<p className="text-center text-[23px] mb-2 bg-none">Bash</p>
			<p className="text-center text-[23px] mb-2 bg-none">Docker</p>
			<p className="text-center text-[23px] bg-none">LINUX/Unix</p>
		  </div>
		</div>
	  </div>
	)
  }
  


function SelectionMenu() {
	const [selected, setSelected] = useState('about');
  
	const handleClick = (event) => {
	  setSelected(event.target.id);
	};
  
	return (
		<div
				className="about_container"
				data-aos="fade-up"
				data-aos-duration="700"
			>
	  <div className="justify-center bg-none">
		<div className="flex">
		  <button
			id="about"
			className={`flex justify-center items-center py-4 text-white w-1/3 hover:bg-[#F92672] hover:bg-opacity-70 transition duration-300 ${
			  selected === 'about' ? 'bg-[#F92672] text-white' : 'bg-gray-700'
			}`}
			onClick={handleClick}
		  >
			ABOUT
		  </button>
		  <button
			id="skills"
			className={`flex justify-center items-center px-4 py-3 text-white w-1/3 hover:bg-[#F92672] hover:bg-opacity-70 transition duration-300 ${
				selected === 'skills' ? 'bg-[#F92672] text-white' : 'bg-gray-700'
			  }`}
			onClick={handleClick}
		  >
			SKILLS
		  </button>
		  <button
			id="experience"
			className={`flex justify-center items-center px-4 py-3 text-white w-1/3 hover:bg-[#F92672] hover:bg-opacity-70 transition duration-300 ${
				selected === 'experience' ? 'bg-[#F92672] text-white' : 'bg-gray-700'
			  }`}
			onClick={handleClick}
		  >
			EXPERIENCE
		  </button>
		</div>
		<div className="py-4 mt-[100px] bg-none">
		  {selected === 'about' && <AboutSection/>}
		  {selected === 'skills' && <Skills/>}
		  {selected === 'experience' && <p>Experience content goes here</p>}
		</div>
	</div>
	</div>
	);
  }
  

const About = () => {
	return (
		<section className="about flex-col items-center max-w-[1000px] mx-auto">
			<div className="about_container" data-aos="fade-up" data-aos-duration="700">
				<h2>About Me</h2>
				<SelectionMenu/>
			</div>
		</section>
	);
};

export default About;
