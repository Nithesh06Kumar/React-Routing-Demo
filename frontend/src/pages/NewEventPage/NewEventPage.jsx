import React from "react";
import EventForm from "../../components/EventForm";
import { redirect } from "react-router-dom";

const NewEventPage = () => {
  return <EventForm method={"post"} />;
};

export default NewEventPage;
// export const newEventAction = async ({ request, params }) => {
//   const data = await request.formData();
//   const eventData = {
//     title: data.get("title"),
//     image: data.get("image"),
//     date: data.get("date"),
//     description: data.get("description"),
//   };
//   console.log("REQ", eventData);
//   const response = await fetch("http://localhost:8080/events", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(eventData),
//   });

//   if (response.status === 422) {
//     return response;
//   }
//   console.log("RESPOSNE", response);
//   return redirect("/events");
// };
