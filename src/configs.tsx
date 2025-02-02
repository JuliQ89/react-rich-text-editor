// export type toolbarCommands = {};
import React, { useState } from "react";
import {
  Button,
  ColorInput,
  Dropdown,
  execCommand,
  execLink,
  fontList,
  queryCommandState,
} from "./main";
import {
  RiAlignCenter,
  RiAlignLeft,
  RiAlignRight,
  RiArrowGoBackLine,
  RiArrowGoForwardLine,
  RiBold,
  RiCheckLine,
  RiCloseLine,
  RiFontColor,
  RiFontFamily,
  RiFontSize,
  RiFormatClear,
  RiIndentDecrease,
  RiIndentIncrease,
  RiItalic,
  RiLink,
  RiListOrdered2,
  RiListUnordered,
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
  RiNumber7,
  RiPaintBrushLine,
  RiStrikethrough,
  RiSubscript,
  RiSuperscript,
  RiUnderline,
} from "@remixicon/react";

export type toolbarConfigsType =
  | "bold"
  | "italic"
  | "underline"
  | "strikethrough"
  | "superscript"
  | "subscript"
  | "removeFormat"
  | "createLink"
  | "fontSize"
  | "fontName"
  | "foreColor"
  | "backColor"
  | "insertUnorderedList"
  | "insertOrderedList"
  | "justifyLeft"
  | "justifyCenter"
  | "justifyRight"
  | "outdent"
  | "indent"
  | "undo"
  | "redo";

export const toolbarDefaultConfigs: toolbarConfigsType[] = [
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

export const useToolbar = () => {
  const [frontColorValue, setFrontColorValue] = useState<string>("");
  const [backColorValue, setBackColorValue] = useState<string>("");
  const [linkDropdownIsOpened, setLinkDropdownIsOpened] =
    useState<boolean>(false);
  const [fontSizeDropdownIsOpened, setFontSizeDropdownIsOpened] =
    useState<boolean>(false);
  const [fontFamilyDropdownIsOpened, setFontFamilyDropdownIsOpened] =
    useState<boolean>(false);
  const [linkValue, setLinkValue] = useState<string>("");

  return {
    bold: (
      <Button
        content={<RiBold />}
        title="Bold"
        onClick={() => execCommand("bold", false)}
        className={queryCommandState("bold") ? "btn-active" : ""}
      />
    ),
    italic: (
      <Button
        content={<RiItalic />}
        title="Italic"
        onClick={() => execCommand("italic", false)}
      />
    ),
    underline: (
      <Button
        content={<RiUnderline />}
        title="Underline"
        onClick={() => execCommand("underline", false)}
      />
    ),
    strikethrough: (
      <Button
        content={<RiStrikethrough />}
        title="Strikethrough"
        onClick={() => execCommand("strikethrough", false)}
      />
    ),
    superscript: (
      <Button
        content={<RiSuperscript />}
        title="Superscript"
        onClick={() => execCommand("superscript", false)}
      />
    ),
    subscript: (
      <Button
        content={<RiSubscript />}
        title="Subscript"
        onClick={() => execCommand("subscript", false)}
      />
    ),
    removeFormat: (
      <Button
        content={<RiFormatClear />}
        title="Remove Format"
        onClick={() => execCommand("removeFormat", false)}
      />
    ),
    createLink: (
      <Dropdown
        isOpened={linkDropdownIsOpened}
        setIsOpened={setLinkDropdownIsOpened}
        options={[
          <div className="editor-dropdown-link-dialog">
            <input
              type="text"
              name="link-href"
              placeholder="Link URL"
              value={linkValue}
              onChange={(e) => setLinkValue(e.target.value)}
            />
            <div className="editor-dropdown-link__buttons">
              <button
                style={{ color: "#008a00" }}
                onClick={() => execLink(linkValue)}
              >
                <RiCheckLine />
              </button>
              <button
                style={{ color: "#db3700" }}
                onClick={() => setLinkDropdownIsOpened(!linkDropdownIsOpened)}
              >
                <RiCloseLine />
              </button>
            </div>
          </div>,
        ]}
        type="editor-dropdown-dialog"
        display={<RiLink />}
      />
    ),
    fontSize: (
      <Dropdown
        isOpened={fontSizeDropdownIsOpened}
        setIsOpened={setFontSizeDropdownIsOpened}
        options={[
          <Button
            content={<RiNumber1 />}
            onClick={() => execCommand("fontSize", false, "1")}
          />,
          <Button
            content={<RiNumber2 />}
            onClick={() => execCommand("fontSize", false, "2")}
          />,
          <Button
            content={<RiNumber3 />}
            onClick={() => execCommand("fontSize", false, "3")}
          />,
          <Button
            content={<RiNumber4 />}
            onClick={() => execCommand("fontSize", false, "4")}
          />,
          <Button
            content={<RiNumber5 />}
            onClick={() => execCommand("fontSize", false, "5")}
          />,
          <Button
            content={<RiNumber6 />}
            onClick={() => execCommand("fontSize", false, "6")}
          />,
          <Button
            content={<RiNumber7 />}
            onClick={() => execCommand("fontSize", false, "7")}
          />,
        ]}
        type="editor-dropdown-options"
        display={<RiFontSize />}
      />
    ),
    fontName: (
      <Dropdown
        isOpened={fontFamilyDropdownIsOpened}
        setIsOpened={setFontFamilyDropdownIsOpened}
        direction="column"
        options={fontList.map((font: string, i: number) => {
          return (
            <Button
              key={i}
              className={"dropdown-fontfamily-button"}
              content={font}
              style={{ fontFamily: font, justifyContent: "stretch" }}
              onClick={() => execCommand("fontName", false, font)}
            />
          );
        })}
        type="editor-dropdown-options"
        display={<RiFontFamily />}
      />
    ),
    foreColor: (
      <Button
        content={
          <>
            <RiFontColor />
            <ColorInput
              colorValue={frontColorValue}
              setColorValue={setFrontColorValue}
            />
          </>
        }
        title="color"
        onClick={() => execCommand("foreColor", false, frontColorValue)}
      />
    ),
    backColor: (
      <Button
        content={
          <>
            <RiPaintBrushLine />
            <ColorInput
              colorValue={backColorValue}
              setColorValue={setBackColorValue}
            />
          </>
        }
        title="background color"
        onClick={() => execCommand("backColor", false, backColorValue)}
      />
    ),
    insertUnorderedList: (
      <Button
        content={<RiListUnordered />}
        title="Unordered List"
        onClick={() => execCommand("insertUnorderedList", false)}
      />
    ),
    insertOrderedList: (
      <Button
        content={<RiListOrdered2 />}
        title="Ordered List"
        onClick={() => execCommand("insertOrderedList", false)}
      />
    ),
    justifyLeft: (
      <Button
        content={<RiAlignLeft />}
        title="Align left"
        onClick={() => execCommand("justifyLeft", false)}
      />
    ),
    justifyCenter: (
      <Button
        content={<RiAlignCenter />}
        title="Align center"
        onClick={() => execCommand("justifyCenter", false)}
      />
    ),
    justifyRight: (
      <Button
        content={<RiAlignRight />}
        title="Align right"
        onClick={() => execCommand("justifyRight", false)}
      />
    ),
    outdent: (
      <Button
        content={<RiIndentDecrease />}
        title="Outdent"
        onClick={() => execCommand("outdent", false)}
      />
    ),
    indent: (
      <Button
        content={<RiIndentIncrease />}
        title="Indent"
        onClick={() => execCommand("indent", false)}
      />
    ),
    undo: (
      <Button
        content={<RiArrowGoBackLine />}
        title="Undo"
        onClick={() => execCommand("undo", false)}
      />
    ),
    redo: (
      <Button
        content={<RiArrowGoForwardLine />}
        title="Redo"
        onClick={() => execCommand("redo", false)}
      />
    ),
  };
};
