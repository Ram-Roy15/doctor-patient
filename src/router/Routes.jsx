import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import JobDetails from "../pages/JobDetails";
import AddJobs from "../pages/AddJobs";
import Error from "../pages/Error";
import MyPostedJobs from "../pages/MyPotedJobs";
import UpdateJob from "../pages/UpdateJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

        // loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`),
        // loader: () => fetch("http://localhost:5000/jobs"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/add-job",
        element: <AddJobs></AddJobs>,
      },
      {
        path: "/my-posted-jobs",
        element: <MyPostedJobs></MyPostedJobs>,
      },
      {
        path: "/update/:id",
        element: <UpdateJob></UpdateJob>,
        loader: async ({ params }) => {
          try {
            const response = await fetch(
              `http://localhost:5000/job/${params.id}`
            );
            if (!response.ok) throw new Error("Failed to fetch job data");
            return await response.json();
          } catch (error) {
            console.error(error);
            throw new Response("Job not found", { status: 404 });
          }
        },
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: async ({ params }) => {
          try {
            const response = await fetch(
              `http://localhost:5000/job/${params.id}`
            );
            if (!response.ok) throw new Error("Failed to fetch job data");
            return await response.json();
          } catch (error) {
            console.error(error);
            throw new Response("Job not found", { status: 404 });
          }
        },

        // fetch(`http://localhost:5000/job/${params.id}`),
      },
    ],
  },
]);
export default router;
