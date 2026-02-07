import Link from "next/link";
const SplitGenderSection = () => {
  return (
    <section className="relative sm:h-screen w-full">
      <div className="flex flex-col sm:flex-row h-full w-full">
        {/* Female Section */}
        <Link href="/models/direct-bookings?gender=women" className="split-hover relative flex-1 overflow-hidden">
          <img src="https://www.mgfilmproductions.com/uploads/1/4/5/8/145812880/389783587_3.jpg" alt="Female Models" className="w-full h-full object-cover" />
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 text-center">
            <h2 className="text-[45px] font-light text-primary-foreground text-justify leading-[54px]">
              Female
            </h2>
          </div>
        </Link>

        {/* Male Section */}
        <Link href="/models/direct-bookings?gender=men" className="split-hover relative flex-1 overflow-hidden">
          <img src="https://www.gngmodels.com/wp-content/uploads/2023/12/indian-male-models-9-682x1024.jpg" alt="Male Models" className="w-full h-full object-cover" />
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 text-center">
            <h2 className="text-[45px] font-light text-primary-foreground leading-[54px]">Male</h2>
          </div>
        </Link>
      </div>
    </section>
  )
};
export default SplitGenderSection;