import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <div className="mx-auto container px-5 mb-10 md:mb-0 py-8">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="max-w-[860px]">
          <h1 className="font-bold leading-11  text-4xl mb-4">Limon Pay</h1>
          <p className="text-[#2B2B30]  text-lg leading-7 font-regular mb-8 md:max-w-[80%]">
            Biz orqali siz butun mamlakat bo'ylab pul o'tkazishingiz va to'lovlarni qulay va xavfsiz tarzda amalga oshirishingiz mumkin. Xaridlar uchun veb-saytimiz va mobil ilovamiz orqali to'lang.
          </p>
          <Link href="/about">
              <button type="button" className="l-button bg-yellow-300 text-sm text-[#2B2B30] font-semibold l-transition rounded-lg py-2.5 px-8 flex-center cursor-pointer relative hover:-translate-y-1 l-button-primary" >
               
                Ko'proq o'rganing
              </button>
          </Link>
        </div>
        <div>
          <Image src="https://limonpay.uz/assets/pillow-72a0f928.png" alt="pilow" width={426} height={362} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
