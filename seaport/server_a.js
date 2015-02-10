/**
 * Created by a on 2/10/2015.
 */

var seaport = require('seaport');
var ports = seaport.connect('localhost', 9090);
var http = require('http');

var server = http.createServer(function (req, res) {
    res.end('version 0.0.0\r\n');
});

server.listen(ports.register('http@0.0.0'));
