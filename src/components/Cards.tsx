import Image from 'next/image';

const FeatureSection: React.FC = () => {
  return (
    <div className="bg-white pt-20 pb-12 px-5">
      <div className="mx-auto container">
        <div className="flex justify-center items-center flex-col md:flex-row gap-x-4 gap-y-10">
          <div className="brief_limon_item">
            <Image src="https://limonpay.uz/svg/monitoring.png" alt="rocket_icon" width={104} height={120} className="mx-auto lg:mb-10 mb-6 object-contain" />
            <h2 className="font-bold leading-8 text-2xl text-center text-dark-1 mb-3">Monitoring</h2>
            <p className="font-regular text-sm leading-6 text-center text-gray-500 px-3 max-w-md">To'g'ridan-to'g'ri smartfoningizdan pulni boshqarishning eng oson usuli. Dunyoning istalgan joyida. Istalgan vaqtda. Har qanday vaziyatda.</p>
          </div>
          <div className="brief_limon_item">
            <Image src="https://limonpay.uz/svg/transfer.png" alt="rocket_icon" width={104} height={120} className="mx-auto lg:mb-10 mb-6 object-contain" />
            <h2 className="font-bold leading-8 text-2xl text-center text-dark-1 mb-3">To'lovlar</h2>
            <p className="font-regular text-sm leading-6 text-center text-gray-500 px-3 max-w-md">Bu jismoniy bank kartalari va naqd puldan ko'ra qulayroq va xavfsizroq, shuningdek do'konlarda to'lovni to'lashda shaxsiy ma'lumotlaringizni himoya qilish imkonini beradi.</p>
          </div>
          <div className="brief_limon_item">
            <Image src="https://limonpay.uz/svg/rocket.png" alt="rocket_icon" width={104} height={120} className="mx-auto lg:mb-10 mb-6 object-contain" />
            <h2 className="font-bold leading-8 text-2xl text-center text-dark-1 mb-3">Tezkor javob</h2>
            <p className="font-regular text-sm leading-6 text-center text-gray-500 px-3 max-w-md">Agar sizga nomaqbul firibgardan qo'ng'iroq kelib tushsa yoki yoqimsiz dasturiy xatolarga duch kelsangiz, iltimos, bizning Call-markazga murojaat qiling. Biz doimo aloqadamiz!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
