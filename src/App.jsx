// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import Navigation from "./components/Navigation";
// import Footer from "./components/Footer";

// // Import all pages
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Properties from "./pages/Properties";
// import Exhibitors from "./pages/Exhibitors";
// import Contact from "./pages/Contact";
// import Developers from "./pages/Developers";
// import Agents from "./pages/Agents";
// import Buyers from "./pages/Buyers";

// const PageWrapper = ({ children }) => {
//   const location = useLocation();

//   return (
//     <motion.div
//       key={location.pathname}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.3, ease: "easeInOut" }}
//     >
//       {children}
//       {/* Only show footer on non-home pages since Home has its own footer */}
//       {location.pathname !== "/" && <Footer />}
//     </motion.div>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navigation />
//         <AnimatePresence mode="wait">
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <PageWrapper>
//                   <Home />
//                 </PageWrapper>
//               }
//             />
//             <Route
//               path="/about"
//               element={
//                 <PageWrapper>
//                   <About />
//                 </PageWrapper>
//               }
//             />
//             <Route
//               path="/properties"
//               element={
//                 <PageWrapper>
//                   <Properties />
//                 </PageWrapper>
//               }
//             />
//             <Route
//               path="/exhibitors"
//               element={
//                 <PageWrapper>
//                   <Exhibitors />
//                 </PageWrapper>
//               }
//             />
//             <Route
//               path="/contact"
//               element={
//                 <PageWrapper>
//                   <Contact />
//                 </PageWrapper>
//               }
//             />
//             <Route
//               path="/developers"
//               element={
//                 <PageWrapper>
//                   <Developers />
//                 </PageWrapper>
//               }
//             />
//             <Route
//               path="/agents"
//               element={
//                 <PageWrapper>
//                   <Agents />
//                 </PageWrapper>
//               }
//             />
//             <Route
//               path="/buyers"
//               element={
//                 <PageWrapper>
//                   <Buyers />
//                 </PageWrapper>
//               }
//             />
//           </Routes>
//         </AnimatePresence>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Properties from "./pages/Properties";
import Exhibitors from "./pages/Exhibitors";
import Contact from "./pages/Contact";
import Developers from "./pages/Developers";
import Agents from "./pages/Agents";
import Buyers from "./pages/Buyers";
import ThankYou from "./pages/ThankYou";
import WhyExhibit from "./pages/WhyExhibit";
import Blogs from "./pages/Blogs";
import PressRelease from "./pages/PressRelease";
import Gallery from "./pages/Gallery";

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use requestAnimationFrame to ensure DOM is ready, especially with animations
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, [pathname]);

  return null;
};

const PageWrapper = ({ children }) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
      {/* Only show footer on non-home pages since Home has its own footer */}
      {location.pathname !== "/" && <Footer />}
    </motion.div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <PageWrapper>
                  <About />
                </PageWrapper>
              }
            />
            <Route
              path="/properties"
              element={
                <PageWrapper>
                  <Properties />
                </PageWrapper>
              }
            />
            <Route
              path="/exhibitors"
              element={
                <PageWrapper>
                  <Exhibitors />
                </PageWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              }
            />
            <Route
              path="/developers"
              element={
                <PageWrapper>
                  <Developers />
                </PageWrapper>
              }
            />
            <Route
              path="/agents"
              element={
                <PageWrapper>
                  <Agents />
                  {/* <Developers /> */}
                </PageWrapper>
              }
            />
            <Route
              path="/buyers"
              element={
                <PageWrapper>
                  <Buyers />
                </PageWrapper>
              }
            />
            <Route
              path="/thank-you"
              element={
                <PageWrapper>
                  <ThankYou />
                </PageWrapper>
              }
            />
            <Route
              path="/why-exhibit"
              element={
                <PageWrapper>
                  <WhyExhibit />
                </PageWrapper>
              }
            />
            <Route
              path="/blogs"
              element={
                <PageWrapper>
                  <Blogs />
                </PageWrapper>
              }
            />
            <Route
              path="/press-release"
              element={
                <PageWrapper>
                  <PressRelease />
                </PageWrapper>
              }
            />
            <Route
              path="/gallery"
              element={
                <PageWrapper>
                  <Gallery />
                </PageWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
