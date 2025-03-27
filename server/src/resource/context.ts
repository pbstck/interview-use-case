import {RequestHandler, Router} from "express";
import {ConfigResolverService} from "../service/configResolver";

const siteHandler = (configService: ConfigResolverService): RequestHandler => (req, res) => {
  const {sitename} = req.params;
  const config = configService.resolveConfig(sitename)
  if (!config) {
    res.sendStatus(404);
    return;
  }
  res.json(config);
}

export const ContextResource = ({configResolverService}: {
  configResolverService: ConfigResolverService
}) => Router().get('/config/:sitename', siteHandler(configResolverService));