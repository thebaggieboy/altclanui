import BrandHeaderTab from "@/components/BrandHeaderTab"


const brands = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    followers: '48k',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    followers: '35k',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    followers: '89.4k',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a brandivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    followers: '1m',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More brands...
]

export default function Brands() {
  return (
    <div className="bg-white">
      <BrandHeaderTab/>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Brands</h2> <br/>
        
        <p className="lead text-gray-600">Explore from our list of aesthetic brands</p>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {brands.map((brand) => (
            <a key={brand.id} href={brand.href} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden  bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={brand.imageSrc}
                  alt={brand.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-900">{brand.name}</h3>
             <p className="mt-1 text-sm font-medium text-gray-700">{brand.followers} followers</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
