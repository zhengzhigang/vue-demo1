const {goods, user} = require('./data');

module.exports = function (app) {
    app.get('/goods/list', (req, res, next) => {
        res.json(goods);
        next();
    });
    app.get('/account/user', (req, res, next) => {
        res.json(user);
        next();
    });
}