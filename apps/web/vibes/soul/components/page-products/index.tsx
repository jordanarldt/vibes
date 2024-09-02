import AnnouncementBar from '@/vibes/soul/components/announcement-bar'
import { CompareDrawer } from '@/vibes/soul/components/compare-drawer'
import FeaturedProductsCarousel from '@/vibes/soul/components/featured-products-carousel'
import Footer from '@/vibes/soul/components/footer'
import Header from '@/vibes/soul/components/header'
import Pagination from '@/vibes/soul/components/pagination'
import { Product } from '@/vibes/soul/components/product-card'
import ProductsHeader from '@/vibes/soul/components/products-header'
import ProductsList from '@/vibes/soul/components/products-list'
import { footerLinks } from '@/vibes/soul/examples/footer'
import { headerLinks } from '@/vibes/soul/examples/header'
import { products } from '@/vibes/soul/examples/products-list'

const locales = [
  { id: '1', region: 'US', language: 'EN' },
  { id: '2', region: 'FR', language: 'FR' },
  { id: '3', region: 'DE', language: 'DC' },
  { id: '4', region: 'IT', language: 'IT' },
]

export const compareProducts: Product[] = [
  {
    id: '1',
    name: 'Men’s Long Sleeve Jersey',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$123.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/tJ-FPKUBiSp',
      altText: 'Men’s Long Sleeve Jersey',
    },
    href: '#',
  },
  {
    id: '2',
    name: 'Men’s Long Sleeve Jersey',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$123.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/alCCRbqrsnE',
      altText: 'Men’s Long Sleeve Jersey',
    },
    href: '#',
  },
]

export const ProductsPage = function ProductsPage() {
  return (
    <>
      <AnnouncementBar>
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </AnnouncementBar>
      <Header
        links={headerLinks}
        logo="SOUL"
        cartHref="#"
        accountHref="#"
        activeLocale="EN"
        locales={locales}
      />
      <ProductsHeader title="All Men" numberOfProducts={32} />
      <ProductsList products={products} />
      <Pagination pages={5} />
      <CompareDrawer products={compareProducts} />
      <FeaturedProductsCarousel title="Recently Viewed" products={products} />
      <Footer sections={footerLinks} logo="SOUL" />
    </>
  )
}

export default ProductsPage
