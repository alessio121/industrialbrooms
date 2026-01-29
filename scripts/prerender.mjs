#!/usr/bin/env node
/**
 * Prerender script for Industrial Brooms
 * Renders React SPA pages to static HTML for SEO
 */

import puppeteer from 'puppeteer';
import { createServer } from 'http';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');

// All routes to prerender
const routes = [
  '/',
  '/blog',
  // Italian blog posts
  '/blog/scope-industriali-per-cantieri-guida-completa',
  '/blog/attrezzature-pulizia-industriale-come-scegliere',
  '/blog/scope-per-muletti-vantaggi-utilizzo',
  '/blog/pulizia-capannoni-industriali-soluzioni-efficaci',
  '/blog/pulizia-piazzali-rottami-scope-industriali',
  '/blog/come-pulire-trucioli-metallici-officina',
  '/blog/guida-scelta-scopa-industriale',
  '/blog/scope-attacco-forche-quando-usarle',
  // English blog posts
  '/blog/scrap-yard-cleaning-industrial-brooms',
  '/blog/how-to-clean-metal-chips-workshop',
  '/blog/industrial-broom-selection-guide',
  '/blog/forklift-attachment-brooms-when-to-use',
  // French blog posts
  '/blog/nettoyage-parc-ferraille-balais-industriels',
  '/blog/comment-nettoyer-copeaux-metalliques-atelier',
  '/blog/guide-choix-balai-industriel',
  '/blog/balais-attache-fourches-quand-utiliser',
  // Spanish blog posts
  '/blog/limpieza-patio-chatarra-escobas-industriales',
  '/blog/como-limpiar-virutas-metalicas-taller',
  '/blog/guia-eleccion-escoba-industrial',
  '/blog/escobas-enganche-horquillas-cuando-usar',
  // German blog posts
  '/blog/schrottplatz-reinigung-industriebesen',
  '/blog/metallspaene-reinigen-werkstatt-anleitung',
  '/blog/industriebesen-auswahl-ratgeber',
  '/blog/gabelstapler-anbaubesen-wann-verwenden',
];

// Simple static file server
function createStaticServer(dir, port) {
  return new Promise((resolve) => {
    const mimeTypes = {
      '.html': 'text/html',
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.svg': 'image/svg+xml',
      '.woff': 'font/woff',
      '.woff2': 'font/woff2',
    };

    const server = createServer((req, res) => {
      let filePath = join(dir, req.url === '/' ? 'index.html' : req.url);
      
      // For SPA, serve index.html for all routes
      if (!existsSync(filePath) || !filePath.includes('.')) {
        filePath = join(dir, 'index.html');
      }

      try {
        const content = readFileSync(filePath);
        const ext = '.' + filePath.split('.').pop();
        res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
        res.end(content);
      } catch (e) {
        res.writeHead(404);
        res.end('Not found');
      }
    });

    server.listen(port, () => {
      console.log(`Static server running on http://localhost:${port}`);
      resolve(server);
    });
  });
}

async function prerender() {
  const port = 3456;
  const server = await createStaticServer(distDir, port);
  
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    for (const route of routes) {
      console.log(`Prerendering: ${route}`);
      
      const page = await browser.newPage();
      await page.goto(`http://localhost:${port}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000,
      });
      
      // Wait a bit for React to finish rendering
      await page.waitForSelector('#root', { timeout: 10000 });
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Get the rendered HTML
      const html = await page.content();
      
      // Determine output path
      let outputPath;
      if (route === '/') {
        outputPath = join(distDir, 'index.html');
      } else {
        const routeDir = join(distDir, route);
        if (!existsSync(routeDir)) {
          mkdirSync(routeDir, { recursive: true });
        }
        outputPath = join(routeDir, 'index.html');
      }
      
      // Write the prerendered HTML
      writeFileSync(outputPath, html);
      console.log(`  ✓ Saved: ${outputPath}`);
      
      await page.close();
    }
    
    console.log(`\n✅ Successfully prerendered ${routes.length} routes!`);
  } catch (error) {
    console.error('Prerender error:', error);
    process.exit(1);
  } finally {
    await browser.close();
    server.close();
  }
}

prerender();
