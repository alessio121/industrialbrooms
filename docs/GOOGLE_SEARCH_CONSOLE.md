# Google Search Console Setup for industrialbrooms.com

## Step 1: Access Google Search Console

1. Go to https://search.google.com/search-console
2. Sign in with your Google account
3. Click "Add Property"
4. Select "URL prefix" and enter `https://industrialbrooms.com`

## Step 2: Verify Ownership

You have several verification options. Here are the recommended methods in order of ease:

### Option A: HTML Meta Tag (Easiest - Already Prepared)

1. In Google Search Console, select "HTML tag" verification
2. Copy the `content` value from the meta tag they provide (looks like: `content="abc123xyz..."`)
3. Edit `/opt/industrialbrooms/index.html` and update the meta tag:
   
   ```html
   <meta name="google-site-verification" content="YOUR_CODE_HERE" />
   ```

4. Rebuild and deploy the site:
   ```bash
   cd /opt/industrialbrooms
   npm run build:prerender
   docker compose -f docker-compose.prod.yml build
   docker compose -f docker-compose.prod.yml up -d
   ```

5. Return to Google Search Console and click "Verify"

### Option B: HTML File Upload

1. In Google Search Console, select "HTML file" verification
2. Download the HTML verification file (e.g., `google123abc.html`)
3. Copy it to `/opt/industrialbrooms/public/` folder
4. Rebuild and deploy as shown above
5. Verify in Search Console

### Option C: DNS TXT Record

1. In Google Search Console, select "DNS record" verification
2. Add the provided TXT record to your domain's DNS settings
3. Wait for DNS propagation (can take up to 48 hours)
4. Verify in Search Console

## Step 3: Submit Sitemap

After verification:

1. In Search Console, go to "Sitemaps" in the left sidebar
2. Enter `sitemap.xml` in the "Add a new sitemap" field
3. Click "Submit"
4. The sitemap at https://industrialbrooms.com/sitemap.xml will be processed

## Step 4: Request Indexing

For faster indexing of new content:

1. Go to "URL Inspection" in the left sidebar
2. Enter a URL you want indexed (e.g., `/blog/scope-industriali-per-cantieri-guida-completa`)
3. Click "Request Indexing"
4. Repeat for other important new pages

## Monitoring

After setup, regularly check:

- **Coverage**: See which pages are indexed and any issues
- **Performance**: Monitor search traffic and keywords
- **Mobile Usability**: Check for mobile-friendliness issues
- **Core Web Vitals**: Monitor page experience metrics

## Files Already Configured

✅ `sitemap.xml` - Contains all crawlable URLs
✅ `robots.txt` - Allows all crawlers, points to sitemap
✅ Meta tags in `index.html` - Ready for verification code
✅ Structured data (JSON-LD) - Organization, Website, LocalBusiness schemas

## Important Notes

- The sitemap now uses proper URLs (no hash fragments)
- Blog posts are prerendered to static HTML for better SEO
- All blog posts in 5 languages are included in the sitemap
- Hreflang tags are set up for multi-language support
