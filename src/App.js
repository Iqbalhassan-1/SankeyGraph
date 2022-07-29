import React from "react";
import { Chart } from "react-google-charts";
import Graph from "./Graph";
import Marks from "./Marks";
import RangeData from "./RangeData";
import ReactSankey from "./ReactSankey";
import SankeyGraph from "./SankeyGraph";

const App = () => {
  return (
    <>
      {/* <Graph/><br/> */}
      {/* <SankeyGraph /> */}
      <br />
      <br />
      <ReactSankey />
      {/* <RangeData /> */}
      <Marks />
    </>
  );
};
export default App;
