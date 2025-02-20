import { Navigation } from '@/vibes/soul/primitives/navigation';

import { localeAction, searchAction } from './actions';

export default function Preview() {
  return (
    <div className="relative min-h-48">
      <Navigation
        accountHref="#"
        activeLocaleId="en"
        cartCount={5}
        cartHref="#"
        links={navigationLinks}
        localeAction={localeAction}
        locales={locales}
        logo={logo}
        searchAction={searchAction('Warm')}
        searchCtaLabel="View all items"
        searchHref="#"
      />
    </div>
  );
}

export const navigationLinks = [
  {
    label: 'New',
    href: '#',
  },
  {
    label: 'Sale',
    href: '#',
  },
  {
    label: 'Footware',
    href: '#',
    groups: [
      {
        label: 'By Category',
        href: '#',
        links: [
          { label: 'Sandals', href: '#' },
          { label: 'Flats', href: '#' },
          { label: 'Sneakers', href: '#' },
          { label: 'Loafers', href: '#' },
          { label: 'Heels', href: '#' },
          { label: 'Boots', href: '#' },
          { label: 'Sale', href: '#' },
          { label: 'View All', href: '#' },
          { label: 'Last Chance', href: '#' },
        ],
      },
      {
        label: 'By Collection',
        href: '#',
        links: [
          { label: 'Fall Drop One', href: '#' },
          { label: 'Travel Edit', href: '#' },
          { label: 'Ballet Everyday', href: '#' },
          { label: 'FRĒDA X WOLFSPOUT', href: '#' },
          { label: 'Loafer Shop', href: '#' },
          { label: 'Best of FRĒDA', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'Discover',
    href: '#',
    groups: [
      {
        label: 'Find US',
        href: '#',
        links: [
          { label: 'Locations', href: '#' },
          { label: 'Events', href: '#' },
          { label: 'Press', href: '#' },
          { label: 'Contact Us', href: '#' },
        ],
      },
      {
        label: 'Who is FRĒDA?',
        href: '#',
        links: [
          { label: 'Behind the Brand', href: '#' },
          { label: 'Our Family-Run Factories', href: '#' },
          { label: 'Journal', href: '#' },
          { label: 'Careers', href: '#' },
        ],
      },
    ],
  },
];

export const logo = {
  src: '/soul/freda-logo.png',
  alt: 'Freda Salvador Logo',
};

const locales = [
  { id: 'en', label: 'United States' },
  { id: 'fr', label: 'France' },
  { id: 'de', label: 'Denmark' },
  { id: 'it', label: 'Italy' },
];
