/// <reference path="typings/tsd.d.ts" />

import express = require('express');
import bodyParser = require('body-parser');
import MemberRepository = require('./memberRepository');
// New Code
var mongo = require('mongodb');
var monk = require('monk');

var db = monk('localhost:27017/goteamup');

var app = express();

// configure our app to use bodyParser(it let us get the json data from a POST)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req:any, res:any, next:any) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Make our db accessible to our router
app.use(function(req:any, res:any, next:any){
    req.db = db;
    next();
});

var port:number = process.env.PORT || 8888;
var router = express.Router();

var memberRepository = new MemberRepository.MemberRepository(db);

router.get('/members', function(req, res) {
    memberRepository.getAll().then((members) => {
        res.json(members);
    });
});

router.get('/members/:id', function(req, res) {
    res.json(memberRepository.read(req.params.id));
});

// prefixed all routes with /api
var prefix = '/api';
app.use(prefix, router);

// Start listening
console.log('http://127.0.0.1:' + port + prefix);
app.listen(port);
