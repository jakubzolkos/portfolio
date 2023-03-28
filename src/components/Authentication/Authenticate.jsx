import React from "react"
import Login from "./Login"
import Signup from "./Signup"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Authentication = () => {
	return (
		<div className="max-w-md w-full space-y-8 mt-[100px]">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					</Routes>
				</BrowserRouter>
      	</div>
	)
}

export default Authentication;