// import ContactCard from "@/components/ContactCard";
// import CardHoverEffectDemo from "@/components/cardTrackhover";
import React from 'react';
import Header from '@/components/Header';
// import AnimatedTooltipPreview from "@/components/AnimatedToolTip6";
import '@/app/schedule/jasghdhsaa.css';
import ScheduleTimelineCards from '@/components/ScheduleTimelineCards';

const page = () => {
  let data = [
    {
      id: 1,
      date: '1-6 May, 2021',
      heading: 'Registration',
      paragraph:
        'Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy :',
    },
    {
      id: 2,
      date: '1-6 May, 2021',
      heading: 'Registration',
      paragraph:
        'Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy :',
    },
    {
      id: 3,
      date: '1-6 May, 2021',
      heading: 'Registration',
      paragraph:
        'Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy :',
    },
    {
      id: 4,
      date: '1-6 May, 2021',
      heading: 'Registration',
      paragraph:
        'Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy :',
    },
    {
      id: 5,
      date: '1-6 May, 2021',
      heading: 'Registration',
      paragraph:
        'Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy :',
    },
    {
      id: 6,
      date: '1-6 May, 2021',
      heading: 'Registration',
      paragraph:
        'Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy :',
    },
    {
      id: 7,
      date: '1-6 May, 2021',
      heading: 'Registration',
      paragraph:
        'Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy :',
    },
  ];
  return (
    <div className="w-full p-10 ">
      <Header />
      <p>Schedule</p>
      <section>
        <div className="bg-transparent text-white py-8">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p className="ml-2 text-yellow-300 uppercase tracking-loose">
                Working Process
              </p>
              <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
                Working Process of Fest
              </p>
              <p className="text-sm md:text-base text-gray-50 mb-4">
                Here’s your guide to the tech fest 2021 process. Go through all
                the steps to know the exact process of the fest.
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
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border BorR"
                    // style="right: 50%; border: 2px solid #FFC100; border-radius: 1%;"
                  ></div>
                  <div
                    className="border-2-2 border-yellow-555 absolute  h-full border BorL"
                    // style="left: 50%; border: 2px solid #FFC100; border-radius: 1%;"
                  ></div>
                  {data.map((i, K) => {
                    return (
                      <ScheduleTimelineCards
                        key={i.id}
                        id={i.id}
                        date={i.date}
                        heading={i.heading}
                        paragraph={i.paragraph}
                      />
                    );
                  })}
                </div>
                <img
                  className="mx-auto -mt-36 md:-mt-36"
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
