// vue.consig.js
const api = require('./src/mock/api');

module.exports = {
    devServer: {
        port: 3102,
        before (app) {
            api(app);
        }
    }
}