import * as React from "react";
import { Range, getTrackBackground } from "react-range";
import { FaPlay } from "react-icons/fa";

const STEP = 5;
const MIN = 1990;
const MAX = 2020;

const Marks = ({ rtl }) => {
  const [values, setValues] = React.useState([1990]);
  return (
    <div>
      <div>
        <button
          style={{
            width: "100px",
            height: "50px",
            display: "inline-block",
          }}
        >
          <FaPlay />
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Range
          values={values}
          step={STEP}
          min={MIN}
          max={MAX}
          rtl={rtl}
          onChange={(values) => setValues(values)}
          renderMark={({ props, index }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "16px",
                width: "5px",
                backgroundColor: index * STEP < values[0] ? "#548BF4" : "#ccc",
              }}
            />
          )}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "block",
                width: "80%",
              }}
            >
              <div
                ref={props.ref}
                style={{
                  right: "300px",
                  height: "10px",
                  width: "98%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values: values,
                    colors: ["#548BF4", "#ccc"],
                    min: MIN,
                    max: MAX,
                    rtl,
                  }),
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "42px",
                width: "35px",
                borderRadius: "4px",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA",
              }}
            >
              <div
                style={{
                  height: "16px",
                  width: "5px",
                  backgroundColor: isDragged ? "#548BF4" : "#CCC",
                }}
              />
            </div>
          )}
        />
        <output style={{ marginTop: "30px", textAlign: "start" }}>
          {values[0].toFixed(1)}
        </output>{" "}
      </div>
    </div>
  );
};

export default Marks;
