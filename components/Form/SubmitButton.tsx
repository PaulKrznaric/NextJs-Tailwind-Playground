// components/ SubmitButton.tsx;

import React from "react";

import classNames from "classnames";
//import styles from the index css
//import styles from the nextjs app

interface ButtonProps {
  children?: React.ReactNode;
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const SubmitButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  const buttonClasses = classNames("btn", props.className);
  return (
    <button onClick={props.onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default SubmitButton;
