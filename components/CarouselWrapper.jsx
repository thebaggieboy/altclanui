
import { register } from 'swiper/element/bundle'

import { createElement, Fragment, useEffect, useRef } from 'react'

import chevR from '../public/assets/chev-r.svg'
import chevL from '../public/assets/chev-l.svg'
import useMediaQuery from '../utils/matchMedia'
import Image from 'next/image'


register()

const CarouselWrapper = ( { children, controls = false, breakpoints = false, slidesPerView, ...otherConfigProps } ) => {
    const swiperElRef = useRef( null );

    const matchesTablet = useMediaQuery( '(min-width: 540px)' )
    const matchesDesktop = useMediaQuery( '(min-width: 1024px)' )

    if ( !children ) return;

    useEffect( () => {
        if ( breakpoints === true ) {
            if ( matchesDesktop ) {
                swiperElRef.current.setAttribute( 'slides-per-view', slidesPerView )
            }
            else if ( matchesTablet ) {
                swiperElRef.current.setAttribute( 'slides-per-view', 2 )
                swiperElRef.current.setAttribute( 'space-between', 30 )
            } else {
                swiperElRef.current.setAttribute( 'slides-per-view', 2 )
                swiperElRef.current.setAttribute( 'space-between', 20 )
            }
        }
    }, [matchesDesktop, matchesTablet] )



    return (
        <swiper-container slides-per-view={ slidesPerView } { ...otherConfigProps } ref={ swiperElRef }>
            {//clones children elements and wraps them each in a swiper-slide
                children.map( ( child ) => {
                    return <swiper-slide>
                        { createElement( Fragment, null, child ) }
                    </swiper-slide>
                } )
            }
            {
                controls && (
                    <div slot='container-end' className='flex justify-center gap-4'>
                        <button data-control='next' onClick={ () => swiperElRef.current.swiper.slidePrev() }>
                            <Image src={ chevL } width={ 30 } height={ 30 } alt='control' className='w-8 h-8' />
                        </button>
                        <button data-control='prev' onClick={ () => swiperElRef.current.swiper.slideNext() }>
                            <Image src={ chevR } width={ 30 } height={ 30 } alt='control' className='w-8 h-8' />
                        </button>
                    </div>
                )
            }
        </swiper-container>
    )
}

export default CarouselWrapper