let cities = require('../models/cities');

let read = async function (req, res, next) {
  await cities.find({
    population: { $gte: 1000000 }
  }).exec().then(function (rows) {
    console.log(rows);
    return res.json(rows);
  }).catch(function (error) {
    console.error(error);
    next(error);
  });
}

let update = async function (req, res, next) {
  return res.render('index');
}

module.exports = {
  read: read,
  update: update
};