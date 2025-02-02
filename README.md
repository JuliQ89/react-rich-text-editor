## React Rich Text Editor

#### Supports:

- Rich text editing.

#### Installation:

### `npm i react-rich-text-editor-js`

#### Plug into any app:

```
  import RichTextEditor from 'react-rich-text-editor-js'

  const YourComponent = () => {
    const [editorContent, setEditorContent] = useState<string>("");

    return (
      ...
        <RichTextEditor
            editorContent={editorContent}
            setEditorContent={setEditorContent}
        />
      ...
    )
  }
```

#### Props to the ReactRichEditor Component:

- editorContent
- maxHeight
- height
- setEditorContent
- value
- spellCheck
- toolbarConfigs

#### Default Toolbar Configuratins:

-"bold"
-"italic"
-"underline"
-"strikethrough"
-"superscript"
-"subscript"
-"removeFormat"
-"createLink"
-"fontSize"
-"fontName"
-"foreColor"
-"backColor"
-"insertUnorderedList"
-"insertOrderedList"
-"justifyLeft"
-"justifyCenter"
-"justifyRight"
-"outdent"
-"indent"
-"undo"
-"redo"

#### Customize the toolbar:

Passing the ReactRichEditor component the toolbar prop, which is a javascript array and contains the names of the tools.

```
    <ReactRichEditor toolbarConfigs={["bold", "italic", "underline", "undo", "redo"]} />

```
