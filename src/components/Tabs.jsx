import { useState } from "react";
import PropTypes from "prop-types";

function Tabs({ tabs, state, className, divStyle, pStyle }) {
  //   const [selectedTab, setSelectedTab] = useState("Women");
  const [selectedTab, setSelectedTab] = useState(state);

  function handleTabClick(tab) {
    setSelectedTab(tab);
  }

  return (
    <div className="font-medium">
      <div className="flex gap-4 items-center">
        {tabs?.map((tab) => (
            <div
              key={tab.title}
              style={divStyle}
              className={`cursor-pointer ${
                selectedTab === tab.title ? `${className}` : ""
              }`}
              onClick={() => handleTabClick(tab.title)}
            >
              <p>{tab.title}</p>
            </div>
        ))}
      </div>

      {tabs?.map((tab, index) => (
        <div key={index} className="">
          {tab.details && selectedTab === tab.title ? (
            <p style={pStyle}>{tab.details}</p>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
}

// {tab.details && selectedTab === tab.title ? (
//     <p>{tab.details}</p>
//   ) : (
//     ""
//   )}

Tabs.propTypes = {
  tabs: PropTypes.array,
  state: PropTypes.string,
  className: PropTypes.string,
  divStyle: PropTypes.object,
  pStyle: PropTypes.object,
};
export default Tabs;
