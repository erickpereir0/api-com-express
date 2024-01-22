import express,{Request,Response} from 'express';
import { UsersController } from './controllers/usersControllers';
import { router } from './routes';

const server = express();
const usersController = new UsersController();
server.use(express.json());
server.use(router);

server.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

server.listen(3000, () => {
  console.log('Server is listening on http://localhost:3000');
});
