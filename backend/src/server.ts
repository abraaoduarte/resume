import { createServer } from 'http';
import app from './app';

(async () => {
  const server = createServer(app.callback());

  server.listen(3000, () => {
    console.log(`server running on port :${3000}`);
  });
})();
