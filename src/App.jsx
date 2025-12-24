import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Trphone from "./pages/Trphone";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Kvkk from "./pages/Kvkk";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import DistanceSales from "./pages/DistanceSales";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 mx-auto max-w-6xl px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trphone" element={<Trphone />} />
          <Route path="/urunler" element={<Products />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/hizmetler" element={<Services />} />
          <Route path="/kvkk" element={<Kvkk />} />
          <Route path="/gizlilik-politikasi" element={<PrivacyPolicy />} />
          <Route path="/kullanim-sartlari" element={<Terms />} />
          <Route path="/mesafeli-satis" element={<DistanceSales />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
