import { Router } from "express";
import routesUsers from "./routeUsers";
import routeAppointments from "./routeAppointment";

const router: Router = Router();

router.use("/users", routesUsers);
router.use("/appointments", routeAppointments);

export default router;
