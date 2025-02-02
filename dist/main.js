"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorInput = exports.Button = exports.Dropdown = exports.execLink = exports.execCommand = exports.queryCommandState = exports.fontList = void 0;
const react_1 = __importDefault(require("react"));
exports.fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "cursive",
];
const queryCommandState = (command) => {
    return document.queryCommandState(command);
};
exports.queryCommandState = queryCommandState;
const execCommand = (command, defaultUI, value) => {
    document.execCommand(command, defaultUI, value);
};
exports.execCommand = execCommand;
const execLink = (link) => {
    if (/http/i.test(link)) {
        (0, exports.execCommand)("createLink", false, link);
    }
    else {
        link = "http://" + link;
        (0, exports.execCommand)("createLink", false, link);
    }
};
exports.execLink = execLink;
const Dropdown = ({ options, isOpened, setIsOpened, type = "editor-dropdown-dialog", display, direction = "row", }) => {
    const toggleIsOpened = () => {
        setIsOpened(!isOpened);
    };
    return (react_1.default.createElement("div", { className: "editor-dropdown" },
        react_1.default.createElement("div", { className: `editor-dropdown-display ${isOpened ? "opened" : ""}`, onClick: toggleIsOpened }, display),
        isOpened && (react_1.default.createElement("div", { className: type, style: { flexDirection: direction } }, options))));
};
exports.Dropdown = Dropdown;
const Button = ({ title, content, onClick, className, style, }) => {
    return (react_1.default.createElement("button", { type: "button", className: className ? className : "", title: title, onClick: onClick, style: style }, content));
};
exports.Button = Button;
const ColorInput = ({ colorValue, setColorValue, }) => {
    return (react_1.default.createElement("input", { type: "color", name: "color-picker", value: colorValue, onChange: (e) => setColorValue(e.target.value) }));
};
exports.ColorInput = ColorInput;
