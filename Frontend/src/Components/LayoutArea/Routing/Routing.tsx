import { Navigate, Route, Routes } from "react-router-dom";
import AddAppointment from "../../AppointmentArea/AddAppointment/AddAppointment";
import AppointmentList from "../../AppointmentArea/AppointmentList/AppointmentList";
import TeamList from "../../TeamArea/TeamList/TeamList";
import PageNotFound from "../PageNotFound/PageNotFound";


function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/appointments" element={<AppointmentList />} />
                <Route path="/teams" element={<TeamList />} />
                <Route path="/appointments/new" element={<AddAppointment />} />
                <Route path="/" element={<Navigate to="/appointments" />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default Routing;
