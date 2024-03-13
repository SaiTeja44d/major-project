"use client";
import NavBar from "@/components/NavBar";
import React from "react";
import Image from "next/image";
import img1 from "../public/wp1.jpg";
import HomeSlider from "@/components/HomeSlider";

const HomePage = () => {
	return (
		<div className="font-mono visible w-full min-h-lvh max-h-full ">
			<div className="w-full h-full flex flex-col items-center ">
				<div className="text-2xl md:text-3xl text-orange-500 font-bold mt-32 text-center">
					Welcome to Smart Street Lighting Solutions
				</div>
				<div className="w-[90%] md:w-[30%] my-5">
					<HomeSlider />
				</div>
				<div className="w-[90%] md:w-[80%] max-md:text-sm text-yellow-800">
					<div className="mb-8">
						<h2 className="text-2xl mb-5 text-y-dark  font-bold">
							Our Mission
						</h2>
						<p className="font-semibold">
							In modern cities, street lighting is crucial for safety and energy
							efficiency. However, traditional systems often face issues like
							delayed maintenance and wasted resources due to undetected faults.
							Our project focuses on using IoT technology to solve these
							problems. By installing sensors on streetlights and analyzing data
							in real-time, we can quickly detect issues like broken bulbs or
							power problems. This means maintenance teams can be alerted right
							away, leading to faster repairs and less downtime. Plus, by
							predicting when maintenance is needed, we can save money and make
							the system more reliable. In short, our Smart Fault Detection
							system makes street lighting smarter, safer, and more efficient
							for everyone.
						</p>
					</div>
					<div className="mb-8">
						<h2 className="text-2xl mb-5 text-y-dark  font-bold">What We Do</h2>
						<p className="font-semibold">
							We specialize in developing IoT-based solutions for fault
							detection and maintenance in street lighting systems. Our approach
							involves the deployment of smart sensors, controllers, and
							communication devices within each streetlight, enabling
							comprehensive monitoring and control.
						</p>
					</div>
					<div className="mb-8">
						<h2 className="text-2xl mb-5 text-y-dark  font-bold">
							Our Project: Smart Fault Detection and Maintenance
						</h2>
						<p className="font-semibold">
							Our flagship project focuses on Smart Fault Detection and
							Maintenance for IoT-Based Street Lighting Systems. By harnessing
							the power of IoT, we aim to transform traditional maintenance
							practices into proactive, automated procedures. Through real-time
							data collection and analysis, our system detects anomalies and
							triggers alerts for prompt intervention, minimizing downtime and
							reducing operational costs.
						</p>
					</div>
					<div className="mb-20">
						<h2 className="text-2xl mb-5 text-y-dark  font-bold">
							Join Us in Building Smarter Cities
						</h2>
						<p className="font-semibold">
							Join us in our journey to build smarter, more sustainable cities.
							Whether you are a municipality looking to upgrade your street
							lighting infrastructure or a technology enthusiast passionate
							about IoT solutions, we invite you to explore our website and
							learn more about our projects and initiatives.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
