import express from 'express';
import path from 'path';
import { indexRouter } from './routes';
const app = express();
const PORT = 3001;
app.all('/*', indexRouter);
app.use(express.static(path.join(__dirname, '../build')));
app.listen(PORT, () => {
    console.log(`
  ################################################
  🛡️  Server listening on port: ${PORT}🛡️
  ################################################
`);
});
