import React from "react";
import logo from "../Components/logo.png"
import Common from "./Common";
const Home = () => {
  return (
    <> <Common 
    name ="Aman Sahu"
    message= "Welcome to our family"
    btn="Join"
    btnurl="/contact/aman/sahu"
    logo ={logo}

    ></Common>
    </>
  );
};

export default Home;
