import { createServer } from 'http';
import app from './app';
import { connectDatabase } from './database';

(async () => {
  await connectDatabase();

  const server = createServer(app.callback());

  server.listen(3000, () => {
    console.log(`server running on port :${3000}`);
  });
})();
