import React from "react";
import TopPage from "./TopPage";
import Categories from "./Categories";
import Bottompage from "./Bottompage";
import Productstore from "./Productstore";

const Dashboard = () => {
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <TopPage></TopPage>
        <Categories></Categories>
        <Productstore></Productstore>

        <Bottompage></Bottompage>
      </div>
    </>
  );
};

export default Dashboard;
