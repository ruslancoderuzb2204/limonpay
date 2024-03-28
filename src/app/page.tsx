import FeatureSection from "@/components/Cards"
import Hero from "@/components/Hero"
import HeroSection from "@/components/HeroSection"
import Kurs from "@/components/Kurs"
import MarqueePg from "@/components/Marquee"
import TwoCompos from "@/components/TwoCompos"
import Type from "@/components/Type"
import Upload from "@/components/Upload"
import VideoGrid from "@/components/Vedios"

const Home = () => {
  return (
    <div>
      <Hero/>
      <VideoGrid/>
      <FeatureSection/>
      <HeroSection/>
      <Kurs/>
      <TwoCompos/>
      <Type/>
      <Upload/>
      <MarqueePg/>
    </div>
  )
}

export default Home
