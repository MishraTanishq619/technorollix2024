import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { GoogleOAuthProvider } from "@react-oauth/google";

export const metadata = {
	title: "Technorollix_2024",
	description: "by CodeForIt team.",
};

export default function RootLayout({ children }) {
	return (
		<GoogleOAuthProvider clientId="836755220699-ojv84oup2nfa7li643q0jssqiftnk6o5.apps.googleusercontent.com">
			<html lang="en">
				<body className="w-full h-screen py-16 bg-cover bg-fixed bg-no-repeat bg-center bg-[url('/mainbg.jpg')]  flex flex-wrap gap-0 items-center overflow-y-scroll">
					<Header />
					{children}
				</body>
			</html>
		</GoogleOAuthProvider>
	);
}
