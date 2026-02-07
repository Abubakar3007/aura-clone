import { Link } from "react-router-dom";
import modelFemale2 from "@/assets/model-female-2.jpg";
import modelMale2 from "@/assets/model-male-2.jpg";
const SplitGenderSection = () => {
  return (
    <section className="relative sm:h-screen w-full">
      <div className="flex flex-col sm:flex-row h-full w-full">
        {/* Female Section */}
        <Link to="/models/direct-bookings?gender=women" className="split-hover relative flex-1 overflow-hidden">
          <img src={modelFemale2} alt="Female Models" className="w-full h-full object-cover" />
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 text-center">
            <h2 className="text-[45px] font-light text-primary-foreground text-justify leading-[54px]">
              Female
            </h2>
          </div>
        </Link>

        {/* Male Section */}
        <Link to="/models/direct-bookings?gender=men" className="split-hover relative flex-1 overflow-hidden">
          <img src={modelMale2} alt="Male Models" className="w-full h-full object-cover" />
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 text-center">
            <h2 className="text-[45px] font-light text-primary-foreground leading-[54px]">Male</h2>
          </div>
        </Link>
      </div>
    </section>
  )
};
export default SplitGenderSection;