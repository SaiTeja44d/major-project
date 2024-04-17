import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { teamMembers } from "@/helpers/constants";
import img1 from "../../public/dp.jpg";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const page = () => {
	return (
		<div className="flex flex-col justify-center items-center md:p-20 font-mono visible w-full h-full">
			<div className=" max-md:text-sm max-lg:w-[85%] font-semibold flex flex-col gap-5 justify-center items-start md:p-20 md:pt-14 mt-20 md:mt-2 text-yellow-800">
				<div className=" text-4xl font-semibold  text-y-dark w-full text-center">
					ABOUT US
				</div>

				<p className=" font-semibold ">
					Welcome to the Department of Electronics and Communication Engineering
					at Vignan’s Institute of Information Technology (A), Visakhapatnam!
					<br />
					Our team, consisting of Batch B9 students under the guidance of  <b>Mr. K.
					Chaitanya</b>, Assistant Professor, embarked on an innovative project
					aimed at revolutionizing urban lighting infrastructure. Our project,
					titled "Smart Fault Detection and Maintenance for IoT-Based Street
					Lighting Systems," addresses the challenges faced by traditional
					street lighting systems by integrating cutting-edge Internet of Things
					(IoT) technology.
				</p>

				<h2 className="text-y-dark font-semibold text-2xl">Our Team</h2>
				<div className="flex flex-col w-full items-center justify-center">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 w-full place-items-center">
						{teamMembers.map((member, index) => (
							<div
								key={index}
								className="bg-white rounded-xl custom-shadow p-5 flex flex-col items-center w-60"
							>
								<div className="w-32 h-32 rounded-full mb-4 overflow-hidden">
									<Image
										src={member.image}
										alt={member.name}
										className="transition-all ease-in-out duration-150 w-32 h-32 rounded-full hover:scale-110"
										width={600}
										height={600}
									/>
								</div>
								<h2 className="text-xl font-semibold">{member.name}</h2>
								<p className="text-sm text-gray-500 mb-2">{member.role}</p>
								<div className="flex gap-4 items-center text-black">
									<a
										href={`mailto:${member.socialMedia.gmail}`}
										target="_blank"
										rel="noopener noreferrer"
									>
										<BiLogoGmail className="w-6 h-6 transition-all ease-in-out duration-150 hover:scale-110" />
									</a>
									<a
										href={member.socialMedia.linkedin}
										target="_blank"
										rel="noopener noreferrer"
									>
										<FaLinkedin className="w-5 h-5 transition-all ease-in-out duration-150 hover:scale-110" />
									</a>
								</div>
							</div>
						))}
					</div>
				</div>

				<h2 className="text-y-dark font-semibold text-2xl">Introduction</h2>
				<p className=" font-semibold ">
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

				<h2 className="text-y-dark font-semibold text-2xl">Objectives</h2>
				<p className=" font-semibold ">Our primary objectives include:</p>
				<ul className=" font-semibold list-disc list-inside">
					<li className=" font-semibold ">
						Development of an IoT-integrated sensor network implementation.
					</li>
					<li className=" font-semibold ">
						Integration of automated maintenance procedures and protocols.
					</li>
					<li className=" font-semibold ">
						Establishment of a web-based management system.
					</li>
					<li className=" font-semibold ">
						Optimization of energy consumption and sustainability.
					</li>
				</ul>

				{/* <h2 className="text-y-dark font-semibold text-2xl">Approach</h2>
				<p className=" font-semibold ">
					We utilize a combination of advanced sensors, including MQ-2, MQ-4,
					MQ-6, MQ-9, and DHT-11, integrated with ESP32 microcontroller, to
					monitor various parameters such as gas concentrations, temperature,
					and humidity. By processing data in real-time, our system can detect
					deviations from normal operating conditions and trigger alerts for
					proactive fault identification.
				</p> */}

				
				<h2 className="text-y-dark font-semibold text-2xl">Contact Us</h2>
				<p className=" font-semibold ">
					For inquiries or collaborations, please reach out to us at
					20l31a0478@vignaniit.edu.in.
				</p>

				<p className=" font-semibold ">
					Join us in our journey towards creating smarter, more sustainable
					urban environments through innovative technology solutions!
				</p>
			</div>
		</div>
	);
};

export default page;
