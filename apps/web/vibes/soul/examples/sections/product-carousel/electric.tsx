import { CarouselProduct, ProductCarousel } from '@/vibes/soul/sections/product-carousel';
import { SectionLayout } from '@/vibes/soul/sections/section-layout';

export default function Preview() {
  const products = new Promise<CarouselProduct[]>((resolve) => {
    setTimeout(() => resolve(defaultProducts), 1000);
  });

  return (
    <div>
      <SectionLayout className="group/product-carousel">
        <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 @xl:px-6 @xl:py-14 @4xl:px-8 @4xl:py-20">
          <ProductCarousel products={products} />
        </div>
      </SectionLayout>
      <SectionLayout className="group/product-carousel bg-foreground">
        <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 @xl:px-6 @xl:py-14 @4xl:px-8 @4xl:py-20">
          <ProductCarousel colorScheme="dark" products={products} showScrollbar={false} />
        </div>
      </SectionLayout>
    </div>
  );
}

const defaultProducts: CarouselProduct[] = [
  {
    id: '1',
    title: 'Philodendron Imperial Red',
    subtitle: 'Indoor Plant',
    badge: 'Popular',
    price: '$44.95',
    image: {
      src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
      alt: 'Philodendron Imperial Red',
    },
    href: '#',
    rating: 4,
  },
  {
    id: '2',
    title: 'Monstera',
    subtitle: 'Indoor Plant',
    badge: 'New',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/n0P83RMnClS',
      alt: 'Monstera',
    },
    href: '#',
    rating: 4.4,
  },
  {
    id: '3',
    title: 'Pink Caladium',
    subtitle: 'Indoor Plant',
    price: '$19.95',
    image: {
      src: 'https://rstr.in/monogram/vibes/AaZW4j2VTd4',
      alt: 'Pink Caladium',
    },
    href: '#',
    rating: 4.8,
  },
  {
    id: '4',
    title: 'Hoya Kerrii',
    subtitle: 'Indoor Plant',
    price: '$16.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/QSaMw6aC_AN',
      alt: 'Hoya Kerrii',
    },
    href: '#',
    rating: 2.2,
  },
  {
    id: '5',
    title: 'Bird Nest Fern',
    subtitle: 'Indoor Plant',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/gfGRQi5pHeJ',
      alt: 'Bird Nest Fern',
    },
    href: '#',
    rating: 3.5,
  },
  {
    id: '6',
    title: 'Jade Plant',
    subtitle: 'Indoor Plant',
    price: '$24.99',
    image: {
      src: 'https://rstr.in/monogram/vibes/lJg081kQqvc',
      alt: 'Jade Plant',
    },
    href: '#',
    rating: 5,
  },
  {
    id: '7',
    title: 'Snake Plant',
    subtitle: 'Indoor Plant',
    price: '$34.95',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTplNGNiMjdiNi04NTY2LTQxOTctODhhMC0xYThhYmY3NDdkZTU=/snake-plant.jpg',
      alt: 'Snake Plant',
    },
    href: '#',
    rating: 4.9,
  },
  {
    id: '8',
    title: 'Spider Plant',
    subtitle: 'Indoor Plant',
    price: '$12.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpiYmYyNDEzMC0wNzU3LTRiYjMtYjkwMi0zNzI0NjBjNzk5MjY=/spider-plant.jpg',
      alt: 'Spider Plant',
    },
    href: '#',
    rating: 4.2,
  },
  {
    id: '9',
    title: 'African Fig Tree',
    subtitle: 'Indoor Plant',
    price: '$49.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1MGFmMDIxOC05NWM4LTRlN2UtOTAyMS01OWExOGQxMjUwNGM=/african-fig.jpg',
      alt: 'African Fig Tree',
    },
    href: '#',
    rating: 4.7,
  },
  {
    id: '10',
    title: 'Birds of Paradise',
    subtitle: 'Indoor Plant',
    price: '$29.95',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowNWUwYmEwMS0yMDhiLTQ5ZWQtOTI3NC0yZTM0ZTZjYmZhNzg=/birds-of-paradise.jpg',
      alt: 'Birds of Paradise',
    },
    href: '#',
    rating: 4.5,
  },
  {
    id: '11',
    title: 'ZZ Plant',
    subtitle: 'Indoor Plant',
    price: '$22.99',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1N2Q2YThlZS04MjZiLTRjZmEtODRmZi1hZjgzZDM3MWE2ZGY=/zz-plant.jpg',
      alt: 'ZZ Plant',
    },
    href: '#',
    rating: 4.6,
  },
  {
    id: '12',
    title: 'Dracaena',
    subtitle: 'Indoor Plant',
    price: '$18.95',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo3YTJhYTJmZi00ODBhLTQ3NTctODdkYi02ZWEyZGYzZWJmNjI=/dracaena.jpg',
      alt: 'Dracanea',
    },
    href: '#',
    rating: 4.3,
  },
];
