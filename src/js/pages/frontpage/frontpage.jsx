import React from "react";
import Button from "components/button/button";
import Image from "assets/images/image.png";
import "./frontpage.scss";

const Frontpage = () => {
  return (
    <>
      <Button label="Start" onClick={() => alert("Welcome!")} />
    </>
  );
};

export default Frontpage;
