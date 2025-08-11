import Navbar from "./../components/Navbar";
import Hero from "./../components/Hero";
import JoinRoom from "./../components/JoinRoom";
import Brand from "./../components/Brand";
import Faq from "./../components/Faq";
import Pricing from "./../components/Pricing";
import Footer from "./../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Brand />
      <JoinRoom />
      <Pricing />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
