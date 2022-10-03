// npm i react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Error from "./Components/Error";
const App = () => {
  return (
    <>
     <Router>
        <Routes>
        {/* exact is used for exact path  */}
          <Route exact path="/" element= {<Home/>}/>
          <Route exact path="/about" element={<About />} />
          <Route path="*" element= {<Error/>} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
