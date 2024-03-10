import NavBar from "@/components/NavBar";
import Link from "next/link";
import React from "react";

const page = () => {
	return (
		<div className=" font-semibold flex flex-col justify-center items-center p-20 font-mono visible w-full h-full bg-gradient-to-t from-yellow-100 via-white to-yellow-100">
			<NavBar />
			<div className=" font-semibold flex flex-col gap-5 justify-center items-start bg-white rounded-lg custom-shadow shadow-gray-500 p-20 mt-10">
				<div className=" text-4xl font-semibold  text-y-dark w-full text-center">
					ABOUT US
				</div>

				<p className="text-gray-500 font-semibold ">
					Welcome to the Department of Electronics and Communication Engineering
					at Vignan’s Institute of Information Technology (A), Visakhapatnam!
					<br />
					Our team, consisting of Batch B9 students under the guidance of Mr. K.
					Chaitanya, Assistant Professor, embarked on an innovative project
					aimed at revolutionizing urban lighting infrastructure. Our project,
					titled "Smart Fault Detection and Maintenance for IoT-Based Street
					Lighting Systems," addresses the challenges faced by traditional
					street lighting systems by integrating cutting-edge Internet of Things
					(IoT) technology.
				</p>

				<h2 className="font-semibold text-2xl">Introduction</h2>
				<p className="text-gray-500 font-semibold ">
					In modern cities, street lighting is crucial for safety and energy
					efficiency. However, traditional systems often face issues like
					delayed maintenance and wasted resources due to undetected faults. Our
					project focuses on using IoT technology to solve these problems. By
					installing sensors on streetlights and analyzing data in real-time, we
					can quickly detect issues like broken bulbs or power problems. This
					means maintenance teams can be alerted right away, leading to faster
					repairs and less downtime. Plus, by predicting when maintenance is
					needed, we can save money and make the system more reliable. In short,
					our Smart Fault Detection system makes street lighting smarter, safer,
					and more efficient for everyone.
				</p>

				<h2 className=" font-semibold text-2xl">Objectives</h2>
				<p className="text-gray-500 font-semibold ">
					Our primary objectives include:
				</p>
				<ul className="text-gray-500 font-semibold list-disc list-inside">
					<li className="text-gray-500 font-semibold ">
						Development of an IoT-integrated sensor network implementation.
					</li>
					<li className="text-gray-500 font-semibold ">
						Integration of automated maintenance procedures and protocols.
					</li>
					<li className="text-gray-500 font-semibold ">
						Establishment of a web-based management system.
					</li>
					<li className="text-gray-500 font-semibold ">
						Optimization of energy consumption and sustainability.
					</li>
					<li className="text-gray-500 font-semibold ">
						Fault detection and localization.
					</li>
					<li className="text-gray-500 font-semibold ">
						Predictive maintenance.
					</li>
					<li className="text-gray-500 font-semibold ">
						Remote monitoring and control.
					</li>
					<li className="text-gray-500 font-semibold ">
						Ensuring communication reliability.
					</li>
					<li className="text-gray-500 font-semibold ">
						Ensuring data security, privacy, and cost optimization.
					</li>
				</ul>

				<h2 className=" font-semibold text-2xl">Approach</h2>
				<p className="text-gray-500 font-semibold ">
					We utilize a combination of advanced sensors, including MQ-2, MQ-4,
					MQ-6, MQ-9, and DHT-11, integrated with ESP32 microcontroller, to
					monitor various parameters such as gas concentrations, temperature,
					and humidity. By processing data in real-time, our system can detect
					deviations from normal operating conditions and trigger alerts for
					proactive fault identification.
				</p>

				<h2 className=" font-semibold text-2xl">Accomplishments</h2>
				<ul className="text-gray-500 font-semibold list-disc list-inside">
					<li className="text-gray-500 font-semibold ">
						Software simulation using Proteus software for system validation.
					</li>
					<li className="text-gray-500 font-semibold ">
						Acquired necessary hardware components and completed required
						connections.
					</li>
					<li className="text-gray-500 font-semibold ">
						Developed code to process sensor data and trigger alerts.
					</li>
					<li className="text-gray-500 font-semibold ">
						Conducted simulations to demonstrate system functionality.
					</li>
				</ul>

				<h2 className=" font-semibold text-2xl">Future Work</h2>
				<p className="text-gray-500 font-semibold ">
					Our future work involves:
				</p>
				<ul className="text-gray-500 font-semibold list-disc list-inside">
					<li className="text-gray-500 font-semibold ">
						Integrating the ESP32 microcontroller with IoT platforms such as
						IFTTT and Ubidots for receiving message alerts.
					</li>
					<li className="text-gray-500 font-semibold ">
						Enhancing communication reliability and security.
					</li>
					<li className="text-gray-500 font-semibold ">
						Implementing predictive maintenance algorithms for proactive fault
						mitigation.
					</li>
				</ul>

				<h2 className=" font-semibold text-2xl">Contact Us</h2>
				<p className="text-gray-500 font-semibold ">
					For inquiries or collaborations, please reach out to us at
					20l31a0478@vignaniit.edu.in.
				</p>

				<p className="text-gray-500 font-semibold ">
					Join us in our journey towards creating smarter, more sustainable
					urban environments through innovative technology solutions!
				</p>
			</div>
		</div>
	);
};

export default page;
