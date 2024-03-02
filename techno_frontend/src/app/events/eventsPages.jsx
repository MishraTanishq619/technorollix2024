'use client';
import { useState, useEffect } from 'react';
import EventCard from '@/components/EventCard';
import ThreeDCardDemo from '@/components/threeDCard';

function EventsViewPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch event data from the API endpoint
    fetch('http://technorollix.opju.ac.in:4000/api/allEvents')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className="w-full h-screen flex flex-wrap items-start justify-evenly">
      <ThreeDCardDemo
        prize={26000}
        title={'Kalakriti'}
        description={'Explore the magnanimous arts and aesthetics of India'}
        members={4}
        entryFee={''}
        image="/posters/kalaKriti.png"
        onClick={() => (window.location.href = `/events/kalaKriti`)}
      />
      <ThreeDCardDemo
        prize={15000}
        title={'Aaghaaz'}
        description={'Compete to become face of opju'}
        members={1}
        image="/posters/aaghaaz.png"
        entryFee={''}
        onClick={() => (window.location.href = `/events/aaghaaz`)}
      />
      <ThreeDCardDemo
        prize={15000}
        title={'Hackathon'}
        description={'Competetive coding challenges mainly DSA'}
        members={4}
        image="/posters/hackaThon.png"
        entryFee={''}
        onClick={() => (window.location.href = `/events/hackaThon`)}
      />
      <ThreeDCardDemo
        prize={30000}
        title={'Start Up business plan'}
        description={'Pitch your start up idea'}
        members={4}
        image="/posters/startUp.png"
        entryFee={''}
        onClick={() => (window.location.href = `/events/startUp_event`)}
      />
      <ThreeDCardDemo
        prize={50000}
        title={'Tech Lab'}
        description={'Prototype, Model, Technical poster'}
        members={4}
        image="/posters/techLab.png"
        entryFee={''}
        onClick={() => (window.location.href = `/events/techLab`)}
      />
      <ThreeDCardDemo
        prize={8000}
        title={'ANTARAGNI 2k24'}
        description={
          'Showcase your passion for cultural excellence in Antaragni'
        }
        members={10}
        image="/posters/antaragni.png"
        entryFee={''}
        onClick={() => (window.location.href = `/events/antaragni`)}
      />
      <ThreeDCardDemo
        prize={8000}
        title={'Master chef'}
        description={'Become the next master chef'}
        members={2}
        image="/posters/masterChef.png"
        entryFee={''}
        onClick={() => (window.location.href = `/events/masterChef`)}
      />
      <ThreeDCardDemo
        prize={5000}
        title={'Roadies : Till the last breathe'}
        description={'Fight till the last breathe'}
        members={1}
        entryFee={''}
        image="/posters/roadies.png"
        onClick={() => (window.location.href = `/events/roadies`)}
      />
      <ThreeDCardDemo
        prize={12000}
        title={'Treasure hunt'}
        description={
          'Embark on an adventure, uncover hidden treasures, and let the thrill of the hunt guide you to victory'
        }
        members={4}
        image="/posters/treasureHunt.png"
        entryFee={''}
        onClick={() => (window.location.href = `/events/treasureHunt`)}
      />
      <ThreeDCardDemo
        prize={10000}
        title={'Ideathon'}
        description={'Inovative idea presentation'}
        members={4}
        image="/posters/ideaThon.png"
        entryFee={''}
        onClick={() => (window.location.href = `/events/ideaThon`)}
      />
      <ThreeDCardDemo
        prize={7000}
        title={'Talent hunt'}
        description={'Showcase you diverse talent across the spectrum'}
        members={4}
        image="/posters/talentHunt.png"
        entryFee={''}
        onClick={() => (window.location.href = `/events/talentHunt`)}
      />
      <ThreeDCardDemo
        prize={15000}
        title={'Game Fusion'}
        description={
          'Step into arena and compete your opponents in virtual world'
        }
        members={5}
        image="/posters/gameFusion.png"
        entryFee={''}
        onClick={() => (window.location.href = `/events/gameFusion`)}
      />
      <ThreeDCardDemo
        prize={60}
        title={'Nukkad natak'}
        description={'Portray of street theatre and social activism'}
        members={10}
        image="/posters/nukkadNatak.png"
        entryFee={''}
        onClick={() => (window.location.href = `/events/nukkadNatak`)}
      />
      <ThreeDCardDemo
        prize={8000}
        title={'Robovation'}
        description={'Compete to design and make powerful and efficient robots'}
        members={4}
        image="/posters/roboVation.png"
        entryFee={''}
        onClick={() => (window.location.href = `/events/roboVation`)}
      />
      <ThreeDCardDemo
        prize={5000}
        title={'Codigo'}
        description={'Real life programming problem solving'}
        members={1}
        image="/posters/codigo.png"
        entryFee={0}
        onClick={() => (window.location.href = `/events/codigo`)}
      />
      <ThreeDCardDemo
        prize={6000}
        title={'RJ hunt'}
        description={
          'Become radio sensation where charisma meets communication'
        }
        members={1}
        image="/posters/rjHunt.png"
        entryFee={''}
        onClick={() => (window.location.href = `/events/rjHunt`)}
      />
      <ThreeDCardDemo
        prize={8000}
        title={'Yuva sabha'}
        description={'Empower the voice of dynamic yuva'}
        members={4}
        image="/posters/yuvaSabha.png"
        entryFee={''}
        onClick={() => (window.location.href = `/events/yuvaSabha`)}
      />
      <ThreeDCardDemo
        prize={5000}
        title={'Brainy escape'}
        description={'Challenge your intellect to solve puzzles'}
        members={4}
        image="/posters/brainyEscape.png"
        entryFee={''}
        onClick={() => (window.location.href = `/events/brainyEscape`)}
      />
      <ThreeDCardDemo
        prize={15000}
        title={'Aero Drone'}
        description={'Showcase your drone flying skills'}
        members={4}
        image="/posters/aeroDrone.png"
        entryFee={''}
        onClick={() => (window.location.href = `/events/aeroDrone`)}
      />
      <ThreeDCardDemo
        prize={6000}
        title={'Mock Cid'}
        description={
          'Put your skill to investigate and find out the mystery behind the crime'
        }
        members={2}
        image="/posters/mockCID.png"
        entryFee={''}
        onClick={() => (window.location.href = `/events/mockCid`)}
      />
    </div>
  );
}

export default EventsViewPage;
