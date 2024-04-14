import React, { useEffect, useState } from 'react';

const ComponentFunc = async (eventId, emailRef) => {
  let response = 'ahwbdhwafwa';
  // console.log(eventId, emailRef);
  response = await fetch(
    'http://127.0.0.1:4000/api/event/invite/status/byInviter/eventId',
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

const Invitestatuses = ({ eventId, emailRef, teamId }) => {
  const [inviteesArray, setInviteesArray] = useState([]);
  let screen = window?.innerWidth;
  useEffect(() => {
    // console.log(eventId, emailRef);
    ComponentFunc(eventId, emailRef).then((response) =>
      setInviteesArray(response.invitation)
    );
  }, [inviteesArray]);

  return (
    <ul className="text-white">
      {console.log('Here', inviteesArray)}
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
            } text-xl`}
          >
            {screen
              ? screen < 500
                ? i.inviteeEmail.slice(0, 13) + '...'
                : i.inviteeEmail
              : i.inviteeEmail}{' '}
            :{' '}
            <div className="flex">
              {i.status}{' '}
              {i.status != 'accepted' ? (
                <DeleteBtn
                  teamId={teamId}
                  inviterEmail={emailRef}
                  inviteeEmail={i.inviteeEmail}
                />
              ) : (
                ''
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Invitestatuses;
// api/delete/team-invite

const DeleteBtn = ({ teamId, inviterEmail, inviteeEmail }) => {
  // console.log(teamId);
  return (
    <button
      type="button"
      // class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-9 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      onClick={async () => {
        await fetch('http://127.0.0.1:4000/api/delete/team/invite', {
          method: 'DELETE',
          body: JSON.stringify({
            teamId: teamId,
            inviterEmail: inviterEmail,
            inviteeEmail: inviteeEmail,
          }),
          headers: {
            'Content-type': 'application/json',
          },
        }).catch((error) => {
          console.error('Error deleting.');
        });
      }}
    >
      <img
        src="/deleteIcon.png"
        alt="Icon"
        className="w-5 h-5 mx-2 md:w-6 md:h-6"
      />
    </button>
  );
};
