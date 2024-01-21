import { Middleware } from "@reduxjs/toolkit";

const logger: Middleware = (store) => (next) => (action) => {
  console.log("Current Sate", store.getState());
  console.log("Action", action);
  next(action);
  console.log("Updated Store", store.getState());
};

export default logger;
