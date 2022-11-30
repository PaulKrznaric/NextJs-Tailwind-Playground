// components/ SubmitButton.tsx;

import classNames from "classnames";
//import styles from the index css
//import styles from the nextjs app

export default function SubmitButton({
  size,
  onClick,
  children,
  className = "",
}) {
  const buttonClasses = classNames("btn", className);
  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}
