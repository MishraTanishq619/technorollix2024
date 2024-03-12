// import ContactCard from "@/components/ContactCard";
// import CardHoverEffectDemo from "@/components/cardTrackhover";
import React from 'react';
import Header from '@/components/Header';
import { HoverEffect } from '@/components/ui/card-hover-effect';

const page = () => {
  return (
    <div className="w-full p-10 flex flex-wrap justify-evenly gap-6">
      <Header />
      {/* <p className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-white bg-opacity-15 text-center text-2xl xsm:text-3xl smtext-5xl: md:text-7xl p-10 neon-text-red">
        Accomodation: <p className="m-4">'To be Updated'</p>
      </p> */}

      {/* <JunoonInfo /> */}
      <JunoonEvent />
    </div>
  );
};

export default page;

const JunoonEvent = () => {
  return (
    <div className="container  mt-20 mb-10  rounded-lg border-2 border-red-500 mx-auto px-4 py-8 text-white bg-white bg-opacity-25  ">
      <h1 className="text-4xl sm:text-6xl neon-text-red font-bold mb-4 w-full text-center underline">
        JUNOON
      </h1>
      <div className="flex flex-col md:flex-row justify-around items-center gap-5 md:gap-0 my-10">
        <img
          src="/junoonPic1.jpg"
          alt=""
          className="w-[95%] md:w-[47%] md:h-[43rem] border-2 border-red-600 shadow-lg shadow-red-600 rounded-2xl"
        />
        <img
          src="/junoonPic2.jpg"
          alt=""
          className="w-[95%] md:w-[47%] md:h-[43rem] border-2 border-red-600 shadow-lg shadow-red-600 rounded-2xl"
        />
      </div>
      <p className="mb-6">
        OPJU Junoon is an annual cultural extravaganza hosted by the O.P. Jindal
        University (OPJU) in Chhattisgarh, India. This vibrant event showcases
        the diverse talents of people across various domains including music and
        dance. In 2018, We had Shirley Sethia. In 2020, we had Jubin Nautiyal
        and Sunburn and in the year 2023, we had DJ Perisha.
      </p>

      <h2 className="text-xl font-bold mb-2">Pawandeep Rajan</h2>
      <p className="mb-4">
        Pawandeep Rajan, an exceptionally talented singer from Uttarakhand,
        captured hearts and emerged victorious as the winner of Indian Idol
        Season 12. His soulful renditions, versatility, and humble demeanor
        endeared him to audiences across the nation. Pawandeep's journey on the
        reality singing competition was marked by captivating performances that
        showcased his impeccable vocal range and emotive delivery. His ability
        to infuse traditional Indian melodies with contemporary flair earned him
        widespread acclaim. As the Indian Idol winner, Pawandeep's success not
        only catapulted him to stardom but also inspired countless aspiring
        singers, cementing his legacy as a true musical prodigy in the hearts of
        millions.
      </p>

      <h2 className="text-xl font-bold mb-2">Arunita Kanjilal</h2>
      <p className="mb-4">
        Arunita Kanjilal, a gifted singer from West Bengal, rose to prominence
        as a finalist on Indian Idol. Her enchanting voice, coupled with her
        captivating stage presence, mesmerized audiences throughout the
        competition. Arunita's performances showcased her versatility, as she
        effortlessly navigated through various musical genres with grace and
        precision. Her ability to convey emotion through her singing touched the
        hearts of viewers across the nation. Despite facing stiff competition,
        Arunita's talent and determination propelled her to the upper echelons
        of the competition, earning her widespread admiration and support. Her
        journey on Indian Idol serves as a testament to her musical prowess and
        unwavering passion for singing.
      </p>

      <h2 className="text-xl font-bold mb-2">Emcee Aman</h2>
      <p className="mb-4">
        Aman Sahu is a Raipur based award-winning TV and event anchor/presenter.
        He has an enthusiastic, lively personality that is filled with a fine
        mix of Confidence, Wit, Warmth and Talent. He has hosted for brands like
        Samsung, JSW, Sunburn, etc. He has also collaborated with Atrangi Band.
      </p>

      <h2 className="text-xl font-bold mb-2">DJ Hemant</h2>
      <p className="mb-4">
        DJ Hemant brings a unique blend of talent and skill to any event,
        enhancing the atmosphere. He has great music selection, versatility,
        creates memorable moments, etc. He brings people together. He also has
        collaborated with Atrangi Band.
      </p>

      <h3 className="text-lg font-bold mb-2">Co-ordinators:</h3>
      <HoverEffect items={items} className={'md:w-full md:justify-around'} />
    </div>
  );
};

export const items = [
  {
    id: 1,
    image: '/junoon/junoonVikash.jpeg',
    title: 'Dr. Vikash Kumar',
    role: 'Faculty Co-ordinator',
    link: '',
  },
  {
    id: 2,
    image: '/junoon/junoonMithlesh.jpeg',
    title: 'Mithilesh Sahu',
    role: 'Faculty Co-ordinator',
    link: '',
  },
  {
    id: 3,
    image: '/junoon/junoonYogendra.jpeg',
    title: 'Yogendra Karsh',
    role: 'Student Co-ordinator',
    link: '',
  },
];

const JunoonInfo = () => {
  return (
    <div className="container absolute md:top-1/2 left-1/2 -translate-x-[50%] my-10 md:-translate-y-[50%] rounded-lg border-2 border-red-500 mx-auto px-4 py-8 text-white bg-white bg-opacity-25 ">
      <h2 className="text-3xl font-bold mb-4 w-full text-center underline">
        Junoon at Technorollix 2024!
      </h2>
      <p className="text-lg mb-8">
        We are thrilled to invite participants from all over the world to join
        us for our annual technical and cultural fest, Technorollix 2024, hosted
        by OP Jindal University.
      </p>

      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Accommodation Options:</h3>
        <p className="mb-2">1. On-Campus Accommodation:</p>
        <p className="mb-2">2. Off-Campus Guesthouses</p>
        <p className="mb-2">3. Hostels and Backpacker Lodges:</p>
      </div>

      <p className="text-lg mb-4">
        To ensure a seamless experience during your stay, we recommend
        researching accommodation options in advance and making reservations as
        early as possible. Additionally, consider factors such as proximity to
        the Technorollix venue, transportation options, and amenities offered
        when choosing your accommodation.
      </p>

      <p className="text-lg mb-4">
        At Technorollix 2024, we are committed to providing a welcoming and
        inclusive environment for all participants. Whether you're here to
        showcase your technical prowess, celebrate diverse cultures, or simply
        explore new horizons, we look forward to hosting you at our university
        and making your Technorollix experience unforgettable.
      </p>

      <p className="text-lg">
        For further assistance or inquiries regarding accommodation options,
        feel free to reach out to our event organizers who will be happy to
        assist you. We can't wait to welcome you to Technorollix 2024 and embark
        on an exciting journey together!
      </p>
      <br></br>
      <p className="text-lg">
        For Outsider Participants the link to apply for accomodation will be
        provided along with the confirmation mail after registration.
      </p>
      <p className="text-lg">For any query contact: -</p>
      <table>
        <tbody>
          <tr>
            <td>Vishal Singh</td>
            <td>+91 7488041613</td>
          </tr>
          <tr>
            <td>Navneet Tripathy</td>
            <td>+91 7489462029</td>
          </tr>
          <tr>
            <td>Pranjal Acharya</td>
            <td>+91 9752299711</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
