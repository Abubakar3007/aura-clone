import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import influencer1 from '@/assets/influencer-1.jpg';
import modelFemale1 from '@/assets/model-female-1.jpg';
import modelFemale2 from '@/assets/model-female-2.jpg';
import modelFemale3 from '@/assets/model-female-3.jpg';
import modelMale1 from '@/assets/model-male-1.jpg';
import modelMale2 from '@/assets/model-male-2.jpg';

const influencers = [
  { id: 1, name: 'Sophia', followers: '450K', image: influencer1 },
  { id: 2, name: 'Riya', followers: '320K', image: modelFemale1 },
  { id: 3, name: 'Aditya', followers: '280K', image: modelMale1 },
  { id: 4, name: 'Priya', followers: '520K', image: modelFemale2 },
  { id: 5, name: 'Vikram', followers: '190K', image: modelMale2 },
  { id: 6, name: 'Ananya', followers: '680K', image: modelFemale3 },
];

const stats = [
  { value: '50+', label: 'Influencers' },
  { value: '10M+', label: 'Combined Reach' },
  { value: '200+', label: 'Brand Campaigns' },
  { value: '98%', label: 'Client Satisfaction' },
];

const Influencer = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -500 : 500;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 md:pt-40 pb-16 bg-background">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <p className="text-uppercase text-muted-foreground mb-4 opacity-0 animate-fade-up">
              Digital Creators
            </p>
            <h1 className="heading-hero text-foreground mb-8 opacity-0 animate-fade-up animate-delay-100">
              Influencers
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed opacity-0 animate-fade-up animate-delay-200">
              Connecting brands with authentic voices. Our roster of digital
              creators brings genuine engagement and measurable impact to every
              campaign.
            </p>
          </div>
        </div>
      </section>

      {/* Horizontal Gallery */}
      <section className="pb-16 bg-background">
        <div className="container-editorial mb-8">
          <div className="flex justify-between items-center">
            <p className="text-uppercase text-muted-foreground">Featured Creators</p>
            <div className="hidden md:flex gap-3">
              <button
                onClick={() => scroll('left')}
                className="w-12 h-12 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300"
                aria-label="Scroll left"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-12 h-12 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300"
                aria-label="Scroll right"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="horizontal-scroll pl-6 md:pl-12 lg:pl-20"
        >
          {influencers.map((influencer) => (
            <div
              key={influencer.id}
              className="group cursor-pointer w-80 md:w-96 lg:w-[450px]"
            >
              <div className="relative overflow-hidden aspect-[4/5] mb-4">
                <img
                  src={influencer.image}
                  alt={influencer.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Followers Badge */}
                <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-2">
                  <p className="text-2xl font-light text-foreground">{influencer.followers}</p>
                  <p className="text-uppercase text-muted-foreground text-[10px]">Followers</p>
                </div>
              </div>
              <p className="text-uppercase text-foreground tracking-[0.15em]">{influencer.name}</p>
            </div>
          ))}
          {/* Spacer */}
          <div className="w-6 md:w-12 lg:w-20 flex-shrink-0" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding section-dark">
        <div className="container-editorial">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <p className="text-4xl md:text-5xl lg:text-6xl font-light text-primary-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-uppercase text-primary-foreground/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-uppercase text-muted-foreground mb-4">For Brands</p>
              <h2 className="heading-section text-foreground mb-8">
                Why Partner With Our Influencers?
              </h2>
            </div>
            <div className="space-y-8">
              {[
                {
                  title: 'Authentic Engagement',
                  description:
                    'Our creators build genuine connections with their audiences, ensuring your message resonates.',
                },
                {
                  title: 'Strategic Matching',
                  description:
                    'We carefully match brands with influencers whose values and audience align perfectly.',
                },
                {
                  title: 'Full-Service Management',
                  description:
                    'From concept to execution, we handle every aspect of influencer campaigns.',
                },
                {
                  title: 'Measurable Results',
                  description:
                    'Comprehensive analytics and reporting to track campaign performance and ROI.',
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="heading-card text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground font-light text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <p className="text-uppercase text-muted-foreground mb-4">Start a Campaign</p>
          <h2 className="heading-section text-foreground mb-6">
            Ready to amplify your brand?
          </h2>
          <p className="text-editorial max-w-lg mx-auto mb-10">
            Connect with our team to discover how our influencer network can
            help you reach and engage your target audience.
          </p>
          <Link to="/request-callback" className="btn-primary inline-flex">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Influencer;