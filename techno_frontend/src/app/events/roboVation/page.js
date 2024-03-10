'use client';
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import { BackgroundBeams } from '@/components/ui/background-beams';
import SubEventsDetails from '../subEventsDetails';

const page = () => {
  const eventId = 'event-Robovation-202403';
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
      <SubEventsDetails
        imageLink="../posters/roboVation.png"
        prize={30000}
        heading="Robovation"
        paragraph={
          <>
            <p>
              Craft is the vehicle for expressing your vision. Craft is the
              visible edge of Art. Here we are with &quot; Kalakriti&quot; which
              is a unique Event driven by our artists&#39; ideas, the context of
              space, season and the vibes of the region, you will Perceive -
              &quot; Fiction turning into Reality&quot;. You are going to
              witness a different field of abstract painting, fine arts
              photography sculpture and many more....
            </p>
          </>
        }
        subHeading=""
        theme={<p>Compete to design and make powerful and efficient robots</p>}
        rulesHeading={'Events:'}
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
            <li>ROBO RACE</li>
            <li>ROBO SOCCER</li>
            <li>Robo war</li>
          </>
        }
        subEvents={
          <>
            <div className="my-5">
              <p className=" neon-text-red-light text-2xl font-bold md:text-3xl">
                ROBO RACE
              </p>
              <div
                className={`px-3 py-1 md:py-4 text-1rem md:text-4rem font-medium text-justify`}
              >
                <p>
                  Design a robot wireless or Bluetooth control within the
                  specified dimensions that can be operated manually and can
                  travel through all turns of the track. The robot that will
                  complete the specified task inthe least time will be the
                  winner. and not allowed to skip any obstacles or hurdles.
                </p>
              </div>
              <div className="mt-2 md:py-4 text-justify flex flex-wrap">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  VENUE:{' '}
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>Volleyball Court</div>
              </div>
              <div className="mt-2 md:py-4 text-justify">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  ROBOT SPECIFICATIONS:{' '}
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>
                  <li>
                    The maximum dimension of the robot can be 30cm x 30cm x20 cm
                    (l x b x h).
                  </li>
                  <li>The robot should be wireless.</li>
                  <li>Motor rpm specification 200rpm to 300 rpm.</li>
                  <li>Maximum weight must not exceed 3 kg.</li>
                  <li>
                    The participants will have to provide a power supply on
                    board (no additional power supply isaccepted).
                  </li>
                  <li>
                    The machine must not be made from Lego parts, or any
                    ready-made kit, if we find a suchmachine it will be
                    disqualified.
                  </li>
                  <li>The robot is wireless or Bluetooth Autonomous.</li>
                </div>
              </div>
              <div className="mt-2 md:py-4 text-justify">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  BATTERIES & POWER:{' '}
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>
                  <li>The bots must be powered electrically only.</li>
                  <li>
                    Batteries must be sealed, immobilized electrolyte type
                    (lithium, NiCad, or dry cells).
                  </li>
                  <li>
                    The electric voltage anywhere in the bot should not be more
                    then 12V DC at any point oftime.
                  </li>
                </div>
              </div>
              <div className="mt-2 md:py-4 text-justify">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  GENERAL RULES:{' '}
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>
                  <li>
                    This is a racing event so the fastest and most balanced
                    robot will win.
                  </li>
                  <li>Robot should be as per the given specifications.</li>
                  <li>Each team can have a maximum of Four members.</li>
                  <li>Students from different institutes can form a team.</li>
                  <li>
                    Each member of the team must contain the identity card of
                    his/her respective institute.
                  </li>
                  <li>The robot should not damage the arena.</li>
                  <li>No test practice will be allowed in the arena.</li>
                  <li>
                    The robot must not leave behind any of its parts during the
                    run; else it will result in disqualification.
                  </li>
                  <li>
                    Unethical behavior could lead to disqualification. Faculty
                    coordinators have all the rights to take final decisions for
                    any matter during the event. and Judge's decision will be
                    consideredfinal.
                  </li>
                  <li>
                    Certificates of Participation will be given to all the teams
                    participating in the event, but not to the teams that get
                    disqualified due to disobeying any of the competition rules.
                    *Coordination committee reservesthe right to add or update
                    any rule.
                  </li>
                </div>
              </div>
              <div className="md:py-4 text-justify ">
                <h2
                  className={`neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  TRACK SPECIFICATION:
                </h2>
                <div
                  className={`text-3rem ml-5 text-1xs md:text-1xl font-medium max-w-[85%]`}
                >
                  The length of the Track will be approximately 28 meters.
                </div>
                <div
                  className={`text-3rem ml-5 text-1xs md:text-1xl font-medium max-w-[85%]`}
                >
                  SAND AND STONE, RUMBLE STRIPS, WATER PRINKLERS, SMALL HOLES
                  COVERING ALL SIDES, SWITCH BRIDGES, SPEED BREAKERS, SLIPPERY,
                  CONNECTING BRIDGES, AND MANY MORE.
                </div>
              </div>
              <div className="mt-2 md:py-4 text-justify">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  GAME RULE:{' '}
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>
                  <li>
                    The competition is based on the time trail system. There
                    will be a qualifying round for each team.
                  </li>
                  <li>
                    The top team from the qualifying round makes it to the final
                    round on basis of time trials.
                  </li>
                  <li>
                    If any of the robots start off before start-up call, the
                    counter would be restarted and the machines will get a
                    second chance. If repeated again then team will be
                    disqualified.
                  </li>
                  <li>
                    Your robot must be ready when call is made for your team.
                  </li>
                  <li>
                    Team members will be allowed only four times to touch or
                    reset their robot’s position during the run. However this
                    will lead to a time penalty and timer will not stop during
                    this course of action.
                  </li>
                  <li>
                    The robot will be judged on basis of (in priority): - A Time
                    to complete the track. b).The number of checkpoints cleared.
                  </li>
                  <li>
                    Must not contain any readymade kits, pneumatic &hydraulic
                    systems, or IC engines.
                  </li>
                  <li>
                    Decisions about your robot will be taken by the organizers.
                  </li>
                  <li>
                    No team will get a second chance after completing the track
                    with a poor score.
                  </li>
                </div>
              </div>
            </div>
            <div className="my-5">
              <p className=" neon-text-red-light text-2xl font-bold md:text-3xl">
                ROBO SOCCER
              </p>
              <div
                className={`px-3 py-1 md:py-4 text-1rem md:text-4rem font-medium text-justify`}
              >
                <p>
                  Robo soccer is one of the Famous challenges of robovation in
                  this event teams comes with single robot and chase ball around
                  the big size of arena with the aim to kick more goals than the
                  opponent these games give opportunity to youngsters to solve
                  robotic challenges, built creative bots while learning
                  engineering technology. the most rewarding part of designing
                  bots is that student have fun, work together as a team and
                  robot specially design for robo soccer match. the event is
                  aimed at testing the flipping, kicking maneuvering skills and
                  control of the robot. The event mainly consists of ROUND 1 AND
                  ROUND 2.
                </p>
              </div>
              <div className="mt-2 md:py-4 text-justify flex flex-wrap">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  VENUE:{' '}
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>Babuji Chowk</div>
              </div>
              <div className="mt-2 md:py-4 text-justify">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  ROUND 1(ELIMINATION){' '}
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>
                  <li>
                    1 ball is placed at specified locations in the arena and 2
                    teams are allowed to enter the arena.
                  </li>
                  <li>only Selected 1 teams who scored high goals.</li>
                  <li>Time limit is 5 minutes.</li>
                  <li>
                    Participants can drive, push or hit the ball into any of the
                    goal posts (only two goal posts)
                  </li>
                  <li>Points = a number of goals.</li>
                  <li>
                    If the ball is hit out of the arena, then it will not be
                    placed back.
                  </li>
                </div>
              </div>
              <div className="mt-2 md:py-4 text-justify">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  ROUND 2:{' '}
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>
                  <li>
                    Only one ball will be placed at the center, robots are
                    initially placed at their respective goalposts.
                  </li>
                  <li>Time limit is 5 minutes.</li>
                  <li>1 no of goals = 5 points.</li>
                  <li>
                    Participants should hit the ball into the opponent’s goal to
                    score points.
                  </li>
                  <li>
                    Each participant can make as many as goals in the limited
                    time.
                  </li>
                  <li>
                    Robot gets negative points (2 points) each time when its
                    intentionally hitsthe opponent robot.
                  </li>
                  <li>
                    If the ball gets hit out of the arena, then a penalty shot
                    will be given to the opponent team (The opponent team will
                    heat the ball from where the ball was hit out of the arena).
                    And the second team will defend its goal. Judging criteria
                    for the final winner will be based on the number of goals
                    scored and the time is taken.
                  </li>
                </div>
              </div>
              <div className="mt-2 md:py-4 text-justify">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  ROBOT SPECIFICATIONS:{' '}
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>
                  <li>The robot should fit inside a box of 30cm*30cm*20cm.</li>
                  <li>Robot should not exceed 3 kg.</li>
                  <li>The robot can be wireless.</li>
                  <li>
                    The robot should be self-powered with a supply not exceeding
                    12V (on board powersupply).
                  </li>
                  <li>
                    Power supply (only DC) is allowed. Participants cannot draw
                    power fromoutside main(220v) power supply
                  </li>
                  <li>
                    Only one participant should control the robot No player can
                    be exchanged in the match.
                  </li>
                </div>
              </div>
              <div className="mt-2 md:py-4 text-justify">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  Rules and Regulations:{' '}
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>
                  <li>Team can have a maximum number of four members.</li>
                  <li>
                    Only one participant should control the robot. No players
                    can be exchanged in the middle of a match.
                  </li>
                  <li>
                    A robot can push or hit the ball. It cannot withhold or grab
                    the ball.
                  </li>
                  <li>Motor should be 200rpm to 300rpm.</li>
                  <li>
                    Human interference (e.g., touching the robot) during the
                    game is not allowed.
                  </li>
                  <li>
                    If there is any technical issue in the robot a technical
                    time-out will be given for 2 minutes.
                  </li>
                  <li>
                    Decisions of the Judges and Event Organizers shall be
                    treated as final and binding on all and cannot be contested.
                  </li>
                  <li>
                    The event coordinator is the match referee. He takes all the
                    decisions and participants have to abide by it.
                  </li>
                  <li>
                    No more AC/DC power supply will be provided at the sight of
                    play.
                  </li>
                  <li>
                    Coordinators reserve the right to ask for an explanation of
                    the robot. The coordinator can change the rules of the game
                    depending on the situation.
                  </li>
                  <li>
                    Rules & Regulations may change without prior notice, by the
                    Event organizers.
                  </li>
                  <li>
                    Positions of balls will be decided by the organizers on the
                    particular day ofthe event.
                  </li>
                  <li>The robot is wireless or autonomous.</li>
                </div>
              </div>
            </div>
            <div className="my-5">
              <p className=" neon-text-red-light text-2xl font-bold md:text-3xl">
                Robo war
              </p>
              <div
                className={`px-3 py-1 md:py-4 text-1rem md:text-4rem font-medium text-justify`}
              >
                <p>
                  Robo war is the most exciting challenge of this event It
                  celebrates the sport of Robotic Combat through a contest of
                  battling machines. This game gives the opportunity to
                  youngsters to design, build and control combat robots to
                  demonstrate their creativity, engineering skills and driving
                  ability.
                </p>
                <br />
                <p>
                  The most rewarding part of designing bots is that students
                  have fun, and work together as a team.
                </p>
              </div>
              <div className="mt-2 md:py-4 text-justify flex flex-wrap">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  VENUE:{' '}
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>Babuji Chowk</div>
              </div>
              <div className="mt-2 md:py-4 text-justify">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  FIELD DIMENSION
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>
                  <p>
                    The Battle ring is a fully enclosed 11 feet by 6 feet
                    rectangle raised 1 foot off the ground. The Battle Box door
                    is approximately level, Arena is open at the four sides of
                    the corner.
                  </p>
                </div>
              </div>
              <div className="mt-2 md:py-4 text-justify">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  Match Time Limits
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>
                  <p>
                    Unless a Match terminates early, the Match will last for 3
                    minutes of fighting time. The the time limit does not
                    include any time elapsed as a result of Timeouts.
                  </p>
                </div>
              </div>
              <div className="mt-2 md:py-4 text-justify">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  Early Termination
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>
                  <p>
                    A Match can be terminated early by Forfeit,
                    Disqualification, or Incapacitation. Tap Outs are not
                    allowed.
                  </p>
                </div>
              </div>
              <div className="mt-2 md:py-4 text-justify">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  THE BOT
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>
                  <p>
                    The team must build and bring one pre-constructed,
                    autonomous or wireless robot whose purpose is to push,
                    throw, Filip, hit, drag or otherwise move the opponent out
                    of the battle ring within the maximum battle time. The
                    following section details the rules and specifications
                    regarding the robot; please be sure to read them carefully
                    and refer to them as you design your robot.
                  </p>
                </div>
              </div>
              <div className="mt-2 md:py-4 text-justify">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  ROBOT SPECIFICATIONS:{' '}
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>
                  <li>The robot should fit inside a box of 50cm*50cm*30cm.</li>
                  <li>Robot should not exceed 5 kg.</li>
                  <li>Maximum no of 5 motors is used.</li>
                  <li>The robot is only wireless.</li>
                  <li>
                    The robot should be self-powered with a supply not exceeding
                    12V (onboard powersupply).
                  </li>
                  <li>
                    Power supply (only DC) is allowed. Participants cannot draw
                    power fromoutside the main(220v) power supply.
                  </li>
                  <li>
                    Only one participant should control the robot and No player
                    can be exchanged in the match.
                  </li>
                </div>
              </div>
              <div className="mt-2 md:py-4 text-justify">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  Duties:{' '}
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>
                  <li>
                    The captain asks the referee for timeouts if necessary.
                  </li>
                  <li>
                    The bot handler can substitute a bot during match play.
                  </li>
                  <li>
                    The bot handler asks the referee for permission to
                    substitute a bot in the next stoppage and, if the referee
                    agree, substitutes the bot.
                  </li>
                </div>
              </div>
              <div className="mt-2 md:py-4 text-justify">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  Rules and Regulations:{' '}
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>
                  <li>Team can have a maximum number of four members.</li>
                  <li>
                    Only one participant should control the robot. No players
                    can be exchanged in the middle of a match.
                  </li>
                  <li>
                    A robot can push or hit the opponent and move out of the
                    ring.
                  </li>
                  <li>Motor should be 200rpm to 300rpm.</li>
                  <li>
                    Human interference (e.g., touching the robot) during the
                    game is not allowed.
                  </li>
                  <li>
                    If there is any technical issue in the robot a technical
                    time-out will be given for 2 minutes.
                  </li>
                  <li>
                    Decisions of the Judges and Event Organizers shall be
                    treated as final and binding on all and cannot be contested.
                  </li>
                  <li>
                    The event coordinator is the match referee. He takes all the
                    decisions and participants have to abide by it.
                  </li>
                  <li>
                    No more AC/DC power supply will be provided at the sight of
                    play.
                  </li>
                  <li>
                    Coordinators reserve the right to ask for an explanation of
                    the robot. The coordinator can change the rules of the game
                    depending on the situation.
                  </li>
                  <li>
                    Rules & Regulations may change without prior notice, by the
                    Event organizers.
                  </li>
                </div>
              </div>
            </div>
            <div className="my-5">
              <p className=" neon-text-red-light text-2xl font-bold md:text-3xl">
                GAME RULE JUDGEMENT CRITERIA:
              </p>
              <div
                className={`px-3 py-1 md:py-4 text-1rem md:text-4rem font-medium text-justify`}
              >
                <li>
                  The competition is based on a time system. There will a
                  qualifying round for each team.
                </li>
                <li>
                  The most rewarding part of designing bots is that students
                  have fun, and work together as a team.
                </li>
                <li>
                  The top team from qualifying round will make it to the final
                  round on basis of no of times it moved out an opponent from
                  the ring.
                </li>
                <li>
                  If any of the robots starts off before start up call, the
                  counter would be restarted and the BOT will get a second
                  chance. If repeated again then team will be disqualified.
                </li>
                <li>
                  Your robot must be ready when call is made for your team.
                </li>
                <li>
                  Team members will be allowed only four times to touch or reset
                  their robots position during the run. However, this will lead
                  to a time penalty and timer will not stop during this course
                  of action.
                </li>
                <li>
                  The robot will be judged on the basis of (in priority): - The
                  Time taken to move out the opponent from the ring b) No of
                  times move out opponent from the ring.
                </li>
                <li>
                  Must not contain any readymade kits, pneumatic &hydraulic
                  systems, IC engines.
                </li>
                <li>
                  Decisions about your robot will be taken by the organizers.
                </li>
                <li>
                  No team will get a second chance after completing the game.
                </li>
                <li>The robot is wireless or Autonomous.</li>
                <li>
                  Certificates of Participation will be given to all the teams
                  participating in the event, but not to the teams that get
                  disqualified due to disobeying any of the competition rules.
                  *Co–ordination committee reserves the right to add or update
                  any rule.
                </li>
              </div>
            </div>
          </>
        }
        facultyCoordinators={
          <table>
            <tbody>
              <tr>
							<td>Dr Saroj Kumar </td>
							<td>+91 9431910388</td>
						</tr>
            </tbody>
          </table>
        }
        eventManagers={
          <table>
            <tbody>
              <tr>
                <td>Kevin B Kuriakose</td>
                <td>+91 9109089940</td>
              </tr>
              <tr>
                <td>Pratham Kumar Thawait</td>
                <td>+91 9399724654</td>
              </tr>
            </tbody>
          </table>
        }
      />
    </main>
  );
};

export default page;
