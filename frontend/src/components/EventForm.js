import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
  useRouteLoaderData,
  redirect,
} from "react-router-dom";
import React from "react";
import classes from "./EventForm.module.css";

function EventForm({ method, event = {} }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const data = useActionData();
  function cancelHandler() {
    navigate("..");
  }
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <div>
          <h2 style={{ color: "red" }}>Errors</h2>
          <ul>
            {Object.values(data?.errors).map((ele) => (
              <li>{ele}</li>
            ))}
          </ul>
        </div>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event?.title}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event?.image}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event?.date}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event?.description}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;

export const formEventAction = async ({ request, params }) => {
  const data = await request.formData();
  const method = request.method;
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  let url = "http://localhost:8080/events";
  if (method === "PATCH") {
    const eventId = params.eventId;
    url = "http://localhost:8080/events/" + eventId;
  }
  console.log("REQ", eventData);
  const response = await fetch(url, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }
  console.log("RESPOSNE", response);
  return redirect("/events");
};
