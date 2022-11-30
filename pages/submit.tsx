// pages/submit.tsx

import SubmitButton from "../components/Form/SubmitButton";

export default function Submit() {
  return (
    <div className="center-div">
      <h1 className="bold text-4xl text-center"> Form Submitted </h1>
      <SubmitButton
        size="36"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        Return To Home
      </SubmitButton>
    </div>
  );
}
