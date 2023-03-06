import TeamModel from "../../../Models/TeamModel";
import "./TeamCard.css"

interface TeamCardsProps{
    team: TeamModel
}

function TeamCard(props: TeamCardsProps): JSX.Element {
    return (
        <div className="TeamCard">
            
            <span>{props.team.teamId}</span>
            <br/>
            <br/>
            <span>{props.team.teamName}</span>

           
        </div>
    );
}

export default TeamCard;
