'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
function SubEventsRegistrationPage() {
  // const [events, setEvents] = useState([]);
  const [registeredEvents, setregisteredEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [additionalDetails, setAdditionalDetails] = useState([]);
  const [leaderEmail, setLeaderEmail] = useState('');
  const [teammateEmails, setTeammateEmails] = useState([]);
  const searchParams = useSearchParams();
  const emailRef = searchParams.get('emailRef');

  // let MainEvents = [];
  const [MainEvents, setMainEvents] = useState([]);

  useEffect(() => {
    setLeaderEmail(emailRef);
  }, []);

  useEffect(() => {
    // getData();
    fetch(`http://10.60.41.209:4000/api/participant/eventId/${emailRef}`)
      .then((response) => response.json())
      .then((data) => {
        setregisteredEvents(data);
        // console.log(data);
        return data;
      })
      .then((data) => {
        fetch(
          `http://10.60.41.209:4000/api/allSubEvents/eventIdArray/byMainIdArray`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ mainEventsArray: data }),
          }
        )
          .then((response) => response.json())
          .then((data) => {
            setMainEvents(data);
            console.log('main', data);
            return data;
          });
        // .then((data) => {
        //   let n = 0;
        //   let compContainer = document.getElementById('CompContainer');
        //   for (const subEvents in data) {
        //     for (const event in subEvents) {
        //       n++;
        //       compContainer.append(`<p>jhbfjh</p>`);
        //       // <CardComponent
        //       //   // key={i * 100 + j}
        //       //   eventId={event.eventId}
        //       //   eventName={event.eventName}
        //       //   eventDescription={event.eventDescription}
        //       //   teamSize={event.teamSize}
        //       //   priceMoney={event.priceMoney}
        //       // />
        //     }
        //   }
        //   console.log(n);
        // });
      })
      .catch((error) => console.error('Error fetching mainEvents:', error));

    // console.log('dvszjnvjs');
  }, []);
  // api/allSubEvents/eventIdArray/byMainIdArray
  // main
  const getData = async () => {
    console.log('getdata');
    let p = new Promise(async (resolve, reject) => getRegisteredEvents()).then(
      () => getMainEvents()
    );
  };
  // 1
  const getRegisteredEvents = async () => {
    console.log('getregistereddata');
    await fetch(`http://10.60.41.209:4000/api/participant/eventId/${emailRef}`)
      .then((response) => response.json())
      .then(async (data) => {
        setregisteredEvents(data);
        console.log(data);
      })
      // .then((regEve) => {
      //   console.log('fahkwfwhbfwa', regEve);
      // })
      .catch((error) =>
        console.error('Error fetching registeredEvents:', error)
      );
  };
  // 2
  const getMainEvents = async () => {
    console.log('getmainevents', registeredEvents);
    registeredEvents.forEach(async (e) => {
      console.log('Here', e);
      await fetch(`http://10.60.41.209:4000/api/allSubEvents/${e}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.length != 0) setMainEvents(...MainEvents, data);
          console.log('reghe', data, MainEvents);
        })
        .catch((error) => console.error('Error fetching events:', error));
    });
  };

  // console.log('here', registeredEvents);

  const handleEventCardClick = (eventId) => {
    const selectedIndex = selectedEvents.indexOf(eventId);
    const isEventSelected = selectedIndex !== -1;
    // console.log('Clicked ', eventId);

    if (isEventSelected) {
      const updatedSelectedEvents = [...selectedEvents];
      updatedSelectedEvents.splice(selectedIndex, 1);
      setSelectedEvents(updatedSelectedEvents);

      const updatedAdditionalDetails = [...additionalDetails];
      updatedAdditionalDetails.splice(selectedIndex, 1);
      setAdditionalDetails(updatedAdditionalDetails);
    } else {
      setSelectedEvents([...selectedEvents, eventId]);
      setAdditionalDetails([...additionalDetails, '']);
    }
  };

  const handleAdditionalDetailsChange = (index, value) => {
    const updatedAdditionalDetails = [...additionalDetails];
    updatedAdditionalDetails[index] = value;
    setAdditionalDetails(updatedAdditionalDetails);
  };

  return (
    <div className="w-full flex flex-col items-center my-4 gap-5">
      <p className="text-4xl text-white font-bold text-center">
        Sub-Events-Checkbox
      </p>
      <div
        id="CompContainer"
        className="flex text-white flex-wrap items-center  justify-evenly  w-[96%] h-full py-10 rounded-xl bg-[#ffffff33]"
      >
        {MainEvents?.map((subEvents, i) => {
          return subEvents.map(
            (
              {
                eventId,
                eventDescription,
                eventName,
                teamSize,
                priceMoney,
                eventpic,
              },
              j
            ) => {
              // return <p>shbfhbshfs</p>;
              return (
                <div
                  key={eventId}
                  className="transform    transition  hover:scale-110"
                >
                  <div
                    className={` p-4 rounded-lg mx-4 my-2   ${
                      registeredEvents.includes(eventId)
                        ? 'border-red-600 bg-black border-4 '
                        : ''
                    }${
                      selectedEvents.includes(eventId)
                        ? 'bg-[#ff0000aa] min-h-40 max-w-80 '
                        : 'bg-[#000000] min-h-40 max-w-80'
                    } `}
                    onClick={
                      registeredEvents.includes(eventId)
                        ? null
                        : () => handleEventCardClick(eventId)
                    }
                  >
                    <div className="flex flex-wrap">
                      <div className="mx-3 w-full my-2">
                        <img
                          // src={`../posters/${eventpic}`}
                          src={`/thumbnail/${eventpic}.png`}
                          alt="aayega"
                          className="object-cover "
                        />
                      </div>
                      <div className="min-w-40 w-full my-2 flex flex-col gap-3">
                        <h2
                          className={`text-red-600
                          ${registeredEvents.includes(eventId) ? '' : 'hidden'}
                        `}
                        >
                          Already Registered
                        </h2>
                        <h2 className="text-lg font-bold text-white">
                          {eventName}
                        </h2>
                        <p className="text-12px font-bold text-white">
                          {eventDescription}
                        </p>
                        <div className="flex justify-between text-lg font-bold text-white w-full">
                          {/* djdsufhsu */}
                          <p className="">
                            {teamSize > 0
                              ? 'TeamSize: ' + teamSize
                              : 'Have Sub-Events'}
                          </p>
                        </div>
                        {/* <p className="text-lg font-bold text-white">
                          Entry Fee: {event.entryFee}
                        </p> */}
                      </div>
                    </div>
                    {selectedEvents.includes(eventId) && (
                      <div className="border-2 rounded-md border-blue-400">
                        <input
                          type="text"
                          placeholder="Additional Details (optional)"
                          style={{
                            border: 'none',
                            outline: 'none',
                            boxShadow: 'none',
                          }}
                          className="bg-black w-full px-5 py-1 rounded-md text-white "
                          value={
                            additionalDetails[
                              selectedEvents.indexOf(eventId)
                            ] || ''
                          }
                          onChange={(e) =>
                            handleAdditionalDetailsChange(
                              selectedEvents.indexOf(eventId),
                              e.target.value
                            )
                          }
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            }
          );
        })}
        <div>
          <p></p>
        </div>
      </div>
      <button
        className="bg-orange-600  rounded-md text-3xl px-6 py-3 items-center justify-center my-10"
        onClick={() => {
          try {
            fetch('http://10.60.41.209:4000/api/team-registration/event', {
              method: 'POST',
              body: JSON.stringify({
                eventId: selectedEvents,
                leader: leaderEmail,
                additionalDetails: additionalDetails,
                teammates: teammateEmails.filter(
                  (email) => email.trim() !== ''
                ),
              }),
              headers: {
                'Content-type': 'application/json',
              },
            })
              .then(async (res) => {
                if (!res.ok) {
                  throw new Error(`HTTP error! Status: ${res.status}`);
                }
                window.location.href = `/registration/next/subevents/myteam?emailRef=${emailRef}`;
                const json = await res.json();
              })
              .catch((error) => {
                console.log('Error during fetch:', error);
              });
          } catch (error) {
            console.log(error);
          }
        }}
      >
        Submit
      </button>
    </div>
  );
}
export default SubEventsRegistrationPage;

const compFunc = () => {
  let compContainer = document.getElementById('CompContainer');
  for (const subEvents in MainEvents) {
    subEvents.map((event, j) => {
      compContainer.appendChild(
        <CardComponent
          key={i * 100 + j}
          eventId={event.eventId}
          eventName={event.eventName}
          eventDescription={event.eventDescription}
          teamSize={event.teamSize}
          priceMoney={event.priceMoney}
        />
      );
    });
  }
};

const CalculateFee = (selectedEvents, registeredEvents) => {
  let fee = registeredEvents.length;
  // console.log(registeredEvents.length);
  // console.log(selectedEvents);
  if (selectedEvents.length <= 3) {
    fee = 200;
  } else if (selectedEvents.length <= 5) {
    fee = 300;
  } else if (selectedEvents.length <= 7) {
    fee = 500;
  } else {
    fee = 1000;
  }
  return fee;
};

// "/api/user/universityVarification/:email"
const CardComponent = ({
  eventId,
  eventName,
  eventDescription,
  teamSize,
  priceMoney,
}) => {
  return (
    <div key={eventId} className="transform    transition  hover:scale-110">
      <div
        className={` p-4 rounded-lg mx-4 my-2   ${
          registeredEvents.includes(eventId)
            ? 'border-red-600 bg-black border-4 '
            : ''
        }${
          selectedEvents.includes(eventId)
            ? 'bg-[#ff0000aa] min-h-40 max-w-80 '
            : 'bg-[#000000] min-h-40 max-w-80'
        } `}
        onClick={
          registeredEvents.includes(eventId)
            ? null
            : () => handleEventCardClick(eventId)
        }
      >
        <div className="flex flex-wrap">
          <div className="mx-3 w-full my-2">
            <img src="/mainbg.jpg" alt="" className="object-cover " />
          </div>
          <div className="min-w-40 w-full my-2 flex flex-col gap-3">
            <h2
              className={`text-red-600
								${registeredEvents.includes(eventId) ? '' : 'hidden'}
							`}
            >
              Already Registered
            </h2>
            <h2 className="text-lg font-bold text-white">{eventName}</h2>
            <p className="text-12px font-bold text-white">{eventDescription}</p>
            <div className="flex justify-between text-lg font-bold text-white w-full">
              {/* djdsufhsu */}
              <p className="">
                {teamSize > 0 ? 'TeamSize: ' + teamSize : 'Have Sub-Events'}
              </p>
              <p className="">Prize: {priceMoney}</p>
            </div>
            {/* <p className="text-lg font-bold text-white">
								Entry Fee: {event.entryFee}
							</p> */}
          </div>
        </div>
        {selectedEvents.includes(eventId) && (
          <div className="border-2 rounded-md border-blue-400">
            <input
              type="text"
              placeholder="Additional Details (optional)"
              style={{
                border: 'none',
                outline: 'none',
                boxShadow: 'none',
              }}
              className="bg-black w-full px-5 py-1 rounded-md text-white "
              value={additionalDetails[selectedEvents.indexOf(eventId)] || ''}
              onChange={(e) =>
                handleAdditionalDetailsChange(
                  selectedEvents.indexOf(eventId),
                  e.target.value
                )
              }
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </div>
  );
};
