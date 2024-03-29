import express from 'express';
import ssr from './ssr';

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/*', ssr);

app.listen(process.env.PORT || 3000, () => {
  console.log('Hello World listening on port ' + (process.env.PORT || 3000));
});
