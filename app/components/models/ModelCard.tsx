import Link from "next/link";
interface ModelCardProps {
  id: string;
  name: string;
  city: string;
  image: string;
  stats: {
    height: string;
    chest: string;
    waist: string;
    hips: string;
    hair: string;
    eyes: string;
  };
}
const ModelCard = ({ id, name, city, image, stats }: ModelCardProps) => {
  return (
    <Link href={`/models/${id}`} className="model-card group block">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[3/4] h-[358px] w-full">
        <img src={image} alt={name} className="model-card-image h-full w-full" />

        {/* Hover Overlay with Stats */}
        <div className="model-card-overlay bg-[#f9f0f0b0] p-6 h-full w-full text-black">
          <div className="text-center">
            {/* Height - Large */}
            <div>
              <span className="text-uppercase mb-1 text-lg font-semibold">Height</span>{" "}
              <span className="tracking-tight text-lg font-semibold">{stats.height}</span>
            </div>

            {/* Other Stats */}
            <div className="text-xs font-light">
              <div>
                <span className="text-uppercase text-[13px]">Chest</span>{" "}
                <span>{stats.chest}</span>
              </div>
              <div>
                <span className="text-uppercase text-[13px]">Waist</span>{" "}
                <span>{stats.waist}</span>
              </div>
              <div>
                <span className="text-uppercase text-[13px]">Hips</span>{" "}
                <span>{stats.hips}</span>
              </div>
            </div>

            {/* Hair & Eyes */}
            <div className="flex justify-center gap-1 text-xs uppercase">
              <span>Hair - {stats.hair}</span>
              <span>|</span>
              <span>Eyes - {stats.eyes}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Name */}
      <div className="pt-4">
        <p className="text-lg">{name}</p>
        <p className="text-[13px] leading-6 text-[#606060] mt-2">{city}</p>
      </div>
    </Link>
  );
};
export default ModelCard;
