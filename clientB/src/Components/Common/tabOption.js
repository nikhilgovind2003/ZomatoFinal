import React from "react";

const tabOption = ({ activeTab, setActiveTab }) => {
  const tabs = [
    {
      id: 1,
      name: "Dining Out",
      backdrop: "#EFE4FF",
      active_img:
        "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png?output-format=webp",
      inactive_img:
        "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
    },
    {
      id: 2,
      name: "Delivery",
      backdrop: "#EFE4FF",
      active_img:
        "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
      inactive_img:
        "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
    },
    {
      id: 1,
      name: "NightLife",
      backdrop: "#EFE4FF",
      active_img:
        "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
      inactive_img:
        "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
    },
  ];
  return (
    <>
    <div className=" flex items-center mt-8 w-[900px] mx-auto gap-8">
      {tabs.map((tab, key) => (
        <div
          onClick={() => setActiveTab(tab.name)}
          className=" cursor-pointer py-4 px-2 flex items-center gap-4 w-[30%] active:border-b-2 active:text-red-500 border-b-red-500"
          key={key}
        >
          <div className=" w-[60px]">
            <img
              className=" h-full w-full"
              src={activeTab === tab.name ? tab.active_img : tab.inactive_img}
              alt=""
            />
          </div>
          <h1>{tab.name}</h1>
        </div>
      ))}
    </div>
    <hr />
    </>
  );
};

export default tabOption;
