import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";


import {
  About,
  Contact,
  Exp,
  Skills,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
  Services,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Services />
        <Skills />
        <Exp />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
