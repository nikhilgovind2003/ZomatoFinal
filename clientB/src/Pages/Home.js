import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Common/Footer";
import TabOption from "../Components/Common/tabOption";
import Delivery from "../Components/Delivery/Delivery";
import DiningOut from "../Components/DiningOut/DiningOut";
import NightLife from "../Components/NightLifr/NightLife";
const Home = () => {
  const [ChangeTab, setChangeTab] = useState("NightLife");

  const getChangeTab = (tab) => {
    switch (tab) {
      case "Delivery":
        return <Delivery />;
      case "DiningOut":
        return <DiningOut />;
      case "NightLife":
        return <NightLife />;
      default:
        return <div>NightLife</div>;
    }
  };

  return (
    <div>
      <div className=" max-w-[900px] mx-auto">
        <Navbar />
      </div>
      <TabOption activeTab={ChangeTab} setActiveTab={setChangeTab} />
      {getChangeTab(ChangeTab)}
      <Footer />
    </div>
  );
};

export default Home;
