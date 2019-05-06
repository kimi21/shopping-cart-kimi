const path = require('path');

module.exports = {
    entry: {
        main:["./js/main.js"], 
    },
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: "bundle.js"
    }
};
