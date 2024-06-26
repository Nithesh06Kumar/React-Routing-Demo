import React from "react";
import EventForm from "../../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";

const EditEventPage = () => {
  const data = useRouteLoaderData("event-item");
  const event = data.event;
  return <EventForm event={event} method={"patch"} />;
};

export default EditEventPage;
