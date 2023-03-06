class Config {
    public port = 4001;
    public mysqlHost = "localhost";
    public mysqlUser = "root";
    public mysqlPassword = "";
    public mysqlDatabase = "teamAppointments"; 
}

const config = new Config();

export default config;
