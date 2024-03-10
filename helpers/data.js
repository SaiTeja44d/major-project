// Purpose: To fetch data from the API and return it to the frontend
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

export async function getData() {
	const res = await fetch("http://localhost:3000/api/");
	const feeds = await res.json();
	console.log(feeds);
	if (feeds.length === 0) return streetLightData;
	const {
		field1,
		field2,
		field3,
		field4,
		field5,
		field6,
		field7,
		field8,
		created_at,
	} = feeds[feeds.length - 1];
	const slData = [];
	slData.push({
		id: "SL001",
		location: "Main Street, City Center",
		status: field3[0] === 1 && field4[0] <= 60 ? "Faulty" : "Working",
		current_value: field1,
		voltage_value: field2,
		is_on: field3[0] > 0 ? true : false,
	});
	slData.push({
		id: "SL002",
		location: "Park Avenue, West End",
		status: field3[1] === 1 && field4[1] <= 60 ? "Faulty" : "Working",
		current_value: field1,
		voltage_value: field2,
		is_on: field3[0] > 0 ? true : false,
	});
	slData.push({
		id: "SL003",
		location: "Broadway, Downtown",
		status: field3[2] === 1 && field4[2] <= 60 ? "Faulty" : "Working",
		current_value: field1,
		voltage_value: field2,
		is_on: field3[0] > 0 ? true : false,
	});
	slData.push({
		id: "SL004",
		location: "Oak Street, Residential Area",
		status: field3[3] === 1 && field4[3] <= 60 ? "Faulty" : "Working",
		current_value: field1,
		voltage_value: field2,
		is_on: field3[0] > 0 ? true : false,
	});
	return slData;
}

export default getData;
