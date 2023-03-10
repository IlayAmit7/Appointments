import express from "express";
import cors from "cors";
import catchAll from "./3-middleware/catch-all";
import routeNotFound from "./3-middleware/route-not-found";
import controller from "./6-routes/data-routes";
import config from "./2-utils/app-config";

const server = express();

server.use(cors());
server.use(express.json());
server.use("/", controller);
server.use("*", routeNotFound);
server.use(catchAll);

server.listen(config.port, () => console.log("Listening on http://localhost:" + config.port));
