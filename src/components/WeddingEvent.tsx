import React from 'react';
import AkadNikah from './AkadNikah';
import Resepsi from './Resepsi';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

// Komponen WeddingEvent dengan TypeScript
const WeddingEvent: React.FC = () => {
  return (
    <div id='event' className="relative w-full h-full pt-36 pb-12 bg-gradient-to-tr from-primary to-primarylight">
      <div className='absolute inset-0 top-10 z-20'>
        <ScrollReveal>
        <h1 className='text-center font-fleur text-gold text-5xl font-bold'>Wedding</h1>
        </ScrollReveal>
        <ScrollReveal>
        <h1 className='absolute left-1/2 text-center font-fleur text-gold text-5xl font-bold'>Event</h1>
        </ScrollReveal>
      </div>
       <div>
     <Image
        src={"/images/PohonPutih.jpg"}
        alt="Chip"
        layout="fill" // Mengisi kontainer
        objectFit="cover"
        quality={100}
        className="relative-full z-0 saturate-0"
      />
      <div className="absolute inset-0 bg-primarylight opacity-60"></div>
     </div>
      {/* <div className='absolute inset-0 overflow-hidden'>
      <Image
        src={"/images/PojokKananBunga.png"}
        alt="Chip"
        width={170}
        height={170}
        className="absolute -top-16 -right-12 z-0 animate-tiltRight" 
      />

      <Image
        src={"/images/PojokKiriBunga.png"}
        alt="Chip"
        width={170}
        height={170}
        className="absolute -top-16 -left-12 z-0 animate-tiltLeft" 
        />

      <Image
        src={"/images/bungaBottom.png"}
        alt="Chip"
        width={600}
        height={350}
        className="absolute -bottom-6 z-0 animate-bounceUp" // Membalik secara horizontal
        />
      </div> */}
      <AkadNikah />
      <Resepsi />
    </div>
  );
};

export default WeddingEvent;
