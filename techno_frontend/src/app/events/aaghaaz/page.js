'use client';
import React, { useEffect, useState } from 'react';
import EventsDetails from '../detsEvents';
import Header from '@/components/Header';
import { BackgroundBeams } from '@/components/ui/background-beams';

const page = () => {
  const eventId = 'event-Aaghaaz-202403';
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
        imageLink="../posters/aaghaaz.png"
        prize={18000}
        heading="AAGHAAZ -THE ETHNIC FASHION SHOW"
        paragraph={
          <>
            <p>
              <b>AAGHAAZ - THE FASHION SHOW Hey You!!!</b> Step into a realm
              where imagination dances with reality, where dreams take shape in
              fabric and color. “AGHAAZ -THE ETHNIC FASHION SHOW" is a fashion
              show that transcends the boundaries of time and space, inviting
              you to embark on a mesmerizing voyage through the epochs of
              fashion.
            </p>
          </>
        }
        subHeading="BE YOUR OWN LABLE"
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
        themeHead={'THEME:'}
        theme={
          <>
            <li>Round 1: Mixmatch Culture</li>
            <li>Round 2: The Villain</li>
          </>
        }
        rulesHeading={'Rules of the event:'}
        rules={
          <>
            <li>
              All the participants should come half and hour before the how
            </li>
            <li>Students must be prepared with their attire.</li>
            <li>
              No students shall be allowed for direct participation in final
              rounds, and no students is entitled for wildcard entries except
              for students outside of OPJUS
            </li>
            <li>No vulgarism is allowed in clothes selection</li>
            <li>
              The score evaluation will be done based on a walk, presentation,
              and q/a round etc....
            </li>
            <li>
              Judges result will be concluded as the final result and shall be
              accepted by each and every student
            </li>
          </>
        }
        roundsHeading={'Rounds: There will be 3 rounds'}
        rounds={
          <>
            <li>
              1<sup>st</sup> ROUND TOLLYWOOD (changes may happen in future)
            </li>
            <li>
              2<sup>nd</sup> and 3<sup>rd</sup> ROUND WILL BE DECLARED BEFORE
              2-3 DAYS.
            </li>
          </>
        }
        judgeMentalCriteria={
          <>
            <p>It will be based on the following parameters:</p>
            <li>PERSONALITY</li>
            <li>WALK</li>
            <li>QUESTION\ANSWER</li>
            <li>COMMUNICATION</li>
          </>
        }
        eventVenue={<p>University Playground</p>}
        facultyCoordinators={
          <table>
            <tbody>
              <tr>
                <td>PROF. TULIKA GUPTA</td>
                <td>+91 9109977055</td>
              </tr>
            </tbody>
          </table>
        }
        eventManagers={
          <table>
            <tbody>
              <tr>
                <td>Prasoon Ranjan</td>
                <td>+91 8827886724</td>
              </tr>
              <tr>
                <td>Vaibhav Singh</td>
                <td>+91 9109016426</td>
              </tr>
              <tr>
                <td>Diksha Rathore</td>
                <td>+91 8827403973</td>
              </tr>
              <tr>
                <td>Parth Singh Thakur</td>
                <td>+91 8889055521</td>
              </tr>
              <tr>
                <td>Charulata Chouhan</td>
                <td>+91 7987399785</td>
              </tr>
              <tr>
                <td>Sejal Jamwal</td>
                <td>+91 9685005224</td>
              </tr>
              <tr>
                <td>Karan Singh Chauhan</td>
                <td>+91 6264630990</td>
              </tr>
            </tbody>
          </table>
        }
      />
    </main>
  );
};

export default page;
