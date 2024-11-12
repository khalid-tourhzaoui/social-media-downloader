import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import AboutInstagram from './AboutInstagram';
import SideBar from './SideBar';
import Menu from './Menu';
import Header from './Header';
import { useState, useEffect, Suspense, lazy } from "react";
import Loader from "./Loader";
import BackGround from "./BackGround";
import Fragment1 from "../assets/pngegg.png";
import AboutFacebook from "./AboutFacebook";
import AboutYoutube from "./AboutYoutube";
import AboutTikTok from "./AboutTikTok";
import AboutLinkedin from "./AboutLinkedin";
const PageNotFound = lazy(() => import('./PageNotFound'));

export default function Layout() {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => setLoader(false), 2800);
  }, []);

  return (
    <div className="w-full h-full font-myFont">
      <div
        className="fixed -z-30 w-screen h-screen bg-bg-img2 flex bg-no-repeat bg-center bg-cover justify-end flex-col-reverse
        md:flex-row items-center pb-24 md:pb-0 overflow-hidden cursor-custom"
      >
        <BackGround />
      </div>
      {loader ? (
        <Loader />
      ) : (
        <>
          <img
            className="fixed -right-24 md:right-0 top-0 h-full w-auto "
            src={Fragment1}
            alt="error"
          />
          <div
            className="relative w-full h-full flex justify-end flex-col-reverse md:flex-row items-center pb-24 md:pb-0
           overflow-hidden cursor-custom">
            <Router>
              <Header />
              <SideBar />
              <Menu />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/instagram" element={<AboutInstagram />} />
                <Route path="/facebook" element={<AboutFacebook />} />
                <Route path="/youtube" element={<AboutYoutube />} />
                <Route path="/tiktok" element={<AboutTikTok />} />
                <Route path="/linkedin" element={<AboutLinkedin />} />
                <Route
                  path="*"
                  element={
                    <Suspense
                      fallback={
                        <div className=" pl-20">
                          <Loader hiddenText={true} />
                        </div>
                      }
                    >
                      <PageNotFound />
                    </Suspense>
                  }
                />
              </Routes>
            </Router>
          </div>
        </>
      )}
    </div>
  );
}
