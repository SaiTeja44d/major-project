"use client";
import NavBar from "@/components/NavBar";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import { getData } from "@/helpers/data";
import Link from "next/link";
import { useStore } from "@/store/store";
import { BsLightning } from "react-icons/bs";
import { TbCircuitBattery } from "react-icons/tb";
import { PiPowerBold } from "react-icons/pi";
import { MdPowerOff } from "react-icons/md";

const streetLightData = [
	{
		id: "SL001",
		location: "Main Street, City Center",
		status: "Working",
		current_value: 0.75,
		voltage_value: 220,
		is_on: true,
	},
	{
		id: "SL002",
		location: "Park Avenue, West End",
		status: "Faulty",
		current_value: 0,
		voltage_value: 0,
		is_on: false,
	},
	{
		id: "SL003",
		location: "Broadway, Downtown",
		status: "Working",
		current_value: 0.9,
		voltage_value: 230,
		is_on: true,
	},
	{
		id: "SL004",
		location: "Oak Street, Residential Area",
		status: "Working",
		current_value: 0.8,
		voltage_value: 225,
		is_on: true,
	},
];

const DashBoard = () => {
	const [data, setData] = useState([]);
	const { setStreetLightData } = useStore();
	useEffect(() => {
		const fetchData = async () => {
			const response = await getData();
			console.log(response);
			setData(response);
			setStreetLightData(response);
			data.forEach((d) => {
				if (d.status === "Faulty") {
					// alert(
					// 	"Faulty Street Light Detected : ID : " +
					// 		d.id +
					// 		" at " +
					// 		d.location +
					// 		" with current value " +
					// 		d.current_value +
					// 		" and voltage value " +
					// 		d.voltage_value
					// );
				}
			});
		};
		setInterval(fetchData, 30000);
	}, [data, setStreetLightData]);
	return (
		<div className="font-mono visible w-full min-h-lvh max-h-full bg-gradient-to-t via-yellow-50 from-yellow-100 to-white">
			<div className="w-full h-full flex flex-col items-center ">
				<div className="text-3xl text-orange-500 font-bold mt-32">
					DASHBOARD
				</div>
				<div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 lg:mt-20 mb-10">
					{streetLightData.map((sl) => {
						return (
							<div
								key={sl.id}
								className="w-full h-80 bg-white custom-shadow rounded-xl p-4 flex flex-col justify-between items-center"
							>
								<div
									className={`rounded-full h-20 w-20 p-2 ${
										sl.is_on ? "bg-green-500" : "bg-red-500"
									} flex items-center justify-center`}
								>
									{sl.is_on ? (
										<p className="text-2xl font-semibold text-white">
											<FaCheck />
										</p>
									) : (
										<p className="text-2xl font-semibold text-white">
											<MdOutlineClose />
										</p>
									)}{" "}
								</div>
								<h1 className="text-xl font-semibold">{sl.location}</h1>
								<div className="flex flex-col items-center gap-2">
									<h1 className="text-lg font-semibold">{sl.status}</h1>
									<div className="flex flex-col gap-2">
										<h1 className=" font-semibold flex w-full gap-2">
											<span className="flex items-center justify-between gap-2">
												Current <BsLightning />:  {sl.current_value} A
											</span>
										</h1>
										<h1 className=" font-semibold flex w-full gap-2">
											<span className="flex gap-2 items-center justify-between">
												Voltage <TbCircuitBattery />
											</span>
											:  {sl.voltage_value} V
										</h1>
									</div>
								</div>
								<div className="flex flex-row justify-between items-center w-full">
									<h1 className="text-lg font-semibold">
										{sl.is_on ? (
											<span className="flex items-center gap-2">
												<PiPowerBold className="scale-150" /> ON
											</span>
										) : (
											<span className="flex items-center gap-2">
												<MdPowerOff className="scale-150" /> OFF
											</span>
										)}
									</h1>
									<Link href={`/dashboard/${sl.id}`} to={`/dashboard/${sl.id}`}>
										<button
											type="button"
											className="transition-all duration-300 flex justify-center items-center text-xs p-2 border border-transparent rounded-lg bg-y-gold bg-opacity-0 hover:bg-opacity-20 hover:border-opacity-20 text-yellow-800"
										>
											Know More
										</button>
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default DashBoard;
