/***
 * tg-resolve
 *
 * Mohammed Sohail <sohailsameja@gmail.com>
 * Released Under MIT License
 ***/


// Node Packages

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
});
