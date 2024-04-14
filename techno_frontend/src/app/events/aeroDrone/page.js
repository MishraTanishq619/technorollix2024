'use client';
import React, { useEffect, useState } from 'react';
import EventsDetails from '../detsEvents';
import Header from '@/components/Header';
import { BackgroundBeams } from '@/components/ui/background-beams';

const page = () => {
  const eventId = 'event-Aero Drone-202403';
  const [Teams, setTeams] = useState({});
  const [Participants, setParticipants] = useState({});
  useEffect(() => {
    fetch(`http://127.0.0.1:4000/api/registeredTeam/count/perEvent/${eventId}`)
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

    fetch(`http://127.0.0.1:4000/api/participants/count/perEvent/${eventId}`)
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
        imageLink="../posters/aeroDrone.png"
        prize={20000}
        heading="Aero Drone"
        paragraph={
          <>
            <p>
              : It is a drone racing event captivating the knowledge of
              Mechanical, Electrical and CS skills based on your drone. Your
              drone would be tested rigorously across the event through various
              rounds. Show your skills and abilities to bring out max potential
              of your UAVs.
            </p>
          </>
        }
        // subHeading="“Where Minds Clash and Ideas Illuminate”"
        theme={
          <p>
            “ Innovation, transformation and vitalizing equipment’s, knowledge
            Skill”
          </p>
        }
        rulesHeading={'RULES OF THE EVENT:'}
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
            <ul>
              <li>
                2 chances will be given in case of failures of batteries or
                other part.
              </li>
              <li>3-4 A-cell battery's max (2200-3000 mAh).</li>
              <li>Drone weight should be less than or equal to 2 kilograms.</li>
              <li>Drone size should be 14 inches or less.</li>
              <li>Numbers of propellers should be in between 4 to 8.</li>
              <li>No factory made drone should be allowed.</li>
              <li>
                All Participants should be there at the venue 30mins before the
                event starts.
              </li>
            </ul>
          </>
        }
        roundsHeading={'ROUNDS: There will be 3 rounds:'}
        rounds={
          <>
            <ul>
              <li>
                <b>
                  1<sup>st</sup> ROUND: ACCURACY TEST
                </b>
                <br />
                Testing the skills of drone in moving forward, backward, as well
                as elevation and demotion.
              </li>
              <li>
                <b>
                  2<sup>nd</sup> ROUND: OBSTACLE AVOIDING TEST
                </b>
                <br />
                Testing the skills of drone to avoid the obstacles and reach its
                destination as quick as possible.
              </li>
              <li>
                <b>
                  3<sup>rd</sup> ROUND: FINAL ROUND
                </b>
                <br />
                Testing all the abilities of the Drone to max. Win the round by
                unlocking all your potential and skill.
              </li>
            </ul>
          </>
        }
        judgeMentalCriteria={
          <>
            <p>
              {' '}
              All rounds are Elimination rounds. Final round will be decided by
              the drone that wins the race first by time.
            </p>
          </>
        }
        eventVenue={<p>Basketball ground</p>}
        facultyCoordinators={
          <table>
            <tbody>
              <tr>
                <td>Prof. Dr. Kuber Nath Mishra</td>
                <td>+91 9043632723</td>
              </tr>
              <tr>
                <td>Prof. Rakesh Patidar</td>
                <td>+91 9109909265</td>
              </tr>
            </tbody>
          </table>
        }
        eventManagers={
          <table>
            <tbody>
              <tr>
                <td>Mr. Jeet B Bhayani </td>
                <td>+91 8777676808</td>
              </tr>
            </tbody>
          </table>
        }
      />
    </main>
  );
};

export default page;
