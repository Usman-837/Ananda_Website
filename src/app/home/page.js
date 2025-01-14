import About from "../components/About/About"
import Banner from "../components/Banner/Banner"
import Latestnews from "../components/LatestNews/Latestnews"
import Memories from "../components/Memories/Memories"
import Testimonials from "../components/Testimonials/Testimonials"
import WeddingStory from "../components/WeddingStory/WeddingStory"

const Home = () => {
  return (
    <>
      <Banner />
      <Memories />
      <About/>
      <Testimonials/>
      <WeddingStory/>
      <Latestnews/>
    </>
  )
}

export default Home
