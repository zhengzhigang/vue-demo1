const {goods, user, noticeList} = require('./data');

module.exports = function (app) {
    app.get('/goods/list', (req, res, next) => {
        res.json(goods);
        next();
    });
    app.get('/account/user', (req, res, next) => {
        res.json(user);
        next();
    });
    app.get('/notice/list', (req, res, next) => {
        res.json(noticeList);
        next();
    });
}