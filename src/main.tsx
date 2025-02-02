import React from "react";

export const fontList = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "cursive",
];

export const queryCommandState = (command: string) => {
  return document.queryCommandState(command);
};

export const execCommand = (
  command: string,
  defaultUI: boolean,
  value?: string
) => {
  document.execCommand(command, defaultUI, value);
};

export const execLink = (link: string) => {
  if (/http/i.test(link)) {
    execCommand("createLink", false, link);
  } else {
    link = "http://" + link;
    execCommand("createLink", false, link);
  }
};

export const Dropdown = ({
  options,
  isOpened,
  setIsOpened,
  type = "editor-dropdown-dialog",
  display,
  direction = "row",
}: {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  options: React.ReactNode[];
  type?: "editor-dropdown-options" | "editor-dropdown-dialog";
  display: React.ReactNode;
  direction?: "column" | "row";
}) => {
  const toggleIsOpened = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className="editor-dropdown">
      <div
        className={`editor-dropdown-display ${isOpened ? "opened" : ""}`}
        onClick={toggleIsOpened}
      >
        {display}
      </div>
      {isOpened && (
        <div className={type} style={{ flexDirection: direction }}>
          {options}
        </div>
      )}
    </div>
  );
};

export const Button = ({
  title,
  content,
  onClick,
  className,
  style,
}: {
  title?: string;
  content: React.ReactNode;
  onClick: () => void;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <button
      type="button"
      className={className ? className : ""}
      title={title}
      onClick={onClick}
      style={style}
    >
      {content}
    </button>
  );
};

export const ColorInput = ({
  colorValue,
  setColorValue,
}: {
  colorValue: string;
  setColorValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <input
      type="color"
      name="color-picker"
      value={colorValue}
      onChange={(e) => setColorValue(e.target.value)}
    />
  );
};
