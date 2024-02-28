import { Suspense } from 'react';

import React from 'react';
import ReceivedInvitations from './invitationsRecieved';

function page() {
  return (
    <div className="w-full h-screen flex items-start justify-center mt-12">
      {/* <EventsRegistrationPage/> */}
      <Suspense fallback={<div>Loading...</div>}>
        <ReceivedInvitations />
      </Suspense>
    </div>
  );
}

export default page;
