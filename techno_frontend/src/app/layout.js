import { Inter } from 'next/font/google';
import './globals.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BackgroundBeams } from '@/components/ui/background-beams';
import StarBackground from "@/scripts/starBackground";

export const metadata = {
  title: 'Technorollix_2024',
  description: 'by CodeForIt team.',
};

export default function RootLayout({ children }) {
  return (
    <GoogleOAuthProvider clientId="836755220699-ojv84oup2nfa7li643q0jssqiftnk6o5.apps.googleusercontent.com">
      <html lang="en">
        <body className="w-full h-full  bg-cover bg-fixed bg-no-repeat bg-center bg-black flex flex-wrap gap-0 items-center overflow-y-scroll">
          <StarBackground/>
          {/* <body className="w-full h-screen pt-16 bg-cover bg-fixed bg-no-repeat bg-center bg-[url('/star-war-blue-bg.png')]  flex flex-wrap gap-0 items-center overflow-y-scroll"> */}
          {children}
          {/* <BackgroundBeams/> */}
        </body>
      </html>
    </GoogleOAuthProvider>
  );
}
