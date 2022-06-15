import React, { Componet } from "react";
import "./App.css";
import { Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import Proposal from "./pages/Proposal";
import CtBLogo from "./images/CtB.png";
import { ConnectButton, LinkTo } from "web3uikit";

const App = () => {
  return (
    <>
      <LinkTo
        isFullWidth
        icon="matic"
        address="https://mumbai.polygonscan.com/address/0xEDf3dffeC3c9BB16eB645e4fC64f97405BfD342F"
        text="SmartContract"
        type="external"
      />
      <div className="header">
        <img width="160px" src={CtBLogo} alt="logo" />
        <ConnectButton />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proposal" element={<Proposal />} />
      </Routes>
      <LinkTo
        address="https://www.connecting-the-blocks.com/"
        text="CtB.com"
        type="external"
      />
    </>
  );
};

export default App;
