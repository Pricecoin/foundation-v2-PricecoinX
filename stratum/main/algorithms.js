const hashing = require('bindings')('hashing.node');

////////////////////////////////////////////////////////////////////////////////

// Main Algorithms Function
const Algorithms = {

  // Allium Algorithm
  'allium': {
    multiplier: Math.pow(2, 8),
    diff: parseInt('0x00000000ffff0000000000000000000000000000000000000000000000000000'),
    hash: function(){
      return function(){
        return hashing.allium.apply(this, arguments);
      };
    }
  },

  // Sha256d Algorithm
  'sha256d': {
    multiplier: 1,
    diff: parseInt('0x00000000ffff0000000000000000000000000000000000000000000000000000'),
    hash: function() {
      return function() {
        return hashing.sha256d.apply(this, arguments);
      };
    }
  },
};

module.exports = Algorithms;
