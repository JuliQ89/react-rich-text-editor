import "./assets/css/editor.css";
import { toolbarConfigsType } from "./configs";
import React from "react";
interface RichTextEditorI {
    editorContent: string;
    maxHeight?: React.CSSProperties["maxHeight"];
    height?: React.CSSProperties["height"];
    setEditorContent: React.Dispatch<React.SetStateAction<string>>;
    value?: string;
    spellCheck?: boolean;
    toolbarConfigs?: toolbarConfigsType[];
}
declare const RichTextEditor: ({ editorContent, maxHeight, height, setEditorContent, spellCheck, toolbarConfigs, }: RichTextEditorI) => React.JSX.Element;
export default RichTextEditor;
