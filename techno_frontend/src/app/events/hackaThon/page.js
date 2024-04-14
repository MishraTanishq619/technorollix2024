'use client';
import React, { useEffect, useState } from 'react';
import EventsDetails from '../detsEvents';
import Header from '@/components/Header';
import { BackgroundBeams } from '@/components/ui/background-beams';

const page = () => {
  const eventId = 'event-Hackathon-202403';
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
        imageLink="../posters/hackaThon.png"
        prize={35000}
        heading="Hackathon – Sponsored by CodeForIT"
        paragraph={
          <>
            <p>
              The OPJU HackSprint 2024 is a hackathon event of OP Jindal
              University that aims to inspire students to use their creativity
              to develop innovative, cost-effective and practical solutions with
              code to create sustainable impact through technology.
            </p>{' '}
            <br />
            <h1 className="neon-text-red-light">
              PID 2405 (Theme: Disaster Management)
            </h1>{' '}
            <br />
            <h3 className="neon-text-red-light">
              Projection of the extent of inundation corresponding to the
              forecasts of flood levels in a river.
            </h3>{' '}
            <br />
            <p>
              Many states in India are regularly affected by flooding especially
              in monsoon season. Central Water Commission (CWC) issues flood
              warnings in all flood-prone districts based on the regularly
              measured water gauge level. Flood warnings are issued by CWC to
              the state administration, whenever the gauge levels cross the
              danger mark. In all such cases, the severity of the problem is
              essentially indicated in terms of flood levels. However, the major
              concern of the state administration is regarding the difficulty
              faced in assessing the spatial extent of flooding for mapping
              rescue and relief works. Large volumes of imagery corresponding to
              varied flood inundations are expected to be available with NRSA
              and other freely assessable sources. The past imageries
              corresponding to a specific forecast site can be collected and
              each imagery be stamped with the observed water level of that
              particular date and time. An AI-ML-based GIS application can be
              developed to process the available imageries for projecting new
              imageries using suitable interpolation/extrapolation of 2D
              information corresponding to specific flood levels within a given
              range. The participants of SIH are expected to develop the
              above-mentioned application using open-source software and
              demonstrate its utility for any one of the CWC’s forecast sites
              (List will be shared) with readily available imageries.
              Participants can also seek to add value by incorporating tools for
              making critical infrastructure, filtering outliers, pointing out
              accuracy levels of projected inundation, etc.
            </p>
            <br />
            <h1 className="neon-text-red-light">
              PID 2404 (Theme: Mental Health){' '}
            </h1>{' '}
            <br />
            <h3 className="neon-text-red-light">
              Mental health and well-being surveillance, assessment and tracking
              solution among children.
            </h3>{' '}
            <br />
            <p>
              Develop a model/software which will help students to assess mental
              health of students, build methods to find out and provide solution
              for the improvement.
            </p>
            <br />
            <h1 className="neon-text-red-light">
              PID 2403 (Theme: Web development){' '}
            </h1>{' '}
            <br />
            <h3 className="neon-text-red-light">
              Elevating Form Creation with Personalized Precision
            </h3>{' '}
            <br />
            <p>
              In today's digital age, collecting information through online
              forms is a common practice for various purposes, including
              surveys, registrations, feedback collection, and more. However,
              many existing form-building platforms lack flexibility and
              customization options for formdesigning, making it simple and
              common forms based on a basic UI design. The task is todevelop a
              web and/or mobile application that provides a highly customizable
              and user-friendlyplatform for creating and managing online forms,
              akin to Google Forms, but with optiontochange form Design and
              template for users{' '}
            </p>
            <br />
            <h1 className="neon-text-red-light">
              PID 2402 (Theme: Health & Fitness){' '}
            </h1>{' '}
            <br />
            <h3 className="neon-text-red-light">
              Fitness or Exercise Assistant.
            </h3>{' '}
            <br />
            <p>
              Create a user-friendly digital assistant that helps individuals
              achieve their fitness goals by providing personalized workout
              plans, tracking progress, offering nutritional guidance, and
              motivating users to stay active. The assistant should be
              accessible via mobile devices and incorporate features such as
              exercise demonstrations, goal setting, progress analytics, and
              reminders to ensure users stay on track with their fitness
              journey.{' '}
            </p>
            <br />
            <h1 className="neon-text-red-light">
              PID 2401 (Theme: Technology Integration in Education){' '}
            </h1>{' '}
            <br />
            <h3 className="neon-text-red-light">
              AI Harmony for Real-Time Emotional Analysis in Voice Streams
            </h3>{' '}
            <br />
            <p>
              In today's world, understanding human emotions is crucial for
              various applications, rangingfrom customer service to mental
              health support. However, accurately interpreting emotionsfrom
              vocal cues presents a significant challenge. In this hackathon,
              participants are taskedwithdeveloping an AI solution that can
              analyze live voice streams, accurately identify emotional tones,
              and provide meaningful statistical insights.{' '}
            </p>
            <br />
          </>
        }
        subHeading="“Don't worry about the results; focus only on your actions - a lesson from the Bhagavad Gita”"
        theme={<p>Embracing Diversity: Uniting Through Technology</p>}
        subEventHeading={
          <p className="neon-text-red-light">Rules and Regulations:</p>
        }
        subEvents={
          <>
            <li>
              <b>Team size: </b>Minimum of 2 & maximum 3 members are needed to
              participate in the hackathon.
            </li>
            <li>Working solutions will be considered.</li>
            <li>
              There will be 3 rounds and in each round - present your progress
              in detailed ppt.
            </li>
            <li>Code Plagarism will be checked</li>
            <li>Solutions credibility must be unique.</li>
            <li>One winning team per problem statement.</li>
            <li>
              Finale Round will be held during the Technorollix in front of Jury
              members
            </li>
            <li>
              Selected teams will get an opportunity to give presentation in
              front of invited judges.
            </li>
            <br />
          </>
        }
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
        // rulesHeading={'Rounds Details for Evaluation'}
        // rules={
        //   <>
        //     <h2>Round 1</h2>
        //     <li><b>Presentation of the Solution/ldea:</b>The basic solution provided by the team against the problem statement.</li>
        //     <li><b>Innovation:</b>Uniqueness and creativity of the solution.</li>
        //     <li><b>Solution Approach:</b>The roadmap or framework that guides the development or creation of asolution to a given problem.</li>
        //     <li><b>Technical Soundness/ Feasibility:</b>Strength and reliability of the technical aspects and Practicality and viability of implementation.</li>
        //     <li><b>Execution Time Line for Hackathon:</b>Blueprint of Prototype Completion Timeline with respect to the hackathon duration.</li><br />
        //     <h2>Round 2</h2>
        //     <li><b>Prototype Development:</b>Progress made in developing aworking prototype.</li>
        //     <li><b>Improvement:</b>Any changes or additions in the functionality of the product based on the feedback/suggestion provided by the evaluators/mentors.</li>
        //     <li><b>Integration:</b>How well different components work together.</li>
        //     <li><b>Usability:</b>User-friendliness and ease of adoption.</li>
        //     <li><b>Team work:</b>Contribution of the individual team member..</li><br />
        //     <h2>Round 3</h2>
        //     <li><b>Functionality / Relevance to the problem statement or Theme:</b>How well the prototype meets the specified requirements.</li>
        //     <li><b>Performance/ Final Demo:</b>Eficiency and effectiveness in real-world scenarios.
        //       Clarity, coherence, and persuasiveness of the presentation.
        //     </li>
        //     <li><b>User Experience/ Aesthetic and Design of the final product/ User ergonomics:</b>Quality of interaction and satisfaction for end-users.</li>
        //     <li><b>Market readiness/ impact:</b>The preparedness of a product, service, or solution to enter the market and make an impact.</li>
        //     <li><b>Implementation / Future Scope:</b>Strategy for putting the solution into action and its potential for the future development.</li><br />
        //   </>
        // }
        judgeMentalCriteria={
          <>
            <h2>Round 1</h2>
            <li>
              <b>Presentation of the Solution/ldea:</b>The basic solution
              provided by the team against the problem statement.
            </li>
            <li>
              <b>Innovation:</b>Uniqueness and creativity of the solution.
            </li>
            <li>
              <b>Solution Approach:</b>The roadmap or framework that guides the
              development or creation of asolution to a given problem.
            </li>
            <li>
              <b>Technical Soundness/ Feasibility:</b>Strength and reliability
              of the technical aspects and Practicality and viability of
              implementation.
            </li>
            <li>
              <b>Execution Time Line for Hackathon:</b>Blueprint of Prototype
              Completion Timeline with respect to the hackathon duration.
            </li>
            <br />
            <h2>Round 2</h2>
            <li>
              <b>Prototype Development:</b>Progress made in developing aworking
              prototype.
            </li>
            <li>
              <b>Improvement:</b>Any changes or additions in the functionality
              of the product based on the feedback/suggestion provided by the
              evaluators/mentors.
            </li>
            <li>
              <b>Integration:</b>How well different components work together.
            </li>
            <li>
              <b>Usability:</b>User-friendliness and ease of adoption.
            </li>
            <li>
              <b>Team work:</b>Contribution of the individual team member..
            </li>
            <br />
            <h2>Round 3</h2>
            <li>
              <b>
                Functionality / Relevance to the problem statement or Theme:
              </b>
              How well the prototype meets the specified requirements.
            </li>
            <li>
              <b>Performance/ Final Demo:</b>Eficiency and effectiveness in
              real-world scenarios. Clarity, coherence, and persuasiveness of
              the presentation.
            </li>
            <li>
              <b>
                User Experience/ Aesthetic and Design of the final product/ User
                ergonomics:
              </b>
              Quality of interaction and satisfaction for end-users.
            </li>
            <li>
              <b>Market readiness/ impact:</b>The preparedness of a product,
              service, or solution to enter the market and make an impact.
            </li>
            <li>
              <b>Implementation / Future Scope:</b>Strategy for putting the
              solution into action and its potential for the future development.
            </li>
            <br />
          </>
        }
        eventVenue={<p>TB-01</p>}
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
                <td>Nirmalya Kumar Patra</td>
                <td>+91 7978389641</td>
              </tr>
              <tr>
                <td>Kajal Gupta</td>
                <td>+91 9340616900</td>
              </tr>
              <tr>
                <td>Siddharth Mishra</td>
                <td>+91 7970234185</td>
              </tr>
              <tr>
                <td>Shrey Raj Singh</td>
                <td>+91 7587845520</td>
              </tr>
              <tr>
                <td>Priya Agrawal</td>
                <td>+91 9065939389</td>
              </tr>
              <tr>
                <td>Suryanshu Dobai</td>
                <td>+91 7008575068</td>
              </tr>
            </tbody>
          </table>
        }
      />
    </main>
  );
};

export default page;
