import Link from "next/link";
import Layout from "@/app/components/layout/Layout";

// team dummy data
const team = [{
  name: "Harshad Gadhvi",
  role: "Stylist | Creative Director",
  image: "https://img.freepik.com/free-photo/portrait-bearded-indian-male-dressed-winter-jacket-grey-background_613910-15057.jpg?semt=ais_hybrid&w=740&q=80"
}, {
  name: "Priya Sharma",
  role: "Photographer | Visual Creator",
  image: "https://t4.ftcdn.net/jpg/07/04/82/59/360_F_704825941_USdItsvq9u4zRBW7fSiDlig0wqMIujLC.jpg"
}];

const AuraaEdge = () => {
  return (
    <Layout>

      {/* Hero Section */}
      <section className="pt-28 section-dark pb-20">
        <div className="max-w-[1200px] w-full mx-auto xl:px-0 px-6">
          <div>
            <h1 className="text-primary-foreground mb-12 opacity-0 animate-fade-up animate-delay-100 text-5xl md:text-[72px]">AuraaEdge</h1>
            <p className="text-white opacity-0 animate-fade-up animate-delay-200 my-[16px] leading-7">
              AuraaEdge is a founder-driven creative initiative representing a curated roster of passionate, high-calibre artists. Built on Arpita’s two decades of industry experience, it brings together talent with genuine skill, discipline and a deep commitment to their craft.</p>
            <p className="text-white leading-7 opacity-0 animate-fade-up animate-delay-200 my-[16px]">
              Rooted in Auraa’s long-standing legacy and global presence, AuraaEdge offers a refined ecosystem where
              artists are thoughtfully guided and aligned with the demands of today’s evolving creative landscape.
            </p>
            <p className="text-[15px] text-white leading-7 opacity-0 animate-fade-up animate-delay-200">
              It is a space where strong creative direction and dedicated talent come together to deliver meaningful, exceptional work.
            </p>
          </div>
        </div>
      </section>

      {/* Creative Team */}
      <section className="pb-16 pt-12 section-dark">
        <div className="max-w-[1200px] w-full mx-auto xl:px-0 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => <Link href={`/creatives/${member.name}`} key={member.name} className="group cursor-pointer opacity-0 animate-fade-up" style={{
              animationDelay: `${index * 0.1}s`,
              animationFillMode: "forwards"
            }}>
              <div className="relative overflow-hidden mb-4 transition-all duration-700 rounded-[4px]">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 max-h-[388px]"
                />
              </div>

              <div>
                <h3 className="text-primary-foreground font-light text-[27px] mb-1 leading-[61px]">{member.name}</h3>
                <p className="text-base font-light leading-8 text-white armata">{member.role}</p>
              </div>
            </Link>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
};
export default AuraaEdge;