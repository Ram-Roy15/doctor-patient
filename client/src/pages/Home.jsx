// import { useLoaderData } from "react-router-dom";
import Carosel from "../components/Carosel";
import TabCategories from "../components/TabCategories";

const Home = () => {
  // const jobs = useLoaderData();
  // console.log(jobs);
  return (
    <div>
      <h1>This is home</h1>
      <Carosel></Carosel>
      <TabCategories></TabCategories>
      {/* <TabCategories jobs={jobs}></TabCategories> */}
    </div>
  );
};

export default Home;
