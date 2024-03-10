export const dynamic = "force-dynamic";
const API_URL = `https://api.thingspeak.com/channels/2463620/feeds.json?api_key=${process.env.API_KEY}`;

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
