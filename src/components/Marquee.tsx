"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";


const MarqueePg = () => {
 

  return (
    <div className="container mx-auto px-5">
      <h1 className="font-bold text-24 lg:text-32 leading-44 mb-6">
        Hamkorlar
      </h1>
      <Marquee className="w-full grid grid-cols-4">
        {/* <div className="grid grid-cols-4"> */}

        <div className="bg-slate-100 rounded-xl flex items-center justify-center mx-4 h-40 w-96 px-20">
          <Image
            width={80}
            height={40}
            src="https://limonpay.uz/logo/artel_logo.svg"
            alt="img"
          />
        </div>
        <div className="bg-slate-100 rounded-xl flex items-center justify-center mx-4 h-40 w-96 px-20">
          <Image
            width={80}
            height={40}
            src="https://limonpay.uz/logo/broccoli_logo.svg"
            alt="img"
          />
        </div>
        <div className="bg-slate-100 rounded-xl flex items-center justify-center mx-4 h-40 w-96 px-20">
          <Image
            width={80}
            height={40}
            src="https://limonpay.uz/logo/express_logo.svg"
            alt="img"
          />
        </div>
        <div className="bg-slate-100 rounded-xl flex items-center justify-center mx-4 h-40 w-96 px-20">
          <Image
            width={80}
            height={40}
            src="https://limonpay.uz/logo/bs_burger_logo.svg"
            alt="img"
          />
        {/* </div> */}
        </div>
      </Marquee>

        <Marquee direction="right" className="my-10">
            <div className="bg-slate-100 rounded-xl flex items-center justify-center mx-4 h-40 w-96 px-20">

          <Image
            width={80}
            height={40}
            src="https://limonpay.uz/logo/express_logo.svg"
            alt="img"
          />
            </div>
          <div
          className="bg-slate-100 rounded-xl flex items-center justify-center mx-4 h-40 w-96 px-20"
          >

          <Image
            width={80}
            height={40}
            src="https://limonpay.uz/logo/broccoli_logo.svg"
            alt="img"
          />
          </div>
          <div className="bg-slate-100 rounded-xl flex items-center justify-center mx-4 h-40 w-96 px-20">

          <Image
            width={80}
            height={40}
            src="https://limonpay.uz/logo/artel_logo.svg"
            alt="img"
          />
          </div>
          <div className="bg-slate-100 rounded-xl flex items-center justify-center mx-4 h-40 w-96 px-20">
          <Image
            width={80}
            height={40}
            src="https://limonpay.uz/logo/bs_burger_logo.svg"
            alt="img"
          />
        </div>
        </Marquee>
    </div>
  );
};

export default MarqueePg;
