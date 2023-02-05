import React from "react";
import "./Work.scss";

const ExternalIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="feather feather-external-link"
		>
			<title>External Link</title>
			<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
			<polyline points="15 3 21 3 21 9"></polyline>
			<line x1="10" y1="14" x2="21" y2="3"></line>
		</svg>
	);
};

const GithubIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			viewBox="0 0 26 26"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="feather feather-github mt-1"
		>
			<title>GitHub</title>
			<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
		</svg>
	);
};

const PopUp = () => {
	return (
		<div>
		  <button onClick={() => this.setState({ showVideo: true })}>
			Show Video
		  </button>
		  {this.state.showVideo ? (
			<div className="fixed top-0 left-0 w-full h-full bg-black">
			  <video src={videoUrl} />
			</div>
		  ) : null}
		</div>
	  );
}


const Work = () => {
	return (
		<section className="work" id="work">
			<div className="container">
				<h2 data-aos="fade-up" data-aos-duration="700">
					Personal Projects
				</h2>

				<ul className="inner">

				<li
						className="work-item"
						data-aos="fade-up"
						data-aos-duration="700"
					>
						<div className="project_content bg-none">
							<div className="bg-none">

								<h3 className="project_title bg-none">
									<a href="" target="_blank" className="bg-none">
										DrunkAPI
									</a>
								</h3>
								<div className="project_desc bg-[#16171d] bg-opacity-80 bg-none">
									<p className="bg-none">
										Partying on a Friday night? DrunkAPI is a web app where artifficial intelligence checks whether you are sober or had
										a little to many drinks, solely based on the voice in the uploaded recording. 
									</p>
									<div className="odd_links flex justify-end bg-none">
									<a href="" target="_blank" className="text-[#F92672] hover:text-white border-[#F92672]">
										DEMO
										<ExternalIcon/>
									</a>
									<a href="" target="_blank" className="ml-3 hover:border-[#F92672] text-white">
										CODE
										<GithubIcon />
									</a>
									</div>
								</div>
								<ul className="project_techs bg-none">
									<li>FastAPI</li>
									<li>React</li>
									<li>TensorFlow</li>
									<li>PostgreSQL</li>
								</ul>
							
							</div>
						</div>
						<div className="project_image">
							<a href="" target="_blank">
								<div className="img">
									<img src="/images/work1.png" alt="" />
								</div>
							</a>
						</div>
					</li>

					<li
						className="work-item"
						data-aos="fade-up"
						data-aos-duration="700"
					>
						<div className="project_content bg-none">
							<div className="bg-none">

								<h3 className="project_title bg-none">
									<a href="" target="_blank" className="bg-none">
										E-Commerce Product API
									</a>
								</h3>
								<div className="project_desc bg-[#16171d] bg-opacity-80 bg-none">
									<p className="bg-none">
										A custom product API for a dropshipping store created with Django REST framework.
									</p>
									<div className="flex bg-none">
									<a href="" target="_blank" className="text-[#F92672] hover:text-white border-[#F92672]">
										DEMO
										<ExternalIcon/>
									</a>
									<a href="" target="_blank" className="ml-3 hover:border-[#F92672] text-white">
										CODE
										<GithubIcon />
									</a>
									</div>
								</div>
								<ul className="project_techs bg-none">
									<li>Django</li>
									<li>JavaScript</li>
									<li>CSS</li>
									<li>HTML</li>
						
								</ul>
							
							</div>
						</div>
						<div className="project_image">
							<a href="" target="_blank">
								<div className="img">
									<img src="/images/work1.png" alt="" />
								</div>
							</a>
						</div>
					</li>


					<li
						className="work-item"
						data-aos="fade-up"
						data-aos-duration="700"
					>
						<div className="project_content bg-none">
							<div className="bg-none">

								<h3 className="project_title bg-none">
									<a href="" target="_blank" className="bg-none">
										Portfolio 1.0
									</a>
								</h3>
								<div className="project_desc bg-[#16171d] bg-opacity-80 bg-none">
									<p className="bg-none">
										The first iteration of my personal portfolio. Inspired by Brittany Chiang's work. 
									</p>
									<div className="odd_links flex justify-end bg-none">
									<a href="" target="_blank" className="text-[#F92672] hover:text-white border-[#F92672]">
										DEMO
										<ExternalIcon/>
									</a>
									<a href="https://github.com/jakubzolkos/portfolio" target="_blank" className="ml-3 hover:border-[#F92672] text-white">
										CODE
										<GithubIcon />
									</a>
									</div>
								</div>
								<ul className="project_techs bg-none">
									<li>React</li>
									<li>TailwindCSS</li>
									<li>HTML</li>
						
								</ul>
							
							</div>
						</div>
						<div className="project_image">
							<a href="" target="_blank">
								<div className="img">
									<img src="/images/project_portfolio.png" alt="" />
								</div>
							</a>
						</div>
					</li>	

				<li
						className="work-item"
						data-aos="fade-up"
						data-aos-duration="700"
					>
						<div className="project_content bg-none">
							<div className="bg-none">

								<h3 className="project_title bg-none">
									<a href="" target="_blank" className="bg-none">
										Recog
									</a>
								</h3>
								<div className="project_desc bg-[#16171d] bg-opacity-80 bg-none">
									<p className="bg-none">
										An Android application using a camera to detect objects and utilizing text-to-speech to utter their name
										and position on the screen.
									</p>
									<div className="odd_links flex justify-start bg-none">
									<a href="" target="_blank" className="text-[#F92672] hover:text-white border-[#F92672]">
										DEMO
										<ExternalIcon/>
									</a>
									<a href="https://github.com/jakubzolkos/recog" target="_blank" className="ml-3 hover:border-[#F92672] text-white">
										CODE
										<GithubIcon />
									</a>
									</div>
								</div>
								<ul className="project_techs bg-none">
									<li>Flask</li>
									<li>Kotlin</li>
									<li>Google Vision API</li>
						
								</ul>
							
							</div>
						</div>
						<div className="project_image">
							<a href="" target="_blank">
								<div className="img">
									<img src="/images/recog.png" alt="" />
								</div>
							</a>
						</div>
					</li>		
				</ul>
			</div>
		</section>
	);
};

export default Work;
