// npm i react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Services from "./Components/Services";
import User from "./Components/User";
import About from "./Components/About";
import Error from "./Components/Error";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* exact is used for exact path */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About name="Aman" sname="Sahu"/>} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
