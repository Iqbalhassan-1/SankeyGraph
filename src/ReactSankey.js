// import React, { useEffect, useState } from "react";
import React, {
  Component,
  memo,
  useCallback,
  useState,
  useEffect,
  useMemo,
} from "react";
import { Sankey } from "react-sankey-chart";
import "./App.css";
import ProgressBar from "./ProgressBar";
import RangeSlider from "./RangeData";
import { SankeyData } from "./SankeyData";

const ReactSankey = () => {
  const [data, setData] = useState(SankeyData);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(false);

  // useEffect(() => {
  //   var iterations = 1;
  //   if (count < SankeyData.length) {
  //     var interval = setInterval(() => {
  //       setCount((prevCount) => prevCount + 1);
  //       iterations++;
  //       if (iterations > SankeyData.length) clearInterval(interval);
  //     }, 1000);
  //   }
  // }, []);
  const [parentVal, setParentVal] = useState(10);

  const sliderValueChanged = useCallback((val) => {
    console.log("NEW VALUE", val);
    setParentVal(val);
  });

  const sliderProps = useMemo(
    () => ({
      min: 1900,
      max: 1992,
      value: parentVal,
      step: 2,
      label: "This is a reusable slider",
      onChange: (e) => sliderValueChanged(e),
    }),
    [parentVal]
  );

  const ChangeData = () => {
    if (status) {
    }

    let iterations = 1;
    if (count < SankeyData.length) {
      let interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
        iterations++;
        if (iterations > SankeyData.length) clearInterval(interval);
      }, 1000);
    }
  };

  const setColor = (level, nodeid, color) => {
    const copydata = [...data];
    const find = copydata.find((item) => item.level == level); //level one
    const nodes = find.nodes.map((x) =>
      x.id === nodeid ? { ...x, color: color } : x
    ); //level2

    const updatedDatanex = copydata.map((x1) =>
      x1.level === level ? { ...x1, nodes } : x1
    );
    console.log(updatedDatanex);

    setData(updatedDatanex);
  };
  console.log(data[count]);
  return (
    <div>
      <div
        style={{
          display: "flex",
          paddingLeft: "10px",
          textAlign: "center",
          paddingTop: "5px",
        }}
      >
        <Sankey graph={data[count]} height={780} width={"100%"} />
      </div>
      <div className="dropdown">
        <button
          style={{ position: "relative", top: "-50px", right: "-1600px" }}
          onClick={() => setVisible(!visible)}
        >
          Choose Colour
        </button>

        {visible && (
          <div
            style={{ display: "flex", paddingLeft: "5px", textAlign: "start" }}
          >
            <ul style={{ position: "absolute", top: "-700px", right: "50px" }}>
              {data[count].map((item) => {
                return item.nodes.map((nestItem, index) => {
                  return (
                    <React.Fragment key={index}>
                      <li>
                        <input
                          style={{ width: "20px" }}
                          type={"color"}
                          value={nestItem.color}
                          onChange={(e) =>
                            setColor(item.level, nestItem.id, e.target.value)
                          }
                        />{" "}
                        <span style={{ width: "150px" }}>
                          {" "}
                          {nestItem.nodeLabel}
                        </span>
                      </li>
                    </React.Fragment>
                  );
                });
                console.log(item.nodes);
              })}
            </ul>
          </div>
        )}
      </div>
      <button onClick={ChangeData}>OnClick Button</button>
      <ProgressBar
        bgcolor="#99ccff"
        progress={Math.ceil((count * 100) / SankeyData.length)}
        height={30}
      />
      <h1>PARENT VALUE: {parentVal}</h1>
      <RangeSlider
        {...sliderProps}
        // classes="additional-css-classes"
        style={{ width: "1000px", height: "200px" }}
      />
    </div>
  );
};

export default ReactSankey;
