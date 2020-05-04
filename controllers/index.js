let read = async function (req, res, next) {
  return res.render('index');
}

let update = async function (req, res, next) {
  return res.render('index');
}

module.exports = {
  read: read,
  update: update
};