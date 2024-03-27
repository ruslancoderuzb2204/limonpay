import FeatureSection from "@/components/Cards"
import Hero from "@/components/Hero"
import HeroSection from "@/components/HeroSection"
import VideoGrid from "@/components/Vedios"

const Home = () => {
  return (
    <div>
      <Hero/>
      <VideoGrid/>
      <FeatureSection/>
      <HeroSection/>
    </div>
  )
}

export default Home
