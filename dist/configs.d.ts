import React from "react";
export type toolbarConfigsType = "bold" | "italic" | "underline" | "strikethrough" | "superscript" | "subscript" | "removeFormat" | "createLink" | "fontSize" | "fontName" | "foreColor" | "backColor" | "insertUnorderedList" | "insertOrderedList" | "justifyLeft" | "justifyCenter" | "justifyRight" | "outdent" | "indent" | "undo" | "redo";
export declare const toolbarDefaultConfigs: toolbarConfigsType[];
export declare const useToolbar: () => {
    toolbar: {
        bold: React.JSX.Element;
        italic: React.JSX.Element;
        underline: React.JSX.Element;
        strikethrough: React.JSX.Element;
        superscript: React.JSX.Element;
        subscript: React.JSX.Element;
        removeFormat: React.JSX.Element;
        createLink: React.JSX.Element;
        fontSize: React.JSX.Element;
        fontName: React.JSX.Element;
        foreColor: React.JSX.Element;
        backColor: React.JSX.Element;
        insertUnorderedList: React.JSX.Element;
        insertOrderedList: React.JSX.Element;
        justifyLeft: React.JSX.Element;
        justifyCenter: React.JSX.Element;
        justifyRight: React.JSX.Element;
        outdent: React.JSX.Element;
        indent: React.JSX.Element;
        undo: React.JSX.Element;
        redo: React.JSX.Element;
    };
    checkCommandsState: () => void;
};
