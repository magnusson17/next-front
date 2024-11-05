"use client"

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import TitoloSlideBloccoE from '@/components/blocchi/elementiBloccoE/TitoloSlideBloccoE';
import WrapperTitoliSlideBloccoE from '@/components/blocchi/elementiBloccoE/WrapperTitoliSlideBloccoE';

export default function ElementiBloccoE({elementi}) {
    const [activeIndex, setActiveIndex] = useState(0)
    const swiperRef = useRef(null)

    const handlelick = (index) => {
        swiperRef.current.slideTo(index)
    }

    return (
        <>
            <WrapperTitoliSlideBloccoE>
                {elementi.map((el) => {
                    return (
                        <TitoloSlideBloccoE 
                            key={el.index}
                            activeIndex={activeIndex} 
                            handlelick={handlelick}
                            elIndex={el.index}
                            elTitolo={el.field_titolo}
                        />
                    )
                })}
            </WrapperTitoliSlideBloccoE>

            <Swiper 
                className='w-full md:w-1/2'
                loop={false}
                onSwiper={(swiper) => (swiperRef.current = swiper)} 
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {elementi.map((el) => {
                    return (
                        <SwiperSlide key={el.index}>
                            <img className='w-full' src={el.field_immagine} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}