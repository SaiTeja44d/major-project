"use client";
import NavBar from "@/components/NavBar";
import React from "react";
import { useStore } from "@/store/store";
const Card = ({ params }) => {
	const slug = params.slug;
	const { streetLightData } = useStore();
	const curStreetLight = streetLightData.find((data) => data.id === slug);

	return (
		<div className="font-mono visible w-full min-h-lvh max-h-full bg-gradient-to-t via-yellow-100 from-yellow-100 to-white">
			<div className="flex flex-col justify-center items-center p-4 pt-10 md:p-14 font-mono visible w-full h-full bg-gradient-to-t from-yellow-100 via-white to-yellow-100">
				<h1 className="text-3xl text-orange-500 font-bold text-center mt-10">
					STREET LIGHT DETAILS
				</h1>
				<div className="w-[90%] flex flex-col md:flex-row justify-center items-center gap-6 mb-10 mt-6">
					<div className=" font-semibold flex flex-col gap-2 justify-center items-start bg-white rounded-lg custom-shadow shadow-gray-500 p-4 md:p-14">
						<h1 className="text-lg font-bold">
							Street Light ID : {curStreetLight.id}
						</h1>

						<div className="font-semibold mt-2 md:mt-5">
							<h2 className="font-semibold text-2xl">Street Light Location</h2>
							<div className=" text-4xl font-semibold  text-y-dark w-full md:text-center">
								{curStreetLight.location}
							</div>
							<h2 className=" font-semibold text-2xl mt-1 md:mt-5">
								Light Status
							</h2>
							<p className="text-gray-500 font-semibold ">
								{curStreetLight.status}
							</p>
							<h2 className=" font-semibold text-2xl mt-1 md:mt-5">
								Relay Condition
							</h2>
							<p className="text-gray-500 font-semibold ">
								{curStreetLight.relayCondition}
							</p>
							<h2 className=" font-semibold text-2xl md:mt-5">Current Value</h2>
							<p className="text-gray-500 font-semibold ">
								{curStreetLight.current_value} Amps
							</p>
							<h2 className=" font-semibold text-2xl md:mt-5">Voltage Value</h2>
							<p className="text-gray-500 font-semibold ">
								{curStreetLight.voltage_value} Volts
							</p>
						</div>
					</div>
					<div className="custom-shadow shadow-gray-500 rounded-lg overflow-hidden max-md:w-[98%]">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.7212338046184!2d83.16118917494258!3d17.710624283232725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3968cb428b8087%3A0xaa3e198c43836a65!2sVignan&#39;s%20Institute%20Of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1713366788633!5m2!1sen!2sin"
							width="500"
							height="500"
							style={{ border: "0" }}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
