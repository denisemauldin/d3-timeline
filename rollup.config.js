import nodeResolve from 'rollup-plugin-node-resolve';

let pkg = require("./package.json");
let external = Object.keys(pkg.peerDependencies);

export default {
    input: 'index.js',
    output: {
      file: 'build/d3-timelines.js',
	  format: 'umd',
	  extend: true,
	  globals: {
		  "d3-axis": "d3",
		  "d3-array": "d3",
		  "d3-time-format": "d3",
		  "d3-time": "d3",
		  "d3-selection": "d3",
		  "d3-scale": "d3",
		  "d3-zoom": "d3"
	  },
      name: 'd3'
    },
	external: external,
	plugins: [nodeResolve({ jsnext: true, main: true})]
};

