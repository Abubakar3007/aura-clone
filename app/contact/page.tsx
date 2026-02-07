import { ChevronRight, Mail } from "lucide-react";
import Link from "next/link";
import Layout from "@/app/components/layout/Layout";
const Contact = () => {
  return (
  <Layout>
    {/* Main Contact Section */}
    <section className="py-14 bg-background">
      <div className="max-w-[1200px] w-full mx-auto xl:px-0 px-4">
        <div className="flex md:gap-20 gap-12 items-start md:flex-row flex-col">
          {/* Image Column */}
          <div className="relative md:max-w-[780px] w-full flex md:gap-4">
            <div className="overflow-hidden">
              <img src="https://www.mgfilmproductions.com/uploads/1/4/5/8/145812880/389783587_3.jpg" alt="Contact Us" className="w-full h-full object-cover" />
            </div>
            {/* Vertical Text */}
            <div className="w-10">
              <h1 className="text-uppercase whitespace-nowrap text-xl md:text-[45px] rotate-90 block mt-2">Contact Us</h1>
            </div>
          </div>

          {/* Content Column */}
          <div className="flex flex-col justify-center md:max-w-[348px] w-full">
            <p className="font-semibold text-[#606060] mb-4">Bookings:</p>

            <div className="opacity-0 animate-fade-up animate-delay-200">
              {/* Booking Enquiries */}
              <div className="mb-5">
                <p className="mb-1"> For bookings and general enquires:</p>
                <a href="mailto:booking@auraa.in" className="font-bold block mb-3">
                  <Mail className="inline-block w-5 h-5" /> booking@auraa.in
                </a>
                <a href="mailto:scouting@auraa.in" className="font-bold block mb-3">
                  <Mail className="inline-block w-5 h-5" /> scouting@auraa.in
                </a>
                <a href="mailto:info@auraa.in" className="font-bold">
                  <Mail className="inline-block w-5 h-5" /> silvia@auraa.in
                </a>
              </div>

              <div className="mb-5">
                <p className="mb-4 font-semibold">AuraaEdge:</p>
                <a href="mailto:info@auraa.in" className="font-bold block mb-2">
                  <Mail className="inline-block w-5 h-5" /> arpita@auraa.in
                </a>
                <a href="mailto:info@auraa.in" className="font-bold block">
                  <Mail className="inline-block w-5 h-5" /> edge@auraa.in
                </a>
              </div>
              <div className="mb-16">
                <p className="font-semibold mb-8">Scouting:</p>

                <p className="mb-2">For International Profile Submission</p>
                <a href="mailto:scouting@auraa.in" className="font-bold block">
                 <Mail className="inline-block w-5 h-5" /> sofia@auraa.in
                </a>
                <p className="mb-2 mt-6">For Indian Profile Submissions</p>
                <a href="mailto:scouting@auraa.in" className="font-bold block">
                 <Mail className="inline-block w-5 h-5" /> models@auraa.in
                </a>
              </div>

              {/* CTA */}
              <Link href="/request-callback" className="btn-primary armata tracking-wider px-8 inline-flex h-[60px]">
                Request a Call Back
                <ChevronRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Our Network Section */}
    <section className="bg-[#252525] py-32">
      <div className="container">
        <div className="text-center">
          <h5 className="text-white mb-4">Our Network</h5>
          <h2 className="text-white text-[45px]">From India to the World</h2>
        </div>
      </div>
    </section>

    {/* Feedback CTA */}
    <section className="py-24 bg-[#f3f3f3]">
      <div className="container text-center">
        <h2 className="text-[#606060] mb-3 text-[45px] font-semibold">Your Voice Matters to Us</h2>
        <p className="text-[#606060] mx-auto mb-10 text-base font-serif">
          At Auraa Talents, every detail counts. Share your experience with us so we can keep curating excellence for
          you.
        </p>
        <a href="mailto:feedback@auraa.in" className="btn-primary armata inline-flex h-[60px]">
          Share Your Feedback
        </a>
      </div>
    </section>
  </Layout>
  );
};
export default Contact;