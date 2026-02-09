import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Layout from "@/app/components/layout/Layout";
const Join = () => {
  return (
    <Layout>
      {/* Main Editorial Content */}
      <section className="py-12 bg-background">
        <div className="max-w-[1200px] w-full mx-auto text-center xl:px-0 px-6">
          <h1 className="heading-hero text-foreground text-[45px] mb-12 opacity-0 animate-fade-up animate-delay-100">
            Auraa Talents
          </h1>

          <div className="text-center space-y-4 opacity-0 animate-fade-up animate-delay-200">
            <p>
              Founded in the vibrant city of Delhi in 2008, and five years later expanded its footprint to Mumbai, Auraa
              has emerged as a leading platform for both clients and talents in the entertainment industry.
            </p>

            <p>
              Auraa's journey began with a clear purpose - a purpose that goes beyond mere business goals. It was a
              purpose driven by a deep understanding of the aspirations and dreams of both talents and clients. Each
              step taken with utmost ethics and values, every action guided by integrity and professionalism. With every
              talent that walked through its doors, our commitment to going the extra mile for them and treating every
              project as if it were our own sets us apart from the competition.
            </p>

            <p>
              Led by a founder with a modeling background, Arpita Das, the brand understands the intricacies of the
              industry. A mentor and a friend, she stands as the perfect bridge between talents and clients. Like a
              family, the Auraa team celebrates every achievement, every milestone, and every moment of growth. Their
              diverse backgrounds and skill sets ensure to deliver exceptional results consistently in the multifaceted
              demands of the Industry.
            </p>

            <p>
              Come, be a part of Auraa Talents, where dreams are nurtured, hearts are touched, talent is empowered, and
              the realm of success in the entertainment industry is redefined.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="container text-center xl:px-0 px-6">
          <h2 className="text-black/90 mb-14 text-[45px]">Want to become a model?</h2>
          <div className="flex justify-center">
            <Link href="/request-call-back" className="btn-primary h-[60px] armata">
              Apply Now
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* What We Look For */}

    </Layout>
  )
};
export default Join;