import React, { useState } from "react";
import RichTextEditor from "./RichTextEditor";

function App() {
  const [editorContent, setEditorContent] = useState<string>(
    "<h1>React Rich Text Editor</h1>"
  );

  return (
    <div className="App">
      <RichTextEditor
        editorContent={editorContent}
        setEditorContent={setEditorContent}
        spellCheck={false}
        height={"300px"}
        maxHeight={"500px"}
      />
    </div>
  );
}

export default App;
