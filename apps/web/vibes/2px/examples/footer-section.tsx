import Link from 'next/link'

import FooterSection, { Section } from '@/vibes/2px/components/footer-section'

import FacebookIcon from '../components/icons/FacebookIcon'
import InstagramIcon from '../components/icons/InstagramIcon'
import PinterestIcon from '../components/icons/PinterestIcon'
import TwitterIcon from '../components/icons/TwitterIcon'

export const sections = [
  {
    title: 'categories',
    links: [
      {
        label: 'On sale',
        href: '/',
        target: '_blank',
      },
      {
        label: 'New arrivals',
        href: '/',
        target: '_blank',
      },
      {
        label: 'Men',
        href: '/',
        target: '_blank',
      },
      {
        label: 'Women',
        href: '/',
        target: '_blank',
      },
      {
        label: 'Accessories',
        href: '/',
        target: '_blank',
      },
    ],
  },
  {
    title: 'top brands',
    links: [
      {
        label: 'Arcminute',
        href: '/',
        target: '_blank',
      },
      {
        label: 'Base London',
        href: '/',
        target: '_blank',
      },
      {
        label: 'Birkenstock',
        href: '/',
        target: '_blank',
      },
      {
        label: 'Good For Nothing',
        href: '/',
        target: '_blank',
      },
    ],
  },
  {
    title: 'about us',
    links: [
      {
        label: 'Contact us',
        href: '/',
        target: '_blank',
      },
      {
        label: 'About brand',
        href: '/',
        target: '_blank',
      },
      {
        label: 'Blog',
        href: '/',
        target: '_blank',
      },
    ],
  },
  {
    title: 'help',
    links: [
      {
        label: 'Shipping & returns',
        href: '/',
        target: '_blank',
      },
      {
        label: 'Privacy policy',
        href: '/',
        target: '_blank',
      },
      {
        label: 'Terms & conditions',
        href: '/',
        target: '_blank',
      },
      {
        label: 'FAQ',
        href: '/',
        target: '_blank',
      },
    ],
  },
] satisfies Section[]

export const socialMediaLinks = [
  {
    href: 'https://www.facebook.com',
    icon: <FacebookIcon />,
  },
  {
    href: 'https://www.instagram.com',
    icon: <InstagramIcon />,
  },
  {
    href: 'https://www.twitter.com',
    icon: <TwitterIcon />,
  },
  {
    href: 'https://www.pinterest.com',
    icon: <PinterestIcon />,
  },
]

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center bg-white @container sm:min-h-64 lg:min-h-80">
      <FooterSection
        title={
          <>
            VIBE DESIGNED AND built by&nbsp;
            <Link href="www.tinloof.com" target="_blank" className="hover:underline">
              WWW.TINLOOF.COM
            </Link>
          </>
        }
        logo={{ src: '/2px/logo.svg', altText: '2px Logo', width: 293, height: 149 }}
        copyright={
          <p className="flex gap-6">
            <span>© 2024 2px</span>
            <span>
              Built by{' '}
              <Link href="www.tinloof.com" target="_blank">
                Tinloof
              </Link>
            </span>
          </p>
        }
        socialMediaLinks={socialMediaLinks}
        sections={sections}
      />
    </div>
  )
}
