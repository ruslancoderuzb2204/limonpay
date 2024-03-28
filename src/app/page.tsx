import FeatureSection from "@/components/Cards"
import Hero from "@/components/Hero"
import HeroSection from "@/components/HeroSection"
import Kurs from "@/components/Kurs"
import VideoGrid from "@/components/Vedios"

const Home = () => {
  return (
    <div>
      <Hero/>
      <VideoGrid/>
      <FeatureSection/>
      <HeroSection/>
      <Kurs/>
    </div>
  )
}

export default Home
