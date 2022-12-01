//components/Form/SimpleForm.tsx
import SubmitButton from "./SubmitButton";
import React from "react";

interface FormProps {
  children?: React.ReactNode;
  onSubmit: () => void;
  className?: string;
  buttonText?: string;
  formLabel: string;
  buttonLabel: string;
}

export default function SimpleForm({ children, ...props }: FormProps) {
  return (
    <form className="center-div" aria-label={props.formLabel}>
      <label className="text-xl">Name</label>
      <input className="border-2 border-black rounded-md p-2 m-2" type="text" />
      <label className="text-xl">Email</label>
      <input
        className="border-2 border-black rounded-md p-2 m-2"
        type="email"
      />
      <label className="text-xl">Message</label>
      <textarea className="border-2 border-black rounded-md p-2 m-2" />
      <SubmitButton onClick={props.onSubmit} label={props.buttonLabel}>
        {props.buttonText}
      </SubmitButton>
    </form>
  );
}
