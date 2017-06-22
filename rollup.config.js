import nodeResolve from 'rollup-plugin-node-resolve';

let pkg = require("./package.json");
let external = Object.keys(pkg.peerDependencies);

export default {
	entry: 'index.js',
	dest: 'bundle.js',
	format: 'umd',
	moduleName: 'd3-timeline',
	external: external,
	plugins: [nodeResolve({ jsnext: true, main: true})]
};
