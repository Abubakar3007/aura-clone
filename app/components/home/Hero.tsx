"use client";
import { ChevronRight,Volume2,VolumeX} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Hero = () => {

  const [isSound,setIsSound] = useState(false)

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <div className="absolute inset-0">
        <video src="https://www.pexels.com/download/video/1943413/" autoPlay loop muted={isSound} className="w-full h-full object-cover object-center animate-hero-zoom"></video>
        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" /> */}
      </div>

      {/* text */}
      <div className="absolute right-8 bottom-6 text-white text-right">
        <h1 className="text-[45px] mb-4">Forevermark</h1>
        <p className="mb-6">Angela kumar</p>
        <Link href="models/angela" className="armata text-xs pb-2 border-b border-white/50 tracking-wider">
          View Her Profile
          <ChevronRight className="inline-block ml-2 w-5"/>
        </Link>
        {/* sound button */}
        <button className="block ml-auto mt-2 text-white/50" onClick={() => setIsSound(!isSound)}>
          {isSound ? <VolumeX className="w-5"/> : <Volume2 className="w-5"/>}
        </button>
      </div>
    </section>
  );
};

export default Hero;
