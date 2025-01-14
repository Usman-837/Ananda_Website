import About from "../components/Home/About/About"
import Banner from "../components/Home/Banner/Banner"
import Contact from "../components/Home/Contact/Contact"
import Footer from "../components/Home/Footer/Footer"
import Latestnews from "../components/Home/LatestNews/Latestnews"
import Memories from "../components/Home/Memories/Memories"
import Partners from "../components/Home/Partners/Partners"
import Testimonials from "../components/Home/Testimonials/Testimonials"
import WeddingStory from "../components/Home/WeddingStory/WeddingStory"

const Home = () => {
  
  return (
    <>
      <Banner />
      <Memories />
      <About/>
      <Testimonials/>
      <WeddingStory/>
      <Partners/>
      <Contact/>
      <Latestnews/>
      <Footer/>
    </>
  )
}

export default Home
