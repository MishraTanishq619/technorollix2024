import React from 'react';
import Header from '@/components/Header';
import { BackgroundBeams } from '@/components/ui/background-beams';
import SubEventsDetails from '../subEventsDetails';

const page = () => {
  const eventId = 'event-Kalakriti-202403';
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
      <SubEventsDetails
        imageLink="../posters/kalaKriti.png"
        prize={23000}
        heading="KalaKriti"
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
        theme={<p>All Kinds of Art and Collection.</p>}
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
            <li>Pradarshini(Exhibition)</li>
            <li>Drishyaam (Decoration)</li>
            <li>Photorollix</li>
            <li>Rangoli</li>
            <li>Colour Painting</li>
            <li>Bottle Painting</li>
          </>
        }
        subEvents={
          <>
            <div className="my-5">
              <p className=" neon-text-red-light text-2xl font-bold md:text-3xl">
                Exhibition
              </p>
              <div
                className={`px-3 py-1 md:py-4 text-1rem md:text-4rem font-medium text-justify`}
              >
                <p>
                  Imagine what life would have been without colors, art and
                  aesthetics boring right? And what Techno would be without an
                  Art exhibition indeed boring. But don&#39;t worry we would not
                  give you a millisecond of it. So, to dazzle your eyes we have
                  &quot;Pradarshini”, an art exhibition by Kalakriti. and to
                  quench the thirst of your imagination and take you on a
                  bewildering journey worth remembering. Get yourself a pair of
                  sunglasses and come engulf yourself in the art and aesthetics.
                </p>
              </div>
              <div className="mt-2 md:py-4 text-justify flex flex-wrap">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  THEME:{' '}
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>
                  All Kinds of Art and Collection.
                </div>
              </div>
              <div className="mt-2 md:py-4 text-justify flex flex-wrap">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  VENUE:{' '}
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>OPJU Library</div>
              </div>
              <div className="mt-2 md:py-4 text-justify">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  Rules and Regulations:{' '}
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>
                  <li>All the participants must register before the event.</li>
                  <li>
                    All should Submit their Artistic Piece, Art or craft 2-3
                    days before the event.
                  </li>
                  <li>
                    Last minute changes in the above rules, if necessary, can be
                    made.
                  </li>
                </div>
              </div>
              <div className="md:py-4 text-justify ">
                <h2
                  className={`neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  Rounds:
                </h2>
                <div
                  className={`text-3rem ml-5 text-1xs md:text-1xl font-medium max-w-[85%]`}
                >
                  1 round
                </div>
              </div>
              <div className="mt-2 md:py-4 text-justify">
                <h2
                  className={`neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  JUDGEMENT CRITERIA:
                </h2>
                <div
                  className={`text-3rem ml-5 text-1xl md:text-1xl font-medium max-w-[85%] `}
                >
                  No Grading
                </div>
              </div>
            </div>
            <div className="my-5">
              <p className=" neon-text-red-light text-2xl font-bold md:text-3xl">
                Decoration
              </p>
              <div
                className={`px-3 py-1 md:py-4 text-1rem md:text-4rem font-medium text-justify`}
              >
                <p>
                  India is, the cradle of the human race, the birthplace of
                  human speech, the mother of history, the grandmother of
                  legend, and the great grandmother of tradition. Kalakriti is
                  Presenting a Voyage through Different Cultures and Cultural
                  Diversity of India. We are going to Showcase the Land of
                  Cultural heritage, India whose versatility is Undeniable and
                  unquestionable.
                </p>
              </div>
              <div className="mt-2 md:py-4 text-justify flex flex-wrap">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  THEME:{' '}
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>
                  Cultural Heritage.
                </div>
              </div>
              <div className="mt-2 md:py-4 text-justify flex flex-wrap">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  VENUE:{' '}
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>OPJU Campus</div>
              </div>
              <div className="mt-2 md:py-4 text-justify">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  Rules and Regulations:{' '}
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>
                  <li>
                    Theme of the competition is restricted to “Cultural
                    Heritage”.
                  </li>
                  <li>
                    In group there must be minimum 4 and maximum 6 members and
                    boys’ participation in a group is Mandatory.
                  </li>
                  <li>There will be only one round of competition.</li>
                  <li>Everything Will be provided by Organizers.</li>
                  <li>
                    The participants will have to Decorate their respective Sets
                    On or before the 1 st day of Technorollix.
                  </li>
                  <li>
                    Cash prizes will be awarded to First, Second and Third
                    position holders, along with Certificates of Achievement. A
                    Certificate of Participation will be given to all present
                    participants.
                  </li>
                  <li>The participant strictly adhere to the timings.</li>
                  <li>
                    The decision of jury shall remain final and no
                    correspondence will be entertained.
                  </li>
                  <li>
                    Last minute changes in the above rules, if necessary, can be
                    made.
                  </li>
                </div>
              </div>
              <div className="md:py-4 text-justify ">
                <h2
                  className={`neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  Rounds:
                </h2>
                <div
                  className={`text-3rem ml-5 text-1xs md:text-1xl font-medium max-w-[85%]`}
                >
                  1 round
                </div>
              </div>
              <div className="mt-2 md:py-4 text-justify">
                <h2
                  className={`neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  JUDGEMENT CRITERIA:
                </h2>
                <div
                  className={`text-3rem ml-5 text-1xl md:text-1xl font-medium max-w-[85%] `}
                >
                  Judges’ marks
                </div>
              </div>
            </div>
            <div className="my-5">
              <p className=" neon-text-red-light text-2xl font-bold md:text-3xl">
                Photorollix
              </p>
              <div
                className={`px-3 py-1 md:py-4 text-1rem md:text-4rem font-medium text-justify`}
              >
                <p>
                  Photorollix is a recreational event where in participants are
                  welcomed to openly participate here to show their &quot; third
                  eye handling Skill &quot; as it is said,&#39; The picture that
                  you took with your camera is the imagination you want to
                  create with the reality.&#39; It will be the hall of fame
                  which will show different beautiful moment Captured by the
                  photographers. It will make you to re-live amazing moments
                  again and again.
                </p>
              </div>
              <div className="mt-2 md:py-4 text-justify flex flex-wrap">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  THEME:{' '}
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>
                  Bird view,Fish view, insect view, opju campus and Nature.
                </div>
              </div>
              <div className="mt-2 md:py-4 text-justify flex flex-wrap">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  VENUE:{' '}
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>Online.</div>
              </div>
              <div className="mt-2 md:py-4 text-justify">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  Rules and Regulations:{' '}
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>
                  <li>
                    The event will happen in 2 round and continue for two days.
                  </li>
                  <li>
                    Every participant will have to submit single photo at the
                    end of the day via G Form using which will be framed at the
                    gallery.
                  </li>
                  <li>
                    Last minute changes in the above rules, if necessary, can be
                    made.
                  </li>
                </div>
              </div>
              <div className="md:py-4 text-justify ">
                <h2
                  className={`neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  Rounds:
                </h2>
                <div
                  className={`text-3rem ml-5 text-1xs md:text-1xl font-medium max-w-[85%]`}
                >
                  2 round
                </div>
              </div>
              <div className="mt-2 md:py-4 text-justify">
                <h2
                  className={`neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  JUDGEMENT CRITERIA:
                </h2>
                <div
                  className={`text-3rem ml-5 text-1xl md:text-1xl font-medium max-w-[85%] `}
                >
                  Judges’ marks
                </div>
              </div>
            </div>
            <div className="my-5">
              <p className=" neon-text-red-light text-2xl font-bold md:text-3xl">
                Rangoli
              </p>
              <div
                className={`px-3 py-1 md:py-4 text-1rem md:text-4rem font-medium text-justify`}
              >
                <p>
                  Rangoli is a very popular folk art that has several
                  connotations across India. It is a spiritual distribution of
                  colors Which represents the happiness, positivity and
                  liveliness of a household, and is intended to welcome the
                  goddess of wealth and Prosperity.
                </p>
              </div>
              <div className="mt-2 md:py-4 text-justify flex flex-wrap">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  THEME:{' '}
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>On the Spot.</div>
              </div>
              <div className="mt-2 md:py-4 text-justify flex flex-wrap">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  VENUE:{' '}
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>
                  Infront of Chem. Lab.
                </div>
              </div>
              <div className="mt-2 md:py-4 text-justify">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  Rules and Regulations:{' '}
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>
                  <li>
                    In group there must be minimum 4 and maximum 6 members and
                    boys’ participation in a group is Mandatory.
                  </li>
                  <li>There will be only one round of competition.</li>
                  <li>
                    The participants have to bring their own material which they
                    require in making rangoli. Colors Will be provided by
                    Organizers.
                  </li>
                  <li>
                    The participants will be given 2hr for making rangoli. No
                    extra time will be given in any case.
                  </li>
                  <li>
                    Prizes will be awarded to First, Second and Third position
                    holders, along with Certificates of Achievement. A
                    Certificate of Participation will be given to all present
                    participants.
                  </li>
                  <li>The participant must strictly adhere to the timings.</li>
                  <li>
                    The decision of jury shall remain final and no
                    correspondence will be entertained.
                  </li>
                  <li>
                    Last minute changes in the above rules, if necessary, can be
                    made.
                  </li>
                </div>
              </div>
              <div className="md:py-4 text-justify ">
                <h2
                  className={`neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  Rounds:
                </h2>
                <div
                  className={`text-3rem ml-5 text-1xs md:text-1xl font-medium max-w-[85%]`}
                >
                  1 round
                </div>
              </div>
              <div className="mt-2 md:py-4 text-justify">
                <h2
                  className={`neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  JUDGEMENT CRITERIA:
                </h2>
                <div
                  className={`text-3rem ml-5 text-1xl md:text-1xl font-medium max-w-[85%] `}
                >
                  Judges’ marks
                </div>
              </div>
            </div>
            <div className="my-5">
              <p className=" neon-text-red-light text-2xl font-bold md:text-3xl">
                Colour Painting/ Sketching
              </p>
              <div
                className={`px-3 py-1 md:py-4 text-1rem md:text-4rem font-medium text-justify`}
              >
                <p>
                  In order to create, we draw from our inner well. This inner
                  well, an artistic reservoir, is ideally like a well-stocked
                  fish pond… If we don’t give some attention to upkeep, our well
                  is apt to become depleted, stagnant, or blocked…As artists, we
                  must learn to be self- nourishing. We must become alert enough
                  to consciously replenish our creative resources as we draw on
                  them — to restock the trout pond, Speak up…. Just Speak up….
                  on Canvas….
                </p>
              </div>
              <div className="mt-2 md:py-4 text-justify flex flex-wrap">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  THEME:{' '}
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>On the Spot.</div>
              </div>
              <div className="mt-2 md:py-4 text-justify flex flex-wrap">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  VENUE:{' '}
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>Library</div>
              </div>
              <div className="mt-2 md:py-4 text-justify">
                <h2
                  className={` neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  Rules and Regulations:{' '}
                </h2>
                <div className={`text-1xl ml-2 md:text-2xl `}>
                  <li>
                    In group there must be minimum 4 and maximum 6 members and
                    boys’ participation in a group is Mandatory.
                  </li>
                  <li>There will be only one round of competition.</li>
                  <li>
                    The participants have to bring their own
                    Requirements.Paper/Canvas Will be provided by Organizers.
                  </li>
                  <li>
                    The participants will be given 2hr for making the Art No
                    extra time will be given in any case.
                  </li>
                  <li>
                    Prizes will be awarded to First, Second and Third position
                    holders, along with Certificates of Achievement. A
                    Certificate of Participation will be given to all present
                    participants.
                  </li>
                  <li>The participant must strictly adhere to the timings.</li>
                  <li>
                    The decision of jury shall remain final and no
                    correspondence willbe entertained.
                  </li>
                  <li>
                    Last minute changes in the above rules, if necessary, can be
                    made.
                  </li>
                </div>
              </div>
              <div className="md:py-4 text-justify ">
                <h2
                  className={`neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  Rounds:
                </h2>
                <div
                  className={`text-3rem ml-5 text-1xs md:text-1xl font-medium max-w-[85%]`}
                >
                  1 round
                </div>
              </div>
              <div className="mt-2 md:py-4 text-justify">
                <h2
                  className={`neon-text-red-lighter text-1xl font-bold md:text-2xl`}
                >
                  JUDGEMENT CRITERIA:
                </h2>
                <div
                  className={`text-3rem ml-5 text-1xl md:text-1xl font-medium max-w-[85%] `}
                >
                  Judges’ marks
                </div>
              </div>
            </div>
          </>
        }
        facultyCoordinators={
          <table>
            <tbody>
              <tr>
                <td>Dr. Saumya Singh</td>
                <td>+91 8103698224</td>
                {/* <td>Kavita.patel@opju.ac.in</td> */}
              </tr>
              <tr>
                <td>Dr. Deepti Sharma</td>
                {/* <td>+91 8103698224</td> */}
                {/* <td>Kavita.patel@opju.ac.in</td> */}
              </tr>
            </tbody>
          </table>
        }
        eventManagers={
          <table>
            <tbody>
              <tr>
                <td>Ajay Patel</td>
                <td>+91 8839171099</td>
              </tr>
              <tr>
                <td>Rahul Mohli</td>
                <td>+91 7869137987</td>
              </tr>
              <tr>
                <td>Satyanarayan Patra</td>
                <td>+91 8112130875</td>
              </tr>
              <tr>
                <td>Simran Sahu</td>
                <td>+91 6266587220</td>
              </tr>
              <tr>
                <td>Nupur patel</td>
                <td>+91 9301254290</td>
              </tr>
              <tr>
                <td>Sakshi singh</td>
                <td>+91 9343646084</td>
              </tr>
            </tbody>
          </table>
        }
      />
    </main>
  );
};

export default page;
