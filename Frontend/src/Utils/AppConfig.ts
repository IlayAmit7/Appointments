class AppConfig {
    public teamsUrl = "http://localhost:4001/api/teams/";
    public appointmentsByTeamIdUrl = "http://localhost:4001/api/appointments-by-teamId/";
    public appointmentsUrl = "http://localhost:4001/api/appointments/";
}

const appConfig = new AppConfig();

export default appConfig;
