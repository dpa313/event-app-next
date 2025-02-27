import BuyTicket from "@/components/BuyTicket";
import CustomSelect from "@/components/CustomSelect";
import EventSchedule from "@/components/EventSchedule";
import Organizers from "@/components/Organizers";
import Timer from "@/components/Timer";
import Image from "next/image";
import {FaRegCircleCheck} from 'react-icons/fa6'

const EventDetails = async ({ params }) => {
  const { id } = await params;

  //fetch events based on the id
  const fetchEvents = async (id) => {
    const res = await fetch(`http://localhost:4000/events/${id}`);
    if (!res.ok) throw new Error("Failed to fetch event");
    return res.json();
  };
  const event = await fetchEvents(id);
  console.log(event);
  return (
    <section className="min-h-screen flex items-center py-8 sm:py-48">
      <div className="container mx-auto">
        <div className="w-full max-w-[600px] xl:max-w-none mx-auto">
          <div className="flex flex-col xl:flex-row gap-8 xl:gap-24 pt-28 pb-12 sm:py-0 xl:mb-24">
            <div className="relative w-full h-[320px] xl:max-w-[670px] xl:h-[500px] rounded-2xl overflow-hidden mb-12 xl:mb-0">
              <Image
                src={event.img_lg}
                fill
                quality={100}
                alt=""
                className="object-cover mix-blend-lighten"
              />
            </div>
            <div className="flex flex-col justify-center w-full max-w-[460px] gap-8 flex-1 sm:mb-12 xl:mb-0">
                <div>
                    <h2 className="h2 mb-6">{event.title}</h2>
                    <EventSchedule event={event}/>
                </div>
                <Timer event={event}/>
                <CustomSelect event={event}/>
                <BuyTicket event={event}/>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-8 xl:gap-24">
            <div className="w-full xl:max-w-[670px] flex flex-col gap-8 xl:gap-12">
              <p className="text-grey">{event.description}</p>
              <div>
                <h3 className="h3 mb-6">Requirements for the event</h3>
                <ul className="flex flex-col gap-3">
                    <li className="flex gap-3 items-center">
                        <span className="text-accent text-xl"><FaRegCircleCheck/></span>
                        <p className="text-grey">Lorem ipsum dolor sit amet, consectetur adipisicing numquam!</p>
                    </li>
                    <li className="flex gap-3 items-center">
                        <span className="text-accent text-xl"><FaRegCircleCheck/></span>
                        <p className="text-grey">Lorem ipsum dolor sit amet, consectetur adipisicing numquam!</p>
                    </li>
                    <li className="flex gap-3 items-center">
                        <span className="text-accent text-xl"><FaRegCircleCheck/></span>
                        <p className="text-grey">Lorem ipsum dolor sit amet, consectetur adipisicing numquam!</p>
                    </li>
                    <li className="flex gap-3 items-center">
                        <span className="text-accent text-xl"><FaRegCircleCheck/></span>
                        <p className="text-grey">Lorem ipsum dolor sit amet, consectetur adipisicing numquam!</p>
                    </li>
                </ul>
              </div>
            </div>
            <div className="w-full max-w-[460px]">
              <Organizers event={event}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
