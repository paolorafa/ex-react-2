import React from "react";
import LatestReleas from "../componets/latestreleas/LatestReleas";
import Welcome from "../componets/welcome/Welcome";
import PostContext from "../contex/Boocontex";
import FormNavbar from "../componets/form/FormNavbar"
const Home = () => {
  return (
    <>
      
      <PostContext>
        <Welcome />
       <FormNavbar/>
        <LatestReleas />
      </PostContext>
    </>
  );
};

export default Home;