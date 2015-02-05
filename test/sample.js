var superagent = require('superagent')
var expect = require('expect.js')
var assert = require("assert");

describe('express rest api server', function() {
  it('retrieves a collection', function(done) {
    superagent.get('http://localhost:3000/collections/test')
      .end(function(e, res) {
        console.log(res.body)
        expect(e).to.eql(null)
        expect(res.body.length).to.be.above(0)
        expect(res.body.map(function(item) {
          return item._id
        })).to.contain(id)
        done()
      })
  })
});

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1, 2, 3].indexOf(5));
      assert.equal(-1, [1, 2, 3].indexOf(0));
    });
  });
});