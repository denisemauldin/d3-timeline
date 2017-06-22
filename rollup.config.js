import nodeResolve from 'rollup-plugin-node-resolve';

export default {
	entry: 'index.js',
	dest: 'bundle.js',
	format: 'umd',
	moduleName: 'd3-timeline',
	plugins: [nodeResolve({ jsnext: true, main: true})]
};
