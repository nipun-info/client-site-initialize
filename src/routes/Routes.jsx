import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import JobDetails from "../pages/JobDetails/JobDetails";
import AddJob from "../pages/AddJob/AddJob";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MyPostedJobs from "../pages/MyPostedJob/MyPostedJob";
import UpdateJob from "../component/UpdateJobs/UpdateJob";
import PrivateRoute from "./PrivateRoute";
import MyBids from "../pages/MyBids/MyBids";
import BidRequests from "../pages/BidRequests/BidRequests";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/registration',
                element: <Register />
            }
            ,
            {
                path: '/job/:id',
                element: <PrivateRoute><JobDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateJob /> </PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path: '/add-job',
                element: <PrivateRoute> <AddJob /> </PrivateRoute>
            },
            {
                path: '/my-posted-jobs',
                element: <PrivateRoute> <MyPostedJobs /> </PrivateRoute>
            },
            {
                path: '/my-bids',
                element: <PrivateRoute><MyBids /> </PrivateRoute>
            },
            {
                path: '/bid-requests',
                element: <PrivateRoute> <BidRequests /></PrivateRoute>
            }
        ]
    }
]);

export default router;