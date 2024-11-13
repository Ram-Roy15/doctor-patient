import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobsCard from "./JobsCard";
import { useEffect, useState } from "react";
import axios from "axios";

const TabCategories = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios("http://localhost:5000/jobs");
      console.log(data);
      setJobs(data);
    };
    getData();
  }, []);
  return (
    <div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:grid-cols-4">
              {jobs
                .filter((job) => job.category === "Web Development")
                .map((job) => (
                  <JobsCard key={job._id} job={job}></JobsCard>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:grid-cols-4">
              {jobs
                .filter((job) => job.category === "Graphics Design")
                .map((job) => (
                  <JobsCard key={job._id} job={job}></JobsCard>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:grid-cols-4">
              {jobs
                .filter((job) => job.category === "Digital Marketing")
                .map((job) => (
                  <JobsCard key={job._id} job={job}></JobsCard>
                ))}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default TabCategories;
