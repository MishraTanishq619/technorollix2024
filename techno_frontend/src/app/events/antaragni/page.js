'use client';
import React, { useEffect, useState } from 'react';
import EventsDetails from '../detsEvents';
import Header from '@/components/Header';
import { BackgroundBeams } from '@/components/ui/background-beams';

const page = () => {
  const eventId = 'event-Antaragni-202403';
  const [Teams, setTeams] = useState({});
  const [Participants, setParticipants] = useState({});
  useEffect(() => {
    fetch(
      `http://10.60.41.209:4000/api/registeredTeam/count/perEvent/${eventId}`
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

    fetch(`http://10.60.41.209:4000/api/participants/count/perEvent/${eventId}`)
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
        imageLink="../posters/antaragni.png"
        prize={20000}
        heading="ANTARAGNI 2k24"
        paragraph={
          <>
            <p>
              <b>Antaragni -</b> Unleash your Creativity spirit. “where passion,
              creativity and talent shine”. ANTARAGNI is known for its
              wavelength atmosphere anthogiestic participants and exciting
              events. showcase your talent. engage in friendly competition and
              celebrate the rich cultural diversity.
            </p>
          </>
        }
        subHeading="WHERE CULTURES UNITE IN VIBRANT CELEBRATIONS"
        themeHead={'THEME:'}
        theme={<p>BOLLYWOOD</p>}
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
              All the participants should come half an hour before the venue,
              otherwise your performance will be cancelled.
            </li>
            <li>
              No student shall be allowed for direct participation in final
              round.
            </li>
            <li>No vulgarism is allowed in clothes and song selection.</li>
            <li>
              Participant should provide their selected song and background
              video to manage or coordinator one day before the audition and
              performance.
            </li>
            <li>Student must be prepared with their song and attire.</li>
            <li>
              6 scores will be evaluated by the performance and judgement
              criteria.
            </li>
            <li>
              Judges result will be considered as the final result and it will
              be accepted by each and every student.
            </li>
          </>
        }
        roundsHeading={'Rounds: There will be 4 rounds'}
        rounds={
          <>
            <li>Audition - 1 (Internal)</li>
            <li>Audition - 2 (outsider)</li>
            <li>Screening</li>
            <li>Final demo</li>
          </>
        }
        judgeMentalCriteria={
          <>
            <h1 className="neon-text-red-light">For Singing:</h1>
            <p>It will be based on the following parameters:</p>
            <li>Voice Quality</li>
            <li>Confidence</li>
            <li>Selection of song</li>
            <li>Audience attraction</li>
            <h1 className="neon-text-red-light">For Dance/Group Dance:</h1>
            <p>It will be based on the following parameters:</p>
            <li>Dressing Sense</li>
            <li>Music Selection</li>
            <li>Foot work</li>
            <li>Facial Expression</li>
            <li>Innovation</li>
            <li>Group coordination (for groups)</li>
            <h1 className="neon-text-red-light">For Short Film:</h1>
            <p>It will be based on the following parameters:</p>
            <li>Innovation</li>
            <li>Video Quality</li>
            <h1 className="neon-text-red-light">For Rap Battle:</h1>
            <p>It will be based on the following parameters:</p>
            <li>Choice of content</li>
            <li>Clarity of word</li>
            <li>Storyline</li>
            <li>Selection of background music</li>
          </>
        }
        eventVenue={<p>University Playground</p>}
        facultyCoordinators={
          <table>
            <tbody>
              <tr>
                <td>Prof. Pushpanjali Shadangi</td>
                <td>+91 8358880501</td>
              </tr>
            </tbody>
          </table>
        }
        eventManagers={
          <table>
            <tbody>
              <tr>
                <td>Aditi Bohidar</td>
                <td>+91 8827501627</td>
              </tr>
              <tr>
                <td>Ankit Patnayak</td>
                <td>+91 6232518588</td>
              </tr>
              <tr>
                <td>Aastha Patnaik</td>
                <td>+91 8305513232</td>
              </tr>
              <tr>
                <td>Nikhil Singh Jatwar</td>
                <td>+91 9399907335</td>
              </tr>
              <tr>
                <td>Neha Jaiswal</td>
                <td>+91 8839741868</td>
              </tr>
              <tr>
                <td>Khushboo Patel</td>
                <td>+91 9589630437</td>
              </tr>
              <tr>
                <td>Hitesh Nayak</td>
                <td>+91 8308896868</td>
              </tr>
            </tbody>
          </table>
        }
      />
    </main>
  );
};

export default page;
