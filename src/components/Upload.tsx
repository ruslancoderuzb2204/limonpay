"use client"
import StarRatings from "react-star-ratings";

const Upload = () => {
  return (
    <div className="mx-auto md:px-0 px-5 container another_category md:pt-[143px] pt-10">
      <div className="banner bg-[#FFC007] bg-[url('/svg/half_black_moon.svg')] bg-no-repeat bg-right-bottom mb-10 flex justify-between rounded-[12px] px-5 md:px-12 pt-8">
        <div className="flex flex-col justify-around">
          <div>
            <h1 className="lg:text-[28px] text-[21px] mb-3 font-bold leading-[30px] lg:leading-[38px] text-white lg:text-[#17171C]">
              Qurilmangiz uchun ilovani yuklab oling
            </h1>
            <p className="leading-[28px] lg:text-[20px] text-[18px] text-white lg:text-[#2B2B30]">
              Dastur iOS, Android tizimlarini qo'llab-quvvatlaydi.
            </p>
          </div>
          <div className="dowload-holder flex">
            <div className="flex lg:items-center lg:flex-row flex-col md:w-[316px] mb-4 md:m-0 md:flex-row md:gap-x-[12px] md:mt-2 sm:mt-2 xs:mt-2 style-media">
              <a
                href="https://apps.apple.com/uz/app/limon-pay/id1660046783"
                target="_blank"
              >
                <div className="w-[150px] md:w-max max-h-[47px] group cursor-pointer relative border border-[#A6A6A6] rounded-[7px] bg-black flex items-center py-1.5 px-2 lg:mr-3">
                  <svg
                    width={18}
                    height={23}
                    viewBox="0 0 18 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/sv"
                    className="mr-2"
                  >
                    <path
                      d="M14.8384 12.3006C14.8492 11.4659 15.0715 10.6475 15.4847 9.92158C15.8978 9.19563 16.4885 8.58569 17.2015 8.14851C16.7485 7.50335 16.1509 6.97241 15.4561 6.59786C14.7614 6.22331 13.9886 6.01546 13.1992 5.99083C11.5152 5.81457 9.8827 6.99566 9.02459 6.99566C8.14987 6.99566 6.82867 6.00833 5.40596 6.03752C4.48571 6.06717 3.58885 6.33403 2.80277 6.81208C2.0167 7.29014 1.3682 7.9631 0.920483 8.76539C-1.01895 12.1138 0.427692 17.0349 2.2855 19.7415C3.21501 21.0668 4.30133 22.5473 5.72276 22.4948C7.11371 22.4372 7.63321 21.6103 9.31221 21.6103C10.9756 21.6103 11.463 22.4948 12.9133 22.4614C14.4058 22.4372 15.3462 21.1302 16.2431 19.7923C16.911 18.8479 17.4249 17.8042 17.7658 16.6997C16.8987 16.334 16.1587 15.7218 15.6381 14.9395C15.1175 14.1572 14.8394 13.2394 14.8384 12.3006Z"
                      fill="white"
                    />
                    <path
                      d="M12.0992 4.21083C12.913 3.23663 13.3139 1.98445 13.2168 0.720215C11.9735 0.850435 10.825 1.44299 10.0002 2.37982C9.59697 2.83749 9.28811 3.36993 9.09131 3.9467C8.89452 4.52347 8.81364 5.13326 8.85332 5.74121C9.4752 5.7476 10.0904 5.61319 10.6527 5.3481C11.2149 5.08301 11.7095 4.69416 12.0992 4.21083Z"
                      fill="white"
                    />
                  </svg>
                  <div>
                    <p className="text-[9px] text-white">Mavjud</p>
                    <h2 className="text-[13px] font-normal text-white">
                      App Store
                    </h2>
                  </div>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=uz.limonpay.app.limon_pay&hl=uz&gl=US&pli=1"
                target="_blank"
              >
                <div className="w-max relative max-h-[47px] group cursor-pointer border border-[#A6A6A6] lg:mt-0 mt-5 bg-black rounded-[5px] flex items-center py-1.5 px-2 md:mt-0">
                  <img src="https://limonpay.uz/google-play.svg" alt="img" className="mr-2" />
                  <div>
                    <p className="text-[9px] text-white">Mavjud</p>
                    <h2 className="text-[13px] font-normal text-white">
                      Google Play
                    </h2>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src="https://limonpay.uz/assets/group_iphone-33321018.png"
            alt="group_iphone"
            className="mt-[-180px]  h-[240px] object-contain w-[459px] lg:h-auto"
          />
        </div>
      </div>
      <div className="relative">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
          <div className="bg-white pt-8 px-8 pb-[13px] rounded-[12px] transition-all pointer-events-none">
            <div>
              <div className="flex justify-between items-center mb-11">
                <img src="https://limonpay.uz/logo/apple_logo.svg" alt="iphone_icon" />
                <h4/>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[#A5AAB4] leading-[21px] mb-2">
                    Reytingda
                  </span>
                  <span className="text-[#2B2B30] text-[20px] leading-[26px] font-bold">
                    App store
                  </span>
                </div>
                <div>
                  <span className="text-[#FFC007] font-bold lg:text-[84px] text-[60px] lg:leading-[114px] leading-[100px]">
                    4.9
                  </span>
                  <span className="font-semibold text-xl ml-3">
                    <span>5</span> dan 
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white pt-8 px-8 pb-[13px] rounded-[12px] transition-all pointer-events-none">
            <div>
              <div className="flex justify-between items-center mb-11">
                <img src="https://limonpay.uz/logo/google-play_logo.svg" alt="iphone_icon" />
                <h4 />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[#A5AAB4] leading-[21px] mb-2">
                    Reytingda
                  </span>
                  <span className="text-[#2B2B30] text-[20px] leading-[26px] font-bold">
                    Google play
                  </span>
                </div>
                <div>
                  <span className="text-[#FFC007] font-bold lg:text-[84px] text-[60px] lg:leading-[114px] leading-[100px]">
                    4.6
                  </span>
                  <span className="font-semibold text-xl ml-3">
                    <span>5</span> dan {/**/}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[32px] right-[6%] md:right-[55%] lg:right-[53%]">
        <StarRatings
        rating={4.9}
        starDimension="20px"
        starSpacing="5px"
        starRatedColor="#32b141"
      />
        </div>
        <div className="absolute top-[276px] md:top-[32px] right-[6%] md:right-[2%] lg:right-[2%]">
        <StarRatings
        rating={4.6}
        starDimension="20px"
        starSpacing="5px"
        starRatedColor="#32b141"

      />
        </div>
      </div>
    </div>
  );
};

export default Upload;
