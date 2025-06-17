'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Swiper = dynamic(() => import('swiper/react').then((mod) => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import('swiper/react').then((mod) => mod.SwiperSlide), { ssr: false });


type CarouselImage = {
  src: string;
  alt: string;
};

type CarouselComponentProps = {
  images: CarouselImage[];
};

const CarouselComponent = ({ images }: CarouselComponentProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures Swiper renders only on the client side
  }, []);

  if (!isClient) return null; // Avoid SSR-related errors

  return (
    // <Swiper
    //   loop={images.length > 1} // Enable loop only if enough slides
    //   modules={[Navigation, Pagination, Autoplay]}
    //   navigation
    //   pagination={{ clickable: true }}
    //   autoplay={images.length > 1 ? { delay: 3000 } : false} // Enable autoplay only if loop is functional
    //   className="mySwiper"
    // >
    //   {images.map((image, index) => (
    //     <SwiperSlide key={index}>
    //       <div className="w-full h-auto relative" style={{ paddingBottom: '56.25%' }}>
    //         <Image
    //           src={image.src}
    //           alt={image.alt}
    //           layout="responsive"
    //           width={400}
    //           height={400}
    //           className="object-cover"
    //         />
    //       </div>
    //     </SwiperSlide>
    //   ))}
    // </Swiper>

    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      spaceBetween={10}
      slidesPerView={1}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-auto">
            <Image
              src={image.src}
              alt={image.alt}
              width={750}
              height={500}
              loading="lazy"
              // layout="responsive"
              // className="object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

  );
};

export default CarouselComponent;
