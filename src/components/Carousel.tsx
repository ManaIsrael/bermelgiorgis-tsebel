'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
// import Image from 'next/image';

const Swiper = dynamic(() => import('swiper/react').then((mod) => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import('swiper/react').then((mod) => mod.SwiperSlide), { ssr: false });
import { Navigation, Pagination, Autoplay } from 'swiper/modules';



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
      navigation // Enables navigation buttons
      pagination={{ clickable: true }} // Enables pagination dots
      autoplay={{ delay: 3000 }} // Enables autoplay with a 3-second delay
      loop // Enables continuous loop mode
      spaceBetween={10} // Space between slides in pixels
      slidesPerView={1} // Number of slides visible at once
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image.src} alt={image.alt} style={{ width: '100%', height: 'auto' }} />
        </SwiperSlide>
      ))}
    </Swiper>

  );
};

export default CarouselComponent;
