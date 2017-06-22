var tape = require("tape"),
	d3 = Object.assign({}, require("../"), require("d3")),
    timeline = require("../");

tape("timeline() returns the correct version", function(test) {
  test.equal(timeline.timeline().version(), '1.0.0');
  test.end();
});
