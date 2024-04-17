import React from "react";
import { json, useRouteLoaderData } from "react-router-dom";
import EventItem from "../../components/EventItem";

const EventDetailsPage = () => {
  const data = useRouteLoaderData("event-item");
  console.log("Details Data", data);
  return (
    <div>
      EventDetailsPage
      <EventItem event={data.event} />
    </div>
  );
};

export default EventDetailsPage;
export const eventDetailsLoader = async ({ request, params }) => {
  console.log("PARAMS", params);
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      { message: "Data Not Found" },
      {
        status: 500,
      }
    );
  }
  return response;
};
