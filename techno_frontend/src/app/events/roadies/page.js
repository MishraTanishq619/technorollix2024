'use client';
import React from 'react';
import EventsDetails from '../detsEvents';
import Header from '@/components/Header';
import { BackgroundBeams } from '@/components/ui/background-beams';

const page = () => {
  const eventId = 'event-Roadies-202403';
  const [Teams, setTeams] = useState({});
  const [Participants, setParticipants] = useState({});
  useEffect(() => {
    fetch(
      `http://technorollix.opju.ac.in:4000/api/registeredTeam/count/perEvent/${eventId}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log('teams : ', data);
        setTeams(data);
        return data;
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
        // return null;
      });

    fetch(
      `http://technorollix.opju.ac.in:4000/api/participants/count/perEvent/${eventId}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log('participants :', data);
        setParticipants(data);
        return data;
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
        // return null;
      });
  }, []);
  return (
    <main className="w-full h-screen">
      <Header />
      <EventsDetails
        imageLink="../posters/roadies.png"
        prize={10000}
        heading="ROADIES- TILL THE LAST BREATHE"
        paragraph={
          <>
            <p>
              ROADIES- TILL THE LAST BREATH Welcome to Roadies, the ultimate
              test of skill and endurance! Join us at the University for an
              adrenaline-packed event filled with sports-inspired challenges.
              From obstacle courses to team relays, Roadies promises to push
              your limits and ignite your competitive spirit. Are you ready to
              conquer the road ahead?
            </p>
          </>
        }
        subHeading=""
        theme={<p>Adventure/survival</p>}
        rulesHeading={'Rules of the event:'}
        registrationCount={
          <>
            <h2 className="neon-text-red-lighter">Registrations</h2>
            <table className="-mx-4">
              <thead>
                <tr>
                  <td className="text-[10px] sm:text-[1.4rem] ">Counts</td>
                  <td className="hidden sm:block text-[10px] sm:text-[1.4rem] ">
                    Total
                  </td>
                  <td className="text-[10px] sm:text-[1.4rem] ">Insider</td>
                  <td className="text-[10px] sm:text-[1.4rem] ">Outsider</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-[10px] sm:text-[1.4rem] ">Teams</td>
                  <td className="hidden sm:block text-[17px] sm:text-[1.4rem]  font-bold  text-center">
                    {Teams.totalCount}
                  </td>
                  <td className="text-[17px] sm:text-[1.4rem] font-bold  text-center">
                    {Teams.insiderCount}
                  </td>
                  <td className="text-[17px] sm:text-[1.4rem] font-bold  text-center">
                    {Teams.outsiderCount}
                  </td>
                </tr>
                <tr>
                  <td className="text-[10px] sm:text-[1.4rem] ">
                    Participants
                  </td>
                  <td className="hidden sm:block text-[17px] sm:text-[1.4rem] font-bold  text-center">
                    {Participants.totalCount}
                  </td>
                  <td className="text-[17px] sm:text-[1.4rem] font-bold  text-center">
                    {Participants.insiderCount}
                  </td>
                  <td className="text-[17px] sm:text-[1.4rem] font-bold  text-center">
                    {Participants.outsiderCount}
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        }
        rules={
          <>
            <li>
              All the participants should come half &amp; hour before the event
              starts.
            </li>
            <li>
              Only who fill the audition form will be considered as
              participants.
            </li>
            <li>
              No student shall be allowed for direct participation in final
              round and must qualify audition.
            </li>
            <li>
              All the participants must maintain discipline during the event and
              must not commit any activity like hooting, slangs, bully etc.
            </li>
            <li>
              Participants must be in proper sports attire (trouser, t-shirt,
              sport shoes)
            </li>
            <li>
              Follow all instructions and guidelines provided by the event
              managers.
            </li>
            <li>
              Consumption of alcohol or illegal substance during the event is
              strictly prohibited.
            </li>
          </>
        }
        roundsHeading={'Rounds:'}
        rounds={
          <>
            <h3>There will be 5 rounds</h3>
            <p>Tasks for the round will be declared on the spot.</p>
          </>
        }
        judgeMentalCriteria={
          <>
            <p>It will be based on the following parameters:</p>
            <li>Physical ability of the participant.</li>
            {/* <li>Team coordination</li> */}
            <li>Adaptability</li>
          </>
        }
        eventVenue={<p>Bus Parking Area</p>}
        facultyCoordinators={
          <table>
            <tbody>
              <tr>
                <td>Dr. Amit Kumar Paras</td>
              </tr>
              <tr>
                <td>Mr. Abhishek Thakur</td>
              </tr>
              <tr>
                <td>Dr. Mukesh Kumar Sharma</td>
              </tr>
              <tr>
                <td>Ms. Jyoti Sahu</td>
              </tr>
              <tr>
                <td>Mr. Y Santosh Kumar</td>
              </tr>
            </tbody>
          </table>
        }
        eventManagers={
          <table>
            <tbody>
              <tr>
                <td>Pratik Rana</td>
                <td>+91 9691648439</td>
              </tr>
              <tr>
                <td>Piyush Kumar</td>
                <td>+91 7004876137</td>
              </tr>
              <tr>
                <td>Prachi Kamani</td>
                <td>+91 8602027951</td>
              </tr>
              <tr>
                <td>Suryakant balhal</td>
                <td>+91 9343127792</td>
              </tr>
              <tr>
                <td>Sahil Sahoo</td>
                <td>+91 9668048310</td>
              </tr>
              <tr>
                <td>Yash Vardhan</td>
                <td>+91 8319274347</td>
              </tr>
            </tbody>
          </table>
        }
      />
    </main>
  );
};

export default page;
