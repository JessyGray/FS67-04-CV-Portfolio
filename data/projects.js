/*
  Portfolio data. To add a project, copy one object and edit it.

  id          unique slug, used in the URL (projects.html?project=id)
  category    filters the project belongs to
  summary     one line on the card
  problem     what the client needed and how the project solves it
  role        what I did on the project
  status      optional, e.g. 'In development'
  cover       screenshot path (leave empty if there is none yet)
  live        link to the site (leave empty if there is none)
  note        optional line under the links
  featured    true = also shown on the CV page (first three)
*/

const PROJECTS = [
    {
        id: 'noir-gloss',
        title: 'Noir Gloss',
        type: 'Detailing studio',
        year: 2026,
        category: ['Web App', 'Next.js'],
        summary: 'Car detailing studio site with online booking and an admin panel.',
        problem: 'The studio took bookings by phone and WhatsApp, so prices and free time slots were explained again for every client. The site shows all services with starting prices and has a four-step booking form that estimates the price from the vehicle size. Requests land in an admin panel and are confirmed on WhatsApp.',
        role: 'Design, frontend, database and deploy.',
        cover: 'assets/img/projects/noir-gloss.jpg',
        tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Supabase'],
        live: 'https://noir-gloss.vercel.app',
        featured: true
    },
    {
        id: 'izmailovsky-dvorik',
        title: 'Izmailovsky Dvorik',
        type: 'Restaurant',
        year: 2026,
        category: ['Website'],
        summary: 'Website for a restaurant in Moscow: menu, banquets, delivery and cart.',
        problem: 'Guests had no single place to see the menu, order delivery or ask about banquets. The site has the full menu in fifteen categories, a cart, a banquet page for events up to 180 guests with a request form, and call and WhatsApp buttons.',
        role: 'Built together with a partner.',
        cover: 'assets/img/projects/izdvorik.jpg',
        tags: ['HTML', 'CSS', 'JavaScript'],
        live: 'https://izdvorik.ru',
        featured: true
    },
    {
        id: 'autoparts-workshop',
        title: 'AutoParts Workshop',
        type: 'Inventory system',
        year: 2026,
        category: ['Web App'],
        summary: 'Stock and sales system for an auto parts workshop, synced to the cloud.',
        problem: 'The workshop tracked parts on paper and in spreadsheets, so stock was often wrong and nobody knew what was running out. The app handles sales, inventory with shelf locations, low stock alerts and stock counts, and keeps the same data on the computer and the phone through Supabase.',
        role: 'Design, frontend, database and deploy.',
        cover: 'assets/img/projects/workshop-app.jpg',
        tags: ['JavaScript', 'Supabase', 'SQL', 'Vercel'],
        live: 'https://auto-parts-workshop.vercel.app',
        featured: true
    },
    {
        id: 'qashtota-haifa',
        title: 'Qashtota Haifa',
        type: 'Dessert shop',
        year: 2026,
        category: ['Website', 'Next.js'],
        summary: 'Website for a dessert shop in Haifa: full menu, scroll story and visit info in four languages.',
        problem: 'The shop needed one place where guests can see the whole menu and find the shop. The site shows all 58 menu items with prices, opening hours, phone, Google Maps and Waze links, and a scroll story about how the dessert is made. It works in Hebrew, Arabic, English and Russian, with right-to-left layout for Hebrew and Arabic. A loyalty club with QR codes and a staff screen for adding points is built and waits for the database to be connected.',
        role: 'Design, frontend, database schema and deploy.',
        cover: '',
        tags: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Vercel'],
        live: 'https://qashtota-haifa.vercel.app',
        featured: false
    },
    {
        id: 'orvekta',
        title: 'Orvekta',
        type: 'AI product',
        status: 'In development',
        year: 2026,
        category: ['AI / Automation'],
        summary: 'AI system that helps restaurants manage Yandex Direct ads with daily reports and suggestions.',
        problem: 'Restaurant owners pay for ads but rarely have time to read the numbers. Orvekta collects ad and analytics data every day and sends a short report with concrete suggestions.',
        role: 'Founder and developer.',
        cover: 'assets/img/projects/orvekta.jpg',
        tags: ['n8n', 'Yandex Direct API', 'Yandex Metrica API', 'Claude API'],
        live: '',
        featured: false
    },
    {
        id: 'linkedin-autopost',
        title: 'LinkedIn Autopost',
        type: 'Side project',
        year: 2026,
        category: ['Side project'],
        summary: 'Scheduler that publishes my LinkedIn posts automatically.',
        problem: 'Posts wait in a Supabase table and a Vercel cron job sends the ones that are due to the LinkedIn API, so I can write a week of posts at once.',
        role: 'Built alone.',
        cover: '',
        tags: ['Node.js', 'Supabase', 'Postgres', 'LinkedIn OAuth 2.0', 'Vercel Cron'],
        live: 'https://jessy-linkedin-autopost.vercel.app',
        featured: false
    }
];
