import { createBrowserRouter } from "react-router";
import Chat from "../pages/Dashboard/Chat";
import Appointment from "../pages/Dashboard/Appointment";
import AppointmentList from "../pages/Dashboard/AppointmentList";
import CreateAppointment from "../pages/Dashboard/CreateAppointment";
import Login from "../pages/Authentication/Login";
import ForgetPassword from "../pages/Authentication/ForgetPassword";
import Otp from "../pages/Authentication/Otp";
import SetPassword from "../pages/Authentication/SetPassword";
import PasswordSuccessfull from "../pages/Authentication/PasswordSuccessfull";
import Root from "../layout/Root";
import Auth from "../layout/Auth";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [

            {
                index: true,
                element: <Chat></Chat>
            },
            {
                path: "appointment",
                element: <Appointment></Appointment>
            },
            {
                path: "appointment-list",
                element: <AppointmentList></AppointmentList>
            },
            {
                path: "create-appointment",
                element: <CreateAppointment></CreateAppointment>
            },

        ]
    },
    {
        path: "auth",
        element: <Auth></Auth>,
        children: [
          { path: "login", element: <Login></Login> },
          { path: "forget-password", element: <ForgetPassword></ForgetPassword> },
          { path: "otp", element: <Otp></Otp> },
          { path: "set-password", element: <SetPassword></SetPassword> },
          { path: "password-successfull", element: <PasswordSuccessfull></PasswordSuccessfull> },
        ],
      },
]);