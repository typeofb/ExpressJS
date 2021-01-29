let userModel = require('../models').User;

// [GET] http://localhost:3000/user/typeofb
let read = async function (req, res, next) {
  await userModel.findAll({
    where: {
      nickname: req.params.nickname
    }
  }).then(function (rows) {
    console.log(rows);
    return res.json(rows);
  }).catch(function (error) {
    console.error(error);
    next(error);
  });
}

// [POST] http://localhost:3000/user?nickname=typeofb&password=1234
let insert = async function (req, res, next) {
  await userModel.create({
    nickname: req.query.nickname,
    password: req.query.password
  }).then(function (rows) {
    console.log(rows);
    return res.json(rows);
  }).catch(function (error) {
    console.error(error);
    next(error);
  });
}

module.exports = {
  read: read,
  insert: insert
};