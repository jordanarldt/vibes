import { AccordionItem } from '@/vibes/soul/components/accordions'
import { AnnouncementBar } from '@/vibes/soul/components/announcement-bar'
import { FeaturedProductsCarousel } from '@/vibes/soul/components/featured-products-carousel'
import { Footer } from '@/vibes/soul/components/footer'
import { Header } from '@/vibes/soul/components/header'
import { IconBlock } from '@/vibes/soul/components/icon-block'
import { Product } from '@/vibes/soul/components/product-card'
import { ProductDescription } from '@/vibes/soul/components/product-description'
import { ProductDetail } from '@/vibes/soul/components/product-detail'
import { Reviews } from '@/vibes/soul/components/reviews'
import { Subscribe } from '@/vibes/soul/components/subscribe'
import { featuredProducts } from '@/vibes/soul/examples/sections/featured-products-carousel'
import { footerLinks, logo } from '@/vibes/soul/examples/sections/footer/electric'
import { headerLinks } from '@/vibes/soul/examples/sections/header/electric'
import { reviews } from '@/vibes/soul/examples/sections/reviews'

interface Image {
  src: string
  alt: string
}

interface ProductPageProps {
  product: Product
  accordions: AccordionItem[]
  productDescriptionImage: Image
}

const locales = [
  { id: '1', region: 'US', language: 'EN' },
  { id: '2', region: 'FR', language: 'FR' },
  { id: '3', region: 'DE', language: 'DC' },
  { id: '4', region: 'IT', language: 'IT' },
]

export const ProductPage = function ProductPage({
  product,
  accordions,
  productDescriptionImage,
}: ProductPageProps) {
  return (
    <>
      <AnnouncementBar>
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </AnnouncementBar>
      <div className="relative flex flex-col">
        <Header
          links={headerLinks}
          logo={logo}
          cartHref="#"
          accountHref="#"
          activeLocale="EN"
          locales={locales}
        />

        <ProductDetail product={product} />

        <ProductDescription accordions={accordions} image={productDescriptionImage} />

        <IconBlock
          list={[
            {
              icon: 'Truck',
              title: 'Free Shipping',
              description: 'On orders over $250',
            },
            {
              icon: 'RotateCcw',
              title: 'Free Returns',
              description: 'On full priced items only',
            },
            {
              icon: 'Star',
              title: '2 Year Warranty',
              description: 'As standard',
            },
          ]}
        />
        <FeaturedProductsCarousel
          title="New Arrivals"
          cta={{ label: 'See All', href: '#' }}
          products={featuredProducts}
        />

        <Reviews reviews={reviews} averageRating={4.5} />

        <Subscribe
          title="Sign up for our newsletter"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        />

        <Footer sections={footerLinks} logo="SOUL" />
      </div>
    </>
  )
}
