'use client';
// import ContactCard from "@/components/ContactCard";
// import CardHoverEffectDemo from "@/components/cardTrackhover";
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
// import AnimatedTooltipPreview from "@/components/AnimatedToolTip6";
import '@/app/schedule/jasghdhsaa.css';
import ScheduleTimelineCards from '@/components/ScheduleTimelineCards';

const page = () => {
  const [WinWidth, setWinWidth] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWinWidth(window.innerWidth < 500);
    }
  }, []);

  return (
    <div className="w-full p-10 ">
      <Header />
      <p>Schedule</p>
      <section>
        <div className="bg-transparent text-white py-8">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 p-8 shadow-2xl shadow-red-500">
              <p className="ml-2 text-yellow-300 uppercase tracking-loose">
                Schedule
              </p>
              <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
                Schedule of Technorollix2024
              </p>
              <p className="text-sm md:text-base text-gray-50 mb-4">
                Here’s your guide to the tech & cultural fest 2024 process.
              </p>
              <a
                href="#"
                className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
              >
                Explore Now
              </a>
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-5 md:p-10 h-full">
                  <div
                    className={`border-2-2 border-yellow-555 absolute h-full border ${
                      WinWidth ? 'BorMob' : 'BorR'
                    }`}
                    // style="right: 50%; border: 2px solid #FFC100; border-radius: 1%;"
                  ></div>
                  <div
                    className={`border-2-2 border-yellow-555 absolute  h-full border ${
                      WinWidth ? 'BorMob' : 'BorL'
                    }`}
                    // style="left: 50%; border: 2px solid #FFC100; border-radius: 1%;"
                  ></div>
                  {events.map((i, K) => {
                    return (
                      <ScheduleTimelineCards
                        key={i.id}
                        id={i.id}
                        datetime={i.datetime}
                        event_name={i.event_name}
                        venue={i.venue}
                        WinWidthBool={WinWidth}
                      />
                    );
                  })}
                </div>
                <img
                  className="mx-auto -mt-16 md:-mt-36"
                  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;

const events = [
  {
    id: 1,
    datetime: '20th March, 10:00 AM',
    venue: 'Babuji Chowk',
    event_name: 'Opening Ceremony & Tech-Lab: Model Presentation',
  },
  {
    id: 2,
    datetime: '20th March, 11:00 AM',
    venue: 'Central Library',
    event_name: 'KalaKriti (Exhibition, Colour Painting, and Bottle Painting)',
  },
  {
    id: 3,
    datetime: '20th March, 11:30 AM',
    venue: 'EE Seminar Hall (FB-14)',
    event_name: 'Ideathon',
  },
  {
    id: 4,
    datetime: '20th March, 11:30 AM',
    venue: 'Cafeteria',
    event_name: 'Master Chef (Round 1)',
  },
  {
    id: 5,
    datetime: '20th March, 12:30 PM',
    venue: 'TB-01',
    event_name: 'Hackathon',
  },
  {
    id: 6,
    datetime: '20th March, 1:30 PM',
    venue: 'Bus Parking Area',
    event_name: 'Roadies (Round 1)',
  },
  {
    id: 7,
    datetime: '20th March, 1:30 PM',
    venue: 'Mock CID University Campus',
    event_name: 'Mock CID',
  },
  {
    id: 8,
    datetime: '20th March, 2:00 PM',
    venue: 'MP Hall',
    event_name: 'Brainy Escape',
  },
  {
    id: 9,
    datetime: '20th March, 2:30 PM',
    venue: 'TB-09',
    event_name: 'Codigo',
  },
  {
    id: 10,
    datetime: '20th March, 3:00 PM',
    venue: 'Opposite Gym',
    event_name: 'Nukkad Natak',
  },
  {
    id: 11,
    datetime: '20th March, 6:30 PM',
    venue: 'University Playground',
    event_name: 'Inaugural Function',
  },
  {
    id: 12,
    datetime: '20th March, 7:30 PM',
    venue: 'University Playground',
    event_name: 'Antaragni + Aaghaaz',
  },
  {
    id: 13,
    datetime: '21st March, 10:00 AM',
    venue: 'Babuji Chowk',
    event_name: 'Robo Soccer',
  },
  {
    id: 14,
    datetime: '21st March, 10:30 AM',
    venue: 'EE Seminar Hall (FB-14)',
    event_name: 'RJ Hunt (Round 1)',
  },
  {
    id: 15,
    datetime: '21st March, 11:00 AM',
    venue: 'Library Lawn & opposite to Chemistry lab',
    event_name: 'KalaKriti (Decoration, Photorollix & Rangoli)',
  },
  {
    id: 16,
    datetime: '21st March, 11:00 AM',
    venue: 'Cafeteria',
    event_name: 'Master Chef (Finale)',
  },
  {
    id: 17,
    datetime: '21st March, 11:30 AM',
    venue: 'TB-09',
    event_name: 'Codigo',
  },
  {
    id: 18,
    datetime: '21st March, 11:30 AM',
    venue: 'MP Hall',
    event_name: 'Yuva Sabha (Round 1)',
  },
  {
    id: 19,
    datetime: '21st March, 12:00 PM',
    venue: 'TB-04,05,06,07',
    event_name: 'Game Fusion',
  },
  {
    id: 20,
    datetime: '21st March, 2:00 PM',
    venue: 'Treasure Hunt Opposite to CDC office garden',
    event_name: 'Treasure Hunt',
  },
  {
    id: 21,
    datetime: '21st March, 2:00 PM',
    venue: 'Bus Parking Area',
    event_name: 'Roadies (Round 2)',
  },
  {
    id: 22,
    datetime: '21st March, 2:30 PM',
    venue: 'Live Classroom',
    event_name: 'Start-up Business Plan',
  },
  {
    id: 23,
    datetime: '21st March, 2:30 PM',
    venue: 'G-08 (Modeling & Simulation Lab)',
    event_name: 'Brainy Escape',
  },
  {
    id: 24,
    datetime: '21st March, 3:00 PM',
    venue: 'Volleyball Court',
    event_name: 'Robo Race',
  },
  {
    id: 25,
    datetime: '21st March, 6:30 PM',
    venue: 'University Playground',
    event_name: 'Antaragni',
  },
  {
    id: 26,
    datetime: '22nd March, 10:00 AM',
    venue: 'Babuji Chowk',
    event_name: 'Robo War',
  },
  {
    id: 27,
    datetime: '22nd March, 10:00 AM',
    venue: 'MP Hall',
    event_name: 'Talent Hunt',
  },
  {
    id: 28,
    datetime: '22nd March, 10:30 AM',
    venue: 'EE Seminar Hall (FB-14)',
    event_name: 'RJ Hunt (Finale)',
  },
  {
    id: 29,
    datetime: '22nd March, 11:00 AM',
    venue: 'Bus Parking Area',
    event_name: 'Roadies (Round 3)',
  },
  {
    id: 30,
    datetime: '22nd March, 12:00 PM',
    venue: 'TB-04,05,06,07',
    event_name: 'Game Fusion',
  },
  {
    id: 31,
    datetime: '22nd March, 1:30 PM',
    venue: 'MP Hall',
    event_name: 'Yuva Sabha (Finale)',
  },
  {
    id: 32,
    datetime: '22nd March, 4:00 PM',
    venue: 'Babuji Chowk',
    event_name: 'Aero Drone',
  },
  {
    id: 33,
    datetime: '22nd March, 6:30 PM',
    venue: 'OAT',
    event_name:
      'Valedictory Function, Prize Distribution, Sports, Academic and Annual Awards',
  },
  {
    id: 34,
    datetime: '22nd March, 8:00 PM',
    venue: 'University Playground',
    event_name: 'JUnoon, Celebrity Night by Pawandeep & Arunita',
  },
];
