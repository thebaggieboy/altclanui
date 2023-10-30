
const products = [
  {
    id: 1,
    name: "Shades",
    href: "#",
    price: "$35",
    imageSrc: "/img/shades.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  {
    id: 3,
    name: "Rings",
    href: "#",
    price: "$35",
    imageSrc: "/img/rings.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 4,
    name: "Caps",
    href: "#",
    price: "$35",
    imageSrc: "/img/cap.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Neckpieces",
    href: "#",
    price: "$35",
    imageSrc: "/img/chain.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 6,
    name: "Tees",
    href: "#",
    price: "$35",
    imageSrc: "/img/tees.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 7,
    name: "Coats",
    href: "#",
    price: "$35",
    imageSrc: "/img/vivek-sharma.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];

export default function Category() {
  return (
     <div className="bg-white ">
       <div className="px-4 py-4 mx-auto  sm:py-24 sm:px-6 max-w-[80rem] lg:px-8">
         <h2 className="text-3xl text-center mb-4 sm:mb-16">Shop by category</h2> <br />
          <div className="grid grid-cols-2 gap-y-8 lg:gap-y-16 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-5">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="w-full overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="object-cover object-center w-full h-full group-hover:opacity-75"
                  />
                </div>

                <button
                  type="button"
                  className="text-gray-900 mt-4 bg-dark hover:text-dark border border-black hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                >
                  Shop {product.name}
                </button>
              </a>
            ))}
          </div>
       </div>
     </div>

 
  );
}
