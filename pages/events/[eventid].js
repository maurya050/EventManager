import { useRouter } from "next/router";
import { getEventById } from "@/dummy-data";
import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";
import { Fragment } from "react";

function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;

  const events = getEventById(eventId);

  if (!events) {
    return <p> Some Error !!!</p>;
  }
  return (
    <Fragment>
      <EventSummary title={events.title} />
      <EventLogistics
        date={events.date}
        address={events.location}
        image={events.image}
        imageAlt={events.title}
      />
      <EventContent>
        <p>{events.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
