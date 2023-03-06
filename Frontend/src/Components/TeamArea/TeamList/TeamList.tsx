import { useEffect, useState } from "react";
import TeamModel from "../../../Models/TeamModel";
import AppointmentService from "../../../Services/AppointmentService";

import TeamCard from "../TeamCard/TeamCard.";

function TeamList(): JSX.Element {

    const [teams, setTeams] = useState<TeamModel[]>([]);

    useEffect( () => {
        AppointmentService.getAllTeams()
                    .then(teams => setTeams(teams))
                    .catch(err => alert(err.message));
    }, [])

    return (
        <div className="AppointmentList">

            <br/><br/>
            {teams.map(t => <TeamCard key={t.teamId} team={t} />)}
        </div>
    );
}
export default TeamList;


