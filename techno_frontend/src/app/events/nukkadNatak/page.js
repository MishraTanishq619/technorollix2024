'use client';
import React, { useEffect, useState } from 'react';
import EventsDetails from '../detsEvents';
import Header from '@/components/Header';
import { BackgroundBeams } from '@/components/ui/background-beams';

const page = () => {
  const eventId = 'event-Nukkad Natak-202403';
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
        imageLink="../posters/nukkadNatak.png"
        prize={4500}
        heading="Name of the Event – Nukkad Natak"
        paragraph={
          <>
            <p>
              About The Event: This event helps students to propagate the
              social, political issues in a unique sarcastic way and creates
              awareness amongst the masses, aiding improved communication and
              collaborative skills.
            </p>
          </>
        }
        // subHeading="“Unleash Your Campus Star Power!”"
        theme={<p>General issues</p>}
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
        // subEventHeading={"Name of Games"}
        // subEvents={<>
        // 	<li>Battlegrounds Mobile India (BGMI)</li>
        // 	<li>VALORANT</li>
        // 	<li>FREEFIRE</li>
        // </>}
        rulesHeading={'Rules of the event:'}
        rules={
          <>
            <li>Teams are free to select a topic as per their choice.</li>
            <li>
              The number of participants in a team should be a minimum of 06 and
              a maximum of 12 students.
            </li>
            <li>The maximum time shall not be more than 10 minutes.</li>
            <li>
              The participating teams must act on the allotted topic only on 21
              st March.
            </li>
            <li>
              Usage of abusive language and vulgarity is strictly prohibited. It
              may lead to disqualification by the discretion of the judges.
            </li>
            <li>
              Teams using any props / Costume / Dressing must bring all their
              necessary requirements and must be ready well in time. No Props or
              costume or any material will be provided by the organizer.
            </li>
            <li>
              Decision of Judges will be final and binding on all teams and thus
              irrefutable.
            </li>
            <li>
              Every match results will be shared on the Whatsapp Group after the
              match.
            </li>
            <li>
              Overall Points Table will be shared on the group after all the
              matches. • For Valorant, every participants have to bring his/her
              own laptops.
            </li>
          </>
        }
        // roundsHeading={"Rounds:"}
        // rounds={<>
        // 	<p>There will be 2 rounds.</p>
        // 	<li>DAY – 1 :- Qualification Round</li>
        // 	<li>DAY – 2 :- Final Round</li>
        // </>}
        judgeMentalCriteria={
          <>
            <li>Script Writing – 10 points</li>
            <li>Execution and Justification – 10 points</li>
            <li>Team Performance – 10 points</li>
            <li>Dialogue delivery– 10 points</li>
            <li>Costume– 10 points</li>
          </>
        }
        eventVenue={<p>Babuji Chowk</p>}
        facultyCoordinators={
          <table>
            <tbody>
              <tr>
                <td>Dr. Rekha Sharma</td>
                <td>+91 8077277676</td>
              </tr>
              <tr>
                <td>Prof. Suchismita Panda</td>
                <td>+91 9775675383</td>
              </tr>
              <tr>
                <td>Prof. Vinod Nagpure</td>
                <td>+91 8827673347</td>
              </tr>
            </tbody>
          </table>
        }
        eventManagers={
          <table>
            <tbody>
              <tr>
                <td>Nihal Mittal</td>
                <td>+91 9340006316</td>
              </tr>
            </tbody>
          </table>
        }
      />
    </main>
  );
>>>>>>> 4659357 (team-page)
};

export default page;
