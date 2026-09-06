export const site = {
  name: 'Lodestone',
  wordmarkSuffix: 'Market Maps',
  domain: 'lodestonemaps.com',
  email: '',
} as const;

export const nav = [
  { label: 'Coverage', href: '#coverage' },
  { label: 'Method', href: '#method' },
  { label: 'Contact', href: '#contact' },
] as const;

export const hero = {
  kicker: 'Demand-side market maps',
  heading: ['Lists tell you who exists.', 'Maps tell you who buys.'],
  lead:
    'Lodestone builds demand-side market maps where every row carries its ' +
    'evidence.',
  primary: { label: 'Request a sample', href: '#contact' },
  secondary: { label: 'See the method', href: '#method' },
} as const;

export const rowAnatomy = {
  heading: 'What is in a row',
  body:
    'A row is only as good as what can be checked behind it. Each field is ' +
    'stored with the URL it was read from and the date it was read.',
  cells: [
    { label: 'Identity', text: 'Legal name, UEN, incorporation' },
    { label: 'Reach',    text: 'Website, LinkedIn, contact' },
    { label: 'Standing', text: 'Grades, awards, projects' },
    { label: 'Proof',    text: 'Source URL and date per field' },
  ],
} as const;

export const method = {
  heading: 'Method',
  body:
    'Three steps, in order. A company that fails the first step does not reach ' +
    'the second.',
  steps: [
    'Registry match on UEN. No name-similarity joins.',
    'Website, LinkedIn and direct contacts, each with a source URL.',
    'Awards, grades and active projects cross-read across 70+ sources.',
  ],
} as const;

export const coverage = {
  heading: 'Coverage',
  release: '2026.03',
  markets: [
    { name: 'Singapore · AEC', status: 'Released', inBuild: false },
    { name: 'Malaysia · AEC',  status: 'In build', inBuild: true },
  ],
  note: 'Malaysia is in build. No date yet.',
  figures: [
    { label: 'Companies',           value: '19,042' },
    { label: 'With website',        value: '14,318' },
    { label: 'With LinkedIn',       value: '9,704' },
    { label: 'With direct contact', value: '6,155' },
    { label: 'Sources read',        value: '70+' },
  ],
  extract: {
    caption: 'Identifiers are partially masked in this extract.',
    columns: ['Company', 'UEN', 'Segment', 'Grade', 'Evidence'],
    rows: [
      ['Redacted Engineering Pte Ltd', '2001•••••K', 'M&E contractor', 'L6', '3 urls'],
      ['Redacted Builders Pte Ltd',    '1994•••••D', 'Main contractor', 'A1', '5 urls'],
      ['Redacted Design Studio',       '2013•••••M', 'Architecture',    '—',  '4 urls'],
    ],
  },
} as const;

export const contact = {
  heading: 'Request a sample',
  lead:
    'Tell us the market you are working on. We will send a sample extract — ' +
    'real rows with identifiers masked, and the source URL against each field.',
  markets: [
    'Singapore · AEC',
    'Malaysia · AEC (in build)',
    'Another market',
  ],
} as const;
