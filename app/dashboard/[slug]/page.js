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
			<div className="flex flex-col justify-center items-center p-14 font-mono visible w-full h-full bg-gradient-to-t from-yellow-100 via-white to-yellow-100">
				<h1 className="text-3xl text-orange-500 font-bold text-center mt-10">
					STREET LIGHT DETAILS
				</h1>
				<div className=" font-semibold flex flex-col gap-2 justify-center items-start bg-white rounded-lg custom-shadow shadow-gray-500 p-14 mt-10">
					<h1 className="text-lg font-bold">
						Street Light ID : {curStreetLight.id}
					</h1>

					<div className="font-semibold  mt-5">
						<h2 className="font-semibold text-2xl">Street Light Location</h2>
						<div className=" text-4xl font-semibold  text-y-dark w-full text-center">
							{curStreetLight.location}
						</div>
						<h2 className=" font-semibold text-2xl mt-5">Light Status</h2>
						<p className="text-gray-500 font-semibold ">
							{curStreetLight.status}
						</p>
						<h2 className=" font-semibold text-2xl mt-5">Relay Condition</h2>
						<p className="text-gray-500 font-semibold ">
							{curStreetLight.relayCondition}
						</p>
						<h2 className=" font-semibold text-2xl mt-5">Current Value</h2>
						<p className="text-gray-500 font-semibold ">
							{curStreetLight.current_value} Amps
						</p>
						<h2 className=" font-semibold text-2xl mt-5">Voltage Value</h2>
						<p className="text-gray-500 font-semibold ">
							{curStreetLight.voltage_value} Volts
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
