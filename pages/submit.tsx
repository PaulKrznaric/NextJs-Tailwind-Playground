// pages/submit.tsx

import SubmitButton from "../components/Form/SubmitButton";

export default function Submit() {
  return (
    <div className="center-div">
      <h1 className="bold text-4xl text-center p-4"> Form Submitted </h1>
      <SubmitButton
        size="36"
        className="w-40"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        Return To Home
      </SubmitButton>
    </div>
  );
}
