'use client';
import React, { useEffect, useState } from 'react';
import EventsDetails from '../detsEvents';
import Header from '@/components/Header';
import { BackgroundBeams } from '@/components/ui/background-beams';

const page = () => {
  const eventId = 'event-Ideathon-202403';
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
        imageLink="../posters/ideaThon.png"
        prize={18000}
        heading="IDEATHON"
        paragraph={
          <>
            <p>
              An Ideathon is a short, engaging brainstorming event where
              individuals from different backgrounds address some of the most
              pressing challenges of our time. Individuals and students having
              different skills and interests converge to diagnose predefined
              problems, identify the best opportunities and ideate the most
              viable solution. Here participants throw in their propositions and
              present them to get feedback and what they should be working on or
              how they should advance regarding their ideas. Participants work
              in teams and utilize design thinking and innovative learning
              practices to envision and collaborate on possible solutions.
              Ideathon is not restricted to one common subject as it usually
              varies from marketing to philosophy to science
            </p>
          </>
        }
        subHeading="“SPARK CREATIVITY, IGNITING IDEAS”"
        theme={<p>Harmony in chaos: Finding beauty in complexity</p>}
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
              Every participant must reach the designated venue 15 minutes
              before the event’s commencement.
            </li>
            <li>
              An abstract must be submitted from every individual/team prior to
              the commencement of the event. The abstract must contain a brief
              summary of the presenter’s central theme/idea (maximum 400 words).
            </li>
            <li>
              Participants must have an “Innovative” solution to the existing
              problems.
            </li>
            <li>
              A participant can participate individually or in a team according
              to their willingness.
            </li>
            <li>
              Teams/participants attaining the maximum number of points out of
              the total will bethe winners.
            </li>
            <li>
              Team must have to complete their presentation within a time limit
              of 08 minutes.
            </li>
            <li>
              A ‘warning bell’ will ring at 06 minutes during the presentation.
              It will indicate that the last two minutes remaining for the
              presenter to complete their presentation.
            </li>
            <li>
              After the ringing of the warning bell, the presenter must focus on
              summarizing or concluding their presentation.
            </li>
            <li>Two minutes will be given for the Query round.</li>
          </>
        }
        roundsHeading={'Rounds:'}
        rounds={
          <>
            <p>There will be only a single round.</p>
          </>
        }
        judgeMentalCriteria={
          <>
            <p>
              Every presenter’s idea will be evaluated on five different
              criteria, mainly:
            </p>
            <li>Uniqueness of the idea.</li>
            <li>Feasibility of the presenter’s idea.</li>
            <li>Way of presentation.</li>
            <li>Response to Questionnaire.</li>
            <li>Scalability of the Idea.</li>
            <p>
              Each criterion will contain a maximum of 20 points, with all the
              criteria summing up to a total of 100 points.
            </p>
          </>
        }
        eventVenue={<p>FB-14 (EE seminar hall)</p>}
        facultyCoordinators={
          <table>
            <tbody>
              <tr>
                <td>Dr Swapnasarit Kar</td>
                <td>+91 9853364747</td>
              </tr>
            </tbody>
          </table>
        }
        eventManagers={
          <table>
            <tbody>
              <tr>
                <td>Prakash Kumar Nishad</td>
                <td>+91 9109016426</td>
              </tr>
              <tr>
                <td>Prakash Ranjan</td>
                <td>+91 9337909673</td>
              </tr>
              <tr>
                <td>Mani Pushpak Bala</td>
                <td>+91 8966819205</td>
              </tr>
              <tr>
                <td>Lukesh Kurrey</td>
                <td>+91 6263706596</td>
              </tr>
              <tr>
                <td>Ritika Sahu</td>
                <td>+91 6260169681</td>
              </tr>
            </tbody>
          </table>
        }
      />
    </main>
  );
};

export default page;
