const yelp = require('yelp-fusion');

const client = yelp.client(
  'nJvRCUJ94q0VVptIYGXzrzauyTaITN9k2mHFyquWt_8-t_zS6Mdit2TmDw_Wtaw-5dYTUjHzw2v0uihDjEt8x8a_1LBv34IDp8RgVztNzVBNOrmyQNT42z8amWSIXHYx',
);

const appRouter = function (app) {
  app.get('/', (req, res) => {
    res.status(200).send({
      message: 'Welcome to our yelp call API the allowed calls are get/groceries and get/childcare',
    });
  });

  // app.get('/groceries/:lat/:long', (req, res) => {
  //   const lat = req.params.lat;
  //   const long = req.params.long;
  //   client
  //     .search({
  //       term: 'groceries',
  //       latitude: lat,
  //       longitude: long,
  //     })
  //     .then((response) => {
  //       res.status(200).send(response.jsonBody);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // });

  // app.get('/childcare/:lat/:long', (req, res) => {
  //   const lat = req.params.lat;
  //   const long = req.params.long;
  //   client
  //     .search({
  //       term: 'childcare',
  //       latitude: lat,
  //       longitude: long,
  //     })
  //     .then((response) => {
  //       res.status(200).send(response.jsonBody);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // });
  // };

  app.get('/:query/:lat/:long', (req, res) => {
    const query = req.params.query;
    const lat = req.params.lat;
    const long = req.params.long;
    client
      .search({
        term: query,
        latitude: lat,
        longitude: long,
      })
      .then((response) => {
        res.status(200).send(response.jsonBody);
      })
      .catch((e) => {
        console.log(e);
      });
  });
};
module.exports = appRouter;
