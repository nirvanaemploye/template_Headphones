import { UpdateFollower } from 'react-mouse-follower';
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar"
import Services from "./Components/Services/Services";
import Banner from './Components/Banner/Banner';
import BannerText from './Components/BannerText/BannerText';
import Blogs from './Components/Blogs/Blogs';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
       mouseOptions={{
        backgroundColor: 'white',
        zIndex: 9999,
        followSpeed: 1.5,
      }}>
        <Navbar />
        <Hero/>
        {/* <Hero/> */}
      </UpdateFollower>
      <UpdateFollower
      mouseOptions={{
        backgroundColor: 'black',
        zIndex: 9999,
        followSpeed: 1.5,
      }}
      >

        <Services/>
        <Banner/>
        <BannerText/>
        <Blogs/>
        <Footer/>
      </UpdateFollower>
    </main>

  )
}

export default App
