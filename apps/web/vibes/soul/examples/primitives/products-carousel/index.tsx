import { Product } from '@/vibes/soul/components/product-card'
import { ProductsCarousel } from '@/vibes/soul/components/products-carousel'

export const products: Product[] = [
  {
    id: '1',
    title: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: {
      type: 'range',
      minValue: '$110',
      maxValue: '$150',
    },
    image: {
      src: 'https://rstr.in/monogram/vibes/lJg081kQqvc',
      alt: 'Product Name',
    },
    href: '#',
  },
  {
    id: '2',
    title: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: {
      type: 'sale',
      previousValue: '$159.99',
      currentValue: '$129.99',
    },
    image: {
      src: 'https://rstr.in/monogram/vibes/n0P83RMnClS',
      alt: 'Product Name',
    },
    href: '#',
  },
  {
    id: '3',
    title: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$123.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/QSaMw6aC_AN',
      alt: 'Product Name',
    },
    href: '#',
  },
  {
    id: '4',
    title: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: {
      type: 'range',
      minValue: '$100',
      maxValue: '$150',
    },
    image: {
      src: 'https://rstr.in/monogram/vibes/oUL4h2FvqIl',
      alt: 'Product Name',
    },
    href: '#',
  },
  {
    id: '5',
    title: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: {
      type: 'sale',
      previousValue: '$199.99',
      currentValue: '$123.99',
    },
    image: {
      src: 'https://rstr.in/monogram/vibes/hqoDeY3IeBO',
      alt: 'Product Name',
    },
    href: '#',
  },
  {
    id: '6',
    title: 'Product Name',
    subtitle: 'Blue/Black/Green',
    badge: 'New',
    price: '$123.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/Yr-VreskA68',
      alt: 'Product Name',
    },
    href: '#',
  },
]

export default function Preview() {
  return <ProductsCarousel products={products} />
}
