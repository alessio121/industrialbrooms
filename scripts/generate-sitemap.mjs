#!/usr/bin/env node

/**
 * Sitemap Generator for Industrial Brooms
 * Automatically generates sitemap.xml from blog posts and static pages
 * Run: node scripts/generate-sitemap.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Configuration
const DOMAIN = 'https://industrialbrooms.com';
const LANGUAGES = ['it', 'en', 'fr', 'es', 'de'];
const DEFAULT_LANG = 'en';

// Static pages with their priorities and change frequencies
const STATIC_PAGES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/blog', priority: '0.9', changefreq: 'daily' },
];

// Extract blog post slugs from blogPosts.ts
function extractBlogSlugs() {
  const blogPostsPath = join(rootDir, 'src', 'data', 'blogPosts.ts');
  const content = readFileSync(blogPostsPath, 'utf-8');
  
  // Match all slug definitions
  const slugRegex = /slug:\s*["']([^"']+)["']/g;
  const slugs = new Set();
  let match;
  
  while ((match = slugRegex.exec(content)) !== null) {
    slugs.add(match[1]);
  }
  
  return Array.from(slugs);
}

// Generate URL entry with hreflang alternatives
function generateUrlEntry(path, priority, changefreq, includeHreflang = true) {
  const today = new Date().toISOString().split('T')[0];
  
  let entry = `  <url>\n`;
  entry += `    <loc>${DOMAIN}${path}</loc>\n`;
  entry += `    <lastmod>${today}</lastmod>\n`;
  entry += `    <changefreq>${changefreq}</changefreq>\n`;
  entry += `    <priority>${priority}</priority>\n`;
  
  if (includeHreflang) {
    // Add hreflang for each language
    for (const lang of LANGUAGES) {
      const langPath = path === '/' ? `/?lang=${lang}` : `${path}?lang=${lang}`;
      entry += `    <xhtml:link rel="alternate" hreflang="${lang}" href="${DOMAIN}${langPath}"/>\n`;
    }
    // Add x-default
    entry += `    <xhtml:link rel="alternate" hreflang="x-default" href="${DOMAIN}${path}"/>\n`;
  }
  
  entry += `  </url>\n`;
  return entry;
}

// Generate full sitemap
function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;
  
  // Add static pages
  for (const page of STATIC_PAGES) {
    sitemap += generateUrlEntry(page.path, page.priority, page.changefreq);
  }
  
  // Add blog posts
  const slugs = extractBlogSlugs();
  console.log(`Found ${slugs.length} blog posts`);
  
  for (const slug of slugs) {
    sitemap += generateUrlEntry(`/blog/${slug}`, '0.8', 'monthly');
  }
  
  sitemap += `</urlset>\n`;
  
  return sitemap;
}

// Main
function main() {
  console.log('Generating sitemap...');
  
  const sitemap = generateSitemap();
  const outputPath = join(rootDir, 'public', 'sitemap.xml');
  
  writeFileSync(outputPath, sitemap, 'utf-8');
  
  console.log(`Sitemap generated successfully: ${outputPath}`);
  console.log(`Total URLs: ${(sitemap.match(/<url>/g) || []).length}`);
}

main();
