import React from 'react'
import "./Footer.scss";

const Footer = () => {
  return (
        <div className="footer bg-black w-full h-[70px] justify-center items-center flex-col">
				<ul className="social-links">
					<li>
						<a href="https://github.com/jakubzolkos" target="_blank">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-github"
							>
								<title>GitHub</title>
								<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
							</svg>
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/jakubzolkos/" target="_blank">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-instagram"
							>
								<title>Instagram</title>
								<rect
									x="2"
									y="2"
									width="20"
									height="20"
									rx="5"
									ry="5"
								></rect>
								<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
								<line
									x1="17.5"
									y1="6.5"
									x2="17.51"
									y2="6.5"
								></line>
							</svg>
						</a>
					</li>
					<li>
						<a href="https://www.facebook.com/j.zolkos/" target="_blank">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 16 16"
								fill="none"
								stroke="currentColor"
								strokeWidth="1"
								
								className="feather feather-whatsapp"
							>
								<title>Facebook</title>
								<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
							</svg>
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/jakub-zolkos-20b0301b7/" target="_blank">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-linkedin"
							>
								<title>LinkedIn</title>
								<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
								<rect x="2" y="9" width="4" height="12"></rect>
								<circle cx="4" cy="4" r="2"></circle>
							</svg>
						</a>
					</li>
					
						
				</ul>
            
		</div>
  )
}

export default Footer