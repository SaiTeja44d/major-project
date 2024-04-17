"use client";
import React, { useEffect } from "react";
import img1 from "../../public/sl2.webp";
import { useState, useRef } from "react";
import { GoTriangleDown } from "react-icons/go";
import { MdOutlineRefresh } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "../../store/store";
import { useRouter } from "next/navigation";

const Login = () => {
	const [name, setName] = useState("");
	const router = useRouter();
	const [password, setPassword] = useState("");
	const { isLoggedIn, loggedUserData, setIsLoggedIn, setLoggedUserData } =
		useStore();
	// useEffect(() => {
	// 	if (userStore.loggedIn) {
	// 		userStore.userLogin(false);
	// 	}
	// }, []);
	const handleNameChange = (event) => {
		setName(event.target.value);
	};
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch("https://niteowl-teja.netlify.app/api", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			mode: "cors",
			body: JSON.stringify({ name, password }),
		});
		const data = await response.json();
		if (data.success) {
			setLoggedUserData({ name, password });
			setIsLoggedIn(true);
			router.push("/dashboard");
		}

		else router.push("/home");
		

	};
	return (
		<div className="overflow-x-hidden font-sans h-svh w-full visible mt-14  bg-gradient-to-bl from-yellow-100 via-white to-yellow-100">
			<div className="flex sm:flex-row justify-center items-center m-[5%] mt-4 md:mt-10 flex-col">
				<div className="flex flex-col justify-center items-center rounded-lg mt-10 md:mt-6">
					<Image
						className="rounded-xl"
						src={img1}
						alt=""
						height={800}
						width={800}
					/>
				</div>
				<div className="bg-white h-1/3 max-md:w-[92%] w-96 -mt-[6%] sm:mt-0 lg:-ml-[4%] sm:-ml-[10%] rounded-lg border-2 border-y-dark p-4 md:p-10">
					<h1 className="text-xl md:text-2xl font-bold md:mb-2">Log In</h1>
					<p className="text-xs md:text-md text-gray-500 mb-2">
						Login To Check the status of Street Lights
					</p>
					<p className="md:mb-1 max-md:text-sm max-md:mt-4">Enter Your Name</p>
					<form>
						<div className="flex flex-row gap-2 mb-4 md:mb-3">
							<input
								className=" h-10 border border-gray-300 rounded-lg w-full p-2"
								type="text"
								value={name}
								onChange={handleNameChange}
								required
							></input>
						</div>
						<p className="max-md:text-sm">Enter Password</p>
						<div className="flex flex-row items-center gap-2">
							<input
								className=" h-10 border border-gray-300 rounded-lg w-full p-2"
								type="password"
								value={password}
								onChange={handlePasswordChange}
								required
							></input>
						</div>
						<div className="flex flex-row w-full md:gap-1 justify-end items-center max-md:mt-4">
							<button
								type="button"
								className="text-[8px] md:text-xs text-gray-500 hover:text-black max-md:px-1"
							>
								Forgot Password?
							</button>
						</div>
						<div className="flex flex-row justify-center w-full mt-5">
							{/* <Link href="/dashboard" to="/dashboard" onClick={handleSubmit}> */}
								<button onClick={handleSubmit} className="bg-y-dark hover:text-gray-200 px-10 text-white rounded-md h-12">
									Login
								</button>
							{/* </Link> */}
						</div>
					</form>
				</div>
			</div>
			<p className="sr-only">KGST</p>
		</div>
	);
};

export default Login;
