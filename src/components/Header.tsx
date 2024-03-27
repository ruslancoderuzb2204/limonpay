import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="pt-[34px] relative transition-300 bg-[#17171C]">
      <div className="mx-auto container h-full pb-[34px] border-b transition-300 border-dark-2">
        <div className="w-full flex items-center justify-between px-5">
          <div className="menu-wrapper w-[44px] h-auto cursor-pointer relative bg-transparent mt-1 mr-3 md:hidden active">
            <button>
              <div className="menu-bar absolute w-full h-[4px] bg-[#ffc007] left-0 one rotate-45 top-[50%] delay-[0.1s] transition-all duration-500" />
              <div className="menu-bar absolute w-full h-[4px] bg-[#ffc007] left-0 two -rotate-45 top-[50%] transition-all duration-500" />
            </button>
          </div>
          <div>
            <a
              aria-current="page"
              href="/"
              className="router-link-active router-link-exact-active"
            >
              <svg
                width={179}
                height={32}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="main-logo main-logo__white"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29.719 7.76a16.038 16.038 0 0 0-2.405-3.074c-6.249-6.248-16.38-6.248-22.628 0-6.248 6.249-6.248 16.38 0 22.628 6.249 6.248 16.38 6.248 22.628 0a16.034 16.034 0 0 0 2.405-3.073l-.152.002h-5.819a8.242 8.242 0 1 1 0-16.485h5.819l.152.001Z"
                  fill="#FFC007"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.748 10.668a5.333 5.333 0 1 0 0 10.666h5.819a5.333 5.333 0 0 0 0-10.666h-5.819Zm5.83 2.478a2.855 2.855 0 0 0 0 5.71 2.855 2.855 0 0 0 0-5.71Z"
                  fill="#32B141"
                />
                <path
                  d="M45.252 25.854V4.36h4.053v17.81h9.827v3.685h-13.88ZM68.302 25.854v-15.23h3.808v1.658h.553c.266-.512.706-.952 1.32-1.32.614-.39 1.423-.584 2.426-.584 1.085 0 1.955.215 2.61.645.655.41 1.157.952 1.505 1.627h.553a4.488 4.488 0 0 1 1.474-1.627c.634-.43 1.535-.645 2.702-.645.941 0 1.791.205 2.548.614.778.389 1.392.993 1.843 1.812.47.798.706 1.812.706 3.04v10.01h-3.869V16.12c0-.84-.215-1.464-.645-1.873-.43-.43-1.034-.645-1.812-.645-.88 0-1.566.287-2.057.86-.47.553-.706 1.351-.706 2.395v8.997h-3.87V16.12c0-.84-.214-1.464-.644-1.873-.43-.43-1.034-.645-1.812-.645-.88 0-1.566.287-2.057.86-.471.553-.707 1.351-.707 2.395v8.997h-3.869ZM100.699 26.284c-1.515 0-2.877-.307-4.084-.921a6.909 6.909 0 0 1-2.856-2.671c-.696-1.167-1.044-2.57-1.044-4.207v-.492c0-1.637.348-3.04 1.044-4.207a6.909 6.909 0 0 1 2.856-2.671c1.207-.614 2.569-.921 4.084-.921 1.515 0 2.876.307 4.084.92a6.912 6.912 0 0 1 2.855 2.672c.696 1.167 1.044 2.57 1.044 4.207v.492c0 1.637-.348 3.04-1.044 4.207a6.912 6.912 0 0 1-2.855 2.671c-1.208.614-2.569.921-4.084.921Zm0-3.439c1.187 0 2.17-.379 2.948-1.136.777-.778 1.166-1.883 1.166-3.317v-.307c0-1.433-.389-2.528-1.166-3.285-.758-.778-1.741-1.167-2.948-1.167-1.188 0-2.17.389-2.948 1.167-.778.757-1.167 1.852-1.167 3.285v.307c0 1.434.389 2.539 1.167 3.317.778.757 1.76 1.136 2.948 1.136ZM111.027 25.854v-15.23h3.808v1.996h.553c.245-.533.706-1.034 1.381-1.505.676-.491 1.7-.737 3.071-.737 1.187 0 2.221.276 3.102.829a5.4 5.4 0 0 1 2.088 2.242c.491.941.737 2.047.737 3.316v9.09h-3.87v-8.783c0-1.146-.286-2.006-.859-2.58-.553-.573-1.351-.86-2.395-.86-1.188 0-2.109.4-2.764 1.199-.655.777-.983 1.873-.983 3.285v7.738h-3.869ZM61.502 25.854V11.425h3.665v14.43H61.5Zm1.832-16.116c-.66 0-1.222-.213-1.687-.64-.446-.427-.67-.99-.67-1.687 0-.699.224-1.261.67-1.688.465-.426 1.028-.64 1.687-.64.679 0 1.241.214 1.688.64.445.427.668.99.668 1.688s-.222 1.26-.668 1.687c-.447.427-1.009.64-1.688.64ZM128.687 25.854V4.36h8.844c1.351 0 2.539.277 3.562.83a5.782 5.782 0 0 1 2.426 2.272c.594.982.89 2.15.89 3.5v.43c0 1.33-.307 2.498-.921 3.5a6.19 6.19 0 0 1-2.456 2.304c-1.024.532-2.191.798-3.501.798h-4.79v7.861h-4.054Zm4.054-11.546h4.391c.962 0 1.74-.266 2.334-.798.593-.532.89-1.259.89-2.18v-.307c0-.921-.297-1.648-.89-2.18-.594-.533-1.372-.799-2.334-.799h-4.391v6.264ZM150.904 26.284c-1.085 0-2.058-.184-2.918-.552-.859-.39-1.545-.942-2.057-1.659-.491-.737-.737-1.627-.737-2.671 0-1.044.246-1.914.737-2.61.512-.717 1.208-1.249 2.088-1.597.901-.369 1.924-.553 3.071-.553h4.176v-.86c0-.716-.225-1.3-.676-1.75-.45-.47-1.166-.706-2.149-.706-.962 0-1.679.225-2.15.675-.47.43-.778.993-.921 1.69l-3.562-1.198a6.162 6.162 0 0 1 1.167-2.119c.553-.655 1.28-1.177 2.18-1.566.921-.41 2.037-.614 3.347-.614 2.007 0 3.593.501 4.76 1.504 1.167 1.004 1.75 2.457 1.75 4.36v5.682c0 .614.287.92.86.92h1.228v3.194h-2.579c-.758 0-1.382-.184-1.873-.552a1.75 1.75 0 0 1-.737-1.474v-.031h-.584c-.082.246-.266.573-.552.983-.287.389-.737.737-1.352 1.044-.614.307-1.453.46-2.517.46Zm.675-3.132c1.085 0 1.965-.297 2.641-.89.696-.614 1.044-1.423 1.044-2.426v-.307h-3.9c-.716 0-1.279.153-1.689.46-.409.307-.614.737-.614 1.29s.215 1.003.645 1.351c.43.348 1.054.522 1.873.522ZM165.237 31.996v-3.378h8.291c.573 0 .859-.307.859-.921v-3.839h-.552c-.164.348-.42.697-.768 1.044-.348.348-.819.635-1.413.86-.593.226-1.351.338-2.272.338-1.187 0-2.231-.266-3.132-.798a5.666 5.666 0 0 1-2.057-2.273c-.492-.962-.737-2.067-.737-3.316v-9.09h3.869v8.783c0 1.146.276 2.006.829 2.58.573.572 1.382.86 2.426.86 1.187 0 2.108-.39 2.763-1.168.655-.798.983-1.904.983-3.316v-7.738h3.869v17.933c0 1.044-.307 1.873-.921 2.487-.614.634-1.433.952-2.457.952h-9.58Z"
                  fill="#fff"
                />
              </svg>
            </a>
          </div>
          <div>
            <div className="!hidden md:!flex flex-y-center gap-6">
              <Link
                href="/about"
                className="text-white text-base leading-[22px] font-semibold transition-all duration-300 hover:text-yellow"
              >
                Loyiha haqida
              </Link>
              <Link
                href="/news"
                className="text-white text-base leading-[22px] font-semibold transition-all duration-300 hover:text-yellow"
              >
                Yangiliklar
              </Link>
            </div>
          </div>
          <div className="hidden xl:flex flex-y-center gap-6">
            <div className="relative">
              <div className="cursor-pointer h-full rounded-lg inline-flex items-center transition-all duration-300 border border-solid border-[#2B2B30] hover:border-[#A6A6A6] md:py-2.5 md:px-4 p-2 group">
                <span>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:rotate-180 transition-all duration-500"
                  >
                    <circle
                      cx={10}
                      cy={10}
                      r="7.5"
                      stroke="#A5AAB4"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 7.49998H17"
                      stroke="#A5AAB4"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 12.5H17"
                      stroke="#A5AAB4"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.58334 2.5C6.71913 7.08981 6.71913 12.9102 9.58334 17.5"
                      stroke="#A5AAB4"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.4166 2.5C13.2808 7.08981 13.2808 12.9102 10.4166 17.5"
                      stroke="#A5AAB4"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="lg:block hidden leading-130 font-normal text-sm ml-2 text-white">
                  O'zbekcha
                </p>
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-0 transition-all duration-300 lg:block hidden ml-2"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="#828F89"
                    className="smooth-hover"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex lg:items-center lg:flex-row lg:w-[316px] mb-4 md:m-0 gap-5">
                <a
                  href="https://apps.apple.com/uz/app/limon-pay/id1660046783"
                  target="_blank"
                >
                  <div className="min-w-[41px] md:w-max h-full group cursor-pointer relative border border-[#A6A6A6] rounded-md bg-black flex items-center justify-center py-1.5 px-2 lg:mr-3">
                    <svg
                      width={18}
                      height={23}
                      viewBox="0 0 18 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="lg:mr-2"
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
                    <div className="hidden lg:block">
                      <p className="text-xs text-white">Mavjud</p>
                      <h2 className="text-sm text-white">App Store</h2>
                    </div>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=uz.limonpay.app.limon_pay&hl=uz&gl=US&pli=1"
                  target="_blank"
                >
                  <div className="min-w-[41px] relative group cursor-pointer border border-[#A6A6A6] lg:mt-0 bg-black rounded-md flex items-center py-1.5 px-2">
                    <Image width={20} height={20} src="https://i.pinimg.com/originals/f5/0d/f5/f50df5773999a09cfc9ff9c374530f61.png" alt="img" className="lg:mr-2" />
                    <div className="hidden lg:block">
                      <p className="text-xs text-white">Mavjud</p>
                      <h2 className="text-sm text-white">Google Play</h2>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
