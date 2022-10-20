const express = require('express');
const app = express();
const controller = require('./routes/controller');
const port = 3000;



app.use(express.json());

app.get('/api/controller', controller.printParts, (req, res) => {
     return res.status(200).json(res.locals.partsData)}
);

app.post('/api/controller', controller.createParts, (req, res) => {
  return res.status(200).json(res.locals.partsData)}
);

app.get('/api', (req, res) => {
	return res.send('hello world from express!')
});

app.use((req, res) => {
    return res.status(400).json('Sorry, nothing here!')
})

app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })

module.exports = app;