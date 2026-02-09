"use client";

import Layout from "@/app/components/layout/Layout";
import ModelImagePopup from "@/app/components/models/ModelImagePopup";
import { useState, useRef } from "react";
import { Grid2x2 } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/app/components/ui/pagination";
import Link from "next/link";

const ModelDetail = () => {
  const images = [
    "https://www.gngmodels.com/wp-content/uploads/2023/12/indian-male-models-9-682x1024.jpg",
    "https://www.gngmodels.com/wp-content/uploads/2023/12/indian-male-models-11-682x1024.jpg",
    "https://www.gngmodels.com/wp-content/uploads/2023/12/indian-male-models-3-682x1024.jpg",
    "https://www.gngmodels.com/wp-content/uploads/2023/12/indian-male-models-10-682x1024.jpg",
    "https://www.bringitonline.in/uploads/2/2/4/5/22456530/bio-ank-16_orig.jpg",
    "https://www.bringitonline.in/uploads/2/2/4/5/22456530/bio-ank-21_orig.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBctKcK2zV42qYfMq_bIRik7sxfgFO1ZaBkEZ1qi0FXA&s",
    "https://www.gngmodels.com/wp-content/uploads/2023/12/indian-male-models-1-682x1024.jpg",
    "https://praveenbhat.net/wp-content/uploads/2024/08/Screenshot-2024-08-10-191725.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);
  const [imageURL, setImageURL] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);

  // ✅ FINAL FIX — DOM SAFE
  const handleFigureClick = (
    e: React.MouseEvent<HTMLElement>,
    image: string
  ) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const containerRect = container.getBoundingClientRect();
    const itemRect = e.currentTarget.getBoundingClientRect();

    const containerCenter = containerRect.left + containerRect.width / 2;
    const itemCenter = itemRect.left + itemRect.width / 2;
    const threshold = itemRect.width / 3;

    if (Math.abs(containerCenter - itemCenter) < threshold) {
      handleImagePopup(image);
      return;
    }

    if (itemCenter < containerCenter) {
      container.scrollBy({
        left: -containerRect.width / 1.5,
        behavior: "smooth",
      });
    } else {
      container.scrollBy({
        left: containerRect.width / 1.5,
        behavior: "smooth",
      });
    }
  };

  const handleImagePopup = (image: string) => {
    setImageURL(image);
    setOpenPopup(true);
    setCurrentIndex(images.indexOf(image));
  };

  const modelVideoURL = "https://www.pexels.com/download/video/7325049/";

  return (
    <Layout>
      {/* SLIDER */}
      <section className="pt-4">
        <div className="container xl:px-0 px-6">
          <div
            ref={scrollRef}
            className="flex gap-8 md:gap-4 md:flex-row flex-col overflow-x-auto no-scrollbar md:scroll-smooth"
          >
            {images.map((image, index) => (
              <figure
                key={index}
                className="lg:w-[352px] md:w-[250px] h-[491px] flex-shrink-0 cursor-pointer"
                onClick={(e) => handleFigureClick(e, image)}
              >
                <img
                  src={image}
                  alt={`Model image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </figure>
            ))}
          </div>

          <Pagination className="py-6">
            <PaginationContent className="gap-6 text-sm text-gray-300">
              <PaginationItem>
                <PaginationPrevious href="/" />
              </PaginationItem>

              <PaginationItem>
                <PaginationLink href="#">
                  <Grid2x2 className="w-4 h-4" />
                </PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationNext href="/" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>

      {/* MODEL INFO */}
      <section className="pt-8 pb-16 min-h-screen relative mt-12">
        <div className="xl:px-0 container px-6 relative z-10 text-white">
          <h1 className="text-[45px] leading-[54px]">CAIO</h1>
          <h3 className="mt-2 mb-6">
            HEIGHT 6'1" CHEST 40 WAIST 32 HIP 42 SHOE 43 EYES BROWN
          </h3>

          <a className="block mb-2 text-sm" href="#">
            Download Portfolio
          </a>
          <a className="block text-sm" href="#">
            Download Polaroids
          </a>

          <Link
            href="/auraaedge"
            className="btn-primary armata mt-8 w-fit flex h-[60px]"
          >
            Book this model
          </Link>
        </div>

        <div className="absolute inset-0 w-full overflow-hidden">
          <video
            src={modelVideoURL}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover animate-hero-zoom"
          />
        </div>
      </section>

      <ModelImagePopup
        open={openPopup}
        onClose={() => setOpenPopup(false)}
        imageURL={imageURL}
        currentIndex={currentIndex}
        totalImages={images.length}
      />
    </Layout>
  );
};

export default ModelDetail;