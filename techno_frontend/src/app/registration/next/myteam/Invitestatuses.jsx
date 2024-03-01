import React, { useEffect, useState } from 'react';

const ComponentFunc = async (eventId, emailRef) => {
  let response = 'ahwbdhwafwa';
  // console.log(eventId, emailRef);
  response = await fetch(
    'http://10.60.41.209:4000/api/event/invite/status/byInviter/eventId',
    {
      method: 'POST',
      body: JSON.stringify({
        eventId: eventId,
        inviterEmail: emailRef,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      return data;
    })
    .catch((error) => console.error('Error fetching TeamId:', error));
  // console.log("and response: ", response);
  return response;
};

const Invitestatuses = ({ eventId, emailRef }) => {
  const [inviteesArray, setInviteesArray] = useState([]);
  let screen = window?.innerWidth;
  useEffect(() => {
    // console.log(eventId, emailRef);
    ComponentFunc(eventId, emailRef).then((response) =>
      setInviteesArray(response.invitation)
    );
  }, []);

  return (
    <ul className="text-white">
      {/* {console.log("Here", inviteesArray)} */}
      {inviteesArray?.map((i, k) => {
        return (
          <li
            key={k}
            className={`${
              i.status == 'pending'
                ? 'text-yellow-400'
                : i.status == 'rejected'
                ? 'text-red-500'
                : 'text-green-500'
            }`}
          >
            {screen
              ? screen < 500
                ? i.inviteeEmail.slice(0, 13) + '...'
                : i.inviteeEmail
              : i.inviteeEmail}{' '}
            : {i.status}
          </li>
        );
      })}
    </ul>
  );
};

export default Invitestatuses;
