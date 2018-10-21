/***
 * tg-resolve
 *
 * Mohammed Sohail <sohailsameja@gmail.com>
 * Released Under MIT License
 ***/


// Node Packages

var http = require('http');
var should = require('should');
var tgresolve = require('.');

// Module variables

var username = "@kamikazechaser";
var userid = 135207785;
var token = process.env.TELEGRAM_TOKEN;
if (!token) {
    console.error("Telegram token required");
    process.exit(1);
}
var timeout = 10 * 1000;
var port = parseInt(process.env.PORT, 10) || 8176;
var customUrl = "http://localhost:" + port;
// we are using a dummy server that just responds with a valid payload
var server = http.Server(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json',
    });
    res.end(JSON.stringify({
        result: {
            username: username.slice(1),
            id: userid,
            // ... other missing props ...
        }
    }));
});


before(function(done) {
    server.listen(port, done);
});


describe('tgresolve()', function() {
    it('is exposed as the main exports', function() {
        should(tgresolve).be.a.Function();
    });
    it('resolves username', function(done) {
        this.timeout(timeout);
        tgresolve(token, username, function(error, result) {
            should(error).not.be.ok();
            should(result).be.an.Object();
            // 'result.username' does NOT prefix it with '@'
            should(result.username).eql(username.slice(1));
            should(result.id).eql(userid);
            return done();
        });
    });
    it('allows custom pwrtelegram url', function(done) {
        tgresolve(token, username, { url: customUrl }, function(error, result) {
            should(error).not.be.ok();
            should(result).be.an.Object();
            should(result.username).eql(username.slice(1));
            should(result.id).eql(userid);
            return done();
        });
    });
});


describe('tgresolve#Tgresolve', function() {
    var resolver;
    before(function() {
        resolver = new tgresolve.Tgresolve(token);
    });
    it('is exported at tgresolve.Tgresolve', function() {
        should(tgresolve.Tgresolve).be.a.Function();
    });
    it('constructs a client', function() {
        should(resolver).an.instanceof(tgresolve.Tgresolve);
        should(resolver.tgresolve).be.a.Function();
    });
    it('.tgresolve() resolves username', function(done) {
        this.timeout(timeout);
        resolver.tgresolve(username, function(error, result) {
            should(error).not.be.ok();
            should(result).be.an.Object();
            should(result.username).eql(username.slice(1));
            should(result.id).eql(userid);
            return done();
        });
    });
    it('allows custom url', function() {
        var resolver = new tgresolve.Tgresolve(token, { url: customUrl });
        resolver.tgresolve(username, function(error, result) {
            should(error).not.be.ok();
            should(result).be.an.Object();
            should(result.username).eql(username.slice(1));
            should(result.id).eql(userid);
            return done();
        });
    });
});
