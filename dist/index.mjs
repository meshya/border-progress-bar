// src/index.tsx
import React4 from "react";

// src/border.tsx
import React3 from "react";

// src/curveBar.tsx
import React from "react";

// src/styles.ts
var circle = {
  position: "relative",
  borderRadius: "calc(var(--width) / 2)",
  float: "left"
};
var circleContainer = {
  width: "var(--width)",
  height: "var(--height)",
  background: "conic-gradient(var(--bg-color) 90deg, var(--none-color) 0.0deg)",
  transform: "var(--rotate)",
  float: "left"
};
var afterCircle = {
  width: "calc(var(--width) - var(--border))",
  height: "calc(var(--height) - var(--border))",
  background: "var(--none-color)",
  float: "left"
};
var progressCircle = {
  width: "var(--width)",
  height: "var(--height)",
  background: "conic-gradient(var(--color) var(--progress), #0000 0.0deg)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  float: "left"
};
var line = {
  position: "relative",
  borderRadius: "var(--rounded)",
  height: "var(--height)",
  float: "left"
};
var lineContainer = {
  width: "var(--width)",
  backgroundColor: "var(--bg-color)",
  transform: "var(--rotate) var(--translate)",
  float: "left"
};
var lineProgress = {
  width: "var(--progress)",
  backgroundColor: "var(--color)",
  float: "left"
};
var mover = {
  transform: "var(--move)",
  position: "relative",
  zIndex: "var(--z)",
  float: "left"
};
var barContainer = {
  height: "0px",
  float: "left"
};
var borderContainer = {
  position: "relative",
  zIndex: 50,
  float: "left"
};
var elementContainer = {
  position: "relative",
  width: "var(--width)",
  height: "var(--height)",
  transform: "var(--element-move)",
  zIndex: 100,
  float: "left"
};
var container = {
  position: "relative",
  width: "var(--cont-width)",
  height: "calc(var(--height) + ( var(--border) ) * 2 )",
  float: "left"
};
var balancer = {
  ...container,
  float: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

// src/curveBar.tsx
var CurveBar = ({ size, percent, border, side, color, bgColor, noneColor, type, ...arg }) => {
  const getStyleVars = () => ({
    "--width": `${size * 2}px`,
    "--height": `${size * 2}px`,
    "--border": `${border * 2}px`,
    "--color": color,
    "--progress": `${percent * 0.9}deg`,
    "--bg-color": bgColor,
    "--none-color": noneColor,
    "--rotate": `rotate(${{ "tr": 0, "bl": 180, "br": 90, "tl": 270 }[side]}deg)`,
    "--move": arg.move,
    "--z": arg.z || 15
  });
  return /* @__PURE__ */ React.createElement("div", { style: { ...getStyleVars(), ...barContainer } }, /* @__PURE__ */ React.createElement("div", { style: { ...mover } }, /* @__PURE__ */ React.createElement("div", { style: { ...circle, ...circleContainer } }, /* @__PURE__ */ React.createElement("div", { style: { ...circle, ...progressCircle } }, /* @__PURE__ */ React.createElement("div", { style: { ...circle, ...afterCircle } })))));
};
var curveBar_default = CurveBar;

// src/lineBar.tsx
import React2 from "react";
var LineBar = (arg) => {
  const getCSSVars = () => ({
    "--color": arg.color,
    "--width": `${arg.size}px`,
    "--height": `${arg.border}px`,
    "--rounded": `${arg.rounded || 0}px`,
    "--bg-color": arg.bgColor,
    "--progress": `${arg.size * (arg.percent / 100)}px`,
    "--rotate": `rotate(${{ "r2l": 180, "l2r": 0, "t2b": 90, "b2t": 270 }[arg.type]}deg)`,
    "--translate": ((x) => `translateX(${x}px) translateY(${x}px)`)(((x) => ({ "t2b": x, "b2t": -x, "l2r": 0, "r2l": 0 })[arg.type])((arg.size - arg.border) / 2)),
    "--move": arg.move,
    "--z": arg.z || 20
  });
  return /* @__PURE__ */ React2.createElement("div", { style: { ...getCSSVars(), ...barContainer } }, /* @__PURE__ */ React2.createElement("div", { style: { ...mover } }, /* @__PURE__ */ React2.createElement("div", { style: { ...line, ...lineContainer } }, /* @__PURE__ */ React2.createElement("div", { style: { ...line, ...lineProgress } }))));
};
var lineBar_default = LineBar;

// src/border.tsx
var Border = ({ startFrom: type = "tl", ...arg }) => {
  const hls = arg.width + arg.border * 2 - arg.rounded * 2;
  const vls = arg.height + arg.border * 2 - arg.rounded * 2;
  const cs = arg.rounded * 3.14 / 2;
  const delta = arg.rounded - arg.border;
  let all = hls * 2 + vls * 2 + cs * 4;
  const pob = (n) => n / all * 100;
  let blocks = {
    0: pob(hls / 2),
    1: pob(hls / 2),
    2: pob(cs),
    3: pob(vls / 2),
    4: pob(vls / 2),
    5: pob(cs),
    6: pob(hls / 2),
    7: pob(hls / 2),
    8: pob(cs),
    9: pob(vls / 2),
    10: pob(vls / 2),
    11: pob(cs)
  };
  const getPercent = (n) => {
    const map = { "tl": 0, "t": 1, "tr": 3, "r": 4, "br": 6, "b": 7, "bl": 9, "l": 10 };
    const n2i = (n2) => n2 - map[type] < 0 ? n2 - map[type] + 12 : n2 - map[type];
    const i2n = (i) => i + map[type] > 11 ? i + map[type] - 12 : i + map[type];
    let percent = arg.percent;
    const lessPercent = (p) => {
      percent = Math.max(0, percent - p);
    };
    for (let i = 0; i < n2i(n); i++) {
      let bp = blocks[i2n(i)];
      lessPercent(bp);
    }
    let resault = Math.min(percent, blocks[n]) / blocks[n] * 100;
    return resault;
  };
  let bothArg = {
    bgColor: arg.bgColor,
    color: arg.color,
    border: arg.border
  };
  let lineArg = {
    ...bothArg
  };
  let curveArg = {
    ...bothArg,
    size: arg.rounded,
    noneColor: arg.noneColor
  };
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement(lineBar_default, { ...lineArg, size: hls / 2, percent: getPercent(0), type: "l2r", move: `translateX(${arg.rounded}px)` }), /* @__PURE__ */ React3.createElement(lineBar_default, { ...lineArg, size: hls / 2, percent: getPercent(1), type: "l2r", move: `translateX(${arg.rounded + hls / 2}px)`, z: 20 }), /* @__PURE__ */ React3.createElement(curveBar_default, { ...curveArg, percent: getPercent(2), side: "tr", move: `translateX(${hls}px)`, z: 19 }), /* @__PURE__ */ React3.createElement(lineBar_default, { ...lineArg, size: vls / 2, percent: getPercent(3), type: "t2b", move: `translateX(${hls + arg.rounded + delta}px) translateY(${arg.rounded}px)` }), /* @__PURE__ */ React3.createElement(lineBar_default, { ...lineArg, size: vls / 2, percent: getPercent(4), type: "t2b", move: `translateX(${hls + arg.rounded + delta}px) translateY(${vls / 2 + arg.rounded}px)` }), /* @__PURE__ */ React3.createElement(curveBar_default, { ...curveArg, percent: getPercent(5), side: "br", move: `translateX(${hls}px) translateY(${vls}px)` }), /* @__PURE__ */ React3.createElement(lineBar_default, { ...lineArg, size: hls / 2, percent: getPercent(6), type: "r2l", move: `translateX(${vls / 2 + arg.rounded}px) translateY(${vls + arg.rounded + delta}px)` }), /* @__PURE__ */ React3.createElement(lineBar_default, { ...lineArg, size: hls / 2, percent: getPercent(7), type: "r2l", move: `translateX(${arg.rounded}px) translateY(${vls + arg.rounded + delta}px)` }), /* @__PURE__ */ React3.createElement(curveBar_default, { ...curveArg, percent: getPercent(8), side: "bl", move: `translateY(${vls}px)` }), /* @__PURE__ */ React3.createElement(lineBar_default, { ...lineArg, size: vls / 2, percent: getPercent(9), type: "b2t", move: `translateY(${vls / 2 + arg.rounded}px)` }), /* @__PURE__ */ React3.createElement(lineBar_default, { ...lineArg, size: vls / 2, percent: getPercent(10), type: "b2t", move: `translateY(${arg.rounded}px)` }), /* @__PURE__ */ React3.createElement(curveBar_default, { ...curveArg, percent: getPercent(11), side: "tl", move: "" }));
};
var border_default = Border;

// src/index.tsx
var BorderedElement = ({ children, hidden, ...borderProps }) => {
  borderProps.rounded = borderProps.rounded || 0;
  borderProps.border = borderProps.border || 5;
  borderProps.width = borderProps.width || 100;
  borderProps.height = borderProps.height || 100;
  borderProps.percent = borderProps.percent || 25;
  borderProps.color = borderProps.color || "#050";
  borderProps.bgColor = borderProps.bgColor || "#ff5";
  borderProps.noneColor = borderProps.noneColor || "#fff";
  const getCSSvars = () => {
    return {
      "--width": `${borderProps.width}px`,
      "--height": `${borderProps.height}px`,
      "--cont-width": `${borderProps.width + borderProps.border * 2}px`,
      "--element-move": `translateX(${borderProps.border}px) translateY(${borderProps.border}px)`,
      "--border": `${borderProps.border}`
    };
  };
  if (hidden) {
    return children;
  }
  return /* @__PURE__ */ React4.createElement("div", { style: { ...getCSSvars(), ...balancer } }, /* @__PURE__ */ React4.createElement("div", { style: { ...container } }, /* @__PURE__ */ React4.createElement("div", { style: borderContainer }, /* @__PURE__ */ React4.createElement(border_default, { ...borderProps })), /* @__PURE__ */ React4.createElement("div", { style: elementContainer }, children)));
};
var src_default = BorderedElement;

// index.ts
var BorderProgressBar = src_default;
var border_progress_bar_default = BorderProgressBar;
export {
  border_progress_bar_default as default
};
