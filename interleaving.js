(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.interleaving = factory();
  }
}(this, function () {
"use strict";

function interleaving(lengthBias) { return function interleave() {
  var argc = arguments.length;

  if (!argc) return [];

  var lengths = [];
  var totalLength = 0;
  var ps = [];
  var i;

  for (i = 0; i < argc; ++i) {
    totalLength += lengths[i] = arguments[i].length;
    lengths[i] += lengthBias;
    ps[i] = 0;
  }

  var interleaved = new Array(totalLength);

  var loi, lopv, ipv;

  for (var ii = 0; ii < totalLength; ++ii) {

    // find next array to interleave from
    loi = 0;
    lopv = (ps[0] + 1) / lengths[0];
    for (i = 1; i < argc; ++i) {
      ipv = (ps[i] + 1) / lengths[i];
      if (ipv < lopv) {
        loi = i;
        lopv = ipv;
      }
    }

    interleaved[ii] = arguments[loi][ps[loi]++];
  }

  return interleaved;
};}

return {
  justify: interleaving(0),
  center: interleaving(1)
};
}));
