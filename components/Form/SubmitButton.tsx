// components/ SubmitButton.tsx;

import classNames from "classnames";
//import styles from the index css
//import styles from the nextjs app

export default function SubmitButton({ click, children, className = "" }) {
  const buttonClasses = classNames("btn", className);
  return (
    <button onClick={click} className={buttonClasses}>
      {children}
    </button>
  );
}
