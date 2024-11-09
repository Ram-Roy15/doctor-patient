import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobsCard from "./JobsCard";

const TabCategories = () => {
  return (
    <div>
      {" "}
      <Tabs>
        <h1 className="text-center mb-5 font-bold text-3xl">
          Browse the Jobs by Categories
        </h1>
        <p className="text-center mb-5">
          Quickly syndicate dynamic resources for interoperable manufactured
          products. Authoritatively <br /> productize interoperable resources
          and visionary potentialities.
        </p>
        <div className="container px-5 mx-auto">
          <div className="flex justify-center items-center">
            <TabList>
              <Tab>Web Development</Tab>
              <Tab>Graphics Design</Tab>
              <Tab>Digital Marketing</Tab>
            </TabList>
          </div>
          <TabPanel>
            <JobsCard></JobsCard>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default TabCategories;
