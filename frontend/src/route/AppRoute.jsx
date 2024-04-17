import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import React from "react";
import EventPage, { eventLoader } from "../pages/EventPage/EventPage";
import EventDetailsPage, {
  eventDetailsLoader,
} from "../pages/EventDetailsPage/EventDetailsPage";
import NewEventPage from "../pages/NewEventPage/NewEventPage";
import EditEventPage from "../pages/EditEventPage/EditEventPage";
import LayoutPage from "../pages/LayoutPage/LayoutPage";
import EventLayoutPage from "../pages/EventLayoutPage/EventLayoutPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

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
              },
              {
                path: "edit",
                element: <EditEventPage />,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
          },
        ],
      },
    ],
  },
]);
