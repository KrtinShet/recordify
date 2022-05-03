import React, { useState } from "react";
import { Stage, Layer, Rect, Group, Text } from "react-konva";
import "./index.css";
import { useRecoilValue } from "recoil";
import { codeState } from "./../../Store";
import Typewriter from "typewriter-effect";
import { Html } from "react-konva-utils";

const RecordPage = () => {
  const [play, setPlay] = useState(true);
  const [lineCounter, setLineCounter] = useState(0);
  const code = useRecoilValue(codeState);
  const codeArr = code.split("\n");

  return (
    <div className="bg-dark">
      <Stage
        height={window.innerWidth * 0.5625 * 0.65}
        width={window.innerWidth * 0.65}
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgb(1 134 218) , rgb(182 49 167))",
        }}
      >
        <Layer>
          <Rect
            width={window.innerWidth * 0.65 * 0.85}
            height={window.innerWidth * 0.5625 * 0.65 * 0.85}
            cornerRadius={10}
            x={30}
            y={(window.innerWidth * 0.65) / 20}
            fill="#1F2937"
          />
          <Rect
            x={window.innerWidth * 0.5}
            y={(window.innerWidth * 0.65) / 7}
            width={200}
            height={300}
            cornerRadius={10}
            fill="white"
            shadowBlur={1}
          />
          <Group x={60} y={80}>
            {codeArr &&
              codeArr.slice(0, lineCounter).map((line, index) => {
                return (
                  <Group y={index * 20}>
                    <Html>
                      <pre style={{ color: "white" }}>
                        <Typewriter
                          options={{
                            delay: "0.1",
                            cursor: "",
                          }}
                          onInit={(typewriter) => {
                            typewriter
                              .typeString(index + 1 + "   " + line)
                              .start();
                          }}
                        />
                      </pre>
                    </Html>
                  </Group>
                  // <Text
                  //   // text={}
                  //   text={<span>hello</span>}
                  //   y={index * 20}
                  //   fill="#fff"
                  //   fontSize={15}
                  //   onTransform
                  // />
                );
              })}
          </Group>
        </Layer>
      </Stage>
      <div className="record-footer">
        <div className="play-pause-btn-container">
          <span>00:00</span>
          <div
            className="play-pause-btn"
            onClick={() => {
              setPlay(!play);
            }}
          >
            {play ? (
              <i className="fa-solid fa-circle-play"></i>
            ) : (
              <i className="fa-solid fa-circle-stop"></i>
            )}
            <span
              style={{
                fontWeight: "500",
                fontSize: "1.25rem",
                marginLeft: "0.15rem",
              }}
            >
              {play ? "play" : "stop"}
            </span>
          </div>
        </div>
        <div className="right-left-btn-container">
          <button
            className="btn"
            onClick={() => {
              setLineCounter(lineCounter - 1);
            }}
          >
            <i
              style={{
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
              className="fa-solid fa-arrow-left"
            ></i>
          </button>
          <button
            className="btn"
            onClick={() => {
              setLineCounter(lineCounter + 1);
            }}
          >
            <i
              style={{
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
              className="fa-solid fa-arrow-right"
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecordPage;
