import express, {Express} from 'express';
import { ContextResource } from './resource/context';
import { ConfigResolverService } from './service/configResolver';
import { HealthCheckResource } from './resource/health';
import cors from 'cors';

const app: Express = express();
const port = 3000;

const router = express.Router();

const servicePack = {
  configResolverService: new ConfigResolverService(),
}

router.use('/context', ContextResource(servicePack)).use('/status', HealthCheckResource);
app.use(cors())
app.use('/api', router);
app.listen(port, () => {
  console.log(`Api server is running on port ${port}`);
});

