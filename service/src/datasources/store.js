module.exports.createStore = () => {
    let data = require('./data');


    console.log('data', data);
    return { data };
};