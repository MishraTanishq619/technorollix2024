'use client';
import React from 'react';
import EventsDetails from '../detsEvents';
import Header from '@/components/Header';
import { BackgroundBeams } from '@/components/ui/background-beams';

const page = () => {
  const eventId = 'event-Hackathon-202403';
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
        imageLink="../posters/hackaThon.png"
        prize={30000}
        heading="Hackathon – Sponsored by CodeForIT"
        paragraph={
          <>
            <p>
              Develop an AI solution capable of reading expressions in real-time
              from live video and voice inputs, and provide statistical analysis
              of the detected expressions.
            </p>{' '}
            <br />
            <h1 className="neon-text-red-light">Problem Statement 1:</h1> <br />
            <p>
              In today's world, understanding human emotions is crucial for
              various applications, ranging from customer service to mental
              health support. However, accurately interpreting emotions from
              both facial expressions and vocal cues presents a significant
              challenge. In this hackathon, participants are tasked with
              developing an AI solution that can analyze live video and voice
              streams, accurately identify facial expressions and emotional
              tones, and provide meaningful statistical insights.
            </p>
            <br />
            <h1 className="neon-text-red-light">Problem Statement 2:</h1> <br />
            <p>
              In today's digital age, collecting information through online
              forms is a common practice for various purposes, including
              surveys, registrations, feedback collection, and more. However,
              many existing form-building platforms lack flexibility and
              customization options, making it challenging for users to create
              forms tailored to their specific needs. The task is to develop a
              web and/or mobile application that provides a highly customizable
              and user-friendly platform for creating and managing online forms,
              akin to Google Forms, but with enhanced features and flexibility.
            </p>
            <br />
          </>
        }
        subHeading="“Don't worry about the results; focus only on your actions - a lesson from the Bhagavad Gita”"
        theme={<p>Embracing Diversity: Uniting Through Technology</p>}
        subEventHeading={<p className="neon-text-red-light">Key Components:</p>}
        subEvents={
          <>
            <li>
              <b>Real-time Data Processing:</b>Participants need to develop
              algorithms capable of processing live video and voice streams in
              real-time. This involves efficient data handling and processing to
              ensure minimal latency.
            </li>
            <li>
              <b>Expression Recognition:</b>The AI solution should accurately
              recognize a wide range of facial expressions, including happiness,
              sadness, anger, surprise, fear, and more. Additionally, it should
              analyze vocal cues such as tone, pitch, and intensity to infer
              emotional states.
            </li>
            <li>
              <b>Statistical Analysis: </b>Once expressions are detected, the AI
              should provide statistical analysis, including frequency of
              different expressions, trends over time, and correlations between
              facial expressions and vocal cues.
            </li>
            <li>
              <b>Customization Options: </b>Provide a wide range of
              customization options for form elements, including the ability to
              customize colors, fonts, sizes, and layout.
            </li>
            <li>
              <b>Conditional Logic: </b>Implement conditional logic features
              that enable users to show or hide form fields based on previous
              responses, making the forms more dynamic and interactive.
            </li>
            <li>
              <b>Multi-step Forms: </b>Support the creation of multi-step or
              multi-page forms to break down lengthy forms into smaller, more
              manageable sections, enhancing user experience.
            </li>
            <br />
          </>
        }
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
            <li>There will be a lockdown of 6-8 hours for all teams.</li>
            <li>
              The number of participants in a team should be of 5 members.
            </li>
            <li>Teams are not allowed to leave the venue during the event.</li>
            <li>
              Selected team may get an opportunity to work with our Sponsers.
            </li>
            <li>Use of multiple devices for testing is allowed.</li>
            <li>
              Time for 1<sup>st</sup>round is only 1 hour
            </li>
            <li>
              Time for 2<sup>nd</sup>round will be 3-4 hour
            </li>
            <li>
              Time for 3<sup>rd</sup>round will be 2-3 hour
            </li>
            <li>
              Participants are free to use any programming languages,
              frameworks, or tools to develop their solutions.
            </li>
          </>
        }
        roundsHeading={'Rounds:'}
        rounds={
          <>
            <p>There will be 3 rounds.</p>
            <ol className="list-decimal">
              <li>Work-Flow and approach</li>
              <li>Prototype Demontration</li>
              <li>Funtionality and Capability of model</li>
            </ol>
          </>
        }
        judgeMentalCriteria={
          <>
            <p className="neon-text-red-lighter">
              Judgement for 1<sup>st</sup> round will be based on:
            </p>
            <ul>
              <li>Presentation Skills</li>
              <li>Thinking capability</li>
              <li>Approach for multiple use cases</li>
            </ul>
            <p className="neon-text-red-lighter">
              Judgement for 2<sup>nd</sup> round will be based on:
            </p>
            <ul>
              <li>Working of camera speech recognition</li>
              <li>Real-time Processing Efficiency</li>
              <li>Team work</li>
            </ul>
            <p className="neon-text-red-lighter">
              Judgement for 3<sup>rd</sup> round will be based on:
            </p>
            <ul>
              <li>Accuracy of model</li>
              <li>UI/UX (most important for PS2)</li>
              <li>Statistical Insights Provided</li>
            </ul>
            <p>
              Note: Participation all team members are necessary for 2
              <sup>nd</sup> and 3<sup>rd</sup> round
            </p>
          </>
        }
        eventVenue={<p>TB-09</p>}
        facultyCoordinators={
          <table>
            <tbody>
              <tr>
                <td>Dr. R N Shukla</td>
                <td>+91 9826321667</td>
              </tr>
            </tbody>
          </table>
        }
        eventManagers={
          <table>
            <tbody>
              <tr>
                <td>Shrey Raj Singh</td>
                <td>+91 7587845520</td>
              </tr>
              <tr>
                <td>Kajal Gupta</td>
                <td>+91 9340616900</td>
              </tr>
              <tr>
                <td>Nikhil Patel</td>
                <td>+91 8305216569</td>
              </tr>
              <tr>
                <td>Shreeya Sharma</td>
                <td>+91 8602470239</td>
              </tr>
              <tr>
                <td>Anand Vishwakarma</td>
                <td>+91 7011472391</td>
              </tr>
              <tr>
                <td>Satendra Kumar</td>
                <td>+91 9301196473</td>
              </tr>
            </tbody>
          </table>
        }
      />
    </main>
  );
};

export default page;
