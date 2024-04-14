'use client';
import React, { useEffect, useState } from 'react';
import EventsDetails from '../detsEvents';
import Header from '@/components/Header';
import { BackgroundBeams } from '@/components/ui/background-beams';

const page = () => {
  const eventId = 'event-Game Fusion-202403';
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
        imageLink="../posters/gameFusion.png"
        prize={15000}
        heading="GAME FUSION : THE LAN EVENT"
        paragraph={
          <>
            <p>
              GAME FUSION : The Lan Event is a high-energy gaming extravaganza
              designed to bring together the gaming community within our
              college. It's an immersive experience that transcends traditional
              gaming, creating a platform for participants to showcase their
              skills, engage in friendly competition, and celebrate the spirit
              of gaming.
            </p>
          </>
        }
        subHeading="“Unleash Your Campus Star Power!”"
        theme={
          <p>
            Unleash the Gaming Warriors: A Battle for Supremacy in the Virtual
            Realm of Gaming!
          </p>
        }
        subEventHeading={'Name of Games'}
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
        subEvents={
          <>
            <li>Battlegrounds Mobile India (BGMI)</li>
            <li>VALORANT</li>
            <li>FREEFIRE</li>
          </>
        }
        rulesHeading={'Rules of the event:'}
        rules={
          <>
            <li>
              No third party tools or hacks are allowed in the game. If anyone
              caught in suspicious activity or act his/her team will be
              disqualified from the game immediately.
            </li>
            <li>
              In case if any person is caught in using third party tools, the
              whole match will be replayed again.
            </li>
            <li>
              Kindly bring your own headsets and earphones, organizing committee
              won’t provide headsetsand all.
            </li>
            <li>
              Internet interruption or high ping issue is not the concern for
              organizing committee. Kindly play in the provided conditions.
            </li>
            <li>
              Please stick to the timings, organizing committee won’t wait for
              the late teams, if facing issue while joining the lobby please
              contact the coordinators accordingly.
            </li>
            <li>
              Room ID and Password will be shared on the Whatsapp Group of the
              BGMI/FreeFire group.
            </li>
            <li>
              No emulator or tablet players are allowed in this tournament for
              BGMI/Freefire.
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
        roundsHeading={'Rounds:'}
        rounds={
          <>
            <p>There will be 2 rounds.</p>
            <li>DAY – 1 :- Qualification Round</li>
            <li>DAY – 2 :- Final Round</li>
          </>
        }
        judgeMentalCriteria={
          <>
            <p>
              Scoring System: Points will be awarded based on the Official Point
              Systems Of each Games.
            </p>
          </>
        }
        eventVenue={<p>TB01 , TB05 , TB07 (OPJU CAMPUS)</p>}
        facultyCoordinators={
          <table>
            <tbody>
              <tr>
                <td>PROF. UMASHANKAR PANDEY</td>
              </tr>
              <tr>
                <td>PROF. PRADEEP KUMAR SHRIWAS</td>
              </tr>
            </tbody>
          </table>
        }
        eventManagers={
          <table>
            <tbody>
              <tr>
                <td>Hussain Kapadia</td>
                <td>+91 8265013186</td>
              </tr>
              <tr>
                <td>Sanjeet Kumar Gourth</td>
                <td>+91 6260294300</td>
              </tr>
              <tr>
                <td>Abhishek Panda</td>
                <td>+91 9124648483</td>
              </tr>
              <tr>
                <td>Yashwant Patel</td>
                <td>+91 8817556527</td>
              </tr>
              <tr>
                <td>Shomya Sinha</td>
                <td>+91 7091799799</td>
              </tr>
              <tr>
                <td>Om Chilbule</td>
                <td>+91 9575759551</td>
              </tr>
            </tbody>
          </table>
        }
      />
    </main>
  );
};

export default page;
