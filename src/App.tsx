import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <div className="relative    min-h-screen ">
      <Routes>
        <Route path="/" element={<Header></Header>}>
          <Route index element={<Home></Home>}></Route>

          <Route path="/about" element={<About></About>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
