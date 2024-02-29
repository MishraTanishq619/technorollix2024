import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import React from 'react';

function AboutCard({
  imageLink = 'logo.png',
  paragraph = 'loredkjfbhsdjkfh skjdhf hsldkjfhskjdfhsdjfkdh skjdfhjsdfhsdfj kjds',
  heading = 'Headuoig',
  arrangement = 0,
}) {
  return (
    <CardContainer className="  flex flex-col hover:shadow-2xl hover:shadow-red-500 shadow-blue-300 shadow-2xl transition duration-100 hover:scale-110 items-center">
      {/* <AboutCard
			imageLink="logo.png"
			paragraph="loredkjfbhsdjkfh skjdhf hsldkjfhskjdfhsdjfkdh skjdfhjsdfhsdfj kjds"
			heading="Headuoig"
			arrangement={1}
		/> */}

      <CardBody
        id="about"
        className={`flex w-auto flex-wrap  h-auto border-2 p-3 border-neon-red inset-0 shadow-inner-red  ${'flex-row-reverse'}`}
      >
        <CardItem
          translateZ="-60"
          id="about-pic"
          className="w-full  h-1/3 py-4 md:py-10 flex justify-center items-center hover:shadow-2xl hover:shadow-red-500 transition duration-100 hover:scale-110 "
        >
          <img src={imageLink} className="h-80 w-full"></img>
        </CardItem>
        <CardItem
          translateZ="20"
          id="about-text"
          className="w-full px-4 h-full py-1 md:py-10 text-white  "
        >
          <CardItem
            translateZ="20"
            className="px-3 py-1 md:py-4 text-2xl md:text-5xl font-bold  "
          >
            {heading}
          </CardItem>
          <CardItem
            translateZ="20"
            className="px-3 py-4 md:py-4 text-1ls font-medium text-justify"
          >
            {paragraph}
          </CardItem>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

//
//
{
  /* <CardContainer className="inter-var w-96 m-3">
  <CardBody className="relative group/card hover:shadow-2xl hover:shadow-red-500 transition duration-100 hover:scale-110 shadow-2xl bg-[#0f09095d] border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-full rounded-xl p-6 border">
    <CardItem
      translateZ="60"
      className="text-xl font-bold text-neutral-600 text-white"
    >
      {title}
    </CardItem>
    <CardItem
      as="p"
      translateZ="70"
      className="text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300"
    >
      {description}
    </CardItem>

    <CardItem translateZ="100" className="w-1/2 mt-4 text-white">
      Price: {prize}
      <Image
        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        height="1000"
        width="1000"
        className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
        alt="Event Thumbnail"
      />
    </CardItem>
    <div className="flex justify-between items-center mt-5">
      <CardItem
        translateZ={40}
        as="button"
        className="px-4 py-2 rounded-xl text-xs font-normal text-white"
      >
      </CardItem>
      <a href="/">
        <CardItem
          translateZ={40}
          as="button"
          className="px-4 py-2 rounded-xl bg-[#742a2aaf] text-black text-white text-xs font-bold transition-colors hover:bg-gray-800"
        >
          Register
        </CardItem>
      </a>
    </div>
  </CardBody>
</CardContainer>; */
}

export default AboutCard;
