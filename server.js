/*
 * Server for videogame
 *
 * © 2017 Peter Martinson
 *
*/

'use strict';

/* ============================ SETUP ============================ */

const express       = require('express'),
      app           = express(),
      bodyParser    = require('body-parser'),

      // Global Config
      PORT          = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* ============================ ROUTES ============================ */

app.use(express.static(__dirname));

app.get('/',function(req, res){
	res.sendFile(__dirname);
});

/* =========================== RUN APP =========================== */

app.listen(PORT, function (){
	console.log('Server is listening to %d port in %s mode',PORT,app.settings.env);
});