// Purpose: To fetch data from the API and return it to the frontend
import { streetLightData, locations } from "./constants";

const data_url = process.env.API_URL || "https://niteowl-teja.netlify.app/api";
export async function getData() {
	const res = await fetch(data_url);
	const feeds = await res?.json();
	if (!feeds || feeds.length === 0) return streetLightData;

	const { field1, field2, field3, field4 } = feeds[feeds.length - 1];

	if (field1 === null || field2 === null || field3 === null || field4 === null)
		return streetLightData;

	const slData = []; 
	const currentValue = parseFloat(field1);
	const relayStatus = field3.split(",");
	const ldrValues = field4.split(",");
	const extraLdrValue = parseInt(ldrValues[4]);
	const isNight = extraLdrValue >= 50;

	let eachCurrent = 0.0;
	let count = 0.0;

	for (let i = 0; i < 4; i++) {
		ldrValues[i] = parseInt(ldrValues[i]);
		relayStatus[i] = parseInt(relayStatus[i]);
		if (relayStatus[i] === 1) count += 1.0;
	}

	eachCurrent = parseFloat(currentValue) / parseFloat(count);
	console.log("current :" + eachCurrent);

	for (let i = 0; i < 4; i++) {
		slData.push({
			id: "Pole-" + i,
			location: locations[i],
			status:
				(isNight && relayStatus[i] === 1 && ldrValues[i] > 30 && ldrValues[i] < 90) ||
				(isNight && relayStatus[i] !== 1)
					? "Faulty"
					: "Working",
			relayCondition: isNight && relayStatus[i] === 0 ? "Faulty" : "Good",
			current_value:
				relayStatus[i] === 1 && ldrValues[i] <= 30
					? eachCurrent.toFixed(2)
					: "0",
			voltage_value: field2,
			is_on: relayStatus[i] != 0 ? true : false,
		});
	}

	return slData;
}

export default getData;
