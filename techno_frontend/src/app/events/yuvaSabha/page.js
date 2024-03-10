'use client';
import React, { useEffect, useState } from 'react';
import EventsDetails from '../detsEvents';
import Header from '@/components/Header';
import { BackgroundBeams } from '@/components/ui/background-beams';

const page = () => {
  const eventId = 'event-Yuva Sabha-202403';
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

<<<<<<< HEAD
	const eventId = 'event-Yuva Sabha-202403';
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
				imageLink="../posters/yuvaSabha.png"
				prize={9000}
				heading="YUVA SABHA 2024"
				paragraph={<><p>Welcome to Yuva Sabha, a stage where youth voices echo with 
					passion and conviction. On 20th March, 2024 let’s ignite change 
					through intellect and discourse. </p></>}
				// subHeading="“Where Minds Clash and Ideas Illuminate”"
				theme={<p>“Where Minds Clash and Ideas Illuminate”</p>}
				rulesHeading={"Points to note:"}
				rules={<><ul>
					<li>
					This is a debate competition, participants who are interested must register for this debate competition.
					</li>
					<li>
					Interesting cash prize and mementos to be given and will be announced soon.
					</li>
					<li>
					No use of any abusive language is allowed.
					</li>
					<li>
					The event trailer is to be launched soon.
					</li>
					<li>
					This event is one of the most participated event in the university. So start making your team (min 2 - max 4).
					</li>
					<li>
					Book your slots as the slots are limited.
					</li>
					<li>
					A guest judge will be announced soon.
					</li>
					<li>
					For any query contact the managers and coordinators (details are given below).
					</li>
					<li>
					There will be a dress code which will be announced soon. 
					</li>
					</ul>
				</>}
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
				roundsHeading={"Rules of the event:"}
				rounds={<>
				<ul>
				<li>A limited time will be given to speak for/against the topic which will be followed strictly.</li>
				<li>Have respectful behaviour, including no interruption, personal attacks or excessive time-keeping.</li>
				<li>A team will be disqualified for violating any rules such as disregarding etiquettes and getting side-tracked.</li>
				<li>Preparation time will be given before each round.</li>
				<li>Reach 30 mins before the event starts.</li>
				</ul>
				<h1 className="neon-text-red-light">Rounds: There will be 3 rounds</h1>
				<ul>
					<li>1<sup>st</sup> ROUND - Diplomatic enquiry (Quiz) in online mode.</li>
					<li>2<sup>nd</sup> and 3<sup>rd</sup> ROUND WILL BE DECLARED BEFORE 2-3 DAYS.</li>
				</ul>
				</>}
				judgeMentalCriteria={<>
					<p>It will be based on following parameters:</p>
					<ul>
						<li>The strength and clarity of the arguments presented by each participant.</li>
						<li>The use of relevant evidence, examples, and statistics to support arguments.</li>
						<li>The ability to engage the audience and maintain interest throughout the debate.</li>
						<li>Following the rules and format of the competition. </li>
						<li>Overall impact and effectiveness of the participant’s performance in influencing the audience and judges.</li>
					</ul>
				</>}
				eventVenue={<p>MP Hall</p>}
				facultyCoordinators={<table>
					<tbody>
						<tr>
							<td>Dr B.P. Panda </td>
							<td>+91 9438560357</td>
						</tr>
					</tbody></table>}
				eventManagers={<table>
					<tbody>
						<tr>
							<td>Mr. Jeet B Bhayani </td>
							<td>+91 8777676808</td>
						</tr>
					</tbody></table>}
			/>
		</main>
	);
=======
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
        imageLink="../posters/yuvaSabha.png"
        prize={9000}
        heading="YUVA SABHA 2024"
        paragraph={
          <>
            <p>
              Welcome to Yuva Sabha, a stage where youth voices echo with
              passion and conviction. On 20th March, 2024 let’s ignite change
              through intellect and discourse.{' '}
            </p>
          </>
        }
        // subHeading="“Where Minds Clash and Ideas Illuminate”"
        theme={<p>“Where Minds Clash and Ideas Illuminate”</p>}
        rulesHeading={'Points to note:'}
        rules={
          <>
            <ul>
              <li>
                This is a debate competition, participants who are interested
                must register for this debate competition.
              </li>
              <li>
                Interesting cash prize and mementos to be given and will be
                announced soon.
              </li>
              <li>No use of any abusive language is allowed.</li>
              <li>The event trailer is to be launched soon.</li>
              <li>
                This event is one of the most participated event in the
                university. So start making your team (min 2 - max 4).
              </li>
              <li>Book your slots as the slots are limited.</li>
              <li>A guest judge will be announced soon.</li>
              <li>
                For any query contact the managers and coordinators (details are
                given below).
              </li>
              <li>There will be a dress code which will be announced soon.</li>
            </ul>
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
        roundsHeading={'Rules of the event:'}
        rounds={
          <>
            <ul>
              <li>
                A limited time will be given to speak for/against the topic
                which will be followed strictly.
              </li>
              <li>
                Have respectful behaviour, including no interruption, personal
                attacks or excessive time-keeping.
              </li>
              <li>
                A team will be disqualified for violating any rules such as
                disregarding etiquettes and getting side-tracked.
              </li>
              <li>Preparation time will be given before each round.</li>
              <li>Reach 30 mins before the event starts.</li>
            </ul>
            <h1 className="neon-text-red-light">
              Rounds: There will be 3 rounds
            </h1>
            <ul>
              <li>
                1<sup>st</sup> ROUND - Diplomatic enquiry (Quiz) in online mode.
              </li>
              <li>
                2<sup>nd</sup> and 3<sup>rd</sup> ROUND WILL BE DECLARED BEFORE
                2-3 DAYS.
              </li>
            </ul>
          </>
        }
        judgeMentalCriteria={
          <>
            <p>It will be based on following parameters:</p>
            <ul>
              <li>
                The strength and clarity of the arguments presented by each
                participant.
              </li>
              <li>
                The use of relevant evidence, examples, and statistics to
                support arguments.
              </li>
              <li>
                The ability to engage the audience and maintain interest
                throughout the debate.
              </li>
              <li>Following the rules and format of the competition. </li>
              <li>
                Overall impact and effectiveness of the participant’s
                performance in influencing the audience and judges.
              </li>
            </ul>
          </>
        }
        eventVenue={<p> The event will be at MP Hall, OPJU </p>}
        facultyCoordinators={
          <table>
            <tbody>
              <tr>
                <td>Dr. Biranchi Prasad Panda</td>
                <td>+91 9438560357</td>
              </tr>
              <tr>
                <td>Dr. Arindam Patra</td>
                <td>+91 9131167896</td>
              </tr>
              <tr>
                <td>Dr. Ravindra Singh Saluja</td>
                <td>+91 9007787434</td>
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
>>>>>>> 4659357 (team-page)
};

export default page;
