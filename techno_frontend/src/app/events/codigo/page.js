'use client';
import React, { useEffect, useState } from 'react';
import EventsDetails from '../detsEvents';
import Header from '@/components/Header';
import { BackgroundBeams } from '@/components/ui/background-beams';

const page = () => {
  const eventId = 'event-Codigo-202403';
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
        imageLink="../posters/codigo.png"
        prize={20000}
        heading="Codigo – Sponsored by CodeForIT"
        paragraph={
          <>
            <p>
              “Unlock your coding potential at our university&#39;s premier
              coding event! Dive into challenges, network with peers, and
              elevate your skills. Whether you&#39;re a beginner or a coding
              pro, join us for an unforgettable experience of innovation and
              collaboration. Save the date and let&#39;s code together!”
            </p>{' '}
            <br />
            <div>
              <h1 className="neon-text-red-light">Event 1: Code</h1> <br />
              <ol className="list-decimal">
                <li>
                  First round will be Screening Round, set of MCQs
                  <ul className="list-disc">
                    <li>Basic Maths for Programming</li>
                    <li>Searching and Sorting</li>
                    <li>Char, String, Arrays, Pointers</li>
                    <li>Time &amp; Space Complexity</li>
                  </ul>
                </li>
              </ol>
              <br />
              <ol className="list-decimal">
                <li>
                  Second round will be Online Assessment(Real Problem Solving)
                  <ul className="list-disc">
                    <li>Recursion</li>
                    <li>OOPs</li>
                    <li>LinkedLists</li>
                    <li>Stacks</li>
                    <li>Queues</li>
                  </ul>
                </li>
              </ol>
              <br />
              <ol className="list-decimal">
                <li>
                  Third round will be Technical Round(Real Problem Solving)
                  <ul className="list-disc">
                    <li>Trees</li>
                    <li>Graphs</li>
                    <li>Dynamic Programming</li>
                  </ul>
                </li>
              </ol>
              <br />
            </div>
            <div>
              <h1 className="neon-text-red-light">Event 2: Design</h1> <br />
              <ol className="list-decimal">
                <li>
                  1. Single round (Time limit on the spot will be conveyed)
                  <ul className="list-disc">
                    <li>
                      UI/UX: A real life scenario will be provided on the spot.
                    </li>
                  </ul>
                </li>
              </ol>
              <br />
            </div>
          </>
        }
        // subHeading="“Don't worry about the results; focus only on your actions - a lesson from the Bhagavad Gita”"
        themeHead={'THEME:'}
        theme={<p>Embracing Diversity: Uniting Through Technology</p>}
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
            <li>First round will have 25 questions, time limit 30mins.</li>
            <li>
              According to number of participants, the management will decide
              the qualifying number on the spot itself for second round.
            </li>
            <li>
              Second Round: Out of 5 Problems, do any 3. (Time limit on the spot
              will be conveyed) According to number of participants, the
              management will decide the qualifying number on the spot itself
              for second round.
            </li>
            <li>
              Third Round: 3 questions, do them all. (Time limit on the spot
              will be conveyed) Winner will be decided among these factors:
            </li>
          </>
        }
        eventVenue={<p>TB-09</p>}
        judgeMentalCriteria={
          <>
            <li>Maximum question solved</li>
            <li>Maximum test cases passed</li>
            <li>Submission Time</li>
            <li>Time &amp; Space Complexity</li>
          </>
        }
        facultyCoordinators={
          <table>
            <tbody>
              <tr>
                <td>Dr Bhupesh Dewangan</td>
                <td>+91 7060599233</td>
              </tr>
            </tbody>
          </table>
        }
        eventManagers={
          <table>
            <tbody>
              <tr>
                <td>Jasdeep singh</td>
                <td>+91 9770270249</td>
              </tr>
              <tr>
                <td>Shilpy Kumari Gupta</td>
                <td>+91 8982621237</td>
              </tr>
            </tbody>
          </table>
        }
      />
    </main>
  );
};

export default page;
