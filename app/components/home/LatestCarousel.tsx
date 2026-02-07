"use client"
import { useRef } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";



import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const modelFemale1 = "https://images.squarespace-cdn.com/content/v1/63810cc8347e214d6a1808a3/781ce845-0278-48ac-8011-6ce2b344865d/model-portfolio-photographer-studio-plymouth-devon-3";
const modelMale1 = "https://bookartistsonline.weebly.com/uploads/2/2/4/5/22456530/whatsapp-image-2024-02-07-at-2-21-11-pm-1-orig-2_orig.jpeg";
const modelFemale2 = "https://img.freepik.com/free-photo/beautiful-woman-purple-sweater-skirt_1303-17487.jpg?semt=ais_user_personalization&w=740&q=80";
const modelFemale3 = "https://mir-s3-cdn-cf.behance.net/project_modules/fs/62f41336102745.570f363248965.jpg";
const modelMale2 = "https://www.gngmodels.com/wp-content/uploads/2023/12/indian-male-models-9-682x1024.jpg";
const modelMale3 = "https://www.gngmodels.com/wp-content/uploads/2023/12/indian-male-models-2-682x1024.jpg";

const slides = [
  modelFemale1,
  modelFemale2,
  modelMale1,
  modelMale2,
  modelFemale3,
  modelMale3,
];

export default function LatestCoverflow() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const initialIndex = Math.floor(slides.length / 2);

  return (
    <section className="py-16 text-center overflow-visible">
      <h2 className="text-[45px] text-black mb-12 tracking-widest">
        LATEST
      </h2>

      <Swiper
        effect="coverflow"
        centeredSlides
        loop
        grabCursor
        speed={700}
        initialSlide={initialIndex}

        /* ✅ RESPONSIVE BEHAVIOR */
        slidesPerView={1}              // default (mobile)
        breakpoints={{
          650: {
            slidesPerView: 3,          // desktop
          },
        }}

        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}

        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}

        modules={[EffectCoverflow, Navigation]}
        className="w-full max-w-[1200px] mx-auto xl:px-0 px-4 overflow-hidden"
      >
        {slides.map((img, i) => (
          <SwiperSlide
            key={i}
            className="
              h-[400px] w-[400px] max-h-[400px] rounded-xl overflow-hidden relative
              before:content-['']
              before:absolute before:inset-0
              before:bg-black/30
              before:opacity-0
              before:transition-opacity before:duration-300 before:ease-in-out
              hover:before:opacity-100
            "
          >
            <img
              src={img}
              alt={`slide-${i}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="mt-14 flex gap-20 justify-center">
        <button
          ref={prevRef}
          className="p-2 transition hover:opacity-60"
          aria-label="Previous slide"
        >
          <MoveLeft className="text-gray-400" />
        </button>

        <button
          ref={nextRef}
          className="p-2 transition hover:opacity-60"
          aria-label="Next slide"
        >
          <MoveRight className="text-gray-400" />
        </button>
      </div>
    </section>
  );
}