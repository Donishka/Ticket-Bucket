const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var Charge = mongoose.model('Charges', {
    start: {
        type: String,
    },
    end: {
        type: String,
    },

    class: {
        type: String,
    },
    amount: {
        type: String,
    },
}, 'charges');

module.exports = { Charge };