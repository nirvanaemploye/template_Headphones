import { Navigate, Routes, Route, BrowserRouter } from "react-router-dom";
import { UpdateFollower } from "react-mouse-follower";
import Layout from "../src/Layout/Layout"; // Import the layout

// Home Components
import Hero from "./Components/HomeComp/Hero/Hero";
import Services from "./Components/HomeComp/Services/Services";
import Banner from "./Components/HomeComp/Banner/Banner";
// import BannerText from "./Components/HomeComp/BannerText/BannerText";
import Blogs from "./Components/HomeComp/Blogs/Blogs";

// About Components
import AbHero from "./Components/AboutComp/AboutHero/AbHero";
import Upgrade from "./Components/HomeComp/Upgrade/Upgrade";
import FeatureProduct from "./Components/HomeComp/FeatureProduct/FeatureProduct";
import TrendingPro from "./Components/HomeComp/TrendingPro/TrendingPro";
import Benefits from "./Components/AboutComp/Benefits/Benefits";
import WhyChooseUs from "./Components/AboutComp/WhyChooseUs/WhyChooseUs";
import Safe from "./Components/AboutComp/Safe/Safe";
import Map from "./Components/ContactComp/Map.jsx/Map";
import ContactSection from "./Components/ContactComp/ContactSection/ContactSection";
import ContactHero from "./Components/ContactComp/ContactHero/ContactHero";
import RecentBlog from "./Components/BlogComp/RecentBlog/RecentBlog";
import LetestBlog from "./Components/BlogComp/LatestBlog/LatestBlog";
import BlogHero from "./Components/BlogComp/BlogHero/BlogHero";
import CategoryHero from "./Components/CategoryComp/CategoryHero/CategoryHero";
import CategoryList from "./Components/CategoryComp/CategoryList/CategoryList";
import CatGoryGrid from "./Components/CategoryComp/CategoryGrid/CatGoryGrid";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          {/* Redirect from root to home */}
          <Route path="/" element={<Navigate to="/home" />} />

          {/* Home Route */}
          <Route
            path="/home"
            element={
              <Layout>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                  }}
                >
                  <Hero />
                </UpdateFollower>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "black",
                    zIndex: 9999,
                    followSpeed: 1.5,
                  }}
                >
                  <Services />
                  <Banner />
                  <FeatureProduct />
                  <TrendingPro />
                  <Upgrade />
                  <Blogs />
                </UpdateFollower>
              </Layout>
            }
          />

          {/* About Route */}
          <Route
            path="/about"
            element={
              <Layout>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                  }}
                >
                  <AbHero />
                </UpdateFollower>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "black",
                    zIndex: 9999,
                    followSpeed: 1.5,
                  }}
                >
                  <Safe />
                  <WhyChooseUs />
                  <Benefits />
                </UpdateFollower>
              </Layout>
            }
          />

          {/* categories Route  */}
          <Route
            path="/categories"
            element={
              <Layout>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                  }}
                >
                  <CategoryHero />
                </UpdateFollower>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "black",
                    zIndex: 9999,
                    followSpeed: 1.5,
                  }}
                >
                  <CategoryList />
                  <CatGoryGrid/>
                </UpdateFollower>
              </Layout>
            }
          />

          {/* Blog Route  */}
          <Route
            path="/blog"
            element={
              <Layout>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                  }}
                  
                >
                    <BlogHero />
                </UpdateFollower>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "black",
                    zIndex: 9999,
                    followSpeed: 1.5,
                  }}
                >
                  <LetestBlog />
                  <RecentBlog />
                </UpdateFollower>
              </Layout>
            }
          />

          {/* Contact Route  */}
          <Route
            path="/contact"
            element={
              <Layout>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                  }}
                >
                  <ContactHero />
                </UpdateFollower>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "black",
                    zIndex: 9999,
                    followSpeed: 1.5,
                  }}
                >
                  <ContactSection />
                  <Map />
                </UpdateFollower>
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
