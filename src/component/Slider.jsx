import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "./Slider.css"

const Slider = () => {
  return (
    <div className="w-[full]">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <div className="w-[full] h-[full] flex justify-center items-center">
          <SwiperSlide>
            {/* <div className="w-[65%] flex flex-col">
              <img
                src="Rectangle 3463515.png"
                alt="img1"
                width={300}
                height={200}
              />
              <h2>Interactive Digital Menu</h2>
              <p>
                Engage customers with our Interactive Digital Menu, utilizing QR
                codes for digital menus and community-driven recommendations.
              </p>
            </div> */}
            <div className="w-[75%]">
              <img src="Frame 1321317167.png"/>
            </div>
          </SwiperSlide>
        </div>
        <SwiperSlide>
          {/* <div className="w-[65%] flex flex-col">
            <img src="Illustration.png" alt="img2" width={300} height={200} />
            <h2>Customer Data & Insights </h2>
            <p>
              Gain full transparency into customer data capture and insights,
              empowering you to make informed decisions and tailor your services
              to your customer base.
            </p>
          </div> */}
          <div className="w-[75%]">
            <img src="Frame 1321317181.png"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <div className="w-[65%] flex flex-col">
            <img
              src="Rectangle 3463515 (1).png"
              alt="img3"
              width={300}
              height={200}
            />
            <h2>Commission-less Payment Solution</h2>
            <p>
              Keep your profits intact with SnackBae's commission-free payment
              system, allowing you to maximize your earnings.
            </p>
          </div> */}
          <div className="w-[75%]">
            <img src="Frame 1321317180.png" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
