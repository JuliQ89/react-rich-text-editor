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
  const [frontColorValue, setFrontColorValue] = useState<string>("#000000");
  const [backColorValue, setBackColorValue] = useState<string>("#000000");
  const [linkDropdownIsOpened, setLinkDropdownIsOpened] =
    useState<boolean>(false);
  const [fontSizeDropdownIsOpened, setFontSizeDropdownIsOpened] =
    useState<boolean>(false);
  const [fontFamilyDropdownIsOpened, setFontFamilyDropdownIsOpened] =
    useState<boolean>(false);
  const [linkValue, setLinkValue] = useState<string>("");

  const [commandIsActive, setCommandIsActive] = useState<{
    bold: boolean;
    italic: boolean;
    underline: boolean;
    strikethrough: boolean;
    superscript: boolean;
    subscript: boolean;
    insertUnorderedList: boolean;
    insertOrderedList: boolean;
    justifyLeft: boolean;
    justifyCenter: boolean;
    justifyRight: boolean;
  }>({
    bold: false,
    italic: false,
    underline: false,
    strikethrough: false,
    superscript: false,
    subscript: false,
    insertUnorderedList: false,
    insertOrderedList: false,
    justifyLeft: false,
    justifyCenter: false,
    justifyRight: false,
  });

  const checkCommandsState = () => {
    setCommandIsActive((prevState) => {
      const newState = { ...prevState };
      Object.keys(prevState).forEach((command) => {
        newState[command as keyof typeof prevState] =
          queryCommandState(command);
      });
      return newState;
    });
  };

  const btnIsActive = (key: boolean) => {
    return key ? "btn-active" : "";
  };

  return {
    toolbar: {
      bold: (
        <Button
          key={"bold"}
          content={<RiBold />}
          title="Bold"
          onClick={() => execCommand("bold", false)}
          className={btnIsActive(commandIsActive.bold)}
        />
      ),
      italic: (
        <Button
          key={"italic"}
          content={<RiItalic />}
          title="Italic"
          onClick={() => execCommand("italic", false)}
          className={btnIsActive(commandIsActive.italic)}
        />
      ),
      underline: (
        <Button
          key={"underline"}
          content={<RiUnderline />}
          title="Underline"
          onClick={() => execCommand("underline", false)}
          className={btnIsActive(commandIsActive.underline)}
        />
      ),
      strikethrough: (
        <Button
          key={"strikethrough"}
          content={<RiStrikethrough />}
          title="Strikethrough"
          onClick={() => execCommand("strikethrough", false)}
          className={btnIsActive(commandIsActive.strikethrough)}
        />
      ),
      superscript: (
        <Button
          key={"superscript"}
          content={<RiSuperscript />}
          title="Superscript"
          onClick={() => execCommand("superscript", false)}
          className={btnIsActive(commandIsActive.superscript)}
        />
      ),
      subscript: (
        <Button
          key={"subscript"}
          content={<RiSubscript />}
          title="Subscript"
          onClick={() => execCommand("subscript", false)}
          className={btnIsActive(commandIsActive.subscript)}
        />
      ),
      removeFormat: (
        <Button
          key={"removeFormat"}
          content={<RiFormatClear />}
          title="Remove Format"
          onClick={() => execCommand("removeFormat", false)}
        />
      ),
      createLink: (
        <Dropdown
          key={"createLink"}
          isOpened={linkDropdownIsOpened}
          setIsOpened={setLinkDropdownIsOpened}
          options={[
            <div className="editor-dropdown-link-dialog" key={1}>
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
          key={"fontsize"}
          isOpened={fontSizeDropdownIsOpened}
          setIsOpened={setFontSizeDropdownIsOpened}
          options={[
            <Button
              key={1}
              content={<RiNumber1 />}
              onClick={() => execCommand("fontSize", false, "1")}
            />,
            <Button
              key={2}
              content={<RiNumber2 />}
              onClick={() => execCommand("fontSize", false, "2")}
            />,
            <Button
              key={3}
              content={<RiNumber3 />}
              onClick={() => execCommand("fontSize", false, "3")}
            />,
            <Button
              key={4}
              content={<RiNumber4 />}
              onClick={() => execCommand("fontSize", false, "4")}
            />,
            <Button
              key={5}
              content={<RiNumber5 />}
              onClick={() => execCommand("fontSize", false, "5")}
            />,
            <Button
              key={6}
              content={<RiNumber6 />}
              onClick={() => execCommand("fontSize", false, "6")}
            />,
            <Button
              key={7}
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
          key={"fontName"}
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
          key={"foreColor"}
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
          key={"backColor"}
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
          key={"insertUnorderedList"}
          content={<RiListUnordered />}
          title="Unordered List"
          onClick={() => execCommand("insertUnorderedList", false)}
          className={btnIsActive(commandIsActive.insertUnorderedList)}
        />
      ),
      insertOrderedList: (
        <Button
          key={"insertOrderedList"}
          content={<RiListOrdered2 />}
          title="Ordered List"
          onClick={() => execCommand("insertOrderedList", false)}
          className={btnIsActive(commandIsActive.insertOrderedList)}
        />
      ),
      justifyLeft: (
        <Button
          key={"justifyLeft"}
          content={<RiAlignLeft />}
          title="Align left"
          onClick={() => execCommand("justifyLeft", false)}
          className={btnIsActive(commandIsActive.justifyLeft)}
        />
      ),
      justifyCenter: (
        <Button
          key={"justifyCenter"}
          content={<RiAlignCenter />}
          title="Align center"
          onClick={() => execCommand("justifyCenter", false)}
          className={btnIsActive(commandIsActive.justifyCenter)}
        />
      ),
      justifyRight: (
        <Button
          key={"justifyRight"}
          content={<RiAlignRight />}
          title="Align right"
          onClick={() => execCommand("justifyRight", false)}
          className={btnIsActive(commandIsActive.justifyRight)}
        />
      ),
      outdent: (
        <Button
          key={"outdent"}
          content={<RiIndentDecrease />}
          title="Outdent"
          onClick={() => execCommand("outdent", false)}
        />
      ),
      indent: (
        <Button
          key={"indent"}
          content={<RiIndentIncrease />}
          title="Indent"
          onClick={() => execCommand("indent", false)}
        />
      ),
      undo: (
        <Button
          key={"undo"}
          content={<RiArrowGoBackLine />}
          title="Undo"
          onClick={() => execCommand("undo", false)}
        />
      ),
      redo: (
        <Button
          key={"redo"}
          content={<RiArrowGoForwardLine />}
          title="Redo"
          onClick={() => execCommand("redo", false)}
        />
      ),
    },
    checkCommandsState: checkCommandsState,
  };
};
