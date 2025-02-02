import React from "react";
export declare const fontList: string[];
export declare const queryCommandState: (command: string) => boolean;
export declare const execCommand: (command: string, defaultUI: boolean, value?: string) => void;
export declare const execLink: (link: string) => void;
export declare const Dropdown: ({ options, isOpened, setIsOpened, type, display, direction, }: {
    isOpened: boolean;
    setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
    options: React.ReactNode[];
    type?: "editor-dropdown-options" | "editor-dropdown-dialog";
    display: React.ReactNode;
    direction?: "column" | "row";
}) => React.JSX.Element;
export declare const Button: ({ title, content, onClick, className, style, }: {
    title?: string;
    content: React.ReactNode;
    onClick: () => void;
    className?: string;
    style?: React.CSSProperties;
}) => React.JSX.Element;
export declare const ColorInput: ({ colorValue, setColorValue, }: {
    colorValue: string;
    setColorValue: React.Dispatch<React.SetStateAction<string>>;
}) => React.JSX.Element;
