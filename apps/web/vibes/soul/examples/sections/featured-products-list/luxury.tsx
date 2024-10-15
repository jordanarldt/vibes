import { FeaturedProductsList } from '@/vibes/soul/components/featured-products-list'
import { Product } from '@/vibes/soul/components/product-card'

export const featuredProducts: {
  title: string
  description: string
  cta: { label: string; href: string }
  products: Product[]
} = {
  title: 'Own Your Journey',
  description:
    'Our shoes are crafted for the independent, fashion-forward woman who walks her own path. Designed with bold style and uncompromising quality, each pair is a statement of confidence and individuality. Elevate your stride—because you don’t just follow trends, you set them.',
  cta: {
    label: 'Shop Now',
    href: '#',
  },
  products: [
    {
      id: '1',
      title: 'Product Name',
      subtitle: 'Blue/Black/Green',
      badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/9vu9tSw1WdA',
        alt: 'Product Name',
      },
      href: '#',
    },
    {
      id: '2',
      title: 'Product Name',
      subtitle: 'Blue/Black/Green',
      badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/jD25Jjm0zbT',
        alt: 'Product Name',
      },
      href: '#',
    },
    {
      id: '3',
      title: 'Product Name',
      subtitle: 'Blue/Black/Green',
      badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/6inssBpCQru',
        alt: 'Product Name',
      },
      href: '#',
    },
    {
      id: '4',
      title: 'Product Name',
      subtitle: 'Blue/Black/Green',
      badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/YfQW8M1Gv2H/zTWKcqJrdIu',
        alt: 'Product Name',
      },
      href: '#',
    },
    {
      id: '6',
      title: 'Product Name',
      subtitle: 'Blue/Black/Green',
      badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/5QBR05kyrYo',
        alt: 'Product Name',
      },
      href: '#',
    },
    {
      id: '5',
      title: 'Product Name',
      subtitle: 'Blue/Black/Green',
      badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/yzjuCwK-5tz/vfCehRZDBGk',
        alt: 'Product Name',
      },
      href: '#',
    },
  ],
}

export default function Preview() {
  return (
    <FeaturedProductsList
      title={featuredProducts.title}
      description={featuredProducts.description}
      cta={{
        label: featuredProducts.cta.label,
        href: featuredProducts.cta.href,
      }}
      products={featuredProducts.products}
    />
  )
}
