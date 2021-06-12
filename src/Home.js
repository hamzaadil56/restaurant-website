import "./App.css";
import Navbar from "./Navbar";
import Slider from "./Slider";
import About from "./About";
import Menu from "./Menu";
import Chef from "./Chef";
import ContactUs from "./ContactUs";
import Footer from "./footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <About />
      <Menu />
      <Chef />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
