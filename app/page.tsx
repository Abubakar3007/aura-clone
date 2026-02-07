import Layout from "@/app/components/layout/Layout";
import Hero from "@/app/components/home/Hero";
import LatestCarousel from "@/app/components/home/LatestCarousel";
import FeaturedProfile from "@/app/components/home/FeaturedProfile";
import Testimonials from "@/app/components/home/Testimonials";
const Index = () => {
  return <Layout>
      <Hero />
      <LatestCarousel />
      <FeaturedProfile />
      <Testimonials />

      {/* CTA Section */}
      <section className="section-dark">
        
      </section>
    </Layout>;
};
export default Index;