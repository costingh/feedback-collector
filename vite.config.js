import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: "./src/components/widgets/WidgetContainer.tsx", // Entry file for the widget
			name: "FeedbackzWidget", // Global variable name for the widget (used when it's included in the browser)
			fileName: "widget-embed", // Output file name (you can change it to "widget.js" if you prefer)
			formats: ["umd", "iife"], // Output formats (UMD and IIFE are suitable for embedding on websites)
		},
		rollupOptions: {
			// external: ["react", "react-dom"], // Externalize React and ReactDOM (they must be available globally in the embedding website)
			output: {
				globals: {
					react: "React", // Global variable for React when the script is included on the website
					"react-dom": "ReactDOM", // Global variable for ReactDOM
				},
			},
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"), // Path alias for cleaner imports
		},
	},
	define: {
		"process.env": {}, // Add this line to define `process.env` for the browser - polyfill
        "process.env.NEXT_PUBLIC_HOST_URL": JSON.stringify(process.env.NEXT_PUBLIC_HOST_URL || "http://localhost:3000"),
	},
});
