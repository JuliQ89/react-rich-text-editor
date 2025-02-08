"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./assets/css/editor.css");
const react_1 = require("react");
const configs_1 = require("./configs");
const react_2 = __importDefault(require("react"));
const RichTextEditor = ({ editorContent, maxHeight, height, setEditorContent, spellCheck = true, toolbarConfigs = configs_1.toolbarDefaultConfigs, }) => {
    const { toolbar, checkCommandsState } = (0, configs_1.useToolbar)();
    const editorRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (editorRef.current && editorRef.current.innerHTML !== editorContent) {
            editorRef.current.innerHTML = editorContent;
        }
    }, [editorContent]);
    return (react_2.default.createElement("div", { className: "rich-text-container", style: { height } },
        react_2.default.createElement("header", { className: "rich-text-toolbar" }, toolbarConfigs.map((config) => {
            return toolbar[config];
        })),
        react_2.default.createElement("main", { className: "rich-text-main", style: { maxHeight } },
            react_2.default.createElement("div", { id: "rich-text-editor", className: "rich-text-field", ref: editorRef, contentEditable: true, spellCheck: spellCheck, onMouseUp: checkCommandsState, onMouseDown: checkCommandsState, onInput: (e) => {
                    const target = e.target;
                    setEditorContent(target.innerHTML);
                    checkCommandsState();
                }, suppressContentEditableWarning: true }),
            react_2.default.createElement("input", { type: "hidden", name: "content", value: editorContent, id: "rich-text-input" }))));
};
exports.default = RichTextEditor;
