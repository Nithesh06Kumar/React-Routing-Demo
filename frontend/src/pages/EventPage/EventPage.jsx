import React, { useEffect } from "react";
import EventsList from "../../components/EventsList";
import { json, useLoaderData } from "react-router-dom";
const DUMMY_DATA = [
  {
    id: "e1",
    title: "EVENT 1",
    date: "2023-02-22",
    image:
      "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
    description: "Join this amazing event and connect with fellow developers.",
  },
  {
    id: "e2",
    title: "EVENT 2",
    date: "2023-02-22",
    image:
      "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
    description: "Join this amazing event and connect with fellow developers.",
  },
  {
    id: "e3",
    title: "EVENT 3",
    date: "2023-02-22",
    image:
      "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
    description: "Join this amazing event and connect with fellow developers.",
  },
  {
    id: "e4",
    title: "EVENT 4",
    date: "2023-02-22",
    image:
      "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
    description: "Join this amazing event and connect with fellow developers.",
  },
  {
    id: "e5",
    title: "EVENT 5",
    date: "2023-02-22",
    image:
      "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
    description: "Join this amazing event and connect with fellow developers.",
  },
];
const EventPage = () => {
  //   useEffect(() => {
  //     const apiCall = async () => {
  //       const response = await fetch("http://localhost:3000/events");
  //       const data = await response.json();
  //       console.log("Data", data);
  //     };
  //     apiCall();
  //     // fetch("http://localhost:3000/")
  //     //   .then((res) => {
  //     //     console.log("RS", res);
  //     //     return JSON.parse(res);
  //     //   })
  //     //   .then((result) => console.log("RESULT", result));
  //   }, []);
  const data = useLoaderData();
  console.log("DATA", data);
  return (
    <div>
      EventPage
      <EventsList events={data.events} />
    </div>
  );
};

export default EventPage;

export const eventLoader = async () => {
  const response = await fetch("http://localhost:8080/events");
  console.log("response", response);
  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Data Not Found" }), {
    //   status: 500,
    // });
    throw json(
      { message: "Data Not Found" },
      {
        status: 500,
      }
    );
  }
  return response;
};
