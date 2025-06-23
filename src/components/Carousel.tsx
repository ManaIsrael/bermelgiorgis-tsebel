"use client";
import { useEffect } from "react";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

type CarouselComponentProps = {
  images: { src: string; alt: string }[];
};

export default function CarouselComponent({ images }: CarouselComponentProps) {
  // Initialize Keen Slider with loop and responsive settings
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 10 },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 3, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 5, spacing: 20 },
      },
    },
  });

  // Autoplay: advance every 3 seconds
  useEffect(() => {
    if (!slider) return;
    const interval = setInterval(() => {
      slider.current?.next();
    }, 3000);
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <div ref={sliderRef} className="keen-slider">
      {images.map((image, idx) => (
        <div className="keen-slider__slide" key={idx}>
          <Image src={image.src} alt={image.alt} width={600} height={400} />
        </div>
      ))}
    </div>
  );
}
