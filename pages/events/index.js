import { getAllEvents } from "@/dummy-data";
import EventList from "@/components/events/EventList";
import EventSearch from "@/components/events/events-search";
import { Fragment } from "react";
import { useRouter } from "next/router";
function EventsPage(){

    const events = getAllEvents();
    const router = useRouter();

    const findEventHandler = ({year, month}) => {

        const fullpath = `/events/${year}/${month}`;

        router.push(fullpath);
    }


    return(
        <Fragment>
            <EventSearch onSearch = {findEventHandler} />
            <EventList items ={events} />
        </Fragment>
    )
}

export default EventsPage;