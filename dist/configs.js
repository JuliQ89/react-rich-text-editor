"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToolbar = exports.toolbarDefaultConfigs = void 0;
// export type toolbarCommands = {};
const react_1 = __importStar(require("react"));
const main_1 = require("./main");
const react_2 = require("@remixicon/react");
exports.toolbarDefaultConfigs = [
    "bold",
    "italic",
    "underline",
    "strikethrough",
    "superscript",
    "subscript",
    "removeFormat",
    "createLink",
    "fontSize",
    "fontName",
    "foreColor",
    "backColor",
    "insertUnorderedList",
    "insertOrderedList",
    "justifyLeft",
    "justifyCenter",
    "justifyRight",
    "outdent",
    "indent",
    "undo",
    "redo",
];
const useToolbar = () => {
    const [frontColorValue, setFrontColorValue] = (0, react_1.useState)("");
    const [backColorValue, setBackColorValue] = (0, react_1.useState)("");
    const [linkDropdownIsOpened, setLinkDropdownIsOpened] = (0, react_1.useState)(false);
    const [fontSizeDropdownIsOpened, setFontSizeDropdownIsOpened] = (0, react_1.useState)(false);
    const [fontFamilyDropdownIsOpened, setFontFamilyDropdownIsOpened] = (0, react_1.useState)(false);
    const [linkValue, setLinkValue] = (0, react_1.useState)("");
    return {
        bold: (react_1.default.createElement(main_1.Button, { content: react_1.default.createElement(react_2.RiBold, null), title: "Bold", onClick: () => (0, main_1.execCommand)("bold", false), className: (0, main_1.queryCommandState)("bold") ? "btn-active" : "" })),
        italic: (react_1.default.createElement(main_1.Button, { content: react_1.default.createElement(react_2.RiItalic, null), title: "Italic", onClick: () => (0, main_1.execCommand)("italic", false) })),
        underline: (react_1.default.createElement(main_1.Button, { content: react_1.default.createElement(react_2.RiUnderline, null), title: "Underline", onClick: () => (0, main_1.execCommand)("underline", false) })),
        strikethrough: (react_1.default.createElement(main_1.Button, { content: react_1.default.createElement(react_2.RiStrikethrough, null), title: "Strikethrough", onClick: () => (0, main_1.execCommand)("strikethrough", false) })),
        superscript: (react_1.default.createElement(main_1.Button, { content: react_1.default.createElement(react_2.RiSuperscript, null), title: "Superscript", onClick: () => (0, main_1.execCommand)("superscript", false) })),
        subscript: (react_1.default.createElement(main_1.Button, { content: react_1.default.createElement(react_2.RiSubscript, null), title: "Subscript", onClick: () => (0, main_1.execCommand)("subscript", false) })),
        removeFormat: (react_1.default.createElement(main_1.Button, { content: react_1.default.createElement(react_2.RiFormatClear, null), title: "Remove Format", onClick: () => (0, main_1.execCommand)("removeFormat", false) })),
        createLink: (react_1.default.createElement(main_1.Dropdown, { isOpened: linkDropdownIsOpened, setIsOpened: setLinkDropdownIsOpened, options: [
                react_1.default.createElement("div", { className: "editor-dropdown-link-dialog" },
                    react_1.default.createElement("input", { type: "text", name: "link-href", placeholder: "Link URL", value: linkValue, onChange: (e) => setLinkValue(e.target.value) }),
                    react_1.default.createElement("div", { className: "editor-dropdown-link__buttons" },
                        react_1.default.createElement("button", { style: { color: "#008a00" }, onClick: () => (0, main_1.execLink)(linkValue) },
                            react_1.default.createElement(react_2.RiCheckLine, null)),
                        react_1.default.createElement("button", { style: { color: "#db3700" }, onClick: () => setLinkDropdownIsOpened(!linkDropdownIsOpened) },
                            react_1.default.createElement(react_2.RiCloseLine, null)))),
            ], type: "editor-dropdown-dialog", display: react_1.default.createElement(react_2.RiLink, null) })),
        fontSize: (react_1.default.createElement(main_1.Dropdown, { isOpened: fontSizeDropdownIsOpened, setIsOpened: setFontSizeDropdownIsOpened, options: [
                react_1.default.createElement(main_1.Button, { content: react_1.default.createElement(react_2.RiNumber1, null), onClick: () => (0, main_1.execCommand)("fontSize", false, "1") }),
                react_1.default.createElement(main_1.Button, { content: react_1.default.createElement(react_2.RiNumber2, null), onClick: () => (0, main_1.execCommand)("fontSize", false, "2") }),
                react_1.default.createElement(main_1.Button, { content: react_1.default.createElement(react_2.RiNumber3, null), onClick: () => (0, main_1.execCommand)("fontSize", false, "3") }),
                react_1.default.createElement(main_1.Button, { content: react_1.default.createElement(react_2.RiNumber4, null), onClick: () => (0, main_1.execCommand)("fontSize", false, "4") }),
                react_1.default.createElement(main_1.Button, { content: react_1.default.createElement(react_2.RiNumber5, null), onClick: () => (0, main_1.execCommand)("fontSize", false, "5") }),
                react_1.default.createElement(main_1.Button, { content: react_1.default.createElement(react_2.RiNumber6, null), onClick: () => (0, main_1.execCommand)("fontSize", false, "6") }),
                react_1.default.createElement(main_1.Button, { content: react_1.default.createElement(react_2.RiNumber7, null), onClick: () => (0, main_1.execCommand)("fontSize", false, "7") }),
            ], type: "editor-dropdown-options", display: react_1.default.createElement(react_2.RiFontSize, null) })),
        fontName: (react_1.default.createElement(main_1.Dropdown, { isOpened: fontFamilyDropdownIsOpened, setIsOpened: setFontFamilyDropdownIsOpened, direction: "column", options: main_1.fontList.map((font, i) => {
                return (react_1.default.createElement(main_1.Button, { key: i, className: "dropdown-fontfamily-button", content: font, style: { fontFamily: font, justifyContent: "stretch" }, onClick: () => (0, main_1.execCommand)("fontName", false, font) }));
            }), type: "editor-dropdown-options", display: react_1.default.createElement(react_2.RiFontFamily, null) })),
        foreColor: (react_1.default.createElement(main_1.Button, { content: react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(react_2.RiFontColor, null),
                react_1.default.createElement(main_1.ColorInput, { colorValue: frontColorValue, setColorValue: setFrontColorValue })), title: "color", onClick: () => (0, main_1.execCommand)("foreColor", false, frontColorValue) })),
        backColor: (react_1.default.createElement(main_1.Button, { content: react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(react_2.RiPaintBrushLine, null),
                react_1.default.createElement(main_1.ColorInput, { colorValue: backColorValue, setColorValue: setBackColorValue })), title: "background color", onClick: () => (0, main_1.execCommand)("backColor", false, backColorValue) })),
        insertUnorderedList: (react_1.default.createElement(main_1.Button, { content: react_1.default.createElement(react_2.RiListUnordered, null), title: "Unordered List", onClick: () => (0, main_1.execCommand)("insertUnorderedList", false) })),
        insertOrderedList: (react_1.default.createElement(main_1.Button, { content: react_1.default.createElement(react_2.RiListOrdered2, null), title: "Ordered List", onClick: () => (0, main_1.execCommand)("insertOrderedList", false) })),
        justifyLeft: (react_1.default.createElement(main_1.Button, { content: react_1.default.createElement(react_2.RiAlignLeft, null), title: "Align left", onClick: () => (0, main_1.execCommand)("justifyLeft", false) })),
        justifyCenter: (react_1.default.createElement(main_1.Button, { content: react_1.default.createElement(react_2.RiAlignCenter, null), title: "Align center", onClick: () => (0, main_1.execCommand)("justifyCenter", false) })),
        justifyRight: (react_1.default.createElement(main_1.Button, { content: react_1.default.createElement(react_2.RiAlignRight, null), title: "Align right", onClick: () => (0, main_1.execCommand)("justifyRight", false) })),
        outdent: (react_1.default.createElement(main_1.Button, { content: react_1.default.createElement(react_2.RiIndentDecrease, null), title: "Outdent", onClick: () => (0, main_1.execCommand)("outdent", false) })),
        indent: (react_1.default.createElement(main_1.Button, { content: react_1.default.createElement(react_2.RiIndentIncrease, null), title: "Indent", onClick: () => (0, main_1.execCommand)("indent", false) })),
        undo: (react_1.default.createElement(main_1.Button, { content: react_1.default.createElement(react_2.RiArrowGoBackLine, null), title: "Undo", onClick: () => (0, main_1.execCommand)("undo", false) })),
        redo: (react_1.default.createElement(main_1.Button, { content: react_1.default.createElement(react_2.RiArrowGoForwardLine, null), title: "Redo", onClick: () => (0, main_1.execCommand)("redo", false) })),
    };
};
exports.useToolbar = useToolbar;
