import { config } from 'dotenv';
import { createServer, IncomingMessage, ServerResponse } from 'http';
import morgan from 'morgan';

const logger = morgan('common');

config();

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  logger(req, res, function (err: Error) {
    if (err) console.log(err.message)

    // respond to request
    res.setHeader('content-type', 'text/plain');
    res.end('Hello World!');
  })
});


server.listen(process.env.PORT || 3000, () => {
  console.log(`
    🚀 Listening on ${process.env.PORT || 3000}
  `);
});
