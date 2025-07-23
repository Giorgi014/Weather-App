import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import App from "./App.jsx";

const TodayWeather = React.lazy(() =>
  import("./components/MainPage/TodayWeather/TodayWeather.jsx")
);
const ForecastWeather = React.lazy(() =>
  import("./components/MainPage/ForecastWeather/ForecastWeather.jsx")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <TodayWeather />
            <ForecastWeather />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
