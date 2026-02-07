import Link from "next/link";
const FeaturedProfile = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-[1200px] w-full mx-auto xl:px-0 px-4">
        <div>
          {/* Text Content */}
          <div className="mb-8">
            <h2 className="heading-section text-[#606060] mb-6 text-[45px] leading-[54px] uppercase">Harshad Gadhvi</h2>
            <p>Creative consultant | Fashion Director | Stylist</p>
          </div>

          {/* Image */}
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mb-8">
            <div className="relative overflow-hidden aspect-[3/4] rounded-[4px]">
              <img
                src="https://www.gngmodels.com/wp-content/uploads/2023/12/indian-male-models-9-682x1024.jpg"
                alt="Harshad Gadhvi - Creative Consultant"
                className="w-full h-full object-cover min-h-[511px] transition-transform duration-500 ease-out hover:scale-105"
              />
            </div>

            <div className="relative overflow-hidden aspect-[3/4] rounded-[4px]">
              <img
                src="https://www.gngmodels.com/wp-content/uploads/2023/12/indian-male-models-2-682x1024.jpg"
                alt="Harshad Gadhvi - Creative Consultant"
                className="w-full h-full object-cover min-h-[511px] transition-transform duration-500 ease-out hover:scale-105"
              />
            </div>

            <div className="relative overflow-hidden aspect-[3/4] rounded-[4px]">
              <img
                src="https://c.stocksy.com/a/mtKA00/z9/2463618.jpg"
                alt="Harshad Gadhvi - Creative Consultant"
                className="w-full h-full object-cover min-h-[511px] transition-transform duration-500 ease-out hover:scale-105"
              />
            </div>

          </div>
          <Link href="/auraaedge" className="btn-primary armata mx-auto w-fit flex h-[60px]">
            View Profile
          </Link>
        </div>
      </div>
    </section>
  );
};
export default FeaturedProfile;
