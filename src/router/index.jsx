import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import { Detail, Incoming, Popular, Search } from "../pages";

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
        },
        {
            path: "search/:title",
            element: <Search />
        }
      ]
    },
]);

export default router;