import { FC } from "react";
import "./App.scss";
import Layout from "./components/Layout";
import Slider from "./components/Swiper";
import { SlideShow } from "./components/SlideShow";
import TopCcategories from "./components/TopCcategories";
import AboutUs from "./components/AboutUs";
import { Product } from "./components/Product";
import Wrapper from "./components/Wrapper";

const App: FC = () => {
  return (
    <div className="App">
      <Layout>
        <div>
          <Slider slides={SlideShow()} slidesPerView={1} spaceBetween={0} />
        </div>
        <div>
          <AboutUs />
        </div>
        <div>
          <TopCcategories />
        </div>
        <div>
          <Wrapper>
            <Slider slides={Product()} slidesPerView={4} spaceBetween={30} />
          </Wrapper>
        </div>
      </Layout>
    </div>
  );
};

export default App;
