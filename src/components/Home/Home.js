import React from "react";
import Footer from "../Footer/Footer";
import HomeBanner from "../HomeBanner/HomeBanner";
import MenTShirt from "../MenTShirt/MenTShirt";
import Shirts from "../Shirts/Shirts";
const Home = () => {
  return (
    <>
      {/* the banner of the home page */}
      <HomeBanner />
      {/* the mens t-shirt section*/}
      <MenTShirt />
      {/* the mens shirt section */}
      <Shirts />
      {/* the footer section */}
      <Footer />
    </>
  );
};

export default Home;
