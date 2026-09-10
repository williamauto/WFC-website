# Water Fun Club 🌊

An informational website helping visitors discover the best water activities and tours at the world's top destinations.

## Tech Stack

- **Astro** — static site generator (fast, SEO-optimized, zero JS by default)
- **Tailwind CSS** — utility-first styling
- **GitHub Pages** — free hosting
- **Namecheap** — custom domain

## Project Structure

```
water-fun-club/
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── ActivityCard.astro
│   │   ├── Breadcrumbs.astro
│   │   ├── FAQSection.astro
│   │   ├── Hero.astro
│   │   └── OperatorCard.astro
│   ├── data/
│   │   ├── schema.js           # Schema.org JSON-LD builders
│   │   └── site-data.js        # Central data: destinations, activities, regions
│   ├── layouts/
│   │   └── Layout.astro        # Main layout with header/footer/SEO
│   ├── pages/
│   │   ├── index.astro         # Homepage
│   │   ├── activities/         # Activity category pages
│   │   ├── florida/
│   │   │   ├── miami/          # Miami hub + sub-destinations
│   │   │   └── florida-keys/   # Florida Keys hub + sub-destinations
│   │   ├── hawaii/
│   │   │   ├── oahu/           # Oahu hub + sub-destinations
│   │   │   └── maui/           # Maui hub + sub-destinations
│   │   └── puerto-rico/        # Puerto Rico hub + sub-destinations
│   └── styles/
│       └── global.css          # Tailwind + custom styles
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── .github/workflows/deploy.yml  # GitHub Pages deployment
└── astro.config.mjs
```

## URL Structure

Five-level hierarchy matching how people search:

```
/florida/                          → State hub
/florida/miami/                    → Region hub
/florida/miami/south-beach/        → Beach area hub
/florida/miami/south-beach/snorkeling/  → Activity page
```

## Schema Markup

Every page includes structured data:
- **TouristDestination** — destination hubs
- **Service** — activity category pages
- **TouristAttraction** — spot-level pages
- **FAQPage** — FAQ sections
- **BreadcrumbList** — all pages
- **LocalBusiness** — operator listings

## Local Development

```bash
npm install
npm run dev        # Start dev server at localhost:4321
npm run build      # Build static site to ./dist
npm run preview    # Preview the built site
```

## Deployment

1. Push to GitHub
2. GitHub Actions auto-deploys to GitHub Pages
3. Point your Namecheap domain at GitHub Pages:
   - Add `CNAME` record: `www` → `yourusername.github.io`
   - Add `A` records for apex domain → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - In GitHub repo Settings → Pages → Custom domain: `waterfunclub.com`

## Adding New Content

### New sub-destination page
1. Add the sub-destination to `src/data/site-data.js` under the region's `subDestinations`
2. Add activity availability in `SUBDESTINATION_ACTIVITIES`
3. Create the page folder: `src/pages/[state]/[region]/[sub-destination]/index.astro`
4. Copy an existing page as template and update content

### New activity
1. Add to `ACTIVITIES` in `src/data/site-data.js`
2. Add to `REGION_ACTIVITIES` for each region offering it
3. Create activity hub pages for each region

## Affiliate Integration

Operator cards use `rel="sponsored"` links to GetYourGuide/Viator. Replace the placeholder URLs with your actual affiliate links. Commission structure:
- GetYourGuide: 8% base commission
- Viator: 8% commission
- Travelpayouts: 8% for both

## SEO Notes

- Content published 2–3 months before peak seasons (spring for summer, October for Hawaii winter)
- Spot-level pages with schema outperform generic destination lists
- Target transactional queries ("jet ski rental miami price") alongside informational
- Efoil is the first-mover opportunity — KD 0 across all geo-modified queries