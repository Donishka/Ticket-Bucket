const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const bcrypt = require('bcryptjs');

var { Charge } = require('../../data/charges/charges.model.js');
var { Purchase } = require('../../data/purchases/purchases.model.js');
var PurchaseModel = require('../../data/purchases/purchases.model.js');

router.get('/', (req, res) => {
    Purchase.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Purchases :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var purchase = new Purchase({
        start:req.body.start,
        end: req.body.end,
        date: req.body.date,
        class: req.body.class,
        cost:req.body.cost,
        time: req.body.time,
        buyerid: req.body.buyerid,

    });
    purchase.save(purchase, (err, doc) => {
        if (err) {
            res.json({ state: false, msg: "data not inserted" });
        }
        if (doc) {
            res.json({ state: true, msg: "data  inserted" });
        }
    }
    );
});

module.exports = router;