import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Collections from "./components/Collections";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Industries from "./components/Industries";
import Exhibitions from "./components/Exhibitions";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";
import GlobalPresence from "./pages/GlobalPresence";
import {GlobalProvider }from "./pages/GlobalContext";
import Library from "./pages/Library";
import ArticleDetail from './pages/ArticleDetail';
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Hospitality from "./pages/sectors/Hospitality";
import Residential from "./pages/sectors/Residential";
import Commercial from "./pages/sectors/Commercial";
import Exhibition from "./pages/sectors/Exhibition";
import Retail from "./pages/sectors/Retail";
import Contact from "./pages/Contact";
import SectorDetail from "./pages/sectors/SectorDetail";
import Sectors from "./pages/sectors/Sectors";
import ProductDetails from "./pages/ProductDetails";
import Home from "./components/Home";
import AboutPreview from "./components/AboutPreview";
import FeaturedProjects from "./components/FeaturedProjects";
import Sustainability from "./components/Sustainability";
const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Collections />
      <Projects />
      <Industries />
      <Exhibitions />
      <Catalog />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Navbar />

      {/* Padding because Navbar is fixed */}
      <main className="pt-20">
        <Routes>

          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Shop Page */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/products/:id" element={<ProductDetails />} />

          {/* Cart Page */}
          <Route path="/cart" element={<Cart />} />
          
          {/* Authentication Pages */}
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
           
            <Route path="/about" element={<About />} />
            <Route path="/collections" element={<Collections />} />

               <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              
                 <Route path="/" element={<Hero/>}/>
              <Route path="/contact" element={<Contact/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              <Route path="/sectors" element={<Sectors />} />
                <Route path="/sectors/:type" element={<SectorDetail />} />

               <Route path="/" element={<Home />} />
              <Route path="/"  element={<AboutPreview />} />
              <Route path="/" element={<FeaturedProjects />} />
              <Route path="/" element={<Sustainability />} />
              
              <Route path="/global" element={<GlobalPresence />} />
              <Route path="/library" element={<Library />} />
              <Route path="/library/:id" element={<ArticleDetail />} />
              <Route path="/sectors/hospitality" element={<Hospitality />} />
              <Route path="/sectors/residential" element={<Residential />} />
              <Route path="/sectors/commercial" element={<Commercial />} />
              <Route path="/sectors/exhibition" element={<Exhibition />} />
              <Route path="/sectors/retail" element={<Retail />} />
              <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </main>
    </Router>
  );
};
export default App;
