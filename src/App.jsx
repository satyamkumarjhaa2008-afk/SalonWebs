import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Accessibility from "./pages/Accessibility";
import Privacy from "./pages/Privacy";
import TermsCondition from "./pages/TermsCondition";
import RefundPolicy from "./pages/RefundPolicy";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServiceDetails from "./pages/ServiceDetails";


function App() {
  return (

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/privacypolicy" element={<Privacy />} />
        <Route path="/termscondition" element={<TermsCondition />} />
        <Route path="/refundpolicy" element={<RefundPolicy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
          <Route
    path="/services/:category/:serviceSlug"
    element={<ServiceDetails />}
  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;