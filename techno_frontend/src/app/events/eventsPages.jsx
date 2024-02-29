"use client";
import { useState, useEffect } from "react";
import EventCard from "@/components/EventCard";
import ThreeDCardDemo from "@/components/threeDCard";

function EventsViewPage() {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		// Fetch event data from the API endpoint
		fetch("http://10.60.41.209:4000/api/allEvents")
			.then((response) => response.json())
			.then((data) => setEvents(data))
			.catch((error) => console.error("Error fetching events:", error));
	}, []);

	return (
		<div className="w-full h-screen flex flex-wrap items-start justify-evenly">
			
			<ThreeDCardDemo
				prize={26000}
				title={"Kalakriti"}
				description={"Explore the magnanimous arts and aesthetics of India"}
				members={4}
				entryFee={""}
				onClick={() =>
					(window.location.href = `/events/startUp_event`)
				}
			/>
			<ThreeDCardDemo
				prize={50000}
				title={"Tech Lab"}
				description={"Prototype, Model, Technical poster"}
				members={4}
				entryFee={""}
				onClick={() =>
					(window.location.href = `/events/techLab`)
				}
			/>
			<ThreeDCardDemo
				prize={10000}
				title={"Ideathon"}
				description={"Inovative idea presentation"}
				members={4}
				entryFee={""}
				onClick={() =>
					(window.location.href = `/events/ideaThon`)
				}
			/>
			<ThreeDCardDemo
				prize={10000}
				title={"Start Up business plan"}
				description={"Pitch your start up idea"}
				members={4}
				entryFee={""}
				onClick={() =>
					(window.location.href = `/events/startUp_event`)
				}
			/>
			<ThreeDCardDemo
				prize={5000}
				title={"Codigo"}
				description={"Real life programming problem solving"}
				members={1}
				entryFee={0}
				onClick={() =>
					(window.location.href = `/events/startUp_event`)
				}
			/>
			<ThreeDCardDemo
				prize={15000}
				title={"Hackathon"}
				description={"Competetive coding challenges mainly DSA"}
				members={4}
				entryFee={""}
				onClick={() =>
					(window.location.href = `/events/startUp_event`)
				}
			/>
			<ThreeDCardDemo
				prize={8000}
				title={"Robovation"}
				description={"Compete to design and make powerful and efficient robots"}
				members={4}
				entryFee={""}
				onClick={() =>
					(window.location.href = `/events/startUp_event`)
				}
			/>
			<ThreeDCardDemo
				prize={8000}
				title={"Antaragni"}
				description={"Showcase your passion for cultural excellence in Antaragni"}
				members={10}
				entryFee={""}
				onClick={() =>
					(window.location.href = `/events/startUp_event`)
				}
			/>
			<ThreeDCardDemo
				prize={5000}
				title={"Roadies"}
				description={"Fight till the last breathe"}
				members={1}
				entryFee={""}
				onClick={() =>
					(window.location.href = `/events/startUp_event`)
				}
			/>
			<ThreeDCardDemo
				prize={15000}
				title={"Aaghaaz"}
				description={"Compete to become face of opju"}
				members={1}
				entryFee={""}
				onClick={() =>
					(window.location.href = `/events/startUp_event`)
				}
			/>
			<ThreeDCardDemo
				prize={8000}
				title={"Yuva sabha"}
				description={"Empower the voice of dynamic yuva"}
				members={4}
				entryFee={""}
				onClick={() =>
					(window.location.href = `/events/startUp_event`)
				}
			/>
			<ThreeDCardDemo
				prize={8000}
				title={"Master chef"}
				description={"Become the next master chef"}
				members={2}
				entryFee={""}
				onClick={() =>
					(window.location.href = `/events/startUp_event`)
				}
			/>
			<ThreeDCardDemo
				prize={15000}
				title={"Game Fusion"}
				description={"Step into arena and compete your opponents in virtual world"}
				members={5}
				entryFee={""}
				onClick={() =>
					(window.location.href = `/events/startUp_event`)
				}
			/>
			<ThreeDCardDemo
				prize={6000}
				title={"Mock Cid"}
				description={"Put your skill to investigate and find out the mystery behind the crime"}
				members={2}
				entryFee={""}
				onClick={() =>
					(window.location.href = `/events/startUp_event`)
				}
			/>
			<ThreeDCardDemo
				prize={60}
				title={"Nukkad natak"}
				description={"Portray of street theatre and social activism"}
				members={10}
				entryFee={""}
				onClick={() =>
					(window.location.href = `/events/startUp_event`)
				}
			/>
			<ThreeDCardDemo
				prize={7000}
				title={"Talent hunt"}
				description={"Showcase you diverse talent across the spectrum"}
				members={4}
				entryFee={""}
				onClick={() =>
					(window.location.href = `/events/startUp_event`)
				}
			/>
			<ThreeDCardDemo
				prize={5000}
				title={"Brainly escape"}
				description={"Challenge your intellect to solve puzzles"}
				members={4}
				entryFee={""}
				onClick={() =>
					(window.location.href = `/events/startUp_event`)
				}
			/>
			<ThreeDCardDemo
				prize={15000}
				title={"Aero Drone"}
				description={"Showcase your drone flying skills"}
				members={4}
				entryFee={""}
				onClick={() =>
					(window.location.href = `/events/startUp_event`)
				}
			/>
			<ThreeDCardDemo
				prize={12000}
				title={"Treasure hunt"}
				description={"Embark on an adventure, uncover hidden treasures, and let the thrill of the hunt guide you to victory"}
				members={4}
				entryFee={""}
				onClick={() =>
					(window.location.href = `/events/startUp_event`)
				}
			/>
			<ThreeDCardDemo
				prize={6000}
				title={"RJ hunt"}
				description={"Become radio sensation where charisma meets communication"}
				members={1}
				entryFee={""}
				onClick={() =>
					(window.location.href = `/events/startUp_event`)
				}
			/>
		</div>
	);
}

export default EventsViewPage;
