'use client';
import React, { useEffect, useState } from 'react';
import Home from '@/components/Home';
import Header from '@/components/Header';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic'; // Import dynamic from Next.js
import SplashScreen from './SplashScreen';

const inter = Inter({ subsets: ['latin'] });

const DynamicThreeDhelmet = dynamic(() => import('@/helmet'), { ssr: false }); // Dynamically import ThreeDhelmet with SSR disabled

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <div className="h-full w-full overflow-x-hidden ">
          <Header />
          <DynamicThreeDhelmet /> {/* Render the dynamic component */}
          <Home />
        </div>
      )}
    </>
  );
};

export default Page;
