const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const bcrypt = require('bcryptjs');

var { Charge } = require('../../data/charges/charges.model.js');
var ChargeModel = require('../../data/charges/charges.model.js');

router.get('/', (req, res) => {
    Charge.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Charges :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports=router;