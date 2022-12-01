// pages/submit.tsx

import Router from "next/router";
import SubmitButton from "../components/Form/Button";

export default function Submit() {
  return (
    <div className="center-div">
      <h1 className="bold text-4xl text-center p-4"> Form Submitted </h1>
      <div className="flex space-x-2 justify-center">
        <SubmitButton
          className="w-60"
          onClick={() => {
            Router.push("/");
          }}
          label={"Return To Home"}
        >
          Return To Home
        </SubmitButton>
        <SubmitButton
          className="w-60"
          onClick={() => {
            Router.push("/contact");
          }}
          label={"Return To Contact"}
        >
          Submit Another Contact
        </SubmitButton>
      </div>
    </div>
  );
}
