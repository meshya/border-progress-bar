"use strict";
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
} // src/index.tsx
var _react = require("react");
var _react2 = _interopRequireDefault(_react);
// src/border.tsx
// src/curveBar.tsx
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
var balancer = _object_spread_props(_object_spread({}, container), {
    float: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
});
// src/curveBar.tsx
var CurveBar = function(_param) {
    var size = _param.size, percent = _param.percent, border = _param.border, side = _param.side, color = _param.color, bgColor = _param.bgColor, noneColor = _param.noneColor, type = _param.type, arg = _object_without_properties(_param, [
        "size",
        "percent",
        "border",
        "side",
        "color",
        "bgColor",
        "noneColor",
        "type"
    ]);
    var getStyleVars = function() {
        return {
            "--width": "".concat(size * 2, "px"),
            "--height": "".concat(size * 2, "px"),
            "--border": "".concat(border * 2, "px"),
            "--color": color,
            "--progress": "".concat(percent * 0.9, "deg"),
            "--bg-color": bgColor,
            "--none-color": noneColor,
            "--rotate": "rotate(".concat({
                "tr": 0,
                "bl": 180,
                "br": 90,
                "tl": 270
            }[side], "deg)"),
            "--move": arg.move,
            "--z": arg.z || 15
        };
    };
    return /* @__PURE__ */ _react2.default.createElement("div", {
        style: _object_spread({}, getStyleVars(), barContainer)
    }, /* @__PURE__ */ _react2.default.createElement("div", {
        style: _object_spread({}, mover)
    }, /* @__PURE__ */ _react2.default.createElement("div", {
        style: _object_spread({}, circle, circleContainer)
    }, /* @__PURE__ */ _react2.default.createElement("div", {
        style: _object_spread({}, circle, progressCircle)
    }, /* @__PURE__ */ _react2.default.createElement("div", {
        style: _object_spread({}, circle, afterCircle)
    })))));
};
var curveBar_default = CurveBar;
// src/lineBar.tsx
var LineBar = function(arg) {
    var getCSSVars = function() {
        return {
            "--color": arg.color,
            "--width": "".concat(arg.size, "px"),
            "--height": "".concat(arg.border, "px"),
            "--rounded": "".concat(arg.rounded || 0, "px"),
            "--bg-color": arg.bgColor,
            "--progress": "".concat(arg.size * (arg.percent / 100), "px"),
            "--rotate": "rotate(".concat({
                "r2l": 180,
                "l2r": 0,
                "t2b": 90,
                "b2t": 270
            }[arg.type], "deg)"),
            "--translate": function(x) {
                return "translateX(".concat(x, "px) translateY(").concat(x, "px)");
            }(function(x) {
                return ({
                    "t2b": x,
                    "b2t": -x,
                    "l2r": 0,
                    "r2l": 0
                })[arg.type];
            }((arg.size - arg.border) / 2)),
            "--move": arg.move,
            "--z": arg.z || 20
        };
    };
    return /* @__PURE__ */ _react2.default.createElement("div", {
        style: _object_spread({}, getCSSVars(), barContainer)
    }, /* @__PURE__ */ _react2.default.createElement("div", {
        style: _object_spread({}, mover)
    }, /* @__PURE__ */ _react2.default.createElement("div", {
        style: _object_spread({}, line, lineContainer)
    }, /* @__PURE__ */ _react2.default.createElement("div", {
        style: _object_spread({}, line, lineProgress)
    }))));
};
var lineBar_default = LineBar;
// src/border.tsx
var Border = function(_param) {
    var tmp = _param.startFrom, type = tmp === void 0 ? "tl" : tmp, arg = _object_without_properties(_param, [
        "startFrom"
    ]);
    var hls = arg.width + arg.border * 2 - arg.rounded * 2;
    var vls = arg.height + arg.border * 2 - arg.rounded * 2;
    var cs = arg.rounded * 3.14 / 2;
    var delta = arg.rounded - arg.border;
    var all = hls * 2 + vls * 2 + cs * 4;
    var pob = function(n) {
        return n / all * 100;
    };
    var blocks = {
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
    var getPercent = function(n) {
        var map = {
            "tl": 0,
            "t": 1,
            "tr": 3,
            "r": 4,
            "br": 6,
            "b": 7,
            "bl": 9,
            "l": 10
        };
        var n2i = function(n2) {
            return n2 - map[type] < 0 ? n2 - map[type] + 12 : n2 - map[type];
        };
        var i2n = function(i) {
            return i + map[type] > 11 ? i + map[type] - 12 : i + map[type];
        };
        var percent = arg.percent;
        var lessPercent = function(p) {
            percent = Math.max(0, percent - p);
        };
        for(var i = 0; i < n2i(n); i++){
            var bp = blocks[i2n(i)];
            lessPercent(bp);
        }
        var resault = Math.min(percent, blocks[n]) / blocks[n] * 100;
        return resault;
    };
    var bothArg = {
        bgColor: arg.bgColor,
        color: arg.color,
        border: arg.border
    };
    var lineArg = _object_spread({}, bothArg);
    var curveArg = _object_spread_props(_object_spread({}, bothArg), {
        size: arg.rounded,
        noneColor: arg.noneColor
    });
    return /* @__PURE__ */ _react2.default.createElement(_react2.default.Fragment, null, /* @__PURE__ */ _react2.default.createElement(lineBar_default, _object_spread_props(_object_spread({}, lineArg), {
        size: hls / 2,
        percent: getPercent(0),
        type: "l2r",
        move: "translateX(".concat(arg.rounded, "px)")
    })), /* @__PURE__ */ _react2.default.createElement(lineBar_default, _object_spread_props(_object_spread({}, lineArg), {
        size: hls / 2,
        percent: getPercent(1),
        type: "l2r",
        move: "translateX(".concat(arg.rounded + hls / 2, "px)"),
        z: 20
    })), /* @__PURE__ */ _react2.default.createElement(curveBar_default, _object_spread_props(_object_spread({}, curveArg), {
        percent: getPercent(2),
        side: "tr",
        move: "translateX(".concat(hls, "px)"),
        z: 19
    })), /* @__PURE__ */ _react2.default.createElement(lineBar_default, _object_spread_props(_object_spread({}, lineArg), {
        size: vls / 2,
        percent: getPercent(3),
        type: "t2b",
        move: "translateX(".concat(hls + arg.rounded + delta, "px) translateY(").concat(arg.rounded, "px)")
    })), /* @__PURE__ */ _react2.default.createElement(lineBar_default, _object_spread_props(_object_spread({}, lineArg), {
        size: vls / 2,
        percent: getPercent(4),
        type: "t2b",
        move: "translateX(".concat(hls + arg.rounded + delta, "px) translateY(").concat(vls / 2 + arg.rounded, "px)")
    })), /* @__PURE__ */ _react2.default.createElement(curveBar_default, _object_spread_props(_object_spread({}, curveArg), {
        percent: getPercent(5),
        side: "br",
        move: "translateX(".concat(hls, "px) translateY(").concat(vls, "px)")
    })), /* @__PURE__ */ _react2.default.createElement(lineBar_default, _object_spread_props(_object_spread({}, lineArg), {
        size: hls / 2,
        percent: getPercent(6),
        type: "r2l",
        move: "translateX(".concat(vls / 2 + arg.rounded, "px) translateY(").concat(vls + arg.rounded + delta, "px)")
    })), /* @__PURE__ */ _react2.default.createElement(lineBar_default, _object_spread_props(_object_spread({}, lineArg), {
        size: hls / 2,
        percent: getPercent(7),
        type: "r2l",
        move: "translateX(".concat(arg.rounded, "px) translateY(").concat(vls + arg.rounded + delta, "px)")
    })), /* @__PURE__ */ _react2.default.createElement(curveBar_default, _object_spread_props(_object_spread({}, curveArg), {
        percent: getPercent(8),
        side: "bl",
        move: "translateY(".concat(vls, "px)")
    })), /* @__PURE__ */ _react2.default.createElement(lineBar_default, _object_spread_props(_object_spread({}, lineArg), {
        size: vls / 2,
        percent: getPercent(9),
        type: "b2t",
        move: "translateY(".concat(vls / 2 + arg.rounded, "px)")
    })), /* @__PURE__ */ _react2.default.createElement(lineBar_default, _object_spread_props(_object_spread({}, lineArg), {
        size: vls / 2,
        percent: getPercent(10),
        type: "b2t",
        move: "translateY(".concat(arg.rounded, "px)")
    })), /* @__PURE__ */ _react2.default.createElement(curveBar_default, _object_spread_props(_object_spread({}, curveArg), {
        percent: getPercent(11),
        side: "tl",
        move: ""
    })));
};
var border_default = Border;
// src/index.tsx
var BorderedElement = function(_param) {
    var children = _param.children, hidden = _param.hidden, borderProps = _object_without_properties(_param, [
        "children",
        "hidden"
    ]);
    borderProps.rounded = borderProps.rounded || 0;
    borderProps.border = borderProps.border || 5;
    borderProps.width = borderProps.width || 100;
    borderProps.height = borderProps.height || 100;
    borderProps.percent = borderProps.percent || 25;
    borderProps.color = borderProps.color || "#050";
    borderProps.bgColor = borderProps.bgColor || "#ff5";
    borderProps.noneColor = borderProps.noneColor || "#fff";
    var getCSSvars = function() {
        return {
            "--width": "".concat(borderProps.width, "px"),
            "--height": "".concat(borderProps.height, "px"),
            "--cont-width": "".concat(borderProps.width + borderProps.border * 2, "px"),
            "--element-move": "translateX(".concat(borderProps.border, "px) translateY(").concat(borderProps.border, "px)"),
            "--border": "".concat(borderProps.border)
        };
    };
    if (hidden) {
        return children;
    }
    return /* @__PURE__ */ _react2.default.createElement("div", {
        style: _object_spread({}, getCSSvars(), balancer)
    }, /* @__PURE__ */ _react2.default.createElement("div", {
        style: _object_spread({}, container)
    }, /* @__PURE__ */ _react2.default.createElement("div", {
        style: borderContainer
    }, /* @__PURE__ */ _react2.default.createElement(border_default, _object_spread({}, borderProps))), /* @__PURE__ */ _react2.default.createElement("div", {
        style: elementContainer
    }, children)));
};
var src_default = BorderedElement;
// index.ts
var BorderProgressBar = src_default;
var border_progress_bar_default = BorderProgressBar;
exports.default = border_progress_bar_default;
