import React from "react"

const Navbar = () => {
	return (
		<div className='w-full h-[75px] flex items-center justify-center'>
			<a href = ""> 
				<div className="flex justify-center items-center px-8">
					<img 
						alt=""
						className="h-16 w-16"
						src="https://cdn1.iconfinder.com/data/icons/leto-blue-files/64/file_document-56-512.png">	
					</img>
					<div className='flex items-center justify-center ml-2'>
						<h2 className="text-center text-3xl font-extrabold mr-1 text-blue-500">
							DOC
						</h2>
						<h2 className = "text-center text-3xl font-extrabold text-black">
							TOR
						</h2>
					</div>
				</div>
			</a>
		</div>
	)
}

export default Navbar