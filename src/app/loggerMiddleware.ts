import type { Middleware } from "@reduxjs/toolkit";
export const loggerMiddleware: Middleware = () => (next) => (action) => {
  if (typeof action === "object" && action !== null && "type" in action) {
    console.log("[Redux action]", (action as { type: string }).type);
  }
  return next(action);
};
