import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

const config = {
	input: "components/index.tsx",
	output: {
		file: "public/widget.umd.js", // Adjusted for UMD bundle format
		name: "widget",
		format: "umd", // UMD for compatibility with <script> tags
		sourcemap: true,
	},
	plugins: [
		resolve(), // Resolves node_modules
		commonjs(), // Converts CommonJS modules to ES6
		typescript(), // Compiles TypeScript files
		terser(), // Minifies the output
	],
	external: ["react", "react-dom"], // Exclude these from the bundle
	globals: {
		react: "React", // External global variable for React
		"react-dom": "ReactDOM", // External global variable for ReactDOM
	},
};

export default config;
