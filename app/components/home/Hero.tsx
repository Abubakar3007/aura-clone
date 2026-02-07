import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-main.jpg';
import Navbar from '../layout/Navbar';

const Hero = () => {

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <div className="absolute inset-0">
        <video src="https://www.pexels.com/download/video/1943413/" autoPlay loop muted className="w-full h-full object-cover object-center animate-hero-zoom"></video>
        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" /> */}
      </div>
    </section>
  );
};

export default Hero;
