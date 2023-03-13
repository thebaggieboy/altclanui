
const products = [
    {
      id: 1,
      name: 'Tees',
      href: '#',
      price: '$48',
      imageSrc: '/img/tees.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Rings',
      href: '#',
      price: '$35',
      imageSrc: '/img/rings.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Jeans',
      href: '#',
      price: '$89',
      imageSrc: '/img/jeans.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Sweaters',
      href: '#',
      price: '$35',
      imageSrc: '/img/sweaters.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Glasses',
        href: '#',
        price: '$35',
        imageSrc: '/img/shades.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 6,
        name: 'Jackets',
        href: '#',
        price: '$35',
        imageSrc: '/img/jackets.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 7,
        name: 'Bags',
        href: '#',
        price: '$35',
        imageSrc: '/img/bag.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 8,
        name: 'Caps & Hats',
        href: '#',
        price: '$35',
        imageSrc: '/img/cap.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
  ]
  
  export default function Category() {
    return (
      <div className="bg-white ">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-6xl lg:px-8">
          <h2 className="text-3xl">Shop by collection</h2> <br/>
  
          <div className="grid grid-cols-1 gap-y-5 gap-x-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-0">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div> <br/>
                <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Shop {product.name}</button>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  