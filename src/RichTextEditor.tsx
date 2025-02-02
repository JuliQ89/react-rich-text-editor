import "./assets/css/editor.css";
import { useState } from "react";
import parse from "html-react-parser";
import {
  toolbarConfigsType,
  toolbarDefaultConfigs,
  useToolbar,
} from "./configs";
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

const RichTextEditor = ({
  editorContent,
  maxHeight,
  height,
  setEditorContent,
  spellCheck = true,
  toolbarConfigs = toolbarDefaultConfigs,
}: RichTextEditorI) => {
  const [value] = useState(editorContent);
  const { toolbar, checkCommandsState } = useToolbar();

  return (
    <div className="rich-text-container" style={{ height }}>
      <header className="rich-text-toolbar">
        {toolbarConfigs.map((config) => {
          return toolbar[config];
        })}
      </header>
      <main className="rich-text-main" style={{ maxHeight }}>
        <div
          id="rich-text-editor"
          className="rich-text-field"
          contentEditable={true}
          spellCheck={spellCheck}
          onMouseUp={checkCommandsState}
          onMouseDown={checkCommandsState}
          onInput={(e) => {
            const target = e.target as HTMLDivElement;
            setEditorContent(target.innerHTML);
            checkCommandsState();
          }}
          suppressContentEditableWarning={true}
        >
          {parse(value)}
        </div>
        <input
          type="hidden"
          name="content"
          value={editorContent}
          id="rich-text-input"
        />
      </main>
    </div>
  );
};

export default RichTextEditor;
