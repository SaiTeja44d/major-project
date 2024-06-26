import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Nite owL ~",
	icon: "/favicon.ico",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<>
			<Head>
				<title>{metadata.title}</title>
				<link rel="icon" href={metadata.icon} />
				<meta name="description" content={metadata.description} />
			</Head>
			<html lang="en">
				<body className={`${inter.className} font-sans`}>
					<NavBar />
					{children}
				</body>
			</html>
		</>
	);
}
