export const dynamic = "force-dynamic";
const API_URL = `https://api.thingspeak.com/channels/2467860/feeds.json?api_key=${process.env.API_KEY}`;
const User = require("../../helpers/schema");
const mongoose = require("mongoose");

export async function POST(req, res) {
	try {
		const db = await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		const data = await req.json();
		const { name, password } = data;
		const user = await User.findOne({ name: name });
		console.log(user);
		if (user) {
			if (user.password === password) {
				return new Response(JSON.stringify({ success: true }), {
					headers: {
						"content-type": "application/json",
					},
				});
			} else {
				return new Response(JSON.stringify({ success: false }), {
					headers: {
						"content-type": "application/json",
					},
				});
			}
		}
		const newUser = new User({ name, password });
		await newUser.save();
		db.disconnect();
		return new Response(JSON.stringify({ success: true }), {
			headers: {
				"content-type": "application/json",
			},
		});
	} catch (err) {
		console.error("Error connecting to database:", err);
		return new Response(JSON.stringify({ success: false }), {
			headers: {
				"content-type": "application/json",
			},
		});
	}
}

export async function GET(req, res) {
	const response = await fetch(API_URL);
	const data = await response.json();
	const { feeds } = data;
	return new Response(JSON.stringify(feeds), {
		headers: {
			"content-type": "application/json",
		},
	});
}
