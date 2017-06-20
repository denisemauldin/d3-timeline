var tape = require("tape"),
	d3 = Object.assign({}, require("../"), require("d3")),
    timeline = require("../");

tape("timeline() returns the answer to the ultimate question of life, the universe, and everything.", function(test) {
  test.equal(timeline.timeline().version(), '1.0.0');
  test.end();
});
