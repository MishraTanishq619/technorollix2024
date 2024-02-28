"use client"
import React, { useEffect } from "react";
import Home from "@/components/Home";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import dynamic from 'next/dynamic'; // Import dynamic from Next.js

const inter = Inter({ subsets: ["latin"] });

const DynamicThreeDhelmet = dynamic(() => import('@/helmet'), { ssr: false }); // Dynamically import ThreeDhelmet with SSR disabled

const Page = () => {
    return (
        <main className="h-full w-full overflo-x-hidden">
            <Header />
            <DynamicThreeDhelmet /> {/* Render the dynamic component */}
            <Home />
        </main>
    );
};

export default Page;
