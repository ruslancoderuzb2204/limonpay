import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <div className="mx-auto container px-5 mb-10 md:mb-0 py-8">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="max-w-[860px]">
          <h1 className="font-bold leading-11 lg:text-2xl text-2xl mb-4">Limon Pay</h1>
          <p className="text-[#2B2B30] lg:text-base text-sm leading-7 font-regular mb-8 md:max-w-[80%]">
            Biz orqali siz butun mamlakat bo'ylab pul o'tkazishingiz va to'lovlarni qulay va xavfsiz tarzda amalga oshirishingiz mumkin. Xaridlar uchun veb-saytimiz va mobil ilovamiz orqali to'lang.
          </p>
          <Link href="/about">
              <button type="button" className="l-button text-sm text-[#2B2B30] font-semibold l-transition rounded-lg py-2.5 px-8 flex-center cursor-pointer relative hover:-translate-y-1 l-button-primary w-full" >
                <i className="l-transition absolute-center-h absolute-center-v opacity-0 invisible w-0">
                  <svg className="loading-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.2" d="M11.9999 3.14746C16.8856 3.14746 20.8524 7.11425 20.8524 11.9999C20.8524 16.8856 16.8856 20.8524 11.9999 20.8524C7.11425 20.8524 3.14746 16.8856 3.14746 11.9999C3.14746 7.11425 7.11425 3.14746 11.9999 3.14746Z" stroke="#17171C" strokeWidth="3" />
                    <path d="M11.2458 20.8191C9.38896 20.6622 7.56653 19.9205 6.07624 18.5787C3.60297 16.3517 2.67826 13.0422 3.37337 10.0106" stroke="#17171C" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </i>
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
