let stockModel = require('../models').Stock;

let read = async (req, res, next) => {
  let category = 'AND category IN (' + req.query.categoryCode + ')';
  let price = ' AND price ' + req.query.priceCode;
  let sortby = ' ORDER BY price ' + req.query.sortbyCode;

  let targetPage = req.query.targetPage;
  let rowSize = 2;
  let queryWithParams = '                                                               \n\
    SELECT                                                                              \n\
      D.*                                                                               \n\
    FROM                                                                                \n\
    (                                                                                   \n\
        SELECT                                                                          \n\
            C.*,                                                                        \n\
            TRUNCATE((ROWNUM - 1) / ' + rowSize + ', 0) + 1 AS PAGE,                    \n\
            TRUNCATE((TOTAL_ROW_SIZE - 1) / ' + rowSize + ', 0) + 1 AS TOTAL_PAGE_SIZE  \n\
        FROM                                                                            \n\
        (                                                                               \n\
            SELECT                                                                      \n\
                B.*,                                                                    \n\
                (@RNUM := @RNUM + 1) AS ROWNUM,                                         \n\
                FOUND_ROWS() AS TOTAL_ROW_SIZE                                          \n\
            FROM                                                                        \n\
            (                                                                           \n\
                SELECT                                                                  \n\
                    A.id,                                                               \n\
                    A.category,                                                         \n\
                    A.name,                                                             \n\
                    A.price,                                                            \n\
                    A.cnt,                                                              \n\
                    A.img                                                               \n\
                FROM stock A                                                            \n\
                WHERE 1 = 1                                                             \n\
                ' + category + price + sortby + '                                       \n\
            ) B, (SELECT @RNUM := 0) R                                                  \n\
        ) C                                                                             \n\
    ) D                                                                                 \n\
    WHERE PAGE = ' + targetPage + '                                                     \n\
    ' + sortby + '                                                                      \n\
    ';

  await stockModel.sequelize.query(queryWithParams, {
    type: stockModel.sequelize.QueryTypes.SELECT
  }).then(function (rows) {
    res.locals.divResultArea = rows;
    res.locals.currentPageNo = targetPage;
    res.locals.totalPage = rows[0].TOTAL_PAGE_SIZE;
    res.locals.totalCnt = rows[0].TOTAL_ROW_SIZE;
    return res.render('stockAjax');
  }).catch(function (error) {
    console.error(error);
    next(error);
  });
}

let create = async function (req, res, next) {
  return res.render('stockAjax');
}

let update = async function (req, res, next) {
  return res.render('stockAjax');
}

let del = async function (req, res, next) {
  return res.render('stockAjax');
}

module.exports = {
  read: read,
  create: create,
  update: update,
  delete: del
};