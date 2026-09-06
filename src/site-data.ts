export const site = {
  name: 'Lodestone',
  wordmark: 'lodestonemaps',
  legalName: 'Lodestone Maps LLC',
  domain: 'lodestonemaps.com',
  url: 'https://lodestonemaps.com/',
  email: 'info@lodestonemaps.com',
} as const;

export const seo = {
  title: 'Lodestone Maps | Demand-side market maps, verified to source',
  description:
    'Demand-side market maps where every row carries its evidence. ' +
    'Registry-first, dated, whole-market. Singapore built-environment market map active.',
} as const;

export const figures = {
  companies: '20,000+',
  sources: '70+',
} as const;

export const nav = [
  { label: 'Position', href: '#position' },
  { label: 'Sources', href: '#sources' },
  { label: 'Standard', href: '#standard' },
  { label: 'Maps', href: '#maps' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
] as const;

export const anchorAliases = [
  { alias: 'method', target: 'sources' },
  { alias: 'coverage', target: 'maps' },
] as const;

export const hero = {
  kicker: 'Demand-side market maps',
  heading: ['Lists tell you who exists.', 'Maps tell you who buys.'],
  lead:
    'Lodestone builds demand-side market maps where every row carries its ' +
    'evidence.',
  primary: { label: 'Request a sample', href: '#contact' },
  secondary: { label: 'See the sources', href: '#sources' },
} as const;

export const position = {
  heading: 'A claim without its source does not exist.',
  paragraphs: [
    'In a Lodestone map every field points to the document it was read from. If no document can be read, the field stays empty.',
    'This is why a map covers the whole market, every company, not a sample. A sample can be argued with. A registry cannot.',
    'It is also why every field carries the date it was read. A value without a date is a rumour.',
    'Any market can be read this way. Lodestone reads one at a time.',
  ],
} as const;

export const rowAnatomy = {
  heading: 'What is in a row',
  lead: 'A row is only as good as what can be checked behind it.',
  cells: [
    { label: 'Identity', text: 'Legal name, registry identifier, incorporation.' },
    { label: 'Reach', text: 'Website, professional profiles, published contact points.' },
    { label: 'Standing', text: 'Licences, awards, active projects.' },
    { label: 'Proof', text: 'Source URL and read date for every field.' },
  ],
} as const;

export const sources = {
  heading: 'Which sources are allowed to speak',
  lead: 'Before a map is built, Lodestone decides which sources may speak and in what order.',
  tiers: [
    'First, official registries: the bodies that give a company its number, its licence, its award. A company enters a map through its registry identifier, never through a similar-looking name. Pipelines built on identifiers do not break when a company renames, merges or moves.',
    "Second, the company's own record: its website, its published notices, its own postings. What a company says about itself, read at the source and dated.",
    'Third, everything else: directories, aggregators, third-party lists. These can point to a company. They are never used as evidence for a field.',
  ],
  note: 'Every source is public or official. Every market is read within its own data-protection law.',
} as const;

export const standard = {
  heading: 'The standard behind every row',
  rules: [
    'Every field carries its source URL and the date it was read.',
    'Exclusions are recorded. A company that is not in the map has a documented reason.',
    'No field is inferred. If a value cannot be read from a document, the field stays empty.',
    'Aggregator lists and directory retellings are not evidence. The original record is.',
    'Software gathers. A person reads. A source decides. Nothing enters a map that was not read from a document.',
  ],
} as const;

export const maps = {
  heading: 'Maps',
  active: {
    label: 'Active now',
    title: 'Singapore built-environment (AEC) market map',
    body:
      'Identified on the national registry number only. Every row carries its own evidence source. ' +
      `${figures.companies} companies, read across ${figures.sources} public and official sources.`,
    detail: 'Details on request.',
  },
  other: 'Maps for other markets are built to the same standard, for the market you name.',
} as const;

export const faq = {
  heading: 'Questions',
  items: [
    {
      q: 'Where does the data come from, and how can a row be checked?',
      a: "Every field is stored with the URL it was read from and the date. Checking a row means opening the links in that row. Registries come first, the company's own record second. Directories and aggregators are used to find companies, never to describe them.",
    },
    {
      q: 'How is a map different from a contact database?',
      a: 'A contact database lists companies and people that exist. A map records, for a defined market, which companies buy a defined thing, what standing they hold, and what each statement rests on. The unit is the market, not the record.',
    },
    {
      q: 'How is the boundary of a market defined?',
      a: 'By the buying criterion, written before work starts: who buys, or must buy, the thing in question, and in which jurisdiction. In the Singapore built-environment map the criterion is regulatory: which firms are required to submit building information models. The registry sets the population. The criterion sorts it.',
    },
    {
      q: 'How are fields dated and refreshed?',
      a: 'Every field carries the date it was read. A map is re-read against its registries on a published cadence, and the date on each field shows what has been re-read and when.',
    },
    {
      q: 'Can a map be built for a market that is not covered yet?',
      a: 'Yes. The method depends on the market having registries and companies that publish, not on the industry or the country. Lodestone reads one market at a time.',
    },
    {
      q: 'What about data-protection law?',
      a: 'Sources are public or official, and the information held is company information and business roles. Each market is read within its own data-protection law. The source of every field is kept, so any entry can be traced and, where required, removed.',
    },
    {
      q: 'How do I get a sample?',
      a: 'Use the form below. A sample is real rows from the market you name, with identifiers masked and the source link kept on every field.',
    },
  ],
} as const;

export const contact = {
  heading: 'Request a sample',
  lead:
    'Tell Lodestone the market you are working on. A sample extract follows: ' +
    'real rows with identifiers masked and the source URL against each field.',
} as const;
