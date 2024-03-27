import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div className="bg-[#17171C] border-solid border-b-[8px] border-[#FFC007] md:bg-[url('/svg/half_moon.svg')] bg-no-repeat bg-right-top header_half_moon_img md:bg-right-bottom">
      <div className="px-5 container mx-auto relative overflow-hidden">
        <div>
          <div>
            <div className="header_iphone_img bg-top md:bg-right-bottom bg-no-repeat lg:bg-right-bottom min-h-[467px] md:pb-[127px]">
              <div className="header_content_wrapper flex flex-col h-[calc(100vh-120px)] sm:h-auto md:pt-[50px] lg:pt-[90px]">
                <div className="flex items-center md:mb-8 mb-5 max-w-full lg:w-[750px]">
                  <h1 className="text-white font-space-grotest font-bold md:leading-[61px] leading-10 md:text-[48px] text-3xl mr-4">
                    LimonPay - biz sizga kerak bo'lgan narsani qila olamiz <span className="text-green">:)</span>
                  </h1>
                </div>
                <div className="bg-[url('/svg/dot.svg')] bg-bottom bg-no-repeat z-9999 h-full flex flex-col">
                  <p className="leading-[30px] text-16px font-regular text-white mb-[40px] w-[350px] lg:w-[700px]">
                    Biz orqali siz butun mamlakat bo'ylab pul o'tkazishingiz va to'lovlarni qulay va xavfsiz tarzda amalga oshirishingiz mumkin. Xaridlar uchun veb-saytimiz va mobil ilovamiz orqali to'lang.
                  </p>
                  <div className="flex pb-5 mt-auto sm:mt-0">
                    <Link href="/static/about">
                      <button type="button" className="h-auto bg-[#ffc007] l-button text-sm text-[#2B2B30] font-semibold l-transition rounded-lg py-2.5 px-4 flex-center cursor-pointer relative hover:-translate-y-1 l-button-primary min-w-[164px]" >
                       
                        Ko'proq o'rganing
                      </button>
                    </Link>
                    <Link href="https://cabinet.limonpay.uz/auth/welcome" target="_blank">
                      <button type="button" className=" bg-white l-button text-sm text-[#2B2B30] font-semibold l-transition rounded-lg  px-4 py-2.5 cursor-pointer relative hover:-translate-y-1 l-button-secondary min-w-[164px] text-center ml-4">
                        
                        Hisobingizga kiring
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
