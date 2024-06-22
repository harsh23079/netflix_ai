import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import GetStarted from "./components/GetStarted";

import { Provider } from "react-redux";
import { appStore } from "./utils/appStore";
import SignIn from "./components/SignIn";
import Browser from "./components/Browser";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <GetStarted />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignIn />,
      },
      {
        path: "browser",
        element: <Browser />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
