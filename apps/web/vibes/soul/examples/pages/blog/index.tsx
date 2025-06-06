import { ReactNode } from 'react';

import { locales } from '@/vibes/soul/data/locales';
import { localeAction } from '@/vibes/soul/examples/primitives/navigation/actions';
import { navigationLinks } from '@/vibes/soul/examples/primitives/navigation/electric';
import { posts } from '@/vibes/soul/examples/sections/blog-post-list/warm';
import { action } from '@/vibes/soul/examples/sections/inline-email-form/actions';
import { Banner } from '@/vibes/soul/primitives/banner';
import { type BlogPost } from '@/vibes/soul/primitives/blog-post-card';
import { Navigation } from '@/vibes/soul/primitives/navigation';
import { FeaturedBlogPostList } from '@/vibes/soul/sections/featured-blog-post-list';
import { Footer } from '@/vibes/soul/sections/footer';
import {
  Amex,
  ApplePay,
  Bitcoin,
  GooglePay,
  Mastercard,
  Paypal,
  Visa,
} from '@/vibes/soul/sections/footer/payment-icons';
import { Facebook, Instagram, X, Youtube } from '@/vibes/soul/sections/footer/social-icons';
import { Subscribe } from '@/vibes/soul/sections/subscribe';

const socialMediaLinks = [
  {
    href: '#',
    icon: <Facebook />,
  },
  {
    href: '#',
    icon: <X />,
  },
  {
    href: '#',
    icon: <Instagram />,
  },
  {
    href: '#',
    icon: <Youtube />,
  },
];

const paymentIconsArray: ReactNode[] = [
  <Visa key="Visa" />,
  <Amex key="Amex" />,
  <Mastercard key="Mastercard" />,
  <Paypal key="Paypal" />,
  <GooglePay key="GooglePay" />,
  <ApplePay key="ApplePay" />,
  <Bitcoin key="Bitcoin" />,
];

export default function Preview() {
  const blogPostsPromise = new Promise<BlogPost[]>((resolve) => {
    setTimeout(() => resolve(posts), 1000);
  });

  return (
    <>
      <Banner id="example-banner">
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </Banner>

      <Navigation
        accountHref="#"
        activeLocaleId="en"
        cartHref="#"
        links={navigationLinks}
        localeAction={localeAction}
        locales={locales}
        logo="SOUL"
        searchHref="#"
      />

      <FeaturedBlogPostList
        blogPosts={blogPostsPromise}
        breadcrumbs={[
          {
            label: 'Home',
            href: '#1',
          },
          {
            label: 'Blog',
            href: '#2',
          },
        ]}
        description="Expert Tips & Inspiration for Every Plant Lover"
        emptyStateSubtitle="Check back later for more content"
        emptyStateTitle="No blog posts found"
        paginationInfo={{
          startCursor: '1',
          endCursor: '5',
        }}
        placeholderCount={6}
        title="Plant Life"
      />

      <Subscribe
        action={action}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        image={{
          src: 'https://rstr.in/monogram/vibes/m12FEyfnuDl',
          alt: 'Lady with plant',
        }}
        title="Sign up for our newsletter"
      />

      <Footer
        contactInformation={{
          address: 'info@mywebsite.com',
          phone: '+(1)408 123 4567',
        }}
        copyright={`© ${new Date().getFullYear().toString()} SOUL - Powered by Monogram`}
        logo="SOUL"
        paymentIcons={paymentIconsArray}
        sections={[
          {
            title: 'Categories',
            links: [
              { label: 'Coats & Jackets', href: '#' },
              { label: 'T-Shirts', href: '#' },
              { label: 'Sweatshirts', href: '#' },
              { label: 'Pants', href: '#' },
            ],
          },
          {
            title: 'Company',
            links: [
              { label: 'About', href: '#' },
              { label: 'Stories', href: '#' },
              { label: 'Careers', href: '#' },
              { label: 'Stores', href: '#' },
            ],
          },
          {
            title: 'Help & Support',
            links: [
              { label: 'FAQs', href: '#' },
              { label: 'Contact Us', href: '#' },
              { label: 'Returns', href: '#' },
              { label: 'Shipping', href: '#' },
            ],
          },
        ]}
        socialMediaLinks={socialMediaLinks}
      />
    </>
  );
}
