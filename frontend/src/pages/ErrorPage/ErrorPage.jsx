import React from "react";
import { json, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log("ERROR", error);
  let message = "Something went wrong";
  if (error.status === 500) {
    // message = JSON.parse(error.data).message; //for new Response()
    message = error.data.message; //for json()
  } else if (error.status === 404) {
    message = "404: Page not found";
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>{message}</div>
  );
};

export default ErrorPage;
