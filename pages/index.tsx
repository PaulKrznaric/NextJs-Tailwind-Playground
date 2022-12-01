// pages/index.tsx
import SubmitButton from "../components/Form/Button";
import Router from "next/router";

export default function () {
  return (
    <div className="center-div">
      <h1 className="bold text-4xl text-center p-4">
        {" "}
        Welcome to my NextJS Webpage{" "}
      </h1>
      <SubmitButton
        className="text-slate-200 bg-blue-600 hover:bg-blue-700"
        onClick={() => {
          Router.push("/contact");
        }}
        label={"Contact Us"}
      >
        Contact Us
      </SubmitButton>
    </div>
  );
}
