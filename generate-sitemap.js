const SitemapGenerator = require("sitemap-generator");
const fs = require("fs");

const generator = SitemapGenerator("https://feedbackz.co/", {
	stripQuerystring: false, // Optional: Set to true to ignore query parameters
});

generator.on("add", (url) => {
	console.log("Added URL:", url);
});

generator.on("error", (error) => {
	console.error("Error generating sitemap:", error);
});

generator.on("done", () => {
	console.log("Sitemap generated");
	const sitemapXML = generator.sitemap;
	fs.writeFileSync("./sitemap.xml", sitemapXML);
});

generator.start();
