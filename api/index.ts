/// <reference path="typings/tsd.d.ts" />

import express = require('express');
import bodyParser = require('body-parser');
import MemberRepository = require('./memberRepository');

var app = express();

// configure our app to use bodyParser(it let us get the json data from a POST)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port:number = process.env.PORT || 8888;
var router = express.Router();

var memberRepository = new MemberRepository.MemberRepository();

router.get('/members', function(req, res) {
    res.json(memberRepository.getAll());
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
