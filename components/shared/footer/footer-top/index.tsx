import { Image } from "@mantine/core";

import { ContactForm } from "./constact-form";
import { SocialMediaSection } from "./social-media-section";

export function FooterTop() {
  return (
    <div className='relative bg-[#101113] overflow-hidden'>
      <div className='absolute bottom-0 right-0 z-0 w-full md:w-3/4 lg:w-1/2 h-full'>
        <div className='relative w-full h-full'>
          <Image
            src='/images/footer-ewure-goat.svg'
            alt='Goats grazing in a pastoral field setting'
            className='w-full h-full object-cover object-center'
            fit='cover'
          />
          <div className='absolute inset-0 bg-gradient-to-l from-[#101113] via-transparent to-transparent'></div>
        </div>
      </div>

      <div className='relative z-10 flex justify-center items-center py-8'>
        <div className='max-w-5xl w-full px-4'>
          <SocialMediaSection />
        </div>
      </div>

      <div className='relative z-10 px-4 sm:px-6 py-8 md:py-12 lg:px-16'>
        <div className='max-w-7xl mx-auto'>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
