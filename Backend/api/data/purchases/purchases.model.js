const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var Purchase = mongoose.model('Purchases', {
    start: {
        type: String,
    },
    end: {
        type: String,
    },

    class: {
        type: String,
    },
    cost: {
        type: String,
    },
    date: {
        type: String,
    },
    time: {
        type: String,
    },
    buyerid: {
        type: String,
    },
}, 'purchases');

module.exports = { Purchase };