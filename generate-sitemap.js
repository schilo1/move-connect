import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

// Replace with your real domain
const siteUrl = "https://xn--gb-9ja.com";

// List your site’s important pages
const pages = [
  "/",
  "/About",
  "/Offres",
  "/Contact",
  "/products",
  "/services",
  // add more routes here
];

const sitemap = new SitemapStream({ hostname: siteUrl });

pages.forEach((page) => {
  sitemap.write({ url: page, changefreq: "weekly", priority: 0.8 });
});

sitemap.end();

streamToPromise(sitemap).then((data) => {
  createWriteStream("./public/sitemap.xml").write(data.toString());
  console.log("✅ Sitemap generated!");
});
