const express = require('express');
var router =  express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const bcrypt  = require('bcryptjs');

var { User }  = require('../../data/user/user.model.js');
var  UserModel  = require('../../data/user/user.model.js');

router.get('/', (req, res) => {
    User.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Users :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
        User.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var user = new User({
        fname: req.body.fname,
        lname:req.body.lname,
        username: req.body.username,
        password: req.body.password,
        email:req.body.email,
        telephone: req.body.telephone,
        address: req.body.address,
        isadmin: req.body.isadmin,
        profilepic: req.body.profilepic,
        usertype:"user"
    });
    UserModel.saveUser(user,(err, doc) => {
        if(err){
            res.json({state:false,msg:"data not inserted"});
        }
        if(doc){
            res.json({state:true,msg:"data  inserted"});
        }}
);
});
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var user = {
        fname: req.body.fname,
        lname:req.body.lname,
        username: req.body.username,
        email:req.body.email,
        telephone: req.body.telephone,
        address: req.body.address,
        isadmin: req.body.isadmin,
        profilepic: req.body.profilepic,
        usertype:"user"
    };

    User.findByIdAndUpdate(req.params.id, { $set: user }, { new: true }, (err, doc) => {
                        if (!err) { res.send(doc); }
                        else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
                    });

});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    User.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;