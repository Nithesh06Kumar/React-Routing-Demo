import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import React from "react";
import EventPage, { eventLoader } from "../pages/EventPage/EventPage";
import EventDetailsPage, {
  deleteEventAction,
  eventDetailsLoader,
} from "../pages/EventDetailsPage/EventDetailsPage";
import NewEventPage, {
  newEventAction,
} from "../pages/NewEventPage/NewEventPage";
import EditEventPage from "../pages/EditEventPage/EditEventPage";
import LayoutPage from "../pages/LayoutPage/LayoutPage";
import EventLayoutPage from "../pages/EventLayoutPage/EventLayoutPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import { formEventAction } from "../components/EventForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "events",
        element: <EventLayoutPage />,
        children: [
          {
            index: true,
            element: <EventPage />,
            loader: eventLoader,
          },
          {
            path: ":eventId",
            loader: eventDetailsLoader,
            id: "event-item",
            children: [
              {
                index: true,
                element: <EventDetailsPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: formEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: formEventAction,
          },
        ],
      },
    ],
  },
]);
