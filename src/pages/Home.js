import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { CryptoProvider } from "../context/CryptoContext";
import { StorageProvider } from "../context/StorageContext";
import { TrendingProvider } from "../context/TrendingContext";
import Community from "../components/Community";
import RoadMap from "../components/RoadMap";
import Footer from "../components/Footer";
import WhitePaper from "../components/WhitePaper";
import About from "../components/About";
import LiveOnPumpFun from "../components/Live";

const Home = () => {
  return (
    <CryptoProvider>
      <TrendingProvider>
        <StorageProvider>
          <main
            className="w-full h-full flex flex-col first-letter:
    content-center items-center relative text-white font-nunito
    "
          >
            <div style={{backgroundColor: 'black'}} className="w-screen h-screen fixed -z-10" />
            <div style={{marginLeft: "30px", marginRight: "30px", display: "flex", justifyContent: "space-between", width: "-webkit-fill-available" }}>
              <Logo />
              <Navigation />
              <Community />
            </div>
            <Outlet />
            <LiveOnPumpFun/>
            <About/>
            <RoadMap/>
            <WhitePaper/>
            <Footer/>
          </main>
        </StorageProvider>
      </TrendingProvider>
    </CryptoProvider>
  );
};

export default Home;
