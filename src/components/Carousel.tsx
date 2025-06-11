import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type CarouselImage = {
  src: string;
  alt: string;
};

type CarouselComponentProps = {
  images: CarouselImage[];
};

const CarouselComponent = ({ images }: CarouselComponentProps) => (
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 3000 }}
    loop
    className="mySwiper"
  >
    {images.map((image, index) => (
      <SwiperSlide key={index}>
        <div className="w-full h-auto relative">
          <Image
            src={image.src}
            alt={image.alt}
            layout="responsive"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default CarouselComponent;
