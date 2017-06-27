var tape = require("tape"),
	d3 = Object.assign({}, require("../"), require("d3")),
    timelines = require("../");

tape("timeline() returns the correct version", function(test) {
  test.equal(timelines.timelines().version(), '1.0.0');
  test.end();
});
