/**
 * Created by Django on 17/09/15.
 */

var express = require('express'),
    io = require('socket.io'),
    http = require('http'),
    app = express(),
    server = http.createServer(app),
    io = io.listen(server);

server.listen(3000);

/******************
 * VIEWS VARIABLES
 *****************/

//tablet variables
var currView = "start",
    currTags = [];


/***************
 * SUPPORT APIs
 **************/

//just for debug
app.get('/', function (req, res) {
    res.send('Hello world!');
});

//if screen view is rebooted, this should be its first cll to resync with tablet view
//note: if we decide to use reset on startup, this can be avoided
app.get('/currstatus', function (req, res) {
    res.send(JSON.stringify({"view":currView, "tags":currTags}));
});


/***************************
 * SYNCING THROUGH SOCKET.IO
 **************************/

io.on('connection', function(socket){
    //connection, just for debug
    console.log('a user connected');

    //this is called whenever a view gets connected (tablet or screen), to reset the other one (if online)
    //should this be separated in two reset (resetScreen & resetTablet) to avoid double init on startup?
    io.emit('reset', msg);

    //changeView event coming from tablet
    socket.on('changeView', function(msg){
        currView = msg;
        //guiView event emitted for screen view
        io.emit('guiView', msg);
    });

    //selected tag list sent from tablet whenever a tag is added or removed
    socket.on('changeTags',function(data){
        currTags = data;
        //sync tags with screen view
        io.emit('selectedTags', data);
    })

    //send selected videos from tablet view to screen view
    socket.on('videos',function(data){
        videos = data;
        //sync tags with screen view
        io.emit('selectedVideos', data);
    })
});