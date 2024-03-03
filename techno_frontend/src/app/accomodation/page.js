// import ContactCard from "@/components/ContactCard";
// import CardHoverEffectDemo from "@/components/cardTrackhover";
import React from 'react';
import Header from '@/components/Header';

const page = () => {
  return (
    <div className="w-full p-10 flex flex-wrap justify-evenly gap-6">
      <Header />
      {/* <p className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-white bg-opacity-15 text-center text-2xl xsm:text-3xl smtext-5xl: md:text-7xl p-10 neon-text-red">
        Accomodation: <p className="m-4">'To be Updated'</p>
      </p> */}

      <AccommodationInfo />
    </div>
  );
};

export default page;

const AccommodationInfo = () => {
  return (
    <div className="container absolute md:top-1/2 left-1/2 -translate-x-[50%] my-10 md:-translate-y-[50%] rounded-lg border-2 border-red-500 mx-auto px-4 py-8 text-white bg-white bg-opacity-25 ">
      <h2 className="text-3xl font-bold mb-4 w-full text-center underline">
        Accomodation Facilities at Technorollix 2024!
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
    </div>
  );
};
