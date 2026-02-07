import { Play } from "lucide-react";
import Link from "next/link";
const testimonials = [{
  id: 1,
  name: "Alicia",
  role: "International Model",
  quote: "Embarking on a voyage that took Alicia from diverse corners of the world to the enchanting heart of India has been nothing short of a transformative journey. This land of rich cultures and traditions has not only embraced her but also become the canvas on which Alicia’s modeling story has flourished.",
  image: "https://www.mgfilmproductions.com/uploads/1/4/5/8/145812880/389783587_3.jpg",
  hasVideo: true
}, {
  id: 2,
  name: "Rodrigo",
  role: "Fashion Model",
  quote: "Witness the captivating transformation of a young talent into a shining star! 🌟✨ In this exclusive testimonial video, we proudly present the incredible journey of Namita, who embarked on her modeling odyssey with Auraa Talents. From the moment she joined us as a fresh face, her story unfolded like a fairytale.",
  image: "https://img.freepik.com/free-photo/beautiful-woman-purple-sweater-skirt_1303-17487.jpg?semt=ais_user_personalization&w=740&q=80",
  hasVideo: true
}, {
  id: 3,
  name: "Namita",
  role: "Commercial Model",
  quote: "Here we are again with the super charming @franckrodrigo_ on the hot seat this time, talking about his perspective on Auraa, his life journey so far and his work experience! We’re glad to represent @franckrodrigo_ with us ✨ At Auraa Talents , we believe that happy models make the best models. For the past decade, our mission has been to create a supportive and empowering environment where all our models feel valued and appreciated. We strive to go above and beyond for our models, providing them with the resources, guidance, and opportunities they need to succeed in the industry.",
  image: "https://bookartistsonline.weebly.com/uploads/2/2/4/5/22456530/whatsapp-image-2024-02-07-at-2-21-11-pm-1-orig-2_orig.jpeg",
  hasVideo: true
}, {
  id: 4,
  name: "Namita",
  role: "Gabi Testimonial",
  quote: "A tale of growth and discovery of true potential! Step into the world of Gabi’s heartfelt testimonial about her journey in India with Auraa Talents 🤍 From celebrating festivals, visiting different cities for shoots, staying with models speaking different languages, turning friends into families to immersing herself in the rich tapestry of Indian culture! Have a look at her transformational",
  image: "https://xyxxcrew.com/cdn/shop/files/blog-image-2-style-swagger-success-top-10-indian-male-models-redefining-fashion_2400x.webp?v=1718014353",
  hasVideo: true
}, {
  id: 5,
  name: "Namita",
  role: "Commercial Model",
  quote: "Modelling is just for pretty faces. No, it's not. It's all about potential and hard work, says Tanvi Bakshi, a dedicated and ambitious personality who shares her journey and experience at Auraa Talents.",
  image: "https://c.stocksy.com/a/mtKA00/z9/2463618.jpg",
  hasVideo: true
}];
const Testimonials = () => {
  return <section className="py-14 bg-background">
    <div className="max-w-[1200px] w-full mx-auto xl:px-0 px-4">
      <div className="text-center mb-16">

        <h2 className="heading-section text-foreground text-left my-0">Testimonials</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map(testimonial => <div key={testimonial.id} className="group">
          {/* Video Thumbnail */}
          <div className="relative overflow-hidden aspect-video mb-6 cursor-pointer h-[360px] w-full">
            <img src={testimonial.image} alt={`${testimonial.name} testimonial`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            {/* Play Button Overlay */}
            <Link href="/" className="play-btn">
              <Play className="w-5 h-5 text-white"/>
            </Link>
          </div>

          {/* Content */}
          <h3 className="heading-card text-foreground mb-4 text-[27px] leading-[38px]">
            {testimonial.name} Testimonial
          </h3>
          <p>{testimonial.quote}</p>
        </div>)}
      </div>
    </div>
  </section>;
};
export default Testimonials;