import { useState } from "react";

const Programs = () => {
  const [activeTab, setActiveTab] = useState("1. Uptick Talent Beginner");

  const talentBeginner = [
    {
      image: "./program.svg",
      title: "Programs for Secondary Schools",
      description:
        "Our FREE community is one where we have Undergraduates and non-undergraduates come to learn the secrets and essence of Digital Marketing The training holds over a period of 1 month and through the training, assessments are held and the criteria are set The participants of the training who meets the criteria and passes the assessments are certified as RUMONEY trainees and the Top 10% are selected, screened and given Internship roles at SMEs",
     
    },
  ];

  const talentTech = [
    {
      image: "./program.svg",
      title: "Talent Technology Program Overview",
      description:
        "The internship period is a three month period that serves as a Demo to the small business During this period, the students earns between 20,000 to 50,000 naira monthly and they are to help with content creation and posting on the brands social media handles as well as every other required digital marketing service After the three month internship period and if the students meet the delivery criteria, the payment by the SMEs is increased to between 100,000 - 200,000 monthly for a span of two years.",
     
    },
  ];

  const talentBusiness = [
    {
      image: "./program.svg",
      title: "Startup Incubation Programs",
      description:
        "Our revenue model is a commision model, Over the first month, RUMONEY earns a 20 percent commision of the students pay and holds consistent review of the students service, Based on delivery of the student over the first month and if they passed the set criteria the commision is reduced to 15% and the same way in the third month it's reduced to 10%. The 10% commision system continues through the two years contract when eventually signed.",
      
    },
  ];
 

  const tabs = [
    {
      title: "1. Digital Marketing Training",
      content: talentBeginner,
    },
    {
      title: "2. Working With SME's ",
      content: talentTech,
    },
    {
      title: "3. Our Revenue Model",
      content: talentBusiness,
    },
  
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container sm:py-12 bg-white text-black60">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl text-center font-montserrat font-semibold">
        How It Works
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row p-4 border-2 rounded-lg m-6">
        <div className="tab-title  md:w-full mx-auto flex items font-montserrat -center justify-center flex-col border-r-4">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab-title cursor-pointer text-center text-lg font-bold p-3 font-montserrat ${
                activeTab === tab.title
                  ? "active-tab text-white bg-rumoney40 m-2 text-center rounded-lg font-montserrat"
                  : ""
              }`}
              onClick={() => handleTabClick(tab.title)}>
              {tab.title}
            </div>
          ))}
        </div>
        <div className="tab-content  md:w-full p-4 pl-8">
          {tabs
            .find((tab) => tab.title === activeTab)
            ?.content.map((item, index) => (
              <div key={index} className="">
                <div>
                  <p className="text-gray-700  font-medium text-base leading-6">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;