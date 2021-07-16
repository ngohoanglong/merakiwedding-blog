import React from "react";
import fs from "fs";
import {getAllPostsWithSlug} from "@lib/api";

const Sitemap = () => {};

export const getServerSideProps = async ({res}) => {
    const baseUrl = {
        development: process.env.HOST,
        production: process.env.HOST,
    }[process.env.NODE_ENV];
    const posts = await getAllPostsWithSlug();
    console.log(posts);
    const staticPages = fs
        .readdirSync("pages")
        .filter((staticPage) => {
            return ![
                "_app.js",
                "_document.js",
                "_error.js",
                "sitemap.xml.js",
                "edit.js"
            ].includes(staticPage);
        })
        .map((staticPagePath) => {
            return `${baseUrl}/${staticPagePath}`;
        });


    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .filter((url) => url.includes('.js')).map((url) => {
            return `
            <url>
              <loc>${url.replace('.js', '')}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
        
      ${posts.edges.map(({node}) => {
        return `
            <url>
              <loc>${baseUrl}/posts/${node.slug}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
    }).join("")}
    </urlset>
  `;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;