import { useState } from 'react'
import heart from '../../public/assets/heart.svg'
import Image from 'next/image'

import img from '../../public/assets/image.webp'

const ProductCard = ( { id } ) => {
  const [liked, setLiked] = useState( false )

  return (
    <div className='product-card'>
      <div className="product-card__img">
        {/* <img src={ img } /> */}
      </div>
      <div className="product-card__content">
        <div className="product-card__info">
          <h1 className="product-card__name">Product Name { id }</h1>
          <p className="product-card__price">₦ 15,000.00</p>
          <p className="product-card__price">₦50.00</p>
        </div>
        <button onClick={ () => setLiked( !liked ) } className='product-card__like'>
          <i><Image src={ heart } className={ `heart-svg ${liked ? 'active' : ''}` } /></i>
        </button>
      </div>
    </div>
  )
}

export default ProductCard