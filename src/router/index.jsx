import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import { Detail, Incoming, Popular } from "../pages";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: "",
            element: <Popular />
        },
        {
            path:"/incoming",
            element: <Incoming />
        },
        {
            path: "detail/:id",
            element: <Detail />
        }
      ]
    },
]);

export default router;