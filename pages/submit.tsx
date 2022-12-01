// pages/submit.tsx

import { PropTypes } from "mobx-react";
import SubmitButton from "../components/Form/SubmitButton";

export default function Submit() {
  return (
    <div className="center-div">
      <h1 className="bold text-4xl text-center p-4"> Form Submitted </h1>
      <div className="flex space-x-2 justify-center">
        <SubmitButton
          className="w-60"
          onClick={() => {
            window.location.href = "/";
          }}
          label={"Return To Home"}
        >
          Return To Home
        </SubmitButton>
        <SubmitButton
          className="w-60"
          onClick={() => {
            window.location.href = "/contact";
          }}
          label={"Return To Contact"}
        >
          Submit Another Contact
        </SubmitButton>
      </div>
    </div>
  );
}
