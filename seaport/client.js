/**
 * Created by a on 2/10/2015.
 */
var seaport = require('seaport');
var ports = seaport.connect(9090);
var request = require('request');

ports.get('http@0.0.0', function (ps) {
    var u = 'http://' + ps[0].host + ':' + ps[0].port;
    request(u).pipe(process.stdout);
});