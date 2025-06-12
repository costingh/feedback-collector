import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
	plugins: [react()],
	build: {
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true, // remove console logs
				drop_debugger: true,
			},
			mangle: true,
		},
		lib: {
			// Required but will be overridden by rollupOptions.input
			entry: './src/components/widgets/WidgetContainer.tsx',
			formats: ['iife', 'umd'],
		},
		rollupOptions: {
			input: {
				widget: path.resolve(
					__dirname,
					"src/components/widgets/WidgetContainer.tsx"
				),
				// form: path.resolve(
				// 	__dirname,
				// 	'src/components/embeddables/FeedbackzFormEmbed.tsx',
				// ),
			},
			// external: ["react", "react-dom"], //
			output: [
				{
					entryFileNames: "widget-embed.iife.js",
					format: "iife",
					name: "FeedbackzWidget",
					globals: {
						react: "React",
						"react-dom": "ReactDOM",
					},
				},
				// {
				// 	entryFileNames: 'form-embed.iife.js',
				// 	format: 'iife',
				// 	name: 'FeedbackzForm',
				// 	globals: {
				// 		react: 'React',
				// 		'react-dom': 'ReactDOM',
				// 	},
				// },
			],
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'), // Path alias for cleaner imports
		},
	},
	define: {
		'process.env': {
			NEXT_PUBLIC_HOST_URL: JSON.stringify(process.env.VITE_HOST_URL),
		},
	},
})
