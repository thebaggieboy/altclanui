import Filter from '@/components/Filter'
import Filter1 from '@/components/Filter1'
const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '/products/basic_tee',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee 2',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$45',
        color: 'Black',
      },

      {
        id: 3,
        name: 'Basic Tee 3',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
    // More products...
  ]
  
  export default function Products() {
    return (
      <div className="bg-white">
       
       <Filter/> 
       
      </div>
    )
  }
  