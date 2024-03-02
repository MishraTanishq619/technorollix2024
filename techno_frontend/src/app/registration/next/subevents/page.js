// import EventCard from "@/components/EventCard";
// import EventsRegistrationPage from "./components/eventRegistrationCard";
import { Suspense } from 'react';
import React from 'react';
import SubEventsRegistrationPage from './subEventRegistrationCard';

function page() {
  return (
    <div className="w-full h-screen items-center justify-start mt-12">
      {/* <div className=" "> */}
      {/* <EventsRegistrationPage/> */}
      <Suspense fallback={<div>Loading...</div>}>
        <SubEventsRegistrationPage />
        {/* <p className="bg-red-500 w-20 h-32">SubEvent Registratihdsbs</p> */}
      </Suspense>
      {/* </div> */}
    </div>
  );
}

export default page;
