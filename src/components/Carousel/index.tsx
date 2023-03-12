"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Banner1, Banner2, Banner3, Banner4 } from "@/assets";
import Image from "next/image";

const imgArr = [Banner1, Banner2, Banner3, Banner4];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselCom = () => {
  return (
    <>
      <section>
        <div className="px-3 py-4">
          <Carousel
            swipeable
            draggable
            showDots
            responsive={responsive}
            ssr // means to render carousel on server-side.
            infinite
            autoPlay
            autoPlaySpeed={3000}
            keyBoardControl
            dotListClass="custom-dot-list-style"
            transitionDuration={500}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {imgArr.map((img, i) => (
              <div key={i}>
                <Image
                  src={img}
                  className="rounded-lg"
                  width={480}
                  height={240}
                  quality={40}
                  alt=""
                  draggable={false}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default CarouselCom;
