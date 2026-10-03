export type PageId = 'home' | 'bim' | 'cmm' | 'privacy' | 'terms';

export const site = {
  name: 'Lodestone',
  wordmark: 'lodestonemaps',
  legalName: 'Lodestone Maps LLC',
  domain: 'lodestonemaps.com',
  url: 'https://lodestonemaps.com/',
  email: 'info@lodestonemaps.com',
  phone: '+65 8974 6947',
  phoneHref: 'tel:+6589746947',
  whatsappHref: 'https://wa.me/6589746947',
  registration:
    'registered in the Republic of Armenia on 7 September 2026, state registration number 999.110.1608692, taxpayer identification number 01102394',
} as const;

export const figures = {
  companies: '20,000+',
  bimBuyers: '11,000+',
  sources: '70+',
} as const;

/* One entry per page. `file` is where prerender writes the page inside dist/;
   Cloudflare Pages serves `bim-buyers-map.html` at `/bim-buyers-map`. */
export const pages: Record<
  PageId,
  { path: string; file: string; title: string; description: string; ogTitle: string }
> = {
  home: {
    path: '/',
    file: 'index.html',
    title: 'Lodestone Maps: market maps of who buys, verified to source',
    description:
      'Lodestone builds market maps: every company in a market, read from official registries and ranked by who is likely to buy. The BIM Buyers Map and the Construction Market Map for Singapore are ready now.',
    ogTitle: 'Lists tell you who exists. Maps tell you who buys.',
  },
  bim: {
    path: '/bim-buyers-map',
    file: 'bim-buyers-map.html',
    title: 'BIM Buyers Map, Singapore · Lodestone Maps',
    description: `${figures.bimBuyers} Singapore construction firms in the trades CORENET X reaches, with no BIM footprint in their people or on their website, scored 1 to 10 by how soon each is likely to buy.`,
    ogTitle: 'BIM Buyers Map, Singapore',
  },
  cmm: {
    path: '/construction-market-map',
    file: 'construction-market-map.html',
    title: 'Construction Market Map, Singapore · Lodestone Maps',
    description: `${figures.companies} registered Singapore construction firms in one file: what each firm is licensed for, whether it is busy now and how to reach it.`,
    ogTitle: 'Construction Market Map, Singapore',
  },
  privacy: {
    path: '/privacy',
    file: 'privacy.html',
    title: 'Privacy Policy · Lodestone Maps',
    description: 'How Lodestone Maps handles personal data on its website and in its market maps.',
    ogTitle: 'Privacy Policy',
  },
  terms: {
    path: '/terms',
    file: 'terms.html',
    title: 'Terms and Conditions · Lodestone Maps',
    description: 'Terms for the use of lodestonemaps.com and of the overviews and samples Lodestone sends.',
    ogTitle: 'Terms and Conditions',
  },
};

export function pageFromPath(pathname: string): PageId {
  const clean = pathname.replace(/\.html$/, '').replace(/\/+$/, '') || '/';
  const hit = (Object.keys(pages) as PageId[]).find((id) => pages[id].path === clean);
  return hit ?? 'home';
}

export const nav = [
  { label: 'Maps', href: '/#maps' },
  { label: 'Standard', href: '/#standard' },
  { label: 'Built to order', href: '/#built-to-order' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
] as const;

export const anchorAliases = [
  { alias: 'method', target: 'sources' },
  { alias: 'coverage', target: 'maps' },
] as const;

export const hero = {
  kicker: 'Market maps',
  heading: ['Lists tell you who exists.', 'Maps tell you who buys.'],
  lead:
    'Lodestone builds market maps: one file with every company in a market, read from its official ' +
    'registries and its own record, and ranked by who is likely to buy. Two maps of the Singapore construction ' +
    'market are ready now.',
  primary: { label: 'See the maps', href: '#maps' },
  secondary: { label: 'Request an overview and sample', href: '#contact' },
} as const;

export const maps = {
  heading: 'Maps',
  intro: 'Each map covers one market and shows who in it is likely to buy. Two are available now, and a third is in preparation.',
  cards: [
    {
      label: 'Singapore · Available now',
      title: 'BIM Buyers Map',
      forWho: 'For firms that sell BIM services, BIM software or BIM training.',
      body: `${figures.bimBuyers} Singapore construction firms in the trades CORENET X reaches, with no BIM footprint in their people or on their website. Since 1 October 2026, every new building project of 5,000 m² and above goes through CORENET X. Every firm is scored from 1 to 10 by how soon it is likely to buy, with the reason behind it.`,
      link: { label: 'See the BIM Buyers Map', href: '/bim-buyers-map' },
    },
    {
      label: 'Singapore · Available now',
      title: 'Construction Market Map',
      forWho: 'For firms that sell into construction: materials, equipment, services and software.',
      body: `${figures.companies} registered construction firms in one file: contractors of every trade, architects, engineering consultants and developers. Each row shows what the firm is licensed for, whether it is busy now and how to reach it. Every firm is scored from 1 to 10 by how busy it is now, with the reason behind it.`,
      link: { label: 'See the Construction Market Map', href: '/construction-market-map' },
    },
    {
      label: 'Singapore · Coming soon',
      title: 'Built Environment Map',
      forWho: '',
      body: 'The wider Singapore built environment: the trades around construction, from facility and property management to building materials distribution, joinery and quantity surveying.',
      link: null,
    },
  ],
  other: 'Maps of other markets are built to order, to the same standard.',
} as const;

export const rowAnatomy = {
  heading: 'What is in a row',
  lead: 'Every part of a row can be checked against a public record.',
  cells: [
    { label: 'Identity', text: 'Registered name, registry number, date of incorporation.' },
    {
      label: 'Activity',
      text: 'Licences held, contracts won, projects named on, current job ads, each with its date.',
    },
    {
      label: 'Reach',
      text: 'Website and business pages, the phone and e-mail the firm publishes, a named person with job title where one is public.',
    },
    { label: 'Proof', text: 'A link to the public record behind the row.' },
  ],
} as const;

export const builtToOrder = {
  heading: 'Built to order',
  intro:
    "Before the Singapore maps, the team behind Lodestone built maps to order for clients in other markets. Each one started from the client's own buying criterion.",
  cases: [
    {
      label: 'United States',
      title: 'Partner-led professional services firms',
      rows: [
        {
          k: 'The question',
          v: "Which privately held professional services firms, run by their partners or founders, fit a client's exact profile?",
        },
        {
          k: 'The approach',
          v: 'The criteria and the exclusions were agreed before any research began. Each firm was qualified on its own record, with database estimates used only as a cross-check.',
        },
        {
          k: 'The result',
          v: 'A list the client could act on, with the reasoning behind every firm and the borderline cases marked separately.',
        },
      ],
    },
    {
      label: 'United States',
      title: 'Independent wholesale distributors',
      rows: [
        {
          k: 'The question',
          v: 'Which independent wholesale distributors in the Pacific Northwest fit a lower middle market profile in industrial supply, electrical and HVAC, building materials and janitorial supply?',
        },
        {
          k: 'The approach',
          v: 'The whole region was read firm by firm, and ownership was confirmed in corporate registry records.',
        },
        {
          k: 'The result',
          v: 'The region covered end to end: a list ready for outreach, and an exclusion log with the reason behind every firm left out.',
        },
      ],
    },
  ],
  close: {
    title: 'Other markets',
    text: 'If it has official registries and companies that publish, it can be mapped to the same standard.',
    link: { label: 'Tell Lodestone about it', href: '/?map=other#contact' },
  },
} as const;

export const orderSteps = {
  heading: 'How an order works',
  intro: 'Every map, whether published by Lodestone or commissioned by a client, is built the same way.',
  steps: [
    {
      title: 'You name the market and what you sell into it.',
      text: 'The buying criterion is written down with you before any work starts.',
    },
    {
      title: 'Lodestone reads the registries.',
      text: 'The official registries set who is in the market, and every company enters through its registry number.',
    },
    {
      title: "Lodestone reads each company's own record.",
      text: 'This covers the website, notices, job ads, licences and contracts. Every fact keeps its source, and dated facts keep their date.',
    },
    {
      title: 'You receive the map.',
      text: 'One spreadsheet, one row per company, ranked, with its sources, and a short presentation that explains it. Updates are made on request.',
    },
  ],
} as const;

export const position = {
  heading: 'A claim without its source does not exist.',
  paragraphs: [
    "In a Lodestone map every fact comes from a document that can be opened: a registry entry, a contract award, a job ad, the company's own website. If a fact cannot be found in a document, it is not filled in.",
    "A map covers every company in the market's registries, so the picture does not depend on a sample.",
    'Dated facts keep their dates, so you can see what is current.',
    'The same method works in any market with official registries, and Lodestone builds one market at a time.',
  ],
} as const;

export const sources = {
  heading: 'Where the facts come from',
  lead: 'Before a map is built, Lodestone sets which sources count and in what order.',
  tiers: [
    {
      title: 'Official registries first.',
      text: 'The bodies that give a company its number, its licence and its contracts. A company enters a map through its registry number, so a rename, a merger or a move does not break it.',
    },
    {
      title: "The company's own record second.",
      text: 'Its website, notices and job ads, read where the company published them.',
    },
    {
      title: 'Everything else last.',
      text: 'Directories and aggregators help find companies, but an official record always takes precedence over them.',
    },
  ],
  note: "Every source is public or official. A map records facts with a link to where they were published; it does not copy other websites' content. Business details about people are handled under Singapore's Personal Data Protection Act.",
} as const;

export const standard = {
  heading: 'The standard behind every map',
  rules: [
    'Firms are matched by registry number, not by name.',
    'A website, a page or a person is shown only when it is confirmed to belong to that exact firm or its group.',
    'Nothing is filled in by guessing.',
    'Dated facts carry their dates: contract awards, job ads, licence expiry.',
    'A firm outside the buying criterion stays in the file, with the reason.',
    'An official record outranks a directory or an aggregator.',
  ],
} as const;

export const about = {
  heading: 'Who is Lodestone',
  text: "Lodestone Maps is a research company that builds market maps for companies that sell to other companies. Every map starts from the official registries of its market and is checked firm by firm against each company's own record. Singapore construction comes first, and the wider Singapore built environment is next. The team works from Singapore and Yerevan, and in Singapore a business development partner meets clients in person.",
} as const;

export const faq = {
  heading: 'Questions',
  items: [
    {
      q: 'What does my team gain?',
      a: 'Building a list of firms to call usually takes a new sales hire months, and it only covers the firms one person manages to find. The map gives your team the whole market on the first day, with the firms that are winning work, hiring or named on new projects at the top, so their time goes into calls and meetings.',
    },
    {
      q: 'Does it replace a salesperson?',
      a: 'No. Your salespeople get the list and spend their time selling. The calls and the client relationships stay with them.',
    },
    {
      q: 'Who do I call first?',
      a: 'Every firm is scored from 1 to 10 and placed in one of four tiers: Ready Now, Hot, Warm and Cold. The score is computed from dated evidence: government contracts won, major building contracts, projects the firm is named on and current job ads, with recent evidence counting most. Each row says in one line why now.',
    },
    {
      q: 'What exactly do I receive?',
      a: 'One Excel file, one row per firm, with tabs that group the firms, and a short PDF presentation that explains every column, so the file is clear without a call. There is no login and no subscription. The file stays with you.',
    },
    {
      q: 'How can a row be checked?',
      a: "Every row links to the public record behind it, such as the firm's entry in a register or its own website. Contracts, job ads and licences carry their dates, so any row can be checked by opening its link.",
    },
    {
      q: 'How is a map different from a contact database?',
      a: 'A contact database lists companies and people that exist. A map takes one market, sets a buying criterion and places every company in it: who has to buy, who is busy now, who is outside the criterion and why. Contacts are one part of a row.',
    },
    {
      q: 'How do I check it before buying?',
      a: 'Ask for an overview and a sample. The sample is typical rows from across the file, from the top tiers to the bottom, exactly as they stand, with their sources. Check them against what you already know.',
    },
    {
      q: 'Can my team share it inside the company?',
      a: 'Yes, inside your company. It may not be resold or passed to anyone outside it. The terms of each order are agreed in writing.',
    },
    {
      q: 'How current is it, and where does the data come from?',
      a: "Every source is public or official: government registers, contract awards, licence lists, job boards, and the companies' own websites and business pages. Dated facts, such as contracts, job ads and licences, carry their dates, each map states the date it was built, and a map is updated on request. For people, a map holds business details only: name, job title and a link to the public profile. Phones and e-mails are the ones a firm publishes for business. Anyone can ask Lodestone to correct or remove an entry about them.",
    },
    {
      q: 'Can Lodestone build a map of my market?',
      a: 'Yes, if the market has official registries and companies that publish. Tell Lodestone what you sell and to whom, and the buying criterion is agreed with you first.',
    },
    {
      q: 'How do I start?',
      a: `Send the form, write to ${site.email} or send a WhatsApp message. Lodestone replies within one business day with an overview and a sample for your segment. Lodestone's business development partner in Singapore can then meet you in person or by video call to go through it.`,
    },
  ],
} as const;

export const contact = {
  heading: 'Request an overview and sample',
  lead:
    "Tell Lodestone what you sell and to whom. You receive a short overview and a sample of typical rows for your segment. Lodestone's business development partner in Singapore can then meet you in person or by video call.",
  reply: 'Replies within one business day.',
  mapOptions: [
    { value: 'bim-buyers-map', label: 'BIM Buyers Map' },
    { value: 'construction-market-map', label: 'Construction Market Map' },
    { value: 'other', label: 'A map of another market' },
  ],
  button: 'Request an overview and sample',
  sent: 'Thank you. Lodestone replies within one business day.',
} as const;

export type ProductBlock = {
  heading: string;
  paragraphs?: readonly string[];
  list?: readonly string[];
  after?: readonly string[];
  source?: { label: string; href: string };
};

export type Product = {
  label: string;
  title: string;
  lead: string;
  blocks: readonly ProductBlock[];
  cta: { label: string; href: string };
};

export const products: Record<'bim' | 'cmm', Product> = {
  bim: {
    label: 'Singapore · Available now',
    title: 'BIM Buyers Map',
    lead: 'The Singapore construction firms in the trades CORENET X reaches, with no BIM footprint in their people or on their website, ranked by who is likely to buy first.',
    blocks: [
      {
        heading: 'Who it is for',
        paragraphs: [
          'Firms that sell to them: BIM services and modelling, BIM and construction software and its resellers, BIM and CORENET X training, laser scanning and reality capture, digital construction platforms, certification and inspection.',
        ],
      },
      {
        heading: 'Why now',
        paragraphs: [
          'Since 1 October 2026, every new building project of 5,000 m² and above in Singapore must be submitted through CORENET X, with BIM models in the IFC-SG format. The format and the gateways are new for everyone on such a project, from the consultants who submit to the builders who hand over the as-built model.',
          `In ${figures.bimBuyers} of the firms in the trades the rule reaches, Lodestone found no BIM footprint in their people or on their website. They build a team or buy the work from outside.`,
        ],
        source: {
          label: 'Source: CORENET X implementation timeline (support.corenet.gov.sg)',
          href: 'https://support.corenet.gov.sg/hc/en-us/articles/14813415847695-What-is-the-implementation-timeline-for-CORENET-X',
        },
      },
      {
        heading: 'What is in the map',
        paragraphs: [
          `${figures.bimBuyers} firms in the trades the rule reaches, with no BIM footprint in their people or on their website: contractors in BIM-relevant trades, architects and engineering consultants, and developers.`,
          'Before a firm is counted as a buyer, its people and its own website are checked for BIM capacity. Where BIM capacity is found, the firm is listed separately, with the evidence.',
          'Every firm is scored from 1 to 10 and placed in Ready Now, Hot, Warm or Cold. The score is computed from dated evidence: government contracts, major building contracts, projects named in CORENET X records and current hiring, with recent evidence counting most. Each row says why now.',
          `The rest of the market is in the same file, ${figures.companies} firms in all, each firm with its reason:`,
        ],
        list: [
          'firms with their own BIM team, with the evidence, kept apart from the buyers',
          'borderline firms with a few modellers of their own, who may still buy part of the work',
          'firms in trades the rule does not reach',
          'firms with no public footprint',
          'the firms that sell BIM in Singapore',
        ],
      },
      {
        heading: 'What is in a row',
        paragraphs: [
          "Registered name and UEN, licences and grades from the Building and Construction Authority (BCA), recent government contracts and projects, job ads in the last 90 days, BIM status, website and business pages, the firm's published phone and e-mail, a named person with job title and seniority level where one is public, and a link to the public source.",
        ],
      },
      {
        heading: 'What you receive',
        paragraphs: [
          'One Excel file with a tab for each tier and group, and a short PDF presentation that explains every column.',
        ],
      },
      {
        heading: 'How to check it before buying',
        paragraphs: [
          'Ask for an overview and a sample. The sample is typical rows from every tier, exactly as they stand in the file, with their sources.',
        ],
      },
    ],
    cta: { label: 'Request an overview and sample', href: '/?map=bim-buyers-map#contact' },
  },
  cmm: {
    label: 'Singapore · Available now',
    title: 'Construction Market Map',
    lead: `Singapore's construction market in one file: ${figures.companies} registered firms, one row per firm. Who each firm is, whether it is busy now, and how to reach it.`,
    blocks: [
      {
        heading: 'Who it is for',
        paragraphs: ['Firms whose customers are construction firms:'],
        list: [
          'building materials and finishes; doors, windows, glass and facades',
          'M&E, electrical, HVAC and water equipment; lighting',
          'furniture and fit-out; plant, machinery and crane hire; subcontracting',
          'testing, inspection, certification and safety training',
          'software; manpower; insurance and finance',
        ],
      },
      {
        heading: 'What it saves',
        list: [
          'Your team does not build the list by hand. The whole market is in the file on the first day, beyond the few hundred firms everyone already knows.',
          `The facts come from ${figures.sources} sources that often disagree. The map matches them firm by firm, by registry number, and puts them in one row.`,
          'The firms that are winning work, hiring or starting new projects are at the top, so your team knows where to start.',
        ],
      },
      {
        heading: 'What is in the map',
        paragraphs: ['Every firm sits in one tab by type:'],
        list: [
          'Main contractors and builders',
          'M&E contractors',
          'Structure, civil and facade contractors',
          'Interior and finishing contractors',
          'Suppliers, facility management and landscape',
          'Architects',
          'Engineers and consultants',
          'Developers',
          'Construction firms without a BCA licence',
          'Other construction firms',
        ],
        after: [
          'Every firm is scored from 1 to 10 and placed in Ready Now, Hot, Warm or Cold by how busy it is now: contracts won, new building projects and hiring, with recent evidence counting most. Each row says why now. The score shows how busy a firm is, so start with the tabs for the trades that buy what you sell.',
        ],
      },
      {
        heading: 'What is in a row',
        paragraphs: [
          "Registered name and UEN, kind of work, BCA licence and grade where the firm holds one, bizSAFE level, government contracts and projects, job ads in the last 90 days, website and business pages, the firm's published phone and e-mail, a named person with job title and seniority level where one is public, and a link to the public source.",
        ],
      },
      {
        heading: 'What you receive',
        paragraphs: [
          'One Excel file with a tab for each type of firm, and a short PDF presentation that explains every column.',
        ],
      },
      {
        heading: 'How to check it before buying',
        paragraphs: [
          'Ask for an overview and a sample. The sample is typical rows from the top of the list to the bottom, exactly as they stand in the file, with their sources.',
        ],
      },
    ],
    cta: { label: 'Request an overview and sample', href: '/?map=construction-market-map#contact' },
  },
};

export type LegalSection = { heading: string; paragraphs?: readonly string[]; list?: readonly string[] };

export const legal: Record<'privacy' | 'terms', { title: string; intro: string; sections: readonly LegalSection[] }> = {
  privacy: {
    title: 'Privacy Policy',
    intro: `This policy explains how ${site.legalName} ("Lodestone Maps", "we") handles personal data on ${site.domain} and in the market maps we build. We handle personal data in line with Singapore's Personal Data Protection Act and the law of the Republic of Armenia, where the company is registered.`,
    sections: [
      {
        heading: '1. Who we are',
        paragraphs: [
          `${site.legalName}, ${site.registration}. We build market maps of companies for businesses that sell to other businesses. Contact: ${site.email}, ${site.phone}.`,
        ],
      },
      {
        heading: '2. What we collect through this website',
        list: [
          'When you send the form: your work e-mail, your company, the map you are interested in, your message and, if you choose, a phone or WhatsApp number.',
          'When you write to us or call us: the details you give us.',
          'Technical data: our hosting provider records standard connection data, such as IP address and browser type, to keep the site secure and working. We do not use advertising trackers.',
        ],
      },
      {
        heading: '3. Why we use it',
        paragraphs: [
          'To answer your request, send the overview and sample you asked for, discuss an order and keep a record of our correspondence. We do not sell your data and we do not add it to our market maps.',
        ],
      },
      {
        heading: '4. Business information in our maps',
        paragraphs: [
          `Our maps describe companies. Where they include people, they hold business details only: name, job title and a link to a public professional profile, taken from public or official sources. Phone numbers and e-mail addresses in our maps are the ones companies publish for business. Every entry keeps the source it was taken from, so it can be traced. If you want an entry about you corrected or removed, write to ${site.email} and we will act on it.`,
        ],
      },
      {
        heading: '5. Service providers',
        paragraphs: [
          'We use third-party infrastructure providers for website hosting, security, form delivery and corporate e-mail. They process data only on our instructions, to provide their service to us. Personal data may be stored and processed outside Singapore, including in Armenia and by these providers. Where it is, we protect it to a standard comparable to the PDPA.',
        ],
      },
      {
        heading: '6. How long we keep data',
        paragraphs: [
          'Enquiries and correspondence are kept for as long as needed to answer the request and for our business records, then deleted.',
        ],
      },
      {
        heading: '7. Your rights',
        paragraphs: [
          `You can ask what personal data we hold about you, ask us to correct it, or withdraw your consent and ask us to delete it. Our data protection officer can be reached at ${site.email}. We reply within 30 days.`,
        ],
      },
      {
        heading: '8. Security',
        paragraphs: [
          'We protect data with access controls and by choosing established providers. No method of transfer or storage is completely secure, but we take reasonable care.',
        ],
      },
      {
        heading: '9. Changes',
        paragraphs: ['We may update this policy from time to time. The current version is always published on this page.'],
      },
      {
        heading: '10. Contact',
        paragraphs: [`${site.email} · ${site.phone} (phone and WhatsApp)`],
      },
    ],
  },
  terms: {
    title: 'Terms and Conditions',
    intro: `These terms apply to the use of ${site.domain} and to the overviews and samples we send. By using the site you accept them.`,
    sections: [
      {
        heading: '1. The company',
        paragraphs: [`The site is run by ${site.legalName}, ${site.registration}.`],
      },
      {
        heading: '2. Use of the site',
        paragraphs: [
          "You may read and share the site's pages for your own business purposes. Do not copy the site's content in bulk, interfere with its operation or use it for unlawful purposes.",
        ],
      },
      {
        heading: '3. Overviews and samples',
        paragraphs: [
          'Overviews and samples we send before an order are for your evaluation only. They remain our property. Do not resell, publish or pass them to third parties without our written consent.',
        ],
      },
      {
        heading: '4. Orders',
        paragraphs: [
          `Every order is made under its own written contract with ${site.legalName}, which also invoices it. Lodestone's lawyer prepares the contract and agrees it with the client: scope, price, delivery, licence, governing law and how disputes are resolved. That contract takes precedence over these general terms.`,
        ],
      },
      {
        heading: '5. Accuracy',
        paragraphs: [
          'Each fact in our maps is taken from a public or official source and keeps its source. Sources can change after they are read. We take care to keep our maps accurate, but we do not guarantee that every value is current at the moment you use it.',
        ],
      },
      {
        heading: '6. Intellectual property',
        paragraphs: [
          `The site, its text and design, and our maps belong to ${site.legalName} or its licensors.`,
        ],
      },
      {
        heading: '7. Liability',
        paragraphs: [
          'To the extent the law allows, we are not liable for indirect or consequential loss arising from the use of the site or of materials sent before an order. Our liability under an order is set in that order.',
        ],
      },
      {
        heading: '8. Personal data',
        paragraphs: ['Personal data is handled as described in our Privacy Policy.'],
      },
      {
        heading: '9. Governing law',
        paragraphs: [
          'These general terms are governed by the laws of the Republic of Armenia. The contract for each order sets its own governing law and forum.',
        ],
      },
      {
        heading: '10. Contact',
        paragraphs: [`${site.email} · ${site.phone}`],
      },
    ],
  },
};

/* Structured data, built from the copy above so the FAQ is never duplicated by hand. */
export function jsonLd(page: PageId): object[] {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.legalName,
    url: site.url,
    logo: `${site.url}icon-512.png`,
    email: site.email,
    telephone: site.phone,
    description: 'Market maps of who buys: every company in a market, read from official registries and ranked by who is likely to buy. Maps of other markets are built to order.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: site.phone,
      email: site.email,
      areaServed: 'SG',
      availableLanguage: 'English',
    },
  };
  const product = (id: 'bim' | 'cmm') => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: products[id].title,
    brand: { '@type': 'Brand', name: 'Lodestone Maps' },
    description: pages[id].description,
    url: `${site.url.replace(/\/$/, '')}${pages[id].path}`,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: `${site.url.replace(/\/$/, '')}${products[id].cta.href}`,
    },
  });
  if (page === 'home') {
    return [
      org,
      product('bim'),
      product('cmm'),
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.items.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ];
  }
  if (page === 'bim' || page === 'cmm') return [org, product(page)];
  return [org];
}
