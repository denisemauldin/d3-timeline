import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
	entry: 'index.js',
	dest: 'bundle.js',
	format: 'iife',
	moduleName: 'd3-timeline',
	plugins: [
	
		commonjs({
			include: [ 'src/**', 'node_modules/**' ],
			extensions: ['.js'],
			namedExports: {
				'./src/timeline.js': ['d3.timeline', 'timeline'],
				'./index.js': ['d3.timeline', 'timeline'],
			}
		}),
		nodeResolve({ jsnext: true, main: true }),
	
	]
};
