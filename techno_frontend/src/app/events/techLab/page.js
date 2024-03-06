'use client';
import React, { useEffect, useState } from 'react';
import EventsDetails from '../detsEvents';
import Header from '@/components/Header';
import { BackgroundBeams } from '@/components/ui/background-beams';

const page = () => {
  const eventId = 'event-Tech Lab-202403';
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
      {/* <div className="w-full h-screen py-24 bg-cover  bg-center bg-[url('/mainbg.jpg')]  flex flex-wrap gap-10 items-center justify-evenly overflow-scroll"> */}
      {/* <BackgroundBeams /> */}
      <EventsDetails
        imageLink="../posters/techLab.png"
        prize={45000}
        heading="TECH LAB"
        paragraph={
          <>
            <p>
              Tech Lab is one of the most prestigious events of Technorollix,
              which is the biggest tech festival in central India. The event
              shows the creativity and potential of bright minds from different
              universities through their self- developed model. Creating a
              technical model presentation involves effectively communicating
              the details, functionality, and significance of a technical model
              to a diverse audience, which may include technical and
              non-technical stakeholders.
            </p>
          </>
        }
        subHeading=""
        theme={<p>Science and Technology</p>}
        subEventHeading={
          <>
            <p>EVENT CATEGORIES</p>
          </>
        }
        subEvents={
          <>
            <li>Working models</li>
            <li>Non-Working models</li>
            <li>Poster Presentations</li>
            <li>App Making</li>
          </>
        }
        reasonHeading={
          <>
            <p>REASON WHY YOU SHOULD PARTICIPATE?</p>
          </>
        }
        reason={
          <>
            <li>Exciting prizes for the winners worth ₹45,000.</li>
            <li>Funding opportunity for innovative prototypes*.</li>
            <li>
              Recognition certificates for all participating Universities from
              OPJU innovation centre*.
            </li>
            <li>
              Participating Certificate will be given to all the participants.
            </li>
            <li>Special category-wise winning prizes.</li>
            <li>Time to get new-age experience and innovation.</li>
            <li>
              Reimbursement of a one-way Sleeper class fair for all the outside
              participants of Tech Lab.
            </li>
            <p>*Subjected to terms and conditions of OPJU Innovation Centre.</p>
          </>
        }
        rulesHeading={'Rules and Rounds of the Event:'}
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
              All the exhibits must reach the venue one hour before the
              prescribed time to install all the necessary components for their
              model.
            </li>
            <li>A maximum of 4 participants are allowed in each team.</li>
            <li>
              The exhibit should be a creation of the student, which either
              illustrates or demonstrates a novel cause.
            </li>
            <li>
              Exhibits must be confined to an area. Tables and Electricity
              connection will be provided.
            </li>
            <li>
              No exhibits should be dismantled or removed till the end of the
              competition.
            </li>
            <li>
              Highly flammable and toxic substances are not allowed, if so, the
              application must be submitted prior.
            </li>
            <li>Every participant must maintain the decorum of the event.</li>
            <li>
              External and Internal judges panel will take the final call.
            </li>
          </>
        }
        rounds={''}
        judgeMentalCriteria={<p>Innovative Idea</p>}
        eventVenue={<p>Babuji Chauwk</p>}
        studentCoordinator={<p></p>}
        eventManagers={
          <table>
            <tbody>
              <tr>
                <td>Ayush Kumar Mishra</td>
                <td>+91 7974916570</td>
                {/* <td>himanshu.vaishnaw@opju.ac.in</td> */}
              </tr>
              <tr>
                <td>Prince Singh</td>
                <td>+91 7067927558</td>
                {/* <td>himanshu.vaishnaw@opju.ac.in</td> */}
              </tr>
              <tr>
                <td>Sunny Kumar Sahu</td>
                <td>+91 6268336318</td>
                {/* <td>himanshu.vaishnaw@opju.ac.in</td> */}
              </tr>
              <tr>
                <td>Abhishek Dhankar</td>
                <td>+91 8770919281</td>
                {/* <td>himanshu.vaishnaw@opju.ac.in</td> */}
              </tr>
            </tbody>
          </table>
        }
        // facultyCoordinators={<p>Dr.Himanshu Vaishnaw  -  9713863587 himanshu.vaishnaw@opju.ac.in </p>}
        facultyCoordinators={
          <table>
            <tbody>
              <tr>
                <td>Dr. L R Bhandarkar</td>
                <td>+91 9109977042</td>
                {/* <td>example@opju.ac.in</td> */}
              </tr>
            </tbody>
          </table>
        }
        staffCoordinators={<p></p>}
      />
    </main>
  );
};

export default page;
