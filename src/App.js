// npm i react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Search from "./Components/Search";
import User from "./Components/User";
import Error from "./Components/Error";
// import About from "./Components/About";
// import Services from "./Components/Services";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* exact is used for exact path */}
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          {/* <Route exact path="/about" element={<About name="Aman" sname="Sahu"/>} /> */}
          {/* <Route exact path="/services" element={<Services />} />*/}
          <Route path="*" element={<Error />} />
          
          {/* after "http://localhost:3000/user" type "/aman" */}
          {/* <Route path="/user/:name" element={<User />} /> */}

          {/* after "http://localhost:3000/contact" type "/aman/sahu" */}
          {/* <Route exact path="/contact/:name/:sname" element={<Contact />} />  */}
          
        </Routes>
      </Router>
    </>
  );
};
export default App;
