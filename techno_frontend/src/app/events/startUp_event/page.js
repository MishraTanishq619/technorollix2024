import React from 'react';
import EventsDetails from '../detsEvents';
import Header from '@/components/Header';
import { BackgroundBeams } from '@/components/ui/background-beams';

const page = () => {
  return (
    <main className="w-full h-screen">
      <Header />
      {/* <div className="w-full h-screen py-24 bg-cover  bg-center bg-[url('/mainbg.jpg')]  flex flex-wrap gap-10 items-center justify-evenly overflow-scroll"> */}
      {/* <BackgroundBeams /> */}
      <EventsDetails
        imageLink="../posters/roadiesPoster.png"
        heading="STARTUP BUSINESS PLAN"
        theme={
          <div data-v-bf39338c="" className="detail-rules">
            <h2 data-v-bf39338c="">THEME</h2>{' '}
            <p data-v-bf39338c="">Unleash your Entrepreneurial Caliber</p>
          </div>
        }
        judgeMentalCriteria={
          <div data-v-bf39338c="" className="detail-rules">
            <h2 data-v-bf39338c="">JUDGEMENTAL CRITERIA</h2>{' '}
            <p data-v-bf39338c="">
              Parameters will be set by the Organizing Committee after the
              experts/start-up founders.
            </p>
          </div>
        }
        paragraph="The purpose of the event is to provide students with practical experience so they may present their Start-up plans in one of two categories—seed or early-stage. Based on the market opportunity and concept validity of the plan, judges will assess the seed category. Entrepreneurs in the early-stage category, who have more developed company models, will be judged. The best pitches will walk away with Cash Prizes and Mentoring Opportunities."
        rules={
          <div data-v-bf39338c="" className="detail-rules">
            <h2 data-v-bf39338c="">RULES AND ROUNDS</h2>
            <ul data-v-bf39338c="">
              <li data-v-bf39338c="">
                The competition is open for teams comprising graduate &amp;
                postgraduate students.
              </li>
              <li data-v-bf39338c="">
                A maximum of four members (Founders) are permitted in a team. No
                change of team structure is permitted after the team is
                registered.
              </li>
              <li data-v-bf39338c="">
                One participant cannot be part of more than one team.
              </li>{' '}
              <li data-v-bf39338c="">
                One of the team members should be registered as the team leader.
              </li>
              <li data-v-bf39338c="">
                There will be a Shortlisting of Participants, at the time of
                registration participants are required to mention about their
                start-up plan, Only selected start-up plan/start-ups will be
                considered for Final Presentation in front of the Panel Members.
              </li>
              <li data-v-bf39338c="">
                Maximum 15 slides of power point presentation are allowed for
                presentaing the Start-up Plan/Start-up (If Any).
              </li>
              <li data-v-bf39338c="">
                Maximum 15 minutes per team will be giben for presenting the
                start-up plan/start-up.
              </li>
              <li data-v-bf39338c="">
                Participants must carry their Laptop for presentation.
              </li>{' '}
              <li data-v-bf39338c="">
                Selected Start-ups may be considered for Incubation under OPJU
                Innovation Center.
              </li>
            </ul>
          </div>
        }
        arrangement={1}
      />
    </main>
  );
};

export default page;
