import React from "react";
import {getAllPostsWithSlug} from "@lib/api";

const SitemapXml = () => {};

export const getServerSideProps = async ({res}) => {
    const baseUrl = {
        development: process.env.HOST,
        production: process.env.HOST,
    }[process.env.NODE_ENV];
    const posts = await getAllPostsWithSlug();


    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://merakiweddingplanner.com/about</loc>
        <lastmod>2021-07-16T07:41:36.936Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
        </url>
        <url>
        <loc>https://merakiweddingplanner.com/blog</loc>
        <lastmod>2021-07-16T07:41:36.936Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
        </url>
        <url>
        <loc>https://merakiweddingplanner.com/contact</loc>
        <lastmod>2021-07-16T07:41:36.936Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
        </url>
        <url>
        <loc>https://merakiweddingplanner.com/gallery</loc>
        <lastmod>2021-07-16T07:41:36.936Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
        </url>
        <url>
        <loc>https://merakiweddingplanner.com/index</loc>
        <lastmod>2021-07-16T07:41:36.936Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
        </url>
        <url>
        <loc>https://merakiweddingplanner.com/kind-words</loc>
        <lastmod>2021-07-16T07:41:36.936Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
        </url>
        <url>
        <loc>https://merakiweddingplanner.com/services</loc>
        <lastmod>2021-07-16T07:41:36.936Z</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
        </url>
       
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

export default SitemapXml;