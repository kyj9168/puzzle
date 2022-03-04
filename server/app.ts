import appRootPath from 'app-root-path';
import express from 'express';
import path from 'path';
import { indexRouter } from './routes';
const app = express();
const PORT = 6104;
app.all('/*', indexRouter);
console.log(`${appRootPath}/build`);
app.use(express.static(`${appRootPath}/build`));
app.use(express.static(`${appRootPath}/public`));
app.listen(PORT, () => {
    console.log(`
  ################################################
  🛡️  Server listening on port: ${PORT}🛡️
  ################################################
`);
});
