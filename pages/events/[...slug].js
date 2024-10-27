import { useRouter } from "next/router";
import { getFilteredEvents } from "@/dummy-data";
import EventList from "@/components/events/EventList";
import { Fragment } from "react";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";

function FilteredEventPage(){

    const router = useRouter();

    const filterData = router.query.slug;
    
    if(!filterData){
        return <p className = "center">Loading ...</p>
    }

    const filteredyear = filterData[0];
    const filteredmonth = filterData[1];

    const numYear = +filteredyear;
    const numMonth = +filteredmonth;

    if(isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 || 
        numMonth >12
    ){
        return(
            <Fragment>
                <ErrorAlert >
                    <p>Invalid Filter !!!</p>
                </ErrorAlert>
                <div className = "center"> 
                    <Button link="/events">Show all Events</Button>
                </div>
            </Fragment>
        ); 
        
        
    }

    const filteredEvents = getFilteredEvents({
        year : numYear,
        month: numMonth,
    })

    if(!filteredEvents || filteredEvents.length == 0){

        return(

            <Fragment>
                <ErrorAlert>
                    <p>No Event Found !!!</p>
                </ErrorAlert>
                <div className = "center"> 
                <Button link="/events">Show all Events</Button>
                </div>
            </Fragment>
    );

    }

    const date = new Date(numYear, numMonth - 1);
    return(
        <div>
            <ResultsTitle date = {date} />
            <EventList items={filteredEvents}/>
        </div>
    )
}

export default FilteredEventPage;