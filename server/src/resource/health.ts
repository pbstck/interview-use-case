import { RequestHandler, Router } from "express";

const healthCheckHandler: RequestHandler = (req, res) => {
  res.json({status: 'ok'});
}

export const HealthCheckResource = Router().get('/', healthCheckHandler);